import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  slug: string = 'a-propos';
  page: any;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getPageAbout(this.slug);
  }

  getPageAbout(slug) {
    this.commonService.getOne(slug).subscribe(
      page => {
        this.page = page['data'];
      }
    )
  }

}
