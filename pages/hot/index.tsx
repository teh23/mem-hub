import React from 'react'
import { signIn, useSession } from "next-auth/client";
import Main from '../../components/Main';
import { PrismaClient } from '@prisma/client';
import Post from '../../components/Post';
import { InferGetStaticPropsType, InferGetServerSidePropsType } from "next";
import { GetStaticProps, GetServerSideProps } from 'next'
import axios from 'axios'
const Hot = ({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    if (posts === undefined) {
        return (
            <div>wait</div>
        )
    }
    return (
        <Main>
            {posts.map((item, ix) => {
                return (
                    <Post key={ix} item={item} />
                )
            })}
        </Main>
    );
}
export const getServerSideProps: GetServerSideProps = async (contex) => {
    const url = process.env.URL
    const page = 1

    console.log(contex.params)

    const res = await fetch(`${url}/api/posts?page=${page}`)
    const posts = await res.json()


    return { props: { posts } }


}


export default Hot