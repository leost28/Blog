import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPost: FormGroup;

  constructor(
    private postService: PostService
  ) {

    this.newPost= new FormGroup ({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl(''),
      imagen: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl('')

    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.newPost.value);
    this.postService.insertPost(this.newPost.value)
    
  }
}
