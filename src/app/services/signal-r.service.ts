import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  constructor(private httpClient: HttpClient) {}
}
