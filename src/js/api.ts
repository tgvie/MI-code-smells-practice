import { privateLog } from './logger';

export interface Podcast {
    name: string;
    description: string;
    programurl: string;
    socialimage: string;
}

export async function getPodcasts() {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    return await fetch(apiUrl)
        .then((data) => data.json())
        .then((json) => json)
        .catch((error) => {
            privateLog('Något blev fel: ', error);
            return null;
        });
}

export default getPodcasts;