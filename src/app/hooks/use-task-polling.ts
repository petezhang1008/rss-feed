import { RssTaskStatus } from "@/enums/rss";
import { httpClient } from "@/lib/http-client";

const MAX_ATTEMPTS = 200
const INTERVAL = 2000

export default function useTaskPolling() {
    function startTaskPolling(taskId: string) {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            let intervalId: NodeJS.Timeout;

            const fetchData = async () => {
                try {
                    const response = await httpClient.get(`/task/status?taskId=${taskId}`);
                    const data = response.data;

                    if (data.status === RssTaskStatus.FINISHED) {
                        resolve(data);
                        clearInterval(intervalId);
                    } else {
                        attempts += 1;
                        if (attempts >= MAX_ATTEMPTS) {
                            reject(new Error('Max attempts reached'));
                            clearInterval(intervalId);
                        }
                    }
                } catch (error) {
                    reject(error);
                    clearInterval(intervalId);
                }
            };

            intervalId = setInterval(fetchData, INTERVAL);
        });
    }
    return {
        startTaskPolling
    }
}