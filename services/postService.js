import { prisma } from "../config/database.js";

export const createPost = (body) => {
    const { author, content, is_private } = body;
    return prisma.post.create({
        data: {
            author: author,
            content: content,
            is_private: is_private
        }
    })
}

export const getAListOfAllPosts = () => {
    return prisma.post.findMany();
}

export const editAPost = (body) => {
    const { id, author, content, is_private } = body;
    return prisma.post.update({
        where: {
            id: id
        },
        data: {
            author: author,
            content: content,
            is_private: is_private
        }
    })
}
