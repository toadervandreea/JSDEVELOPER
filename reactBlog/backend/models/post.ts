import { Post } from "./../types/Post";
import { Category } from "../types/Category";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
// Get all posts
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM posts`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err); 
    }
    const rows = <RowDataPacket[]>result;
    const posts: Post[] = [];
    rows.forEach((row) => {
      const post: Post = {
        id: row.id,
        titlu: row.titlu,
        continut: row.continut,
        categorie_id: row.categorie_id,
        user_id: row.user_id,
        dataadaugare: row.dataadaugare,
        
      };
      posts.push(post);
    });
    callback(null, posts);
  });
};
export const findAllCategories = (callback: Function) => {
  const queryString = `SELECT * FROM categories`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err); 
    }
    const rows = <RowDataPacket[]>result;
    const categories: Category[] = [];
    rows.forEach((row) => {
      const category: Category = {
        id: row.id,
        nume: row.nume
      };
      categories.push(category);
    });
    callback(null, categories);
  });
};
// Get one user
export const findOne = (postId: number, callback: Function) => {
  const queryString = `SELECT * FROM posts AS p INNER JOIN categories AS c ON p.categorie_id = c.id WHERE p.id=?`;
  db.query(queryString, postId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const post: Post = {
      id: row.id,
      titlu: row.titlu,
      continut: row.continut,
      categorie_id: row.categorie_id,
      user_id: row.user_id,
      dataadaugare: row.dataadaugare,
      poza: row.poza,
        
     
    };
    callback(null, post);
  });
};

// create post
export const addPost = (post: Post, callback: Function) => {
  const queryString =
    "INSERT INTO posts (titlu, continut, categorie_id, user_id) VALUES (?, ?, ?, ?)";
  console.log(post);
  
  try {
    let sqldeb = db.query(
      queryString,
      [post.titlu, post.continut, post.categorie_id, post.user_id],
      (err, result) => {
        if (err) {
          callback(err);
        }
        
        if((<OkPacket>result) !== undefined){
          const insertId = (<OkPacket>result).insertId;
          callback(null, insertId);
        }
        else{
          console.log('error insert');
          callback(null, 0);
        }
      }
    );
    console.log(sqldeb.sql);
  } catch (error) {
    callback(error);
  }
};