
let users = [];
let inputField = ['name', 'lastName', 'city', 'age']



function User(name, lastName, city, age) {
    this.name = name;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
}

// Selezione il nodo button
let addBtn = document.querySelector('#myForm button');
// Applico l'evento click al button
addBtn.onclick = function(){
    //prendo i valori dei campi di input name/lastname/city
    let name = document.querySelector('#myForm input[name="name"]');
    let lastName = document.querySelector('#myForm input[name="lastName"]');
    let city = document.querySelector('#myForm input[name="city"]');
    let age = document.querySelector('#myForm input[name="age"]');
    // Creo un oggetto User
    let obj = new User(name.value, lastName.value, city.value, age.value);
    // lo salvo nell'array users
    users.push(obj);
    // Svuoto i campi del form
    name.value = '';
    lastName.value = '';
    city.value = '';
    age.value = '';
    printUsers();
}



function printUsers() {
    console.log(users);
    let th = document.querySelector('#list table thead tr');
    th.innerHTML = '';
    users.forEach((u,i) => {
        let tr = document.createElement('tr');
        tr.innerHTML = u.name + ' ' + u.lastName + ' ' + u.city + ' ' + u.age;
        let btn = document.createElement('button');
        btn.innerHTML = 'X';
        btn.onclick = () => removeUser(i) // removeUser(users.indexOf(u))
        tr.appendChild(btn);
        th.appendChild(tr);
    })
}

function removeUser(index) {
    users.splice(index, 1);
    printUsers();
}