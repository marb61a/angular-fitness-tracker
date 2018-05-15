import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  login(authData: AuthData) {

  }
}
