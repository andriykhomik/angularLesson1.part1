import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Posts} from '../models/Posts';

@Component({
  selector: 'app-root',
  template: `<app-post *ngFor="let post of posts" [post]="post"></app-post>`
})
export class AppComponent {
  // title = 'angularLesson1';

  posts: Posts[];

  constructor(private httpClient: HttpClient) {
    // console.log('hello');
    this.httpClient
      .get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.posts = data);
  }
}
