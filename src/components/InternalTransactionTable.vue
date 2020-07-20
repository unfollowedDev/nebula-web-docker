
<script>
import BlockField from 'components/BlockField';
import DateField from 'components/DateField';
import TransactionField from 'components/TransactionField';
import MethodField from 'components/MethodField';
import { formatWei } from 'src/lib/utils';
import { TRANSFER_SIGNATURES } from 'src/lib/abi/signature/transfer_signatures';
import InternalTxns from 'components/Transaction/InternalTxns';

export default {
    name: 'InternalTransactionTable',
    components: {