import {  createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromReducer from './post.reducer';

const postStateSelector = createFeatureSelector<fromReducer.State>(
  'postState'
);

export const selectPosts = createSelector(postStateSelector, state => state.posts);
