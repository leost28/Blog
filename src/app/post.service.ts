
import { Injectable } from '@angular/core';
import { Post } from './interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: Post[]; 

  constructor() { 
    this.arrPost= [];
  }

  agregarPost(newPost: any): void{
    this.arrPost.push(newPost);
    console.log(this.arrPost);
  }

  getAllPosts(): Promise<Post[]> { 
    return new Promise ((resolve, reject) =>{
      resolve(this.arrPost);
    })
  }
}
