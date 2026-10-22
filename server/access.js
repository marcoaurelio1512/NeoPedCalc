export const paidStatuses = new Set(['active', 'trialing']);
export function hasAccess(subscriptions, allowedPrices) {
  return subscriptions.some(subscription => paidStatuses.has(subscription.status) && !subscription.pause_collection && subscription.items?.data?.some(item => allowedPrices.includes(item.price?.id)));
}
export function isProtectedPath(pathname) {
  let path;
  try { path = decodeURIComponent(pathname).normalize('NFC'); } catch { return true; }
  return /^\/files(?:\/|$)/i.test(path) || /^\/(calculadoras_(neonatais|pediatricas)|selecao_calculadoras)\.html\/?$/i.test(path);
}
export function publicUser(user) { return { id: user.id, email: user.email }; }
