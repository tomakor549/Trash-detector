import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "list", component: ListComponent }
];

export const navigatableComponents = [
    LoginComponent,
    HomeComponent,
    ListComponent
];
