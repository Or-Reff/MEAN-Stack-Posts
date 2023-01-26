import { Component, Injectable, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSub: Subscription;
  constructor(public postsService: PostService) {}

  ngOnInit(): void {
    this.postsService.getPosts();
    this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  onDelete(postId:string){
    this.postsService.deletePost(postId);
  }

  ngOnDestroy(): void {
  //   this.postsSub.unsubscribe();
  }
}
