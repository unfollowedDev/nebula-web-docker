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
            `https://${process.env.VERIFIED_CONTRACTS_BUCKET}.s3.amazonaws.com/${checkSumAddress}/source.json`)
        ).data.files;
        }catch(e){
            console.log(e);
        }
        this.sortFiles(sources);
    },
    methods: {
        sortFiles(files){
            for (let file of files){
                if (this.isContract(file.name)){
                    file.content =
            hljs.highlight(file.content, { language: 'solidity' }).value;
                    this.contracts.unshift(file);
                }else{
                    if (this.isJson(file.name)){
                        file.content = JSON.parse(file.content);
                    }
                    this.json.push(file);
                }
            }
        },
        isContract(fileName){
            let ext = fileName.