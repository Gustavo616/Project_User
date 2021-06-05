const cards = document.querySelector('.card');

url = 'https://randomuser.me/api/?seed=javascript&results=3&nat=BR&noinfo';



fetch(url) // método global que fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona na rede.
    .then((resp) => resp.json()) //retorna uma promessa contendo a resposta (um Responseobjeto).
    .then((data) => { //Os dados JSON aqui serão processados. 
        let authors = data.results; // data.results contem o array de objetos retornado pela API
        return authors.forEach(element => {
            const html = `
                            <img src="${element.picture.thumbnail}">
                            <p>${element.name.first}</p> 
                            <p>${element.gender}</p> 
                    `; // pegamos aqui a única opção que está sendo retornada - posição do array 0
            const div = document.createElement('li');
            div.innerHTML = html;
            cards.appendChild(div);
        });
        console.log(authors);
       
    }).catch(function (error) { // caso a API retorne erro, capturamos com o catch
        console.log(error);
    });

