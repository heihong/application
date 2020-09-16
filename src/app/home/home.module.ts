import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "../store/post.reducer";
import { PostCreateComponent } from "../posts/post-create/post-create.component";
import { PostListComponent } from "../posts/post-list/post-list.component";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { PostEffects } from "../store/post.effect";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: HomeComponent },
    ]),
    StoreModule.forFeature("postState", reducer),
    EffectsModule.forFeature([PostEffects]),
    HttpClientModule,
  ],
  declarations: [HomeComponent, PostCreateComponent, PostListComponent],
})
export class HomeModule {}
