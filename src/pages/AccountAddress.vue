<!-- eslint-disable vue/no-unused-components -->
<script>
import { toChecksumAddress } from 'src/lib/utils';
import Web3 from 'web3';
import TransactionTable from 'components/TransactionTable';
import InternalTransactionTable from 'components/InternalTransactionTable';
import TransferTable from 'components/TransferTable';
import TokenList from 'components/TokenList';
import ConfirmationDialog from 'components/ConfirmationDialog';
import ContractTab from 'components/ContractTab/ContractTab';
import TransactionField from 'components/TransactionField';
import AddressField from 'components/AddressField';
import CopyButton from 'components/CopyButton';
import GenericContractInterface from 'components/ContractTab/GenericContractInterface.vue';

const web3 = new Web3();

const tabs = {
    transactions: '#transactions',
    int_transactions: '#int_transactions',
