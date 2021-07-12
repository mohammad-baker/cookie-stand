'use strict';
function custmer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
 
  let hours = [' 6am ',' 7am ',' 8am ',' 9am ',' 10am ',' 11am ',' 12pm ',' 1pm ',' 2pm ',' 3pm ',' 4pm ',' 5pm ',' 6pm ',' 7pm ']
let Seattle = {
    name : 'Seattle',
    max : 65,
    min : 23,
    avg : 6.3,
   
}
let total1=0;
let thetotal='total'
let parent=document.getElementById('parent');
let stores1=document.createElement('article');
parent.appendChild(stores1)

let theNameCity1=document.createElement('h2');
stores1.appendChild(theNameCity1);
theNameCity1.textContent=Seattle.name;
let sale1=document.createElement('ul');
stores1.appendChild(sale1);
for (let i = 0; i < hours.length; i++) {
  let lielement1 =document.createElement('li');
  sale1.appendChild(lielement1) ;
  let cookies1=custmer(Seattle.min,Seattle.max)*Seattle.avg;
  lielement1.textContent=hours[i]+" ...= "+cookies1;
  
  total1=total1+cookies1
  

 
}
let sumTotal1=document.createElement('p');
stores1.appendChild(sumTotal1);
sumTotal1.textContent='total :   '+Math.floor(total1)+' cookies .'
console.log(total1)
let Tokyo = {
  name : 'Tokyo',
  max : 24,
  min : 3,
  avg : 1.2,
 
}

let total2=0;
let stores2=document.createElement('article');
parent.appendChild(stores2)

let theNameCity2=document.createElement('h2');
stores2.appendChild(theNameCity2);
theNameCity2.textContent=Tokyo.name;
let sale2=document.createElement('ul');
stores2.appendChild(sale2);
for (let i = 0; i < hours.length; i++) {
  let lielement2 =document.createElement('li');
  sale2.appendChild(lielement2) ;
  let cookies2=custmer(Tokyo.min,Tokyo.max)*Tokyo.avg;
  lielement2.textContent=hours[i]+" ...= "+cookies2;
  
  total2=total2+cookies2
  

 
}
let sumTotal2=document.createElement('p');
stores2.appendChild(sumTotal2);
sumTotal2.textContent='total   : '+Math.floor(total2)+' cookies .'
console.log(total2)


let Dubai = {
  name : 'Dubai',
  max : 38,
  min : 11,
  avg : 3.7,
}
let total3=0;
let stores3=document.createElement('article');
parent.appendChild(stores3)

let theNameCity3=document.createElement('h2');
stores3.appendChild(theNameCity3);
theNameCity3.textContent=Dubai.name;
let sale3=document.createElement('ul');
stores3.appendChild(sale3);
for (let i = 0; i < hours.length; i++) {
  let lielement =document.createElement('li');
  sale3.appendChild(lielement) ;
  let cookies=custmer(Dubai.min,Dubai.max)*Dubai.avg;
  lielement.textContent=hours[i]+" ...= "+cookies;
  
  total3=total3+cookies
  

 
}
let sumTotal3=document.createElement('p');
stores3.appendChild(sumTotal3);
sumTotal3.textContent='total  :  '+Math.floor(total3)+' cookies .'
console.log(total3)
let Paris = {
  name : 'Paris',
  max : 38,
  min : 20,
  avg : 2.3,
}

let total4=0;
let stores4=document.createElement('article');
parent.appendChild(stores4)

let theNameCity4=document.createElement('h2');
stores4.appendChild(theNameCity4);
theNameCity4.textContent=Paris.name;
let sale4=document.createElement('ul');
stores4.appendChild(sale4);
for (let i = 0; i < hours.length; i++) {
  let lielement =document.createElement('li');
  sale4.appendChild(lielement) ;
  let cookies=custmer(Paris.min,Paris.max)*Paris.avg;
  lielement.textContent=hours[i]+" ...= "+cookies;
  
  total4=total4+cookies
  

 
}
let sumTotal4=document.createElement('p');
stores4.appendChild(sumTotal4);

sumTotal4.textContent='total  :  '+Math.floor(total4)+' cookies .'
console.log(total4)

let Lima = {
  name : 'Lima',
  max : 16,
  min : 2,
  avg : 4.6,
}
let total5=0;
let stores5=document.createElement('article');
parent.appendChild(stores5)

let theNameCity5=document.createElement('h2');
stores5.appendChild(theNameCity5);
theNameCity5.textContent=Lima.name;
let sale5=document.createElement('ul');
stores5.appendChild(sale5);
for (let i = 0; i < hours.length; i++) {
  let lielement =document.createElement('li');
  sale5.appendChild(lielement) ;
  let cookies=custmer(Lima.min,Lima.max)*Lima.avg;
  lielement.textContent=hours[i]+" ...= "+cookies;
  
  total5=total5+cookies
  

 
}
let sumTotal5=document.createElement('p');
stores5.appendChild(sumTotal5);

sumTotal5.textContent='total  :   '+Math.floor(total5)+' cookies .'
console.log(total5+total1+total2+total3+total4);