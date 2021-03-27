import { Component } from "@angular/core";

@Component({
    selector: 'app-first',
    template: `<h2>First Component Rendering Here..</h2>
        <p> This is my first component</p> `,
    styles: [`h2{color: red;}
        p{ color: blue }`]
})

// Every Component is exposed by Class
export class FirstComponent {

}