import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostService) {}

  ngOnInit(): void {}

  onAddPost(form: NgForm) {
    if (form.invalid) return; // tried to submit but shows it invalid(red warning)
    this.postsService.addPost(form.value.title, form.value.content);
    form.reset();
    // *TODO : Add if statement when to reset red warning
    Object.keys(form.controls).forEach(key =>{
      form.controls[key].setErrors(null)
   });
  }
}
