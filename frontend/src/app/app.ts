import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="container">
      <h1>Angular + Node.js App</h1>
      <p class="subtitle">Full-stack TypeScript application</p>
      
      <div class="card">
        <h2>Backend API Response</h2>
        @if (loading()) {
          <p class="loading">Loading...</p>
        } @else if (error()) {
          <p class="error">{{ error() }}</p>
        } @else if (apiResponse()) {
          <div class="response">
            <p><strong>Message:</strong> {{ apiResponse()?.message }}</p>
            <p><strong>Timestamp:</strong> {{ apiResponse()?.timestamp }}</p>
            <p><strong>Version:</strong> {{ apiResponse()?.version }}</p>
          </div>
        }
        <button (click)="fetchData()" class="btn">Refresh Data</button>
      </div>

      <div class="card">
        <h2>API Status</h2>
        @if (statusData()) {
          <div class="response">
            <p><strong>Status:</strong> {{ statusData()?.status }}</p>
            <p><strong>Uptime:</strong> {{ statusData()?.uptime?.toFixed(2) }}s</p>
            <p><strong>Environment:</strong> {{ statusData()?.environment }}</p>
          </div>
        }
        <button (click)="checkStatus()" class="btn">Check Status</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    h1 {
      color: #dd0031;
      text-align: center;
      margin-bottom: 0.5rem;
    }
    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 2rem;
    }
    .card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h2 {
      color: #333;
      margin-top: 0;
      font-size: 1.5rem;
    }
    .response {
      background: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem 0;
    }
    .response p {
      margin: 0.5rem 0;
    }
    .btn {
      background: #dd0031;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s;
    }
    .btn:hover {
      background: #c50028;
    }
    .loading {
      color: #666;
      font-style: italic;
    }
    .error {
      color: #dd0031;
      font-weight: bold;
    }
  `],
})
export class App implements OnInit {
  apiResponse = signal<any>(null);
  statusData = signal<any>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
    this.checkStatus();
  }

  fetchData() {
    this.loading.set(true);
    this.error.set(null);
    
    const apiUrl = this.getApiUrl('/api/hello');
    
    this.http.get(apiUrl).subscribe({
      next: (data) => {
        this.apiResponse.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to fetch data from backend');
        this.loading.set(false);
        console.error('API Error:', err);
      }
    });
  }

  checkStatus() {
    const apiUrl = this.getApiUrl('/api/status');
    
    this.http.get(apiUrl).subscribe({
      next: (data) => {
        this.statusData.set(data);
      },
      error: (err) => {
        console.error('Status Error:', err);
      }
    });
  }

  private getApiUrl(path: string): string {
    // For local development
    if (window.location.hostname === 'localhost') {
      return `http://localhost:3000${path}`;
    }
    // For Vercel deployment, API is same origin
    return path;
  }
}
