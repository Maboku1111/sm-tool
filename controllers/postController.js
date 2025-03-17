import { createPost, getAListOfAllPosts, editAPost } from "../services/postService.js";

export const createANewPost = async (req, res, next) => {
    try {
        const postData = req.body;
        const newPost = await createPost(postData);
        res.status(200).json({
            status: "success",
            message: "Post created successfully.",
            data: {
                newPost,
            },
        })
    } catch (error) {
        console.error(err);
        res.status(500).json({ status: "error", message: "Error creating post." });
    }
}

export const getAllPosts = async (req, res, next) => {
    try {
        const allPosts = await getAListOfAllPosts();
        res.status(200).json({
            status: "success",
            message: "All posts retieved successfully.",
            data: {
                allPosts,
            },
        })
    } catch (error) {
        console.error(err);
        res.status(500).json({ status: "error", message: "Error retrieving all posts." });
    }
}

export const editPost = async (req, res, next) => {
    try {
        const postData = req.body;
        const updatedPost = await editAPost(postData);
        res.status(200).json({
            status: "success",
            message: "Post updated successfully.",
            data: {
                updatedPost,
            },
        })
    } catch (error) {
        console.error(err);
        res.status(500).json({ status: "error", message: "Error updating a post." });
    }
}