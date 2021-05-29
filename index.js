function suser() {
    const user = document.querySelector("user");
    var data = null;

    var request = new XMLHttpRequest();
    request.open("GET", 'https://randomuser.me/api/?seed=javascript&results=1&nat=BR&noinfo', true);

    request.onload = function () {
        data = JSON.parse(this.response)
    }

    const p = document.createElement('p');
    const html = `<p>${data.results.name.first}</p>`;
    p.innerHTML = html;

    user.appendChild(p);
}