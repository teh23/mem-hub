import React from 'react'
import { signIn, useSession } from "next-auth/client";
import Main from '../components/Main';
import { PrismaClient } from '@prisma/client';
import Post from '../components/Post';
import { InferGetStaticPropsType } from "next";

const Hot = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {

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
export async function getStaticProps() {
    const prisma = new PrismaClient()
    const post = await prisma.post.findMany({
        include: {
            comments: true
        }
    })
    console.log(post)
    return {
        props: {
            posts: post
        }

    }

}


export default Hot
