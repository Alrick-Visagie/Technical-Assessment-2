import { NgForm } from '@angular/forms';
import { CarService } from './../services/car.service';
import { Car } from './../models/car.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  public cars: Car[];
  public car: Car;

  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  public getCars = () => {
    this.service.getCars().subscribe(
      res => {
        this.cars = res as Car[];
      }
    );
  } 
}
