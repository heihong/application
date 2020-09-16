import { createAction, props } from '@ngrx/store';
import { Post } from '../posts/post.model';

export const createPost = createAction(
  '[Post] create a post',
  props<{post: Post}>()
);

export const getPosts = createAction(
  '[Post] get posts'
);

export const successGetPosts = createAction(
  '[Post] success get posts',
  props<{ posts: Post[] }>()
);


export const successCreatePost = createAction(
  '[Post] success create posts',
  props<{post: Post}>()
);

export const failureRequest = createAction(
  '[Post] failure request',
  props<{ payload: any }>()
);

export const deletePost = createAction(
  '[Post] delete a post',
  props<{id: string}>()
);

export const successDeletePost = createAction(
  '[Post] success delete posts',
  props<{id: string}>()
);
