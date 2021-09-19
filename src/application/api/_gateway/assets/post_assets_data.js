import { fetchHandler, fetchRequestBuilder, HTTP_METHOD, limiter } from 'application/api/request_builders'
import { handleApiResponse } from 'application/api/response_handlers'

export const postAssetsData = (payload) => {
    const request = fetchRequestBuilder(`http://localhost:4000/calculate-assets`, HTTP_METHOD.POST, payload)

    return limiter.schedule(() => fetchHandler(request.url, request.data))
        .then(handleApiResponse)
}