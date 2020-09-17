import { Component } from "@angular/core";
import { Post } from "../post.model";
import { Store } from "@ngrx/store";
import * as fromReducer from "./../../store/post.reducer";
import * as fromAction from "./../../store/post.action";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"],
})
export class PostCreateComponent {

  form = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.minLength(2)]),
    title: new FormControl('', [Validators.required,  Validators.minLength(2)],),
  });

  constructor(private postStore: Store<fromReducer.State>) {}

  onAddPost() {
    const post: Post = {
      id: null,
      title: this.form.value.title,
      content: this.form.value.content,
    };
    this.postStore.dispatch(fromAction.createPost({ post }));
    this.form.reset(this.form.value);
  }

  get title() { return this.form.get('title'); }

  get content() { return this.form.get('content'); }
}

