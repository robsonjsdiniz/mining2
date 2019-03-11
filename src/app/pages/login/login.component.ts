import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public apiKey: string = environment.firebaseConfig.apiKey;

    constructor(
        public authenticationService: AuthenticationService,
    ) { }

    /**
     * Login function
     */
    login() {
        this.authenticationService.login();
    }
}
