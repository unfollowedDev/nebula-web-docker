<script lang="javascript">
import axios from 'axios';
import JsonViewer from 'vue-json-viewer';
import hljs from 'highlight.js/lib/core';
import hljsDefineSolidity from 'highlightjs-solidity';
import 'highlight.js/styles/default.css';
import json from 'highlight.js/lib/languages/json';
import { toChecksumAddress } from 'src/lib/utils';

hljs.registerLanguage('json', json);
hljsDefineSolidity(hljs);

export default {
    name: 'ContractSource',
    components: {
        JsonViewer,
    },
    data() {
        return {
            tab:'sources',
            contracts: [],
            json: [],
        };
    },
    async mounted() {
        let sources;
        try{
            const checkSumAddress = toChecksumAddress(this.$route.params.address);
            sources =
        (await axios.get(
            `https://${process.env.V