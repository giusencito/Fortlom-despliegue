import { ConfigurationComponent } from './configuration/configuration.component';
import { ConfigurationFanaticComponent } from './configuration-fanatic/configuration-fanatic.component';
import { ArtistForumsComponent } from './ArtistForums/ArtistForums.component';
import { PostComponent } from './post/post.component';
import { ForumPageComponent } from './ForumPage/ForumPage.component';
import { FanaticForumCreateComponent } from './FanaticForumCreate/FanaticForumCreate.component';
import { FanaticRegisterComponent } from './FanaticRegister/FanaticRegister.component';
import { HomeArtistComponent } from './HomeArtist/HomeArtist.component';
import { ArtistRegisterComponent } from './ArtistRegister/ArtistRegister.component';
import { LoginComponent } from './Login/Login.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { FanaticForumComponent } from './Fanatic-Forum/Fanatic-Forum.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { EventComponent } from './event/event.component';
import { PostPageComponent } from './post-page/post-page.component';
import { ArtistForumComponent } from './artist-forum/artist-forum.component';
import { HomeFanaticComponent } from './HomeFanatic/HomeFanatic.component';
import { Posts2Component } from "./posts2/posts2.component";
import {CommentTableComponent} from "./comment-table/comment-table.component";
import { EventFanaticComponent } from './event-fanatic/event-fanatic.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path : 'Home', component: HomeComponent},
{path:'Event',component:EventComponent},
{path:'Posts',component:PostPageComponent},
{path:'Comments',component:CommentTableComponent},
{path:'artistforum',component:ArtistForumComponent},
{path:'registerartist',component:ArtistRegisterComponent},
{path:'registerfanatic',component:FanaticRegisterComponent},
{path:'HomeArtist/:id',component:HomeArtistComponent},
{path:'HomeArtist/:id/ArtistForum',component:ArtistForumsComponent},
{path:'HomeArtist/:id/ArtistForum/CreateForum',component:FanaticForumCreateComponent},
{path:'HomeArtist/:id/ArtistForum/ForumPage/:forumid',component:ForumPageComponent},
{path:'HomeFanatic/:id/ConfigureFanatic',component:ConfigurationFanaticComponent},
{path:'HomeFanatic/:id',component:HomeFanaticComponent},
{path:'HomeFanatic/:id/FanaticForum',component:FanaticForumComponent},
{path:'HomeFanatic/:id/FanaticForum/CreateForum',component:FanaticForumCreateComponent},
{path:'HomeFanatic/:id/FanaticForum/ForumPage/:forumid',component:ForumPageComponent},
{path:'HomeFanatic/:id/Event',component:EventFanaticComponent},
{path:'HomeArtist/:id/Event',component:EventComponent},
{path: 'HomeArtist/:id/ConfigureArtist',component:ConfigurationComponent},
{path: 'artist/:artistid/posts', component:PostPageComponent},
{path: 'HomeArtist/:id/posts',component:PostPageComponent},
{path: 'HomeFanatic/:id/posts',component:PostPageComponent},
{path:'Comments',component:CommentTableComponent},
{path:'HomeFanatic/:id/artists',component:ArtistListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
