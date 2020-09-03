import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.scss']
})
export class ShowServiceComponent implements OnInit {

  constructor(private serviceService: ServiceService, private route: ActivatedRoute) { }


  service: any;
  slug: string;
  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug;
    this.getPost(this.slug);
  }

  getPost(slug) {
    this.serviceService.getOne(slug).subscribe(
      service => {
        console.log(service);
        this.service = service['data'].filter(el => el.titre === slug);
        console.log(this.service)
      }
    )
  }

}
