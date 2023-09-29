import { NextRequest, NextResponse } from 'next/server'
import crypt from 'crypto'

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
export async function GET() {
    return NextResponse.json({ data: articleList })
}