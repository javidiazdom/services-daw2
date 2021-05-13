import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {HashServiceService} from '../../services/hash-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})
export class DisplayComponent implements OnInit {

  constructor(private hashService: HashServiceService, public dialog: MatDialog) { }

  text = '';

  algorithms = [
    'md5',
    'ripemd-160',
    'sha-1',
    'sha-3',
    'sha-256',
    'sha-512',
  ];

  selectedAlgorithm: String = '';

  hash: String = '';

  updateHash(): void {
    this.hash = this.text ? this.hashService.hash(this.text, this.selectedAlgorithm) : '';
  }

  openInfoPanel(): void {
    const dialogRef = this.dialog.open(DialogContentInfo);
  }

  ngOnInit(): void {
  }
}

@Component({
  selector:'dialog-content-info',
  templateUrl: 'dialog-content-info.html'
})
export class DialogContentInfo {}
