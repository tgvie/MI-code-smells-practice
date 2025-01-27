const isDev = import.meta.env.MODE === 'development';
const enableLogs = import.meta.env.VITE_ENABLE_LOGS === 'true';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function privateLog(...messages: any[]): void {
    if (enableLogs && isDev) {
        // eslint-disable-next-line no-console
        console.log(...messages);
    }
}