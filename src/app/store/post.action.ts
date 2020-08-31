import { createAction, props } from '@ngrx/store';
import * as fromReducer from './post.reducer';

export const createPost = createAction(
  '[Post] create a post',
  props<{ title: string; content: string }>()
);

export const getPosts = createAction(
  '[Post] get posts'
);
