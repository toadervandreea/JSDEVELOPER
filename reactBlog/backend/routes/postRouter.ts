import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";

import * as postModel from "../models/post";
import {Post} from "../types/Post";
const postRouter = express.Router();
var jsonParser = bodyParser.json();


postRouter.get("/", async (req: Request, res: Response) => {
  postModel.findAll((err: Error, posts: Post[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": posts});
  });
});
postRouter.get("/categories", async (req: Request, res: Response) => {
  postModel.findAllCategories((err: Error, posts: Post[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": posts});
  });
});

postRouter.get("/:id", async (req: Request, res: Response) => {
  const postId: number = Number(req.params.id);
  postModel.findOne(postId, (err: Error, post: Post) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": post});
  })
});

postRouter.post("/",jsonParser, async (req: Request, res: Response) => {
  console.log(req.body);
  const newPost: Post = req.body;
  postModel.addPost(newPost, (err: Error, postId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"message": 'Datele au fost introduse cu succes'});
  });
});



export {postRouter};