(() => {
  'use strict';
  const message = document.getElementById('account-message');
  const params = new URLSearchParams(location.search);
  let mode = 'login';
  let selectedPlan = ['monthly','annual'].includes(params.get('plan')) ? params.get('plan') : null;
  const showMessage = (text, error = false) => { if (message) { message.textContent = text; message.dataset.error = String(error); } };
  async function api(url, data) {
    const response = await fetch(url, { method: data === undefined ? 'GET' : 'POST', headers: data === undefined ? {} : { 'Content-Type':'application/json' }, body: data === undefined ? undefined : JSON.stringify(data), credentials: 'same-origin' });
    let result;
    try { result = await response.json(); } catch { throw new Error('Não foi possível conectar ao serviço. Tente novamente.'); }
    if (!response.ok) throw new Error(result.error || 'Não foi possível concluir a solicitação.');
    return result;
  }
  function setBusy(form, busy) { form.querySelectorAll('button,input').forEach(el => { el.disabled = busy; }); }
  function switchMode(next) {
    mode = next;
    document.querySelectorAll('[data-auth-mode]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.authMode === mode)));
    document.getElementById('auth-title').textContent = mode === 'login' ? 'Acesse sua conta' : 'Comece por aqui';
    document.getElementById('auth-submit').textContent = mode === 'login' ? 'Entrar →' : 'Criar minha conta →';
    document.getElementById('signup-terms').hidden = mode !== 'register';
    document.getElementById('auth-terms').required = mode === 'register';
    const password = document.getElementById('auth-password');
    password.minLength = mode === 'register' ? 12 : 1;
    password.autocomplete = mode === 'register' ? 'new-password' : 'current-password';
    password.placeholder = mode === 'register' ? 'Pelo menos 12 caracteres' : 'Sua senha';
    document.getElementById('forgot-password').hidden = mode !== 'login';
    showMessage('');
  }
  async function refreshAccount() {
    document.getElementById('auth-loading').hidden = true;
    try {
      const account = await api('/api/account');
      try {
        if (localStorage.getItem('np_last_user') !== account.user.id) {
          const preserved = {};
          ['neopedcalc_favoritos_neonatal','neopedcalc_favoritos_pediatrico','neoped_legal_accept_v1'].forEach(key => { const value = localStorage.getItem(key); if (value !== null) preserved[key] = value; });
          localStorage.clear(); sessionStorage.clear();
          Object.entries(preserved).forEach(([key,value]) => localStorage.setItem(key,value));
          localStorage.setItem('np_last_user',account.user.id);
        }
      } catch {}
      document.getElementById('auth-forms').hidden = true;
      document.getElementById('account-panel').hidden = false;
      document.getElementById('account-email').textContent = account.user.email;
      document.getElementById('subscription-status').textContent = account.billing.active ? '✓ Assinatura ativa. Suas ferramentas estão disponíveis.' : (account.billing.hasSubscription ? 'Assinatura com acesso suspenso. Confira o pagamento em Gerenciar assinatura.' : 'Nenhuma assinatura ativa para liberar o acesso.');
      document.getElementById('open-app').hidden = !account.billing.active;
      document.getElementById('subscribe-actions').hidden = account.billing.hasSubscription;
      document.getElementById('billing-portal').hidden = !account.billing.customer;
      document.querySelectorAll('[data-checkout]').forEach(button => { button.textContent = button.dataset.checkout === selectedPlan ? 'Continuar com o plano ' + (selectedPlan === 'annual' ? 'anual' : 'mensal') : 'Assinar ' + (button.dataset.checkout === 'annual' ? 'anual' : 'mensal'); });
      if (params.get('checkout') === 'success') showMessage(account.billing.active ? 'Pagamento confirmado e acesso liberado.' : 'Aguardando a confirmação do pagamento. Atualize esta página em instantes.');
    } catch (error) {
      document.getElementById('auth-forms').hidden = false;
      document.getElementById('account-panel').hidden = true;
      if (params.get('subscription') === 'required') showMessage('Entre na sua conta e escolha um plano para acessar as calculadoras.');
    }
  }
  const authForm = document.getElementById('auth-form');
  if (authForm) {
    document.querySelectorAll('[data-auth-mode]').forEach(button => button.addEventListener('click', () => switchMode(button.dataset.authMode)));
    switchMode('login');
    authForm.addEventListener('submit', async event => {
      event.preventDefault(); setBusy(authForm, true); showMessage('Aguarde…');
      try {
        const result = await api('/api/auth/' + mode, { email: document.getElementById('auth-email').value.trim(), password: document.getElementById('auth-password').value, terms: document.getElementById('auth-terms').checked });
        document.getElementById('auth-password').value = '';
        if (result.confirmationRequired) showMessage('Confira seu e-mail para confirmar o cadastro. Depois, entre com sua senha.');
        else { showMessage(''); await refreshAccount(); }
      } catch(error) { showMessage(error.message, true); }
      finally { setBusy(authForm, false); }
    });
    document.getElementById('forgot-password').addEventListener('click', async event => {
      const email = document.getElementById('auth-email');
      if (!email.checkValidity() || !email.value) { email.reportValidity(); email.focus(); showMessage('Informe seu e-mail no campo acima para receber o link de recuperação.'); return; }
      event.currentTarget.disabled = true;
      try { showMessage((await api('/api/auth/recover', { email: email.value.trim() })).message); }
      catch(error) { showMessage(error.message, true); }
      finally { document.getElementById('forgot-password').disabled = false; }
    });
    document.querySelectorAll('[data-checkout]').forEach(button => button.addEventListener('click', async () => {
      document.querySelectorAll('[data-checkout]').forEach(el => { el.disabled = true; });
      try { const result = await api('/api/checkout', { plan: button.dataset.checkout }); location.assign(result.url); }
      catch(error) { showMessage(error.message, true); document.querySelectorAll('[data-checkout]').forEach(el => { el.disabled = false; }); }
    }));
    document.getElementById('billing-portal').addEventListener('click', async event => {
      event.currentTarget.disabled = true;
      try { const result = await api('/api/billing-portal', {}); location.assign(result.url); }
      catch(error) { showMessage(error.message, true); document.getElementById('billing-portal').disabled = false; }
    });
    document.getElementById('logout').addEventListener('click', async () => {
      try {
        await api('/api/auth/logout', {});
        // Clinical modules use several legacy key names: clear this app's origin storage.
        localStorage.clear(); sessionStorage.clear();
        location.replace('conta.html');
      } catch(error) { showMessage(error.message, true); }
    });
    document.getElementById('reset-form').addEventListener('submit', async event => {
      event.preventDefault(); setBusy(event.target, true);
      try {
        await api('/api/auth/password', { password: document.getElementById('new-password').value });
        document.getElementById('new-password').value = '';
        document.getElementById('reset-panel').hidden = true;
        await refreshAccount(); showMessage('Sua senha foi atualizada.');
      } catch(error) { showMessage(error.message, true); }
      finally { setBusy(event.target, false); }
    });
    (async () => {
      const fragment = new URLSearchParams(location.hash.slice(1));
      const tokenHash = params.get('token_hash');
      const isRecovery = params.get('type') === 'recovery' || params.get('recovery') === '1' || fragment.get('type') === 'recovery';
      // Remove credentials from the address bar before loading any account data.
      if (tokenHash || fragment.size) history.replaceState(null, '', 'conta.html');
      try {
        if (fragment.get('error_description')) throw new Error('Link expirado ou inválido. Solicite um novo e-mail.');
        if (tokenHash) await api('/api/auth/verify', { token_hash: tokenHash, type: params.get('type') || 'email' });
        else if (fragment.get('access_token')) await api('/api/auth/verify', { access_token: fragment.get('access_token'), refresh_token: fragment.get('refresh_token') });
        if (isRecovery && (tokenHash || fragment.get('access_token'))) {
          document.getElementById('auth-loading').hidden = true;
          document.getElementById('reset-panel').hidden = false;
          return;
        }
        await refreshAccount();
      } catch(error) { document.getElementById('auth-loading').hidden = true; document.getElementById('auth-forms').hidden = false; showMessage(error.message, true); }
    })();
  }
  api('/api/config').then(config => {
    document.querySelectorAll('[data-price]').forEach(el => {
      const price = config.prices[el.dataset.price];
      if (!price?.active || price.amount === null) return;
      const small = document.createElement('small');
      small.textContent = el.dataset.price === 'monthly' ? 'cobrança mensal' : 'cobrança anual';
      el.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: price.currency.toUpperCase() }).format(price.amount/100);
      el.append(small);
    });
    if (config.demo) {
      if (message) showMessage('Prévia de interface. Cadastros e pagamentos serão ativados após configurar os serviços no servidor.');
      const note = document.getElementById('pricing-note');
      if (note) note.textContent = 'Prévia: os valores serão exibidos após configurar os planos de assinatura na Stripe. Nenhuma cobrança está ativa.';
    }
  }).catch(() => {});
})();
