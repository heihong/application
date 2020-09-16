import { Component, Input } from '@angular/core';
import * as fromAction from './../../store/post.action';
import { Store } from '@ngrx/store';
import * as fromReducer from './../../store/post.reducer';
import { pipe } from 'rxjs';
import * as fromSelector from './../../store/post.selector';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  constructor(private postStore: Store<fromReducer.State>) {}

  posts$ = this.postStore.select(pipe(fromSelector.selectPosts))

  onDeletePost(id: string){
    this.postStore.dispatch(fromAction.deletePost({id}));
  }
}
