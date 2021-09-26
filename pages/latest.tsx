import React from 'react'
import { signIn, useSession } from "next-auth/client";
import Main from '../components/Main';

const Latest = ({ }) => {
    const [session, loading] = useSession();
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <Main>
            {session ? (
                <div><p>Super secret page! LATEST</p></div>

            ) : (
                <div>
                    <p>You are not permitted to see this page.</p>

                </div>
            )}
        </Main>
    );
}

export default Latest
