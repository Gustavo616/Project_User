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
    mediaA = totalA/authors.length

const html = `
                            <p>${totalF}</p> 
                            <p>${totalM}</p>
                            <p>${totalA}</p> 
                            <p>${mediaA}</p> 
            `;
const div = document.createElement('li');
div.innerHTML = html;
cards.appendChild(div);