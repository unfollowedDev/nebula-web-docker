import { boot } from 'quasar/wrappers';
import axios from 'axios';

const hyperion = axios.create({
    baseURL: process.env.HYPERION_ENDPOINT,
});

export 