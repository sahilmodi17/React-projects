import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cTTf7ty5FI5TcZaeowFSyxdnk8fgO5NNV2_nBmd0R44'
    }
});