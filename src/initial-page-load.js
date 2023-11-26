import './style.css';
import restaurant from './assets/restaurant2.jpg';
// import { Homepage } from './Homepage';
// import { Menu } from './Menu';

export function initialPageLoad() {
    const content = document.querySelector('#content');
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
  
    let divContainer = document.createElement('div');
    divContainer.classList.add('main-container');
    divContainer.style.backgroundImage = `url(${restaurant})`; 
    nav.appendChild(ul);
    let navItems = ['Home','Menu','Contact'];
    for (let i = 0; i < navItems.length; i++) {
        let li = document.createElement('button');
        li.textContent = navItems[i];
        ul.appendChild(li);
    }   

    content.append(nav, divContainer);

    let buttons = ul.querySelectorAll('button');

    return { divContainer, buttons };
}