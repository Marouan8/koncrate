import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  mySliders: any[];
  constructor(private slideService: SlideService) { }

  ngOnInit(): void {
    this.getAllSlides();
  }

  getAllSlides() {
    this.slideService.getAll().subscribe(
      slides => {
        this.mySliders = slides['data'];
      }
    )
  }

}
