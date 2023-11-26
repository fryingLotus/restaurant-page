
import tonkotsu from './assets/tonkotsu.jpg';
import Soba from './assets/soba.jpg';
import miso from './assets/miso.jpg';
import Hakata from './assets/Hakata.jpg';
import Sapporo from './assets/Sapporo.jpg';
import Shoyu from './assets/shoyu.jpg';
export function Menu()
{
    console.log('test');

    
    let divMenu = document.createElement('div');
divMenu.classList.add('menuContainer');
    let titlesItem = ["Tonkotsu Ramen","Soba Noodles","Miso Ramen","Shoyu Ramen","Sapporo Ramen","Hakata Ramen"];
    let menuImage = [tonkotsu,Soba,miso,Shoyu,Sapporo,Hakata]
    
for (let i = 0; i <= 5; i++) {
    let cardDiv = document.createElement('div');
    let title = document.createElement('h2');
    let image = document.createElement('img');
    image.classList.add('menuImage');

    cardDiv.classList.add('card');
    title.classList.add('title');
   

    title.textContent = titlesItem[i];
    image.src = menuImage[i];

    cardDiv.append(title, image);

    divMenu.appendChild(cardDiv);
}

    return divMenu;
}