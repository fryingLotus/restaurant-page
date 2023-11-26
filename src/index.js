import './style.css';
import {Homepage} from './Homepage.js';
import { initialPageLoad } from "./initial-page-load";
import { Menu } from './Menu.js';
import { Contact } from './Contact.js';



let { divContainer, buttons } = initialPageLoad();
divContainer.append(Homepage());
buttons.forEach(button => {
    button.addEventListener('click',() => {
        divContainer.innerHTML = "";
        switch (button.textContent){
            case "Home":
                console.log("Home");
                divContainer.append(Homepage());
                break;
            case "Menu":
                console.log("Menu");
                divContainer.append(Menu());
                break;
            case "Contact":
                console.log("Contact");
                divContainer.append(Contact());
                break;
        }
    })
})


console.log('I\m using webpack');
console.log('I\m using webpack two');
//a