<script>
import { mapGetters, mapActions } from 'vuex';
import DateField from 'components/DateField';
import BlockField from 'components/BlockField';
import AddressField from 'components/AddressField';
import LogsViewer from 'components/Transaction/LogsViewer';
import InternalTxns from 'components/Transaction/InternalTxns';
import CopyButton from 'components/CopyButton';
import MethodField from 'components/MethodField';
import ERCTransferList from 'components/Transaction/ERCTransferList';
import ParameterList from 'components/Transaction/ParameterList';

import { BigNumber } from 'ethers';
import { WEI_PRECISION, formatWei, parseErrorMessage, getRouteWatcherForTabs } from 'src/lib/utils';
import { TRANSFER_SIGNATURES } from 'src/lib/abi/signature/transfer_signatures';

const tabs = {
    general: '#general',
    details: '#details',
    eventLog: '#eventlog',
    internal: '#internal',
};

// TODO: The get_transactions API doesn't format the internal transactions properly,
//  need to fix that before we try to decode them
export default {
    name: 'TransactionPage',
    components: {
        LogsViewer,
        InternalTxns,
        AddressField,
        BlockField,
        CopyButton,
        DateField,
        MethodField,
      