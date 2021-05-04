'use strict';

const form = document.getElementById('donatingform')
const table = document.getElementById('donatingtable')

Donor.array=[];
function Donor(name,amount){
    this.name=name;
    this.amount=amount;
    Donor.array.push(this);

}
console.log(Donor.array);

Donor.prototype.getAge = function(){
    this.age =Math.floor( Math.random() * (30 - 18) + 18);
    
} 


function submitform(event) {
    event.preventDefault();
    const donor = event.target;
    const name = donor.name.value;
    const amount = donor.amount.value;

    let newdonor = new Donor(name,amount)
    newdonor.getAge();
    render();
 console.log(donor);
}

form.addEventListener('submit',submitform)

function render() {
    table.textContent='';
    const header = document.createElement('tr');
        table.appendChild(header)

        const cell10 = document.createElement('td')
        header.appendChild(cell10)
        cell10.textContent='Donor name'

        const cell20 = document.createElement('td')
        header.appendChild(cell20)

        cell20.textContent='Donor age'

        const cell30 = document.createElement('td')
        header.appendChild(cell30)
        cell30.textContent='Amount'


    for (let i = 0; i < Donor.array.length; i++) {
        const row = document.createElement('tr');
        table.appendChild(row)

        const cell1 = document.createElement('td')
        row.appendChild(cell1)
        cell1.textContent=Donor.array[i].name

        const cell2 = document.createElement('td')
        row.appendChild(cell2)

        cell2.textContent=Donor.array[i].age

        const cell3 = document.createElement('td')
        row.appendChild(cell3)

        cell3.textContent=Donor.array[i].amount
    }
}


// function save() {
//     let saved = JSON.stringify(Donor.array)
//     localStorage.setItem('savedData',saved)
    
// }
// function getData() {
//     let data = localStorage.getItem('savedData')
//     let convers = JSON.parse(data)
//     if (convers!== null) {
//      converse = Donor.array
//     }
// }