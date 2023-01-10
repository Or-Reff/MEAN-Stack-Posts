import { Post } from './post.model';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}


  getPosts() {
    // this.http.get('http://localhost:3000/api/posts/').subscribe(res =>{
    //   console.log();
      
    // })
    return [...this.posts];
  }
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  addPost(title: string, content: string) {
    const post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
  }
}
