import React, { useState } from 'react'
import { signIn, useSession } from "next-auth/client";
import Main from '../../components/Main';
import { PrismaClient } from '@prisma/client';
import Post from '../../components/Post';
import { InferGetStaticPropsType, InferGetServerSidePropsType } from "next";
import { GetStaticProps, GetServerSideProps } from 'next'

// TODO: ifinity pagination by scroll 

const Hot = () => {
    const [cnt, setCnt] = useState(1)

    const pages = []
    for (let i = 0; i < cnt; i++) {
        pages.push(<Post page={i} key={i} />)
    }


    return (
        <Main>
            {pages}
            <button onClick={() => setCnt(cnt + 1)}>Load More</button>
        </Main>
    );
}



export default Hot