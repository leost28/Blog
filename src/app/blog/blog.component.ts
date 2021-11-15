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

  constructor(
    private postService: PostService
  ) {

   }

  ngOnInit(): void {
    this.postService.getAll()
    .then(arrPost =>{
      this.todosLosPost = arrPost;
    })
  }

}
