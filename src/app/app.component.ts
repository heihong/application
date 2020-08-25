import { Component } from '@angular/core';
import { PostI } from './posts/post-create/post-create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  statePosts: PostI[] = [];

  onPostAdded(post){
    this.statePosts.push(post)
  }

}
