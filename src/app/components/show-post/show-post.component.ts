import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {

  constructor(private postService: PostService, private route: ActivatedRoute) { }
  post: any;
  slug: string;
  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug;
    this.getPost(this.slug);
  }

  getPost(slug) {
    this.postService.getOne(slug).subscribe(
      post => {
        console.log(post);
        this.post = post['data'].filter(el => el.titre === slug);
        console.log(this.post)
      }
    )
  }

}
