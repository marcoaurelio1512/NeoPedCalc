/* /ehr/launch — recebe o token do prontuário (#token=...), troca por sessão e guarda o paciente nesta aba. */
(function () {
  'use strict';
  var DESTINATION = '/selecao_calculadoras.html';
  var title = document.getElementById('ehr-title');
  var message = document.getElementById('ehr-message');
  var actions = document.getElementById('ehr-actions');

  function fail(text) {
    title.textContent = 'Não foi possível abrir pelo prontuário';
    message.textContent = text;
    actions.hidden = false;
  }

  var token = new URLSearchParams(location.hash.slice(1)).get('token') || new URLSearchParams(location.search).get('token');
  // Remove o token da barra de endereço e do histórico imediatamente.
  history.replaceState(null, '', location.pathname);
  if (!token) return fail('O link não contém o token do prontuário. Abra o NeoPedCalc novamente pelo botão do prontuário.');

  fetch('/api/ehr/session', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: token }) })
    .then(function (response) {
      return response.json().catch(function () { return {}; }).then(function (body) {
        if (!response.ok) throw new Error(body.error || 'Falha ao validar o acesso (' + response.status + ').');
        return body;
      });
    })
    .then(function (context) {
      window.NeopedPatientCore.saveContext(sessionStorage, context, Date.now());
      location.replace(DESTINATION);
    })
    .catch(function (error) {
      fail(error && error.message ? error.message : 'Falha de conexão. Tente novamente pelo prontuário.');
    });
})();
