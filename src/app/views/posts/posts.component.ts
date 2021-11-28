import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostsService) { }

  getPosts(){
    this.postService.getPosts().subscribe(
      {
        next:(response:any) =>{
          console.log(response)
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
