import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'assets/config.json';
  private configData: any;

  constructor(private http: HttpClient) { }

  // Load the configuration data from config.json
  loadConfig(): Observable<any> {
    return this.http.get(this.configUrl);
  }

  // Get the API URL from the configuration data
  getApiUrl(): string {
    if (!this.configData) {
      throw new Error('Config data not loaded. Call loadConfig() first.');
    }
    return this.configData.apiUrl;
  }

  // Load the configuration data and store it in configData
  initializeApp(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.loadConfig().subscribe(
        (data) => {
          this.configData = data;
          resolve();
        },
        (error) => {
          reject('Error loading config.json');
        }
      );
    });
  }
}