export function Homepage()
{
    let container = document.createElement('div');
    let h1 = document.createElement('h1');

    h1.textContent = "ICHIBAN RAMEN";

    container.classList.add('hero-container');
    container.append(h1);


    return container;
}