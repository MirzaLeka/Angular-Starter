import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IPost from 'src/app/models/post.model';

@Injectable()
export class ServiceTestingService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    return this.httpClient.get<IPost[]>('posts');
  }

}
