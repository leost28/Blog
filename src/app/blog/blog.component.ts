import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  todosLosPost!: Post[];
  posts: Post[] = [];

  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts()
      .then(arrPost => {
        this.todosLosPost = arrPost;
        this.posts = arrPost;
      })
  }




  onCategoriaChange($event: any) {
    if ($event.target.value === '') {
      this.posts = this.todosLosPost
    } else {
      this.posts = this.todosLosPost.filter(post => post.categoria === $event.target.value);
    }
  }

  eliminarPost(post: Post) {
    if (confirm('¿Estás seguro de que quieres elimnar el Post?')) {
      this.deletePost(post);
      localStorage.setItem('posts', JSON.stringify(this.todosLosPost));
    }


  }

  deletePost(post: Post) {

    // for (let i = 0; i < this.todosLosPost.length; i++) {
    //   if (post === this.todosLosPost[i]) {
    //     this.todosLosPost.splice(i, 1)
    //   }
    // }
    // for (let i = 0; i < this.posts.length; i++) {
    //   if (post === this.posts[i]) {
    //     this.posts.splice(i, 1)
    //   }
    // }

    // this.posts.forEach((arrPost : Post, i : number)=> {
    //   if(arrPost === post){
    //     this.todosLosPost.splice(i, 1)
    //   }
    // })

    
    this.posts =this.posts.filter(arrPost=>post !== arrPost)
    this.todosLosPost = this.todosLosPost.filter(arrPost=>post !== arrPost)

  }

}
