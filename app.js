let Personne = function (nom, prenom, age, sexe) {
    this.name = nom;
    this.name2 = prenom;
    this.age = age;
    this.sex = sexe;
}
let div = document.createElement("div")
let table = [];

let Dam = new Personne("Dam", "Deb", "31ans", "homme");
let julie = new Personne("Julie", "Dolie", "30ans", "femme");
let Rick = new Personne("Rick","Grimes", "40ans", "homme");
let Daryl = new Personne("Daryl", "Dickson", "39ans", "homme");
let Michonne = new Personne("Michonne", "Daousta", "38ans", "femme")

table.push(Dam, julie, Rick, Daryl, Michonne)

for (let value of table) {
    document.body.appendChild(div)
    Object.prototype.toString()
    div.innerHTML += table + "<br>"
}


console.table(table)