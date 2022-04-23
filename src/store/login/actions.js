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
            commit('s