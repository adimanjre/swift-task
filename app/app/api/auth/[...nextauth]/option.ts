import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize(credentials, req) {
                const { username, password } = credentials as {
                    username: String;
                    password: String;
                }
                console.log(username,password)
                if (username !== 'test@gmail.com' || password != "text") {
                    throw new Error('inavalid login')
                } else {
                    return { id: '12345', name: 'test', username: 'test' }
                }
            }
        })
    ],
    pages: {
        signIn:'/auth/login'
    }
}

export default NextAuth(authOptions);