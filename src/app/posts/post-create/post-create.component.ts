import { Component } from "@angular/core";
import { Post } from "../post.model";
import { Store } from "@ngrx/store";
import * as fromReducer from "./../../store/post.reducer";
import * as fromAction from "./../../store/post.action";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"],
})
export class PostCreateComponent {
  constructor(private postStore: Store<fromReducer.State>) {}

  onAddPost(form: NgForm) {
    const post: Post = {
      id: null,
      title: form.value.title,
      content: form.value.content,
    };
    this.postStore.dispatch(fromAction.createPost({ post }));
    form.resetForm();
  }
}
