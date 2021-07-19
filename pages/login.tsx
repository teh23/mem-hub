import { CtxOrReq, getCsrfToken } from "next-auth/client";
import { InferGetServerSidePropsType, NextApiRequest, NextApiResponse } from "next";
import Overlay from "../components/Overlay";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { getSession } from 'next-auth/client'



export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [hidden, setHidden] = useState(false)


    const router = useRouter()
    console.log(router.query)

    useEffect(() => {
        const callbackUrl = router.query.callbackUrl as string
        if (hidden) {
            if (!router.query?.callBackUrl) {
                router.push('/hot')
                return
            }
            router.push(callbackUrl)
        }
    }, [hidden, router])


    return (
        <div className="absolute top-0 left-0 z-50 w-full h-full text-white flex justify-center items-center">
            <Overlay hidden={hidden} setHidden={setHidden} />
            <form className="flex justify-center flex-col items-center z-50" method='post' action='/api/auth/callback/credentials'>
                <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
                <label className="flex flex-col justify-center ">
                    Username
                    <input className="text-black" name='username' type='text' />
                </label>
                <label className="flex flex-col justify-center mb-5">
                    Password
                    <input className="text-black" name='password' type='password' />
                </label>
                <Button type="submit">Sign in</Button>
            </form>
        </div>
    );
}


export const getServerSideProps = async ({ req, res }: { req: NextApiRequest, res: NextApiResponse }) => {

    const session = await getSession({ req });
    if (session) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }
    return {
        props: {
            csrfToken: await getCsrfToken({ req }),
        },
    };
}
