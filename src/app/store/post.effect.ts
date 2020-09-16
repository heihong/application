import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom, tap } from "rxjs/operators";
import * as fromActions from "./post.action";
import * as fromReducer from "./post.reducer";
import { HttpClient } from "@angular/common/http";
import { selectPosts } from "./post.selector";
import { select, Store } from "@ngrx/store";
import { Content } from "@angular/compiler/src/render3/r3_ast";
import { Post } from "../posts/post.model";
import { dispatch } from "rxjs/internal/observable/pairs";

@Injectable()
export class PostEffects {
  getPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.getPosts),
      mergeMap((_) =>
        this.http.get<any>("http://localhost:3000/api/posts").pipe(
          map((result: any) => {
            const posts: Post[] = result.posts.map((post) => ({
              title: post.title,
              content: post.content,
              id: post._id,
            }));
            return fromActions.successGetPosts({ posts });
          }),
          catchError((error) => of(fromActions.failureRequest(error)))
        )
      )
    );
  });

  createPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.createPost),
      withLatestFrom(this.store.pipe(select(selectPosts))),
      mergeMap(([{ post }]) => {
        return this.http
          .post<fromReducer.State>("http://localhost:3000/api/posts", post)
          .pipe(
            map((_) => fromActions.successCreatePost({ post })),
            catchError((error) => of(fromActions.failureRequest(error)))
          );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.deletePost),
      withLatestFrom(this.store.pipe(select(selectPosts))),
      mergeMap(([{ id }]) => {
        return this.http
          .delete<fromReducer.State>("http://localhost:3000/api/posts/" + id)
          .pipe(
            map((_) => fromActions.successDeletePost({ id })),
            catchError((error) => of(fromActions.failureRequest(error)))
          );
      })
    );
  });
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<any>
  ) {}
}
