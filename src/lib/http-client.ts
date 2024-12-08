'use client'
import axios from 'axios'

export const httpClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
})