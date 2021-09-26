// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ["GET", "POST", "OPTIONS"],
    })
);
const prisma = new PrismaClient();
type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await cors(req, res);

    await prisma.$connect();
    if (req.query?.page) {
        const page = +req.query?.page;

        const post = await prisma.post.findMany({
            skip: 5 * page,
            take: 5,
            include: {
                comments: true,
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
    prisma.$disconnect;
}
