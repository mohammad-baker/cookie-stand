'use strict';
// function custmer(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }
//   let total1=0;
//   let hours = [' 6am ',' 7am ',' 8am ',' 9am ',' 10am ',' 11am ',' 12pm ',' 1pm ',' 2pm ',' 3pm ',' 4pm ',' 5pm ',' 6pm ',' 7pm ']
// let Seattle = {
//     name : 'Seattle',
//     max : 65,
//     min : 23,
//     avg : 6.3,
   

// render:function(){
// let parent=document.getElementById('parent');
// let stores1=document.createElement('article');
// parent.appendChild(stores1)

// let theNameCity1=document.createElement('h2');
// stores1.appendChild(theNameCity1);
// theNameCity1.textContent=this.name;
// let sale1=document.createElement('ul');
// stores1.appendChild(sale1);
// for (let i = 0; i < hours.length; i++) {
//   let lielement1 =document.createElement('li');
//   sale1.appendChild(lielement1) ;
//   let cookies1=custmer(this.min,this.max)*this.avg;
//   lielement1.textContent=`${hours[i]} ...= ${Math.floor(cookies1)} cookies .`;
  
//   total1=total1+cookies1
  

 
// }
// let sumTotal1=document.createElement('p');
// stores1.appendChild(sumTotal1);
// sumTotal1.textContent=`total :   ${Math.floor(total1)} cookies .`
// console.log(total1)
// }
// }
// Seattle.render()
// let Tokyo = {
//   name : 'Tokyo',
//   max : 24,
//   min : 3,
//   avg : 1.2,

//   render:function(){
//     let parent=document.getElementById('parent');
//     let stores1=document.createElement('article');
//     parent.appendChild(stores1)
    
//     let theNameCity1=document.createElement('h2');
//     stores1.appendChild(theNameCity1);
//     theNameCity1.textContent=this.name;
//     let sale1=document.createElement('ul');
//     stores1.appendChild(sale1);
//     for (let i = 0; i < hours.length; i++) {
//       let lielement1 =document.createElement('li');
//       sale1.appendChild(lielement1) ;
//       let cookies1=custmer(this.min,this.max)*this.avg;
//       lielement1.textContent=`${hours[i]} ...= ${Math.floor(cookies1)} cookies .`;
      
//       total1=total1+cookies1
      
    
     
//     }
//     let sumTotal1=document.createElement('p');
//     stores1.appendChild(sumTotal1);
//     sumTotal1.textContent=`total :   ${Math.floor(total1)} cookies .`
//     console.log(total1)
//     }
// }
// Tokyo.render();
// let Dubai = {
//   name : 'Dubai',
//   max : 38,
//   min : 11,
//   avg : 3.7,
  
// render:function(){
//   let parent=document.getElementById('parent');
//   let stores1=document.createElement('article');
//   parent.appendChild(stores1)
  
//   let theNameCity1=document.createElement('h2');
//   stores1.appendChild(theNameCity1);
//   theNameCity1.textContent=this.name;
//   let sale1=document.createElement('ul');
//   stores1.appendChild(sale1);
//   for (let i = 0; i < hours.length; i++) {
//     let lielement1 =document.createElement('li');
//     sale1.appendChild(lielement1) ;
//     let cookies1=custmer(this.min,this.max)*this.avg;
//     lielement1.textContent=`${hours[i]} ...= ${Math.floor(cookies1)} cookies .`;
    
//     total1=total1+cookies1
    
  
   
//   }
//   let sumTotal1=document.createElement('p');
//   stores1.appendChild(sumTotal1);
//   sumTotal1.textContent=`total :   ${Math.floor(total1)} cookies .`
//   console.log(total1)
//   }
// }
// Dubai.render();
// let Paris = {
//   name : 'Paris',
//   max : 38,
//   min : 20,
//   avg : 2.3,
  
// render:function(){
//   let parent=document.getElementById('parent');
//   let stores1=document.createElement('article');
//   parent.appendChild(stores1)
  
//   let theNameCity1=document.createElement('h2');
//   stores1.appendChild(theNameCity1);
//   theNameCity1.textContent=this.name;
//   let sale1=document.createElement('ul');
//   stores1.appendChild(sale1);
//   for (let i = 0; i < hours.length; i++) {
//     let lielement1 =document.createElement('li');
//     sale1.appendChild(lielement1) ;
//     let cookies1=custmer(this.min,this.max)*this.avg;
//     lielement1.textContent=`${hours[i]} ...= ${Math.floor(cookies1)} cookies .`;
    
//     total1=total1+cookies1
    
  
   
//   }
//   let sumTotal1=document.createElement('p');
//   stores1.appendChild(sumTotal1);
//   sumTotal1.textContent=`total :   ${Math.floor(total1)} cookies .`
//   console.log(total1)
//   }
// }


// let Lima = {
//   name : 'Lima',
//   max : 16,
//   min : 2,
//   avg : 4.6,
  
// render:function(){
//   let parent=document.getElementById('parent');
//   let stores1=document.createElement('article');
//   parent.appendChild(stores1)
  
//   let theNameCity1=document.createElement('h2');
//   stores1.appendChild(theNameCity1);
//   theNameCity1.textContent=this.name;
//   let sale1=document.createElement('ul');
//   stores1.appendChild(sale1);
//   for (let i = 0; i < hours.length; i++) {
//     let lielement1 =document.createElement('li');
//     sale1.appendChild(lielement1) ;
//     let cookies1=custmer(this.min,this.max)*this.avg;
//     lielement1.textContent=`${hours[i]} ...= ${Math.floor(cookies1)} cookies .`;
    
//     total1=total1+cookies1
    
  
   
//   }
//   let sumTotal1=document.createElement('p');
//   stores1.appendChild(sumTotal1);
//   sumTotal1.textContent=`total :   ${Math.floor(total1)} cookies .`
//   console.log(total1)
//   }
// }
// Paris.render();
// Lima.render();
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
