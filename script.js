var request = new XMLHttpRequest();
request.open('GET', 'pokemons.json', true);
request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        var data = this.response;

    } else {
        console.log('error');
    }
};
request.send();