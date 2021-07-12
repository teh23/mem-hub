/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface IItem {
    id: number,
    title: string,
    image: string,
    createAt: Date,
    authorId: number,
    comments: IComments[]
}
interface IComments {
    id: number,
    postId: number,
    userId: number,
    comment: string
}


const Post = ({ item }: { item: IItem }) => {
    const { id, title, image, createAt, authorId, comments } = item
    const date = new Date(createAt)

    return (
        <div key={id} className="space-y-5 md:max-w-4xl">
            <div>
                <h1 className=" break-all text-2xl font-medium">{title}</h1>
                <div className="flex justify-between">
                    <small className="text-gray-300">#tags #tags #tags</small>
                    <small className="text-gray-400">{date.getUTCDay()} day ago</small>
                </div>
            </div>
            <div className="w-full bg-black bg-opacity-90 object-center flex justify-center"><img alt={title} src={image} className=" " /></div>

        </div>
    )
}

export default Post
