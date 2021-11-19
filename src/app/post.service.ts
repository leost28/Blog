
import { Injectable } from '@angular/core';
import { Post } from './interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [];
  }

  agregarPost(newPost: Post): void {
    if (localStorage.getItem('posts') === null) {
      this.arrPost.push(newPost);
      localStorage.setItem('posts', JSON.stringify(this.arrPost));
    } else {
      this.arrPost = JSON.parse(localStorage.getItem('posts') || '');
      this.arrPost.push(newPost);
      localStorage.setItem('posts', JSON.stringify(this.arrPost))
    }

    // this.arrPost.push(newPost);
    // console.log(this.arrPost);
  }

  getAllPosts(): Promise<Post[]> {

    return new Promise((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem('posts') || ''));
    })
  }

  // getByCategoria(categoria: string): Post[] {
  //   return this.arrPost.filter(post => post.categoria === categoria);
  // }






}

