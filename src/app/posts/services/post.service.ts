import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Post} from '../model/post.entity';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const coursesResourceEndpointPath = environment.postsEndpointPath;


@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<Post>{

  constructor() {
    super();
    this.resourceEndpoint = coursesResourceEndpointPath;
  }
  getPostById(id: string): Observable<Post> {
    return this.getById(id);
  }
  //ajustate de base service
  partialUpdatePost(post: Post): Observable<Post> {
    return this.partialUpdate(post.id, post);
  }

}
