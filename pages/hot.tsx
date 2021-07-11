import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { signIn, useSession } from "next-auth/client";

const Hot = (props) => {
    const [session, loading] = useSession();
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <>
            {session ? (
                <p>Super secret page!</p>
            ) : (
                <p>
                    <p>You are not permitted to see this page.</p>

                </p>
            )}
        </>
    );
}

export default Hot
