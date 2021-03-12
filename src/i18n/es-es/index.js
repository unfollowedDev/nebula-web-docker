
/* eslint-disable max-len */

export default {
    locale: {
        current_language_name: 'Español',
    },
    pages: {
        staking: {
            note_unstaking_period: 'Tenga en cuenta que hay un período de recuperación de { period }',
            claim_tlos: 'Retirar TLOS',
            add_stlos_to_metamask: 'Iniciar el cuadro de diálogo MetaMask para agregar sTLOS',
            metamask_fox_logo: 'Logotipo de la zorra de MetaMask',
            stake_tlos_confirm: 'continuar significa bloquer TLOS a cambio de sTLOS. ' +
            'sTLOS se puede canjear por TLOS en cualquier momento usando la pestaña Desbloquear.',
            cancel: 'Cancelar',
            stake_tlos_confirm_2a: 'Después de que se canjéen los TLOS, éstos estarán bloqueados durante un período de', /* unstakePeriodPretty...*/
            stake_tlos_confirm_2b: /*...unstakePeriodPretty */ 'después de lo cual se puede retirar a su cuenta desde la pestaña Retirar.',
            stake_tlos_confirm_3: '¿Le gustaría proceder?',
            stake_tlos: 'Bloquar TLOS',
            stake_tlos_subheader: 'Su bloqueo de TLOS a sTLOS le otorga acceso a una renta constante y varias aplicaciones DeFi, ' +
            'aumentando aún más la rentabilidad. A medida que aumenta la cantidad de recompensas, la tasa de conversión de TLOS a sTLOS cambiará ' +
            'con el tiempo. Por lo tanto, la cantidad de sTLOS recibida es menor que la cantidad de TLOS bloqueada. Las recompensas se ' +
            'auto-compensarán. No se requiere ninguna acción adicional.',
            receive_stlos: 'Recibir sTLOS',
            available: '{balanceTlos} Disponible',
            insufficient_tlos_balance: 'Saldo de TLOS insuficiente para apostar',
            login_using_an_evm_wallet: 'Iniciar sesión usando una billetera EVM',
            wallet_not_connected: 'Billetera no conectada',
            click_to_input_full_wallet_balance: 'Haga clic para ingresar el saldo completo de la billetera\n\n' +
            'El saldo mostrado se reduce en 1 TLOS para mantener su cuenta operativa.\n' +
            'Saldo preciso (menos las tarifas de gas aproximadas):\n' +
            '{prettyBalance} TLOS',
            loading: 'Cargando...',
            get_more_tlos: 'Obtener más TLOS',
            connect_wallet: 'Conectar billetera',
            minutes: 'minutos',
            hours: 'horas',
            days: 'días',
            unstake: 'Desbloquear',
            stake: 'Bloquear',
            withdraw: 'Retirar',
            telos_evm_staking: 'Bloqueo de TLOS en EVM',
            stake_tlos_earn_interest: 'Bloquear TLOS para obtener sTLOS y ganar intereses de la recompensa de bloqueo',
            staked: 'Bloqueado',
            unstaked: 'Desbloqueado',
            tooltip_1: 'APY: Tasa Anual Efectiva (APY en Inglés)\n\nLa tasa de retorno anual después de tomar en cuenta el interés compuesto.\n\n' +
            'El interés se compone aproximadamente cada 30 minutos. La tasa porcentual no es fija, lo que significa que ' +
            'cambiará con el tiempo con la cantidad total de TLOS bloqueados en Telos EVM y Telos nativo. ' +
            'Las recompensas se pagan desde un fondo de recompensas de la comunidad al contrato de sTLOS.',
            tooltip_2: 'TVL: Valor Total Bloqueado (TVL en Inglés)\n\nEl valor actual, en TLOS, de todos los activos en el contrato inteligente de sTLOS ' +
            '(TLOS bloqueado), es decir, la suma de todos los TLOS bloqueados en Telos EVM en este momento.',
            tooltip_3: 'Bloqueado\n\n' +
            'La cantidad total bloqueada asociada con la cuenta iniciada, es decir, ' +
            'su saldo de sTLOS, junto con su valor en TLOS',
            tooltip_4: 'Desbloqueado\n\n' +
            'El valor total de TLOS que ha desbloqueado, tanto bloqueado como desbloqueado.\n\n' +
            'Cuando desbloquea\u2014es decir, canjea\u2014algun valor de sTLOS, la cantidad equivalente de ' +
            'TLOS se envía en garantía ("bloqueado") por {unlockPeriod}; durante este tiempo, ' +
            'no puede interactuar con este TLOS.\n\n' +
            'Después de que transcurra el período de desbloqueo, puede retirar su TLOS desbloqueados desde la pestaña Retirar ' +
            'en esta página, momento en el que se agregará a su saldo de TLOS de su cuenta.',
            confirm_unstake_1a: 'Continuará canjeando sTLOS a cambio de TLOS. ' +
            'El TLOS desbloqueado permanecerá bloqueado por un período de', /* unstakePeriodPretty...*/
            confirm_unstake_1b: /*...unstakePeriodPretty */ 'después del cual se puede retirar a su cuenta desde la pestaña Retirar',
            confirm_unstake_2a: 'Tenga en cuenta, que sólo puede desbloquear ', /* remainingDeposits...*/
            confirm_unstake_2b: /*...remainingDeposits */ 'veces más antes ' +
            'de alcanzar el máximo de acciones de desbloqueo concurrentes. Cuando llegue al máximo, deberá retirar ' +
            'los TLOS desbloqueados para continuar desbloqueando más sTLOS. Si no tiene ningún TLOS desbloqueado en ese momento, debe ' +
            'espear hasta que transcurra el período de bloqueo antes de que pueda retirar los TLOS canjeados y pueda desbloquear más sTLOS. -',
            unstake_stlos_for_tlos: 'Desbloquear sTLOS a cambio de TLOS',
            unstake_stlos: 'Desbloquear sTLOS',
            receive_tlos: 'Recibir TLOS',
            amount: 'Cantidad',
            time_remaining: 'Tiempo restante',
            full_staked_balance_tooltip: 'Haga clic para ingresar el saldo total bloqueado\n\n' +
            'Saldo preciso (menos las tarifas de gas aproximadas):\n' +
            '{prettyBalance} sTLOS',
            login_using_evm_wallet: 'Inicie sesión usando una billetera EVM',
            max_unstake_transactions_reached: 'Ha alcanzado el número máximo de transacciones de desbloqueo pendientes, ' +
            'por favor retire los TLOS disponibles o espere a que los TLOS desbloqueados pendientes se conviertan en retirables antes de realizar otro depósito.',
            click_to_change_time_format: 'Haga clic para cambiar el formato de tiempo',
            unstaking: 'Desbloqueando',
            available_to_withdraw: 'Disponible para retirar',
            withdraw_tlos: 'Retirar TLOS',
            withdraw_successful: 'Retiro exitoso! Ver transacción:',
            no_withdrawable_positions: 'No hay posiciones disponibles para retirar',
            you_have_unlocked_tlos: '¡Ha desbloqueado TLOS!',
            stake_tlos_success: '¡Bloqueo exitoso! Ver transacción:',
            unstake_stlos_success: '¡Desbloqueo exitoso! Ver transacción:',
            deposit_failed: 'Error al depositar TLOS: { message }',
            redeem_failed: 'No se puede convertir sTLOS a TLOS: { message }',
            fetch_balance_error: 'Error al buscar cuenta: { message }',
            fetch_stlos_balance_error: 'Error al buscar el saldo de sTLOS de la cuenta: { message }',
            fetch_stlos_value_error: 'Error al buscar el valor del saldo de sTLOS de la cuenta: { message }',
            fetch_unstaked_balance_error: 'Error al buscar el saldo total de TLOS no bloqueado: { message }',
            fetch_unlocked_balance_error: 'Error al buscar el saldo de sTLOS desbloqueado: { message }',
            fetch_escrow_deposits_error: 'Error al buscar depósitos de custodia: { message }',
            fetch_conversion_rate_error: 'Error al buscar la tasa de conversión TLOS->sTLOS: { message }',
            fetch_stlos_contract_error: 'Error al obtener el contrato sTLOS: { message }',
            fetch_escrow_contract_error: 'Error al obtener el contrato sTLOS: { message }',
            fetch_unstake_period_error: 'Error al recuperar el período de desbloqueo: { message }',
            fetch_account_error: 'Error al buscar cuenta: { message }',
            fetch_stlos_tvl_error: 'Error al buscar el TVL de sTLOS: { message }',
            fetch_stlos_apy_error: 'Error al buscar el APY de sTLOS: { message }',
            fetch_max_deposits_error: 'Error al buscar depósitos máximos del contrato de custodia { message }',
            convert_tlos_to_stlos_error: 'No se puede convertir TLOS a sTLOS { message }',