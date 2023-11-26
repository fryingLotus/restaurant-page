import atSign from './assets/at-sign.svg';
import phone from './assets/phone.svg';
import mapPin from './assets/map-pin.svg';



export function Contact()
{
    console.log('Contact');
    let divContactContainer = document.createElement('div');
    divContactContainer.classList.add('contactContainer');
    let h1Contact = document.createElement('h1');
    h1Contact.classList.add('contactTitle');
    h1Contact.textContent = "Contact Us";
    let spanIconItem = [phone,atSign,mapPin];
    let contactText = ["+401231245","sample@gmail.com","Lorem St, no 23,2nd Floor"]
    divContactContainer.append(h1Contact);
    for (let i = 0; i <= 2;i++)
    {
        let pContact = document.createElement('p');
        // const spanIcon = document.createElement('span');
        let imgIcon = document.createElement('img');
        pContact.textContent = contactText[i];
        imgIcon.src = spanIconItem[i];

      



        divContactContainer.append(imgIcon,pContact);
    }
    
    return divContactContainer;
}