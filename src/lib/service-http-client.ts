import axios from "axios";
import { CookieJar } from "tough-cookie";
import { wrapper } from "axios-cookiejar-support";

const jar = new CookieJar();
export const fetchHtmlHttpClient = axios.create({
    timeout: 30000,
})

export const fetchXmlHttpClient = axios.create({
    timeout: 30000,
    headers: {
        'Content-Type': 'application/xml',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
})