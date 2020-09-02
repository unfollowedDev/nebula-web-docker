/* eslint-disable max-len */

export default {
    locale: {
        current_language_name: 'Deutsch',
    },
    pages: {
        staking: {
            note_unstaking_period: 'Beachten Sie, dass der Betrag erst nach { period } eingefordert werden kann.',
            claim_tlos: 'TLOS einfordern',
            add_stlos_to_metamask: 'Starten Sie den MetaMask-Dialog, um sTLOS hinzuzufügen',
            metamask_fox_logo: 'MetaMask-Logo',
            stake_tlos_confirm: 'Beim Bestätigen tauschen Sie Ihre TLOS gegen sTLOS. ' +
            'sTLOS kann jederzeit gegen TLOS eingetauscht werden, indem Sie die Registerkarte "Abheben" verwenden.',
            cancel: 'Abbrechen',
            stake_tlos_confirm_2a: 'Nachdem TLOS eingetauscht wurden, sind diese für einen Zeitraum von', /* unstakePeriodPretty...*/
            stake_tlos_confirm_2b: /*...unstakePeriodPretty */ 'gesperrt. Nach Ablauf der Sperrfrist können Sie in der Registerkarte "Einfordern" erneut Ihrem Konto gutgeschrieben werden.',
            stake_tlos_confirm_3: 'Möchten Sie fortfahren?',
            stake_tlos: 'TLOS tauschen',
            stake_tlos_subheader: 'Ihr Einsatz von TLOS in sTLOS gewährt Ihnen Zugriff auf einen regelmäßige Belohnungen und Zugang zu verschiedene DeFi-Anwendungen, ' +
            'dies kann Ihre Erlöse weiter erhöhen. Der Umrechnungskurs von TLOS zu sTLOS erhöht sich regelmäßig durch das Wachstum des Belohnungs-Pools ' +
            'Daher ist die erhaltene Menge an sTLOS grundsätzlich geringer als die Menge der eingesetzten TLOS. Aufgrund der thesaurierenden ' +
            'Auszahlung ist keine zusätzliche Aktion erforderlich.',
            receive_stlos: 'sTLOS erhalten',
            available: '{balanceTlos} Verfügbar',
            insufficient_tlos_balance: 'Unzureichendes TLOS-Guthaben',
            login_using_an_evm_wallet: 'Melden Sie sich mit einem EVM-Wallet an',
            wallet_not_connected: 'Wallet nicht verbunden',
            click_to_input_full_wallet_balance: 'Klicken Sie hier, um das gesamte Wallet-Guthaben einzusetzen.\n\n' +
            'Der angezeigte Betrag wird um 1 TLOS reduziert, um die Handlungsfähigkeit Ihres Konto sicherzustellen.\n' +
            'Exakter Betrag (abzüglich der geschätzten Gasgebühren):\n' +
            '{prettyBalance} TLOS',
            loading: 'In Bearbeitung...',
            get_more_tlos: 'Erhalten Sie mehr TLOS',
            connect_wallet: 'Wallet verbinden',
            minutes: 'Minuten',
            hours: 'Stunden',
            days: 'Tage',
            unstake: 'Abheben',
            stake: 'Einzahlen',
            withdraw: 'Einfordern',
            telos_evm_staking: 'Telos EVM Staking',
            stake_tlos_earn_interest: 'Tauschen Sie TLOS für sTLOS, um Belohnungen aus dem Rewards-Pool zu erhalten.',
            staked: 'Eingezahlt',
            unstaked: 'Abgehoben',
            tooltip_1: 'APY: Annual Percentage Yield\n\nDie jährliche Rendite nach Berücksichtigung von Zinseszinsen.\n\n' +
            'Die Belohnungen werden etwa alle 30 Minuten in den Rewards-Pool ausgezahlt. Der Prozentsatz ist variabel, er verändert sich ' +
            'kontinuierlich auf Basis der im Rewards-Pool enthaltenen TLOS, dies betrifft die kombinierten Telos von EVM und Native. ' +
            'Die Belohnungen werden aus einem Community Reserve in den sTLOS-Vertrag eingezahlt.',
            tooltip_2: 'TVL: Total Value Locked\n\nAktueller Wert (in TLOS) aller im sTLOS' +
            '(Staked TLOS) Smart Contract gehaltenen Tokens, also die derzeitige Summe aller eingezahlt