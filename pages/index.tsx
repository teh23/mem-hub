import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import { isError } from 'util'

interface IUser {
    id: Number
    username: String
    password: String
    createAt: Date
}

export default function Home({ users }: { users: IUser }) {
    console.log(users)

    return (
        <>
            <Head>
                <title>a</title>
            </Head>

        </>
    )
}

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const user = await prisma.user.findMany()

    return {
        props: {
            users: user
        }

    }

}
