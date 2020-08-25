import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent  {
  enterTitle= '';
  enterContent= '';
  @Output() postCreated: EventEmitter<Post> = new EventEmitter();


  constructor() { }

  onAddPost(){
    const post: Post = {
      title: this.enterTitle,
      content: this.enterContent
    }

    this.postCreated.emit(post);
  }

}
