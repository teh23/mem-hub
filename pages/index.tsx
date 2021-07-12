import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { InferGetStaticPropsType } from "next";
import Main from '../components/Main';

interface IUser {
    id: Number
    username: String
    password: String
    createAt: Date
}

export default function Home(props) {
    return (
        <>

        </>
    )
}


