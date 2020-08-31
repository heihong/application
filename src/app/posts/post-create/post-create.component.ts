import { Component, Output } from '@angular/core';
import { Post } from '../post.model';
import { Store } from '@ngrx/store';
import * as fromReducer from './../../store/post.reducer';
import { pipe } from 'rxjs';
import * as fromSelector from './../../store/post.selector';
import * as fromAction from './../../store/post.action';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent  {
  enterTitle= '';
  enterContent= '';


  constructor(private postStore: Store<fromReducer.State>) {}

  onAddPost(){
    this.postStore.dispatch(fromAction.createPost( { title: this.enterTitle, content: this.enterContent } ));
  }

}
