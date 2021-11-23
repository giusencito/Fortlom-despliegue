import { FanaticForumcommentComponent } from './Fanatic-Forumcomment/Fanatic-Forumcomment.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoMaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigurationFanaticComponent } from './configuration-fanatic/configuration-fanatic.component';
import { FanaticForumComponent } from './Fanatic-Forum/Fanatic-Forum.component';
import { MatInputModule } from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { EventComponent } from './event/event.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { PostPageComponent } from './post-page/post-page.component';

import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { ArtistForumComponent } from './artist-forum/artist-forum.component';
import { TableComponent } from './artist-forum/table/table.component';
import { NavbarComponent } from './artist-forum/navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { LoginComponent } from './Login/Login.component';
import { ArtistRegisterComponent } from './ArtistRegister/ArtistRegister.component';
import { ArtistNavegationComponent } from './ArtistNavegation/ArtistNavegation.component';
import { HomeArtistComponent } from './HomeArtist/HomeArtist.component';
import { FanaticRegisterComponent } from './FanaticRegister/FanaticRegister.component';
import { HomeFanaticComponent } from './HomeFanatic/HomeFanatic.component';
import { FanaticForumCreateComponent } from './FanaticForumCreate/FanaticForumCreate.component';
import { ForumPageComponent } from './ForumPage/ForumPage.component';
import { UserInformationforForumComponent } from './UserInformationforForum/UserInformationforForum.component';
import { Posts2Component } from './posts2/posts2.component';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { ArtistForumsComponent } from './ArtistForums/ArtistForums.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { EventFanaticComponent } from './event-fanatic/event-fanatic.component';
import {FraudReportComponent, FraudReportDialog} from "./fraud-report/fraud-report.component";
import { RateComponent } from './rate/rate.component';
import { FollowComponent } from './follow/follow.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    FanaticForumComponent,

    EventComponent,
    EventCreateComponent,
    FanaticForumcommentComponent,
    PostPageComponent,
    CommentComponent,
    PostComponent,
    CommentFormComponent,
    PostFormComponent,
    PostListComponent,
    ArtistForumComponent,
    TableComponent,
    NavbarComponent,
    NavigationComponent,
    SkeletonComponent,
      LoginComponent,
      ArtistRegisterComponent,
      ArtistNavegationComponent,
      HomeArtistComponent,
      FanaticRegisterComponent,
      HomeFanaticComponent,
      FanaticForumCreateComponent,
      ForumPageComponent,
      UserInformationforForumComponent,
      Posts2Component,
      CommentTableComponent,
      ArtistForumsComponent,
      ConfigurationFanaticComponent,
      ConfigurationComponent,
      EventFanaticComponent,
      FraudReportComponent,
      FraudReportDialog,
      RateComponent,
      FollowComponent,
      ArtistListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
