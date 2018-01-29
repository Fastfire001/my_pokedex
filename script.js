function display(data) {
    document.querySelector('div.pokename').innerHTML = 'Name: <br>' + data.name;
    document.querySelector('div.poketype').innerHTML = 'Type <br>' + data.type;
    var link = 'http://img.pokemondb.net/artwork/' + data.name.substr(0, data.name.length).toLowerCase() + '.jpg';
    var img = document.createElement('img');
    img.setAttribute('src', link);
    document.querySelector('div.screen-border').appendChild(img);
}

function mrmime() {
    document.querySelector('div.screen-border').removeChild();
    var img = document.createElement('img');
    img.setAttribute('src', 'https://img.pokemondb.net/artwork/mr-mime.jpg');
    document.querySelector('div.screen-border').appendChild(img);
}
function main(data) {
    document.forms['search'].onsubmit = function () {
        var idOrName = this.elements['id-name'].value;
        if (true === isNaN(idOrName)) {
            idOrName = idOrName.substr(0, 1).toUpperCase() + idOrName.substr(1, idOrName.length);
            for (i in data) {
                if (data[i].name === idOrName) {
                    display(data[i]);
                    if (83 === data[i].id){
                        mrmime();
                    }
                    return false
                }
            }
            document.querySelector('div.error').innerHTML = idOrName + ' not found';
        } else if (false === isNaN(idOrName)) {
            for (i in data) {
                if (i === idOrName) {
                    display(data[i]);
                    console.log(data[i].id)
                    if (83 === data[i].id){
                        console.log("wfdgn");
                        mrmime();
                    }
                    return false
                }
            }
            document.querySelector('div.error').innerHTML = 'Pokémon number ' + idOrName + ' not found';
        }
        return false;
    };
}
var request = new XMLHttpRequest();
var data = {};
request.open('GET', 'pokemons.json', true);
request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        data = JSON.parse(this.response);
        window.onload = main(data);
    } else {
        console.log('error');
    }
};
request.send();