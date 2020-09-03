import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any[];
  @Input() rowsOfService:number;
  constructor(private myService: ServiceService) { }

  ngOnInit(): void {
    this.getAllServices()
  }

  getAllServices() {
    this.myService.getAll(this.rowsOfService).subscribe(
      services => {
        this.services = services['data'];
      }
    )
  }

}
