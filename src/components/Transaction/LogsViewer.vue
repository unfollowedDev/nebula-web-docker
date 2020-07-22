
<script>
import JsonViewer from 'vue-json-viewer';
import FragmentList from 'components/Transaction/FragmentList';
import { TRANSFER_SIGNATURES, ERC1155_TRANSFER_SIGNATURE } from 'src/lib/abi/signature/transfer_signatures';
import { BigNumber } from 'ethers';

export default {