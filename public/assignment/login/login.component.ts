import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    selector: "login",
    templateUrl: "app/login/login.view.html",
})
export class Login implements OnInit {
    constructor(private router: Router) {}

    login(event) {
        event.preventDefault();

        this.router.navigate(["/Profile"]);
    }
}