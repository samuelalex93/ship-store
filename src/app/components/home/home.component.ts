import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RocketService } from 'src/app/rocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any;

  constructor(
    private rocketService: RocketService
  ) {}

  ngOnInit(): void {
    this.rocketService.getAll()
    .subscribe((res: any) => {
      this.items = res;
    });
  }

}
