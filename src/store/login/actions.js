export const login = async function(
    { commit, dispatch },
    { idx, account },
) {
    const authenticator = this.$ual.authenticators[idx];
    try {
        commit('setLoadingWallet', authenticator.getStyle().text);
        await authenticator.init();
        if (!account) {
            const requestAccount = await authenticator.shouldRequestAccountName();
            if (requestAccount) {
                await dispatch('fetchAvailableAccounts', idx);
                commit('setRequestAccount', true);
                return;
            }
        }
        const users = await authenticator.login(account);
        if (users.length) {
            const account = users[0];
            const accountName = await account.getAccountName();
            this.$ualUser = account;
            this.$type = 'ual';
            commit('setAccountName', accountName);
            localStorage.setItem('autoLogin', authenticator.constructor.name);
            localStorage.setItem('account', accountName);
            localStorage.setItem('returning', true);
            dispatch('getAccountProfile');
        }
    } catch (e) {
        const error =
      (authenticator.getError() && authenticator.getError().message) ||
      e.message ||
      e.reason;
        commit('general/setErrorMsg', error, { root: true });
        console.log('Login error: ', error);
    } finally {
        commit('setLoadingWallet');
    }
};

export const autoLogin = async function({ dispatch, commit }, returnUrl) {
    const { authenticator, idx } = getAuthenticator(this.$ual);
    if (authenticator) {
        commit('se