import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Car } from 'src/app/models/car.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private albumService: AlbumService) { 
    this.listCars()
  }

  cars!: Car[] // This is the same than  cars: Car[] = 0

  listCars() {
    this.albumService.getAllCars().subscribe(res => {
      this.cars = res
    })
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.carForm)
  }

  carForm = new FormGroup({
    id: new FormControl('null'),
    make: new FormControl('null'),
    model: new FormControl('null'),
    year: new FormControl('null'),
    restored: new FormControl('null'),
    image: new FormControl('null')
  })

}
