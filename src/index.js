function CapitaliseName(PokemonName) {
    let lowercaseName = PokemonName;
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

function createCard (a) {
    const card = document.createElement('li');
    card.className = 'card';

    const pokemonName = document.createElement('h2');
    pokemonName.className = 'card--title';
    pokemonName.innerText = CapitaliseName(data[a].name);
    card.append(pokemonName);

    const image = document.createElement('img');
    image.className = 'card--img';
    image.setAttribute("src", data[a].sprites.other['official-artwork'].front_default);
    image.setAttribute("width", 256);
    card.append(image);

    const text = document.createElement('ul');
    text.className = 'card--text';
    card.append(text);
        for (j = 0; j < data[a].stats.length; j++) {
            let statName = data[a].stats[j].stat.name;
            let statValue = data[a].stats[j].base_stat;
            text.append(createStatsList(statName, statValue));
        } 
    return card
}

for (i=0; i < data.length; i++) {
    document.querySelector('.cards').append(createCard(i));
}