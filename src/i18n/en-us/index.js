
/* eslint-disable max-len*/

export default {
    locale: {
        current_language_name: 'English',
    },
    pages: {
        staking: {
            note_unstaking_period: 'Please note that there is an unstaking period of {period}',
            claim_tlos: 'Claim TLOS',
            add_stlos_to_metamask: 'Launch MetaMask dialog to add sTLOS',
            metamask_fox_logo: 'MetaMask fox logo',
            cancel: 'Cancel',
            stake_tlos_confirm: 'Continuing will stake TLOS in exchange for sTLOS. ' +
            'sTLOS can be redeemed for TLOS at any time using the Unstake tab.',
            stake_tlos_confirm_2a: 'After TLOS has been unstaked, it will be locked for a period of', /* unstakePeriodPretty...*/
            stake_tlos_confirm_2b: /*...unstakePeriodPretty */ 'after which it can be withdrawn to your account from the Withdraw tab.',
            stake_tlos_confirm_3: 'Would you like to proceed?',
            stake_tlos: 'Stake TLOS',
            stake_tlos_subheader: 'Staking your TLOS to sTLOS grants you access to a steady income and various DeFi applications, ' +
            'further increasing yield. As the reward pool increases, the TLOS to sTLOS conversion rate will change ' +
            'over time. Therefore, the amount of sTLOS received is smaller than the staked TLOS. Rewards will be ' +
            'auto-compounded. No further action is required.',
            receive_stlos: 'Receive sTLOS',
            available: '{balanceTlos} Available',
            insufficient_tlos_balance: 'Insufficient TLOS balance to stake',
            login_using_an_evm_wallet: 'Login using an EVM wallet',
            wallet_not_connected: 'Wallet not connected',
            click_to_input_full_wallet_balance: 'Click to input full wallet balance\n\n' +
            'Balance displayed is reduced by 1 TLOS to keep your account actionable.\n' +
            'Precise balance (less approximate gas fees):\n' +
            '{prettyBalance} TLOS',
            loading: 'Loading...',
            get_more_tlos: 'Get more TLOS',
            connect_wallet: 'Connect Wallet',
            minutes: 'minutes',
            hours: 'hours',
            days: 'days',
            unstake: 'Unstake',
            stake: 'Stake',
            withdraw: 'Withdraw',
            telos_evm_staking: 'Telos EVM Staking',
            stake_tlos_earn_interest: 'Stake TLOS for sTLOS to earn interest from the staking rewards pool',
            staked: 'Staked',
            unstaked: 'Unstaked',
            tooltip_1: 'APY: Annual Percentage Yield\n\nThe annual rate of return after taking compound interest into account.\n\n' +
            'Interest is compounded approximately every 30 minutes. The percentage rate is not fixed, meaning that ' +
            'it will change over time with the total amount of TLOS staked across Telos EVM and Native. ' +
            'Rewards are disbursed from a community rewards pool into the sTLOS contract.',
            tooltip_2: 'TVL: Total Value Locked\n\nThe current value, in TLOS, of all assets held in the sTLOS ' +
            '(Staked TLOS) smart contract, i.e. the sum of all TLOS staked on the Telos EVM at this moment.',
            tooltip_3: 'Staked\n\n' +
            'The total staked amount associated with the logged-in account, i.e. ' +
            'your sTLOS token balance, along with its value in TLOS',
            tooltip_4: 'Unstaked\n\n' +
            'The total value of TLOS which you have unstaked, both locked and unlocked.\n\n' +
            'When you unstake\u2014i.e. redeem\u2014some value of sTLOS, the equivalent amount of ' +
            'TLOS is sent into escrow ("locked") for {unlockPeriod}; during this time, ' +
            'you cannot interact with this TLOS.\n\n' +
            'After the unlock period has elapsed, you can withdraw your unlocked TLOS from the Withdraw tab ' +
            'on this page, at which point it will be added to your account TLOS balance.',
            confirm_unstake_1a: 'Continuing will redeem sTLOS in exchange for TLOS. ' +
            'Unstaked TLOS will remain locked for a period of', /* unstakePeriodPretty...*/
            confirm_unstake_1b: /*...unstakePeriodPretty */ 'after which it can be withdrawn to your account from the Withdraw tab',
            confirm_unstake_2a: 'Heads up, you may unstake ', /* remainingDeposits...*/
            confirm_unstake_2b: /*...remainingDeposits */ 'more times before ' +
            'you reach the maximum concurrent unstake actions. When you reach the maximum, you will need to withdraw' +
            'unlocked TLOS to continue unstaking. If you don\'t have any withdrawable TLOS at that time, you must' +
            'wait until the lock duration has elapsed before you can withdraw unlocked TLOS and unstake more sTLOS. -',
            unstake_stlos_for_tlos: 'Unstake sTLOS in exchange for TLOS',
            unstake_stlos: 'Unstake sTLOS',
            receive_tlos: 'Receive TLOS',
            amount: 'Amount',
            time_remaining: 'Time Remaining',
            full_staked_balance_tooltip: 'Click to input full staked balance\n\n' +
            'Precise balance (less approximate gas fees):\n' +
            '{prettyBalance} sTLOS',
            login_using_evm_wallet: 'Login using an EVM wallet',
            max_unstake_transactions_reached: 'You have reached the maximum number of pending unstake transactions, ' +