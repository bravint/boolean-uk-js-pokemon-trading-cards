// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

function CapitaliseName (a) {
    let lowercaseName = a;
    let firstLetterLowercase = lowercaseName.charAt(0);
    let firstLetterUppercase = firstLetterLowercase.toUpperCase();
    let restOfword = lowercaseName.slice(1);
    let newName = firstLetterUppercase+restOfword;
    return newName;
}

function createStatsList(statName, statValue) {
    let li = document.createElement('li');
    li.innerText = `${statName.toUpperCase()}: ${statValue}`;
    return li;
}

for (i=0; i < data.length; i++) {
    const card = document.createElement('li');
    card.className = 'card';
    document.querySelector('.cards').append(card)
    
    const pokemonName = document.createElement('h2');
    pokemonName.className = 'card--title';
    pokemonName.innerText = CapitaliseName(data[i].name);
    card.append(pokemonName);
    
    const image = document.createElement('img');
    image.className = 'card--img';
    image.setAttribute("src", data[i].sprites.other['official-artwork'].front_default);
    image.setAttribute("width", 256);
    card.append(image);
    
    const text = document.createElement('ul');
    text.className = 'card--text';
    card.append(text);
    for (j = 0; j < data[i].stats.length; j++) {
        let statName = data[i].stats[j].stat.name;
        let statValue = data[i].stats[j].base_stat;
        text.append(createStatsList(statName, statValue))
    }
}