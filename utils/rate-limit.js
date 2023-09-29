
import LRU from 'lru-cache'



export default function rateLimit(options) {
    const tokenCache = new LRU({
        max: options?.uniqueTokenPerInterval || 500,
        ttl: options?.interval || 60000,
    })

    return {
        check: (res, limit, token) =>
            new Promise((resolve, reject) => {
                const tokenCount = (tokenCache.get(token)) || [0]
                if (tokenCount[0] === 0) {
                    tokenCache.set(token, tokenCount)
                }
                tokenCount[0] += 1

                const currentUsage = tokenCount[0]
                const isRateLimited = currentUsage >= limit

                const newobj = {
                    currentUsage: currentUsage,
                    isRateLimited: isRateLimited,
                    limit:limit
                }
                
                //const response = res.next()
                //response.headers.set('X-RateLimit-Limit', limit)
                //response.headers.set(
                //    'X-RateLimit-Remaining',
                //    isRateLimited ? 0 : limit - currentUsage
                //)
                return isRateLimited ? reject() : resolve(newobj)
            }),
    }
}