import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts;
  isGet = true;
  constructor( private postService: PostService) { }

  ngOnInit(): void {

   this.getPosts();
  }

  getPosts(){
    this.isGet = false;
    this.postService.getPosts().subscribe({
      next: posts => {this.posts = posts;
                      this.isGet = true;  },
      error:  error => {console.log(error);
                        this.isGet = false;  }
    });

  }

  deletePost(post){
    this.isGet = true;
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.deletePost(post.id).subscribe({
      next : post => {console.log(post);
                      this.isGet = false; },
      error: errors => {console.log(errors);
                        this.posts.splice(index, 0, post);
                        this.isGet = false; }

    });

  }
}
