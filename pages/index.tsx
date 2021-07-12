import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { InferGetStaticPropsType } from "next";
import Main from '../components/Main';
import Hot from './hot'
interface IUser {
    id: Number
    username: String
    password: String
    createAt: Date
}

export default function Home({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Hot />
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
