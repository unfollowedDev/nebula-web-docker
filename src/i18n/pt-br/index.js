
/* eslint-disable max-len*/

export default {
    locale: {
        current_language_name: 'Português',
    },
    pages: {
        staking: {
            note_unstaking_period: 'Lembre-se que há um período de retirada de {period}',
            claim_tlos: 'Resgatar TLOS',
            add_stlos_to_metamask: 'Iniciar interação com o MetaMask para adicionar sTLOS',
            metamask_fox_logo: 'Logotipo de raposa do MetaMask',
            cancel: 'Cancelar',
            stake_tlos_confirm: 'Continuar significa aplicar TLOS em troca de sTLOS. ' +
            'sTLOS podem ser resgatados por TLOS a qualquer momento usando a aba Desaplicar.',
            stake_tlos_confirm_2a: 'Depois que desaplicar os TLOS, eles ficarão bloqueados por um período de', /* unstakePeriodPretty...*/
            stake_tlos_confirm_2b: /*...unstakePeriodPretty */ 'depois disso, podem ser retirados da sua conta na aba Resgatar.',
            stake_tlos_confirm_3: 'Deseja continuar?',
            stake_tlos: 'Aplicar TLOS',
            stake_tlos_subheader: 'Aplicar seus TLOS por sTLOS te dá acesso a uma renda estável e várias aplicações DeFi, ' +
            'aumentando ainda mais a rentabilidade. Conforme o tamanho da pool de recompensas aumenta, a taxa de conversão de TLOS para sTLOS mudará ' +
            'com o tempo. Portanto, a quantidade de sTLOS recebida é menor que a quantidade de TLOS aplicada. As recompensas se ' +
            'auto-compensarão. Não é necessária nenhuma ação adicional.',
            receive_stlos: 'Receber sTLOS',
            available: '{balanceTlos} Disponível',
            insufficient_tlos_balance: 'Saldo de TLOS insuficiente para aplicar',
            login_using_an_evm_wallet: 'Logar usando uma carteira EVM',
            wallet_not_connected: 'Carteira não conectada',
            click_to_input_full_wallet_balance: 'Clique para inserir o saldo completo de sua carteira\n\n' +
            'O saldo mostrado é reduzido em 1 TLOS para manter sua conta operacional.\n' +
            'Saldo exato (menos as tarifas de gás aproximadas):\n' +
            '{prettyBalance} TLOS',
            loading: 'Carregando...',
            get_more_tlos: 'Obter mais TLOS',
            connect_wallet: 'Conectar carteira',
            minutes: 'minutos',
            hours: 'horas',
            days: 'dias',
            unstake: 'Desaplicar',
            stake: 'Aplicar',
            withdraw: 'Retirar',
            telos_evm_staking: 'Aplicação de TLOS em EVM',
            stake_tlos_earn_interest: 'Aplicar TLOS em sTLOS para ganhar juros do pool de recompensas por aplicação',
            staked: 'Aplicado',
            unstaked: 'Desaplicado',
            tooltip_1: 'RPA: Rendimento Percentual Anual (APY em inglês)\n\nA taxa de retorno anual depois de receber o juros composto na conta.\n\n' +
            'Os juros são compostos aproximadamente a cada 30 minutos. A taxa percentual não é fixa, o que significa que ' +
            'mudará ao longo do tempo com a quantidade total de TLOS aplicados em Telos EVM e Telos Native. ' +
            'As recompensas são pagas de um pool de recompensas da comunidade para o contrato sTLOS.',
            tooltip_2: 'VTB: Valor Total Bloqueado (TVL em inglês)\n\nO valor atual, em TLOS, de todos os ativos mantidos no sTLOS ' +
            '(Staked TLOS, que significa TLOS aplicados em inglês), ou seja, a soma de todos os TLOS aplicados no Telos EVM neste momento.',
            tooltip_3: 'Aplicado\n\n' +
            'O montante total aplicado associado com a conta logada, ou seja, ' +
            'seu saldo de tokens sTLOS, junto com seu valor em TLOS',
            tooltip_4: 'Desaplicado\n\n' +
            'O valor total de TLOS desaplicados que você tem, tanto bloqueados quanto desbloqueados.\n\n' +
            'Quando você desaplica\u2014ou seja, resgata\u2014parte do valor em sTLOS, a quantidade equivalente de ' +
            'TLOS permanece como garantia ("bloqueado") por {unlockPeriod}; durante este tempo, ' +
            'não é possível interagir com esta quantidade de TLOS.\n\n' +
            'Depois de decorrido o período de desbloqueio, você pode reivindicar seu TLOS disponível na aba Resgatar ' +
            'nesta página. O valor resgatado será adicionado ao saldo TLOS da sua conta.',
            confirm_unstake_1a: 'Ao continuar, você resgatará sTLOS em troca de TLOS. ' +
            'O TLOS não aplicado permanecerá bloqueado por um período de', /* unstakePeriodPretty...*/
            confirm_unstake_1b: /*...unstakePeriodPretty */ 'após o qual pode ser transferido para sua conta na aba Resgatar',
            confirm_unstake_2a: 'Atenção, você já pode desaplicar ', /* remainingDeposits...*/
            confirm_unstake_2b: /*...remainingDeposits */ 'mais vezes antes ' +
            'de atingir o máximo de ações simultâneas de desaplicação. Quando atingir o máximo, você precisará resgatar ' +
            'TLOS desbloqueado para continuar desaplicando. Se você não tiver nenhum TLOS resgatável nesse momento, você deve ' +
            'aguardar até que a duração do bloqueio acabe, antes de resgatar o TLOS desbloqueado e desaplicar mais sTLOS. -',
            unstake_stlos_for_tlos: 'Desaplicar sTLOS em troca de TLOS',
            unstake_stlos: 'Desaplicar sTLOS',
            receive_tlos: 'Receber TLOS',
            amount: 'Montante',
            time_remaining: 'Tempo restante',
            full_staked_balance_tooltip: 'Clique para inserir o saldo total aplicado\n\n' +
            'Saldo exato (menos as tarifas de gás aproximadas):\n' +
            '{prettyBalance} sTLOS',
            login_using_evm_wallet: 'Logar usando uma carteira EVM',
            max_unstake_transactions_reached: 'Você atingiu o número máximo de transações de desaplicação pendentes, ' +
            'por favor, resgate o TLOS disponível ou aguarde que o TLOS  desaplicado ainda pendente se torne resgatável antes de fazer outro depósito.',
            click_to_change_time_format: 'Clique para mudar o formato de hora',
            unstaking: 'Desaplicando',
            available_to_withdraw: 'Disponível para retirar',
            withdraw_tlos: 'Retirar TLOS',
            withdraw_successful: 'Retirada bem-sucedida! Ver transação:',
            no_withdrawable_positions: 'Não há posições disponíveis para retirar',
            you_have_unlocked_tlos: 'Você desbloqueou TLOS!',
            stake_tlos_success: 'Aplicação bem-sucedida! Ver transação:',
            unstake_stlos_success: 'Desaplicação bem-sucedida! Ver transação:',
            deposit_failed: 'Falha ao depositar TLOS: { message }',
            redeem_failed: 'Não foi possível converter STLOS em TLOS: { message }',
            fetch_balance_error: 'Falha ao buscar conta: { message }',
            fetch_stlos_balance_error: 'Falha ao buscar saldo de STLOS da conta: { message }',
            fetch_stlos_value_error: 'Falha ao buscar valor do saldo de STLOS da conta: { message }',
            fetch_unstaked_balance_error: 'Falha ao buscar saldo total de TLOS não aplicado: { message }',
            fetch_unlocked_balance_error: 'Falha ao buscar saldo de STLOS desbloqueado: { message }',
            fetch_escrow_deposits_error: 'Falha ao buscar depósitos em garantia: { message }',
            fetch_conversion_rate_error: 'Falha ao buscar taxa de conversão TLOS->sTLOS: { message }',
            fetch_stlos_contract_error: 'Falha ao obter contrato STLOS: { message }',
            fetch_escrow_contract_error: 'Falha ao obter contrato STLOS: { message }',
            fetch_unstake_period_error: 'Falha ao recuperar período de desaplicação: { message }',
            fetch_account_error: 'Falha ao buscar conta: { message }',
            fetch_stlos_tvl_error: 'Falha ao buscar TVL de sTLOS: { message }',
            fetch_stlos_apy_error: 'Falha ao buscar APY de sTLOS: { message }',
            fetch_max_deposits_error: 'Falha ao buscar depósitos máximos do contrato de garantia { message }',
            convert_tlos_to_stlos_error: 'Não foi possível converter TLOS em STLOS { message }',
            convert_stlos_to_tlos_error: 'Não foi possível converter STLOS em TLOS { message }',
            unstake_stlos_error: 'Falha ao desaplicar sTLOS { message }',
            withdraw_failed: 'Falha ao retirar TLOS desbloqueado: { message }',
        },
        explore_transactions: 'Explorar transações',
        recent_transactions: 'Transações recentes',
        telos_evm_explorer: 'Explorador Telos EVM',
        rpc_endpoints: 'Endpoints RPC',
        monitor: 'Monitor',
        oops: 'Ops! Nada por aqui...',
        go_home: 'Ver Início',
        select_sol_file: 'Selecione o arquivo de contrato .sol para carregar',