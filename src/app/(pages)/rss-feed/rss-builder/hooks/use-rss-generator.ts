
export default function useRssGenerator() {
    const httpClient = useHttpClient();
    async function generateRssFeed(url: string) {
        const rssFeed = await httpClient.post(`/rss/generate`, {
            url,
        });
    }

    return { generateRssFeed };
}