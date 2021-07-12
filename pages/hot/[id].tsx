import React from 'react'
import { signIn, useSession } from "next-auth/client";
import Main from '../../components/Main';
import { PrismaClient } from '@prisma/client';
import Post from '../../components/Post';
import { InferGetStaticPropsType, InferGetServerSidePropsType } from "next";
import { GetStaticProps, GetServerSideProps } from 'next'
import axios from 'axios'
const Hot = ({ posts, page, maxPage }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    
    return (
        <Main>
            page {page} and max page {maxPage}
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
    const page = +contex?.params?.id

    console.log(contex.params)

    const res = await fetch(`${url}/api/posts?page=${page}`)
    const posts = await res.json()
    const resMaxPage = await fetch(`${url}/api/posts`)
    const jsonMaxPage = await resMaxPage.json()

    const maxPage = jsonMaxPage.Pages
    console.log(maxPage)
    return { props: { posts, page, maxPage } }


}


export default Hot