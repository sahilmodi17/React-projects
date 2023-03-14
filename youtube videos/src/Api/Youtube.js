import axios from'axios';

const Key ='AIzaSyDCz75wrhw6Zef4chJq6dTNkiFOWAzlLuA';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        type: 'video',
        maxResults : 10,
        key : Key,   
    }
});