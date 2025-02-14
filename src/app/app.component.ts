import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layouts/footer/footer/footer.component";
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { NavComponent } from "./layouts/navbar/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'products-Gallery';
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }
}
