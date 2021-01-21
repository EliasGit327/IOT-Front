import { Component, OnInit } from '@angular/core';
import { LogLevel } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devices-page',
  templateUrl: './devices-page.component.html',
  styleUrls: ['./devices-page.component.css']
})
export class DevicesPageComponent implements OnInit {
  devices: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.devices.push(
      { name: 'Temperature', boardName: 'Raspberry Pi 4B' },
      { name: 'Gas', boardName: 'Raspberry Pi 4B' },
      { name: 'Humidity', boardName: 'Raspberry Pi 4B'}
    );
    this.http.get('https://localhost:5001/testing/test')
      .subscribe(data => console.warn(data), error => {});

    const connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/message', {})
      .configureLogging(LogLevel.Information)
      .build();

    connection.on('deviceData', data => {
      console.warn(data);
    });

    connection.start().then(() => {
      // connection.invoke('Authorize', { id: 'aaa' });
    });
  }

}
