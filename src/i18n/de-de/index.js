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
            '(Staked TLOS) Smart Contract gehaltenen Tokens, also die derzeitige Summe aller eingezahlten TLOS in der Telos EVM. ',
            tooltip_3: 'Eingezahlt\n\n' +
            'Der Gesamteinsatz für das angemeldete Konto, also ' +
            'Ihr sTLOS-Guthaben mit seinem aktuellen Wert, in TLOS ',
            tooltip_4: 'Abgehoben\n\n' +
            'Der Gesamtwert der TLOS, die Sie abgehoben haben, dies beinhaltet gesperrte und einforderbare Beträge.\n\n' +
            'Beim Abheben \u2014i.e. redeem\u2014 von sTLOS, wird die entsprechende Anzahl TLOS ' +
            'für {unlockPeriod} in einen ESCROW-Vertrag übertragen ("gesperrt"), in diesem Zeitraum ' +
            'ist keine Transaktion mit diesen TLOS möglich.\n\n' +
            'Nach Ablauf der Sperrfrist können Sie Ihre abgehobenen TLOS auf der entsprechenden Registerkarte einfordern, ' +
            'der Betrag wird dann Ihrem TLOS-Konto gutgeschrieben ',
            confirm_unstake_1a: 'Fortsetzen, um sTLOS in TLOS zu tauschen. ' +
            'Abgehobene TLOS bleiben für den folgenden Zeitraum gesperrt:', /* unstakePeriodPretty...*/
            confirm_unstake_1b: /*...unstakePeriodPretty */ 'Danach kann der Betrag über die Registerkarte "Einfordern" Ihrem Konto gutgeschrieben werden.',
            confirm_unstake_2a: 'Achtung, dies führt zur Abhebung ', /* remainingDeposits...*/
            confirm_unstake_2b: /*...remainingDeposits */ 'Verbleibende Abhebungen, ' +
            'bis Sie die maximale Anzahl der parallelen Abhebungen erreicht haben. Bitte fordern Sie entsperrte Positionen ein, bevor Sie weitere Positionen öffnen.' +
            'Bitte warten Sie bis die Sperrfrist einer Position abgelaufgen ist, um weitere sTLOS abzuheben. ' +
            'In dringenden Fällen können Sie sTLOS in einer DEX (Decentralized Exchange) für TLOS tauschen, bitte beachten Sie, dass der Wert deutlich abweichen kann. -',
            unstake_stlos_for_tlos: 'sTLOS für TLOS tauschen',
            unstake_stlos: 'sTLOS abheben',
            receive_tlos: 'TLOS erhalten',
            amount: 'Betrag',
            time_remaining: 'Verbleibende Zeit',
            full_staked_balance_tooltip: 'Clicken Sie hier, um die gesamte verfügbare Summe einzufügen\n\n' +
            'Saldo (abzüglich geschätzter Transaktionskosten):\n' +
            '{prettyBalance} sTLOS',
            login_using_evm_wallet: 'Mit einem EVM-Wallet anmelden',
            max_unstake_transactions_reached: 'Sie haben die maximale Anzahl paralleler Abhebungen erreicht, ' +
            'Bitte fordern Sie verfügbare TLOS ein oder warten Sie, bis ausstehende Positionen entsperrt werden.',
            click_to_change_time_format: 'Clicken Sie hier, um die Zeit-Formatierung zu ändern.',
            unstaking: 'Abhebung',
            available_to_withdraw: 'Zum Einfordern verfügbar',
            withdraw_tlos: 'TLOS Einfordern',
            withdraw_successful: 'Transaktion erfolgreich! Jetzt prüfen:',
            no_withdrawable_positions: 'Keine einforderbaren Positionen',
            you_have_unlocked_tlos: 'Sie verfügen über einforderbare TLOS Positionen!',
            stake_tlos_success: 'Transaktion erfolgreich! Jetzt prüfen:',
            unstake_stlos_success: 'Transaktion erfolgreich! Jetzt prüfen:',
            deposit_failed: 'Fehler bei der TLOS Einzahlung: { message }',
            redeem_failed: 'STLOS zu TLOS Konvertierung nicht möglich: { message }',
            fetch_balance_error: 'Konten-Saldo konnte nicht abgerufen werden: { message }',
            fetch_stlos_balance_error: 'sTLOS-Saldo konnte nicht abgerufen werden: { message }',
            fetch_stlos_value_error: 'Wert des sTLOS-Saldo konnte nicht abgerufen werden: { message }',
            fetch_unstaked_balance_error: 'Abruf des abgehobenen TLOS-Saldos fehlgeschlagen: { message }',
            fetch_unlocked_balance_error: 'Abruf des einforderbaren sTLOS-Saldos fehlgeschlagen: { message }',
            fetch_escrow_deposits_error: 'Abruf der ESCROW-Salden fehlgeschlagen: { message }',
            fetch_conversion_rate_error: 'Abruf des TLOS->sTLOS Umrechnungskurses fehlgeschlagen: { message }',
            fetch_stlos_contract_error: 'Abruf des sTLOS Smart Contract fehlgeschlagen: { message }',
            fetch_escrow_contract_error: 'Abruf des ESCROW Smart Contract fehlgeschlagen: { message }',
            fetch_unstake_period_error: 'Abruf der Sperrfrist fehlgeschlagen: { message }',
            fetch_account_error: 'Konto konnte nicht abgerufen werden: { message }',
            fetch_stlos_tvl_error: 'Abruf des sTLOS TVL fehlgeschlagen: { message }',
            fetch_stlos_apy_error: 'Abruf der sTLOS APY fehlgeschlagen: { message }',
            fetch_max_deposits_error: 'Abruf der maximalen Abhebungen aus ESCROW Smar Contract fehlgeschlagen: { message }',
            convert_tlos_to_stlos_error: 'TLOS konnte nicht in STLOS umgewandelt werden: { message }',
            convert_stlos_to_tlos_error: 'sTLOS konnte nicht in TLOS umgewandelt werden:S { message }',
            unstake_stlos_error: 'sTLOS konnte nicht abgehoben werden: { message }',
            withdraw_failed: 'TLOS Position konnte nicht ausgezahlt werden: { message }',
        },
        explore_transactions: 'Transaktionen prüfen',
        recent_transactions: 'Neueste Transaktionen',
        telos_evm_explorer: 'Telos EVM Explorer',
        rpc_endpoints: 'RPC Endpunkte',
        monitor: 'Monitor',
        oops: 'Oh. Hier existiert nichts...',
        go_home: 'Home',
        select_sol_file: 'Bitte .sol Smart Contract Datei für Hochladen auswählen',
        select_json_file: 'Bitte standard JSON Objekt-Datei für Hochladen auswählen',
        paste_contract_contents: 'Sie müssen eine Datei zum Hochladen auswählen oder den Reiter wechseln, um Smart Contract Inhalte direkt einzufügen.',
        contract_address: 'Smart Contract Adresse',
        enter_contract_address: 'Bitte Smart Contract Adresse eingeben \'0x0123...\'',
        invalid_address_format: 'Ungültiges Adress-Format',
        compiler_version: 'Compiler Version',
        select_compiler_version: 'Compiler Version auswählen',
        eg_contracts: 'd.h.:, \'contracts/\'',
        contract_file_directory_path: 'Smart Contract Datei(en) Verzeichnis Pfad (leer lassen, f