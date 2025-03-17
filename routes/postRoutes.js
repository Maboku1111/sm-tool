import express from "express";
import { createANewPost, getAllPosts, editPost } from "../controllers/postController.js";

const router = express.Router();

const id = 1;

router.post('/posts', createANewPost);
router.get('/posts', getAllPosts);
router.put(`/posts/${id}`, editPost);

export default router;