<!-- eslint-disable vue/no-unused-components -->
<script>
import { toChecksumAddress } from 'src/lib/utils';
import Web3 from 'web3';
import TransactionTable from 'components/TransactionTable';
import InternalTransactionTable from 'components/InternalTransactionTable';
import TransferTable from 'components/TransferTable';
import TokenList from 'components/TokenList';
import ConfirmationDialog from 'components/ConfirmationDialog';
import ContractTab from 'components/ContractTab/Contra