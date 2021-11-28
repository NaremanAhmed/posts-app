import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/postsModel';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostsService) { }

  posts:Posts[] = []
  getPosts(){
    this.postService.getPosts().subscribe(
      {
        next:(res:any) =>{
          console.log(res)
          this.posts = res
        },
        error:(httpError:any) =>{
          console.log(httpError);
          
        }
      }
    )
  }




  ngOnInit(): void {
    this.getPosts()
  }

}
