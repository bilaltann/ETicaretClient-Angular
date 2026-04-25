import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})


export class LayoutComponent implements OnInit {
  constructor(private alertify  : AlertifyService) { }

  ngOnInit(): void {
    this.alertify.message("merhaba",{
      messageType:MessageType.Success,
      delay:5,
      position:Position.TopCenter
    })
  }


}
