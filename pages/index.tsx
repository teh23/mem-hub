import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { InferGetStaticPropsType } from "next";

interface IUser {
    id: Number
    username: String
    password: String
    createAt: Date
}

export default function Home({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(users)

    return (
        <>
            <Head>
                <title>a</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />

            </Head>

            <main className="bg-gray-700">

            </main>
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
