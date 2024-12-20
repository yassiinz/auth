import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthResponse {
  accessToken: string;
  user: {
    email: string;
    name: string;
    username: string;
    role: string;
    id: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AthentificationService {
  roleAs: string | null = null;

  constructor(private http: HttpClient) {}

  singin(data: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:3000/signin', data);
  }

  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');
  }

  hasRole(expectedRole: string): boolean {
    const storedRole = localStorage.getItem('role');
    return storedRole === expectedRole;
  }
  getRole(role:string){
    this.roleAs = localStorage.getItem('role');
    if (this.roleAs === role) {
      return true;
    }
    return false;
  }
}
