import { Action, createReducer, on } from '@ngrx/store';
import { Post } from '../posts/post.model';
import * as fromAction from './post.action';

export interface State {
  posts: Post[]
}

const initialState = {
  posts: []
};
const postReducer = createReducer(
  initialState,
  on(fromAction.createPost, (state, post) => ({ ...state, posts: [...state.posts, {...post}]})),
  on(fromAction.getPosts, state => ({ ...state})),
);

export function reducer(state: State | undefined, action: Action) {
  return postReducer(state, action);
}
