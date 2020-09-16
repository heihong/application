import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromActions from "./store/post.action";
import * as fromReducer from "./store/post.reducer";

@Injectable({
  providedIn: "root",
})
export class HomeResolver implements Resolve<boolean> {
  constructor(private postStore: Store<fromReducer.State>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.postStore.dispatch(fromActions.getPosts());
    return state;
  }
}
