import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }
  posts : any[];
  @Input() rowsOfPost: number;
  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this.postService.getAll(this.rowsOfPost).subscribe(
      posts => {
        this.posts = posts['data'];
      }
    )
  }

}
