<script>
import AddressField from 'components/AddressField';
import DateField from 'components/DateField';
import TransactionField from 'components/TransactionField';
import { ethers, BigNumber } from 'ethers';
import { formatWei, getTopicHash } from 'src/lib/utils';
import DEFAULT_TOKEN_LOGO from 'src/assets/evm_logo.png';
import { TRANSFER_SIGNATURES } from 'src/lib/abi/signature/transfer_signatures';

const TRANSFER_EVENT_ERC20_SIGNATURE = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
const TRANSFER_EVENT_ERC1155_SIGNATURE = '0xc3d58168c5ae7397731