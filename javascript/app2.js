'use strict';
let hours=[' 6:00am ',' 7:00am ',' 8:00am ',' 9:00am ',' 10:00am ',' 11:00am ',' 12:00pm ',' 1:00pm ',' 2:00pm ',' 3:00pm ',' 4:00pm ',' 5:00pm ',' 6:00pm ',' 7:00pm '];
let fact=[];
function Res(nameOftawn,max,min,avg){
    this.name=nameOftawn;
    this.max=max;
    this.min=min;
    this.avg=avg;
    fact.push(this);
}
let tokyo =new Res('Tokyo',24,3,1.2);

let dubai = new Res('Dubai',38,11,3.7);

let paris = new Res('Paris',38,20,2.3);

let lima = new Res('Lima',16,2,4.6);

let parent=document.getElementById('ocation');

let hkkh=document.createElement('h2')
parent.appendChild(hkkh);
hkkh.textContent='locations with addresses';
let ulelll=document.createElement('ul');
parent.appendChild(ulelll);

for (let i = 0; i < fact.length; i++) {
    let ki =document.createElement('li')
    ulelll.appendChild(ki)
    ki.textContent=fact[i].name
}
let hk=document.createElement('h2')
parent.appendChild(hk);
hk.textContent='hours open';
let ule=document.createElement('ul');
parent.appendChild(ule);
for (let i = 0; i < hours.length; i++) {
    let ki =document.createElement('li')
    ule.appendChild(ki)
    ki.textContent=`${hours[i++]}--${hours[i]}`
    
}
