const menu = [
    {
        id: 1,
        name: 'Buttermilk Pancakes',
        price: '$15.99',
        description:
            "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        img: './img/item-1.jpeg',
        type: 'breakfast',
    },
    {
        id: 2,
        name: 'Diner Double',
        price: '$13.99',
        description:
            'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        img: './img/item-2.jpeg',
        type: 'lunch',
    },
    {
        id: 3,
        name: 'Godzilla Milkshake',
        price: '$6.99',
        description:
            'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
        img: './img/item-3.jpeg',
        type: 'shakes',
    },
    {
        id: 4,
        name: 'Country Delight',
        price: '$20.99',
        description:
            'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
        img: './img/item-4.jpeg',
        type: 'breakfast',
    },
    {
        id: 5,
        name: 'Egg Attack',
        price: '$22.99',
        description:
            "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        img: './img/item-5.jpeg',
        type: 'lunch',
    },
    {
        id: 6,
        name: 'Oreo Dream',
        price: '$18.99',
        description:
            'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
        img: './img/item-6.jpeg',
        type: 'shakes',
    },
    {
        id: 7,
        name: 'Bacon Overflow',
        price: '$8.99',
        description:
            'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
        img: './img/item-7.jpeg',
        type: 'breakfast',
    },
    {
        id: 8,
        name: 'American Classic',
        price: '$12.99',
        description:
            'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
        img: './img/item-8.jpeg',
        type: 'lunch',
    },
    {
        id: 9,
        name: 'Quarantine Buddy',
        price: '$16.99',
        description:
            'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
        img: './img/item-9.jpeg',
        type: 'shakes',
    },
    {
        id: 10,
        name: 'Steak Dinner',
        price: '$39.99',
        description:
            'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
        img: './img/item-10.jpeg',
        type: 'dinner',
    },
];

const filterBtns = document.querySelectorAll('.filter-btn');
const sectionCenter = document.querySelector('.section-center');

menu.forEach((menuItem) => {
    createArticle(menuItem);
});

filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        sectionCenter.innerHTML = '';
        let category = e.currentTarget.dataset.id;
        menu.forEach((menuItem) => {
            if (category === menuItem.type) {
                createArticle(menuItem);
            }
            if (category === 'all') {
                createArticle(menuItem);
            }
        });
    });
});

function createArticle(menuItem) {
    const article = document.createElement('article');
    document.querySelector('.section-center').appendChild(article);
    article.classList.add('menu-item');
    const image = document.createElement('img');
    image.src = menuItem.img;
    image.alt = 'menu-item';
    image.classList.add('photo');
    article.appendChild(image);
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');
    article.appendChild(itemInfo);
    const headerItemInfo = document.createElement('header');
    itemInfo.appendChild(headerItemInfo);
    const name = document.createElement('h4');
    name.textContent = menuItem.name;
    headerItemInfo.appendChild(name);
    const price = document.createElement('h4');
    price.textContent = menuItem.price;
    price.classList.add('price');
    headerItemInfo.appendChild(price);
    const itemText = document.createElement('p');
    itemText.classList.add('item-text');
    itemText.textContent = menuItem.description;
    itemInfo.appendChild(itemText);
}
