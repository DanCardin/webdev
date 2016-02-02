import {Component, OnInit} from "angular2/core";
import {RouteConfig, Router, RouterLink, RouterOutlet} from "angular2/router";

import {PathAware} from "../path-aware.component";

@Component({
    directives: [RouterLink, RouterOutlet],
    selector: "sidebar",
    templateUrl: "app/views/sidebar/sidebar.view.html",
})
export class Sidebar extends PathAware {
    constructor(router: Router) {
        super(router);
    }
}