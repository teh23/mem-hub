// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const prisma = new PrismaClient();

    if (req.query?.page) {
        const page = +req.query?.page;

        const post = await prisma.post.findMany({
            skip: 5 * (page - 1),
            take: 5,
            include: {
                comments: false,
            },
        });
        res.status(200).json(post);
    } else {
        const count = await prisma.post.aggregate({
            _count: {
                id: true,
            },
        });

        const maxPage = Math.ceil(count._count.id / 5);
        const countPost = count._count.id;
        res.status(200).json({
            Pages: maxPage,
            AllPosts: countPost,
        });
    }
}
