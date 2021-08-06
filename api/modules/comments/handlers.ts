import { Request, Response } from 'express';
import commentsServices from './services';

async function getCommentsByGroupId(req: Request, res: Response) {
  const { group_id } = req.params;
  try {
    const comments = await commentsServices.getCommentsByGroupId(Number(group_id));
    res.status(200).send(comments);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function createComment(req: Request, res: Response) {
  const { user_id } = req.params;
  const { text, date, group_id } = req.body;
  try {
    const insertedId = await commentsServices.createComment(Number(user_id), text, date, group_id);
    res.status(200).send(insertedId);
  } catch (err) {
    console.log('failed making comment', err);
    res.status(400).send(err);
  }
}

export default {
  getCommentsByGroupId,
  createComment,
}