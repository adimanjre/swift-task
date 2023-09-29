
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import rateLimit from '../../../utils/rate-limit'




const articleList = [
    {
        id: 1,
        title: 'Due Date and Times',
        redirection: '#'
    },
    {
        id: 2,
        title: 'Introduction to filters',
        redirection: '#'
    },
    {
        id: 3,
        title: 'Change your notifications settings',
        redirection: '#'
    },
    {
        id: 4,
        title: 'Introduction to comments and file upload',
        redirection: '#'
    },
    {
        id: 5,
        title: 'Change your notifications settings',
        redirection: '#'
    },
    {
        id: 6,
        title: 'Introduction to comments and file upload',
        redirection: '#'
    }
]
//export async function GET(req, res: NextResponse<reponse>) {
//    try {
//        await limiter.check(res, 10, 'CACHE_TOKEN') // 10 requests per minute
//        console.log(res,'this is response')
//        return res.json({ data: articleList })
//    } catch {
//        console.log(res, 'this is response')
//        res.json({ error: 'Rate limit exceeded' })
//    }

//}
const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 500, // Max 500 users per second
})

export async function GET(req,res) {
    
    try {
        const res = await limiter.check(NextResponse, 10, 'CACHE_TOKEN') // 10 requests per minute
        console.log(res)
        let response = NextResponse.next()
        response.headers.set('X-RateLimit-Limit', res.limit)
        response.headers.set(
            'X-RateLimit-Remaining',
            res.isRateLimited ? 0 : res.limit - res.currentUsage
        )
        return NextResponse.json({ data: articleList }, { status:200 })
    } catch {
        return NextResponse.json({ message: "error" }, {status:429})
    }
}