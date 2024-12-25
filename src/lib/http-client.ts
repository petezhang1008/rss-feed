'use client'
import axios from 'axios'

export const httpClient = axios.create({
    baseURL: `/api`,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
})