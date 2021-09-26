/* tslint:disable */
import React, { ReactElement, useEffect, useState } from 'react'
import { signIn, useSession } from "next-auth/client";
import Main from '../../components/Main';
import { PrismaClient } from '@prisma/client';
import Post from '../../components/Post';
import { InferGetStaticPropsType, InferGetServerSidePropsType } from "next";
import { GetStaticProps, GetServerSideProps } from 'next'

// TODO: infinity pagination by scroll 

const Hot = (props) => {
    const [cnt, setCnt] = useState(1)

    const pages: JSX.Element[] = []

    for (let i = 0; i < cnt; i++) {
        pages.push()

    }




    return (
        <Main>
            {/* {pages} */}
            <Post key={0} page={0} />
            <button onClick={() => setCnt(cnt + 1)}>Load More</button>
        </Main>
    );
}



export default Hot