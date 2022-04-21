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
                await dispatch('fetchAvailab