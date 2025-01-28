import { privateLog } from './logger';
import { mockPodcasts } from './mockData';

export interface Podcast {
    name: string;
    description: string;
    programurl: string;
    socialimage: string;
}

const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

export async function getPodcasts(): Promise<Podcast[]> {
    if (import.meta.env.MODE === 'development' && USE_MOCK_DATA) {
        privateLog('Använder mock data för development');
        return mockPodcasts.programs;
    }
    
    const apiUrl = import.meta.env.VITE_API_URL;
    
    return await fetch(apiUrl)
        .then((data) => data.json())
        .then((json) => json.programs ?? [])
        .catch((error) => {
            privateLog('Något blev fel:', error);
            return [];
        });
}

export default getPodcasts;