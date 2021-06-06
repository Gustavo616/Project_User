const cards = document.querySelector('.card');
let totalF = 0;
let totalM = 0;
let totalA = 0;
let mediaA = 0;

const authors = JSON.parse(localStorage.getItem('authors'));

console.log(authors);

for (let author of authors) {

    if (author.gender == "female") {
        totalF += 1;
    } else {
        totalM += 1;
    }
    totalA += author.dob.age;

}
mediaA = Math.round(totalA / authors.length);

const html = `
                    <h3>Número Total de Mulheres</h3>
                            <p>${totalF}</p> 
                                <br>
                    <h3>Número Total de Homens</h3>
                            <p>${totalM}</p>
                                <br>
                    <h3>Número Total de Idades</h3>
                            <p>${totalA}</p>
                                <br>
                    <h3>Média Total de Idades</h3>
                            <p>${mediaA}</p>
                                <br> 
            `;
const div = document.createElement('li');
div.innerHTML = html;
cards.appendChild(div);