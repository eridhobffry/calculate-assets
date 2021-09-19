import { nanoid } from 'nanoid'

export const fetchRequestBuilder = (apiEndpoint, method = 'GET', payload = {}) => {
    const url = apiEndpoint
    const apiKey = 'rollianFrontEnd29'
    const applicationKey = 'EBRollian'
    let data = {
        method,
        headers: { 
            'Content-Type': 'application/json',
            'Accept-Language': 'de',
            'X-Application-Key': applicationKey,
            'X-API-Key': apiKey,
            'Authorization': `Rollians Token ${nanoid()}`,
        },
        mode: 'cors'
    }

    data = method !== 'GET' ? {
        ...data,
        body: JSON.stringify(payload)
    } : data

    return {
        data,
        url
    }
}

export default fetchRequestBuilder