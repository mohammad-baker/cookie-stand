'use strict';

let Shop=[];
function Cookies(nameOftawn, max, min, avg) {
    this.name = nameOftawn;
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.calCstavg = [];
    this.total=0;
    Shop.push(this);
}


let hours = [' 6:00am ', ' 7:00am ', ' 8:00am ', ' 9:00am ', ' 10:00am ', ' 11:00am ', ' 12:00pm ', ' 1:00pm ', ' 2:00pm ', ' 3:00pm ', ' 4:00pm ', ' 5:00pm ', ' 6:00pm ', ' 7:00pm '];
let Seattle = new Cookies('Seattle', 65, 23, 6.3);

let Tokyo = new Cookies('Tokyo', 24, 3, 1.2);

let Dubai = new Cookies('Dubai', 38, 11, 3.7);

let Paris = new Cookies('Paris', 38, 20, 2.3);

let Lima = new Cookies('Lima', 16, 2, 4.6);
function custmer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let parent=document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);
Cookies.prototype.cookisAvg=function() {
    for (let i = 0; i < hours.length; i++) {
        this.calCstavg.push(Math.floor(this.avg *custmer(this.min, this.max)));

         this.total=this.total+this.calCstavg[i];
    }
}




function makeHader() {
    let headerrow=document.createElement('tr');
    table.appendChild(headerrow);
    let THfi=document.createElement('th');
    headerrow.appendChild(THfi);
    THfi.textContent='';
    for (let i = 0; i < hours.length; i++) {
        let HoursTh=document.createElement('th');
        headerrow.appendChild(HoursTh);
        HoursTh.textContent=hours[i];
        
    }
    let THlas=document.createElement('th');
    headerrow.appendChild(THlas);
    THlas.textContent='Daily Location Total';
}


Cookies.prototype.repet=function() {

    let data=document.createElement('tr');
    table.appendChild(data);
    let Tdata=document.createElement('td');
    data.appendChild(Tdata);
    Tdata.textContent=this.name;
    for (let i = 0; i < hours.length; i++) {
        let dataRow=document.createElement('td');
        data.appendChild(dataRow);
        dataRow.textContent=`${this.calCstavg[i]} cookies`;
        
    }
    let TotalDt=document.createElement('td');
    data.appendChild(TotalDt);
    TotalDt.textContent=`${this.total} cookies`;

}
makeHader();
for (let i = 0; i < Shop.length; i++) {
    Shop[i].cookisAvg();
    Shop[i].repet(); 
    }
let ToTalALL=0;
function makeFooter() {
    let headerrow=document.createElement('tr');
    table.appendChild(headerrow);
    let THfi=document.createElement('th');
    headerrow.appendChild(THfi);
    THfi.textContent='TOTAL';
  
    for (let i = 0; i < hours.length; i++) {
        let tit=0;
        for (let j = 0; j < Shop.length; j++) {
            tit=tit+ Shop[j].calCstavg[i];
            ToTalALL+=Shop[j].calCstavg[i];
        }
        let THlas=document.createElement('th');
    headerrow.appendChild(THlas);
    THlas.textContent=`${tit} cookies`;
    }

    let fottt=document.createElement('th');
    headerrow.appendChild(fottt);
    fottt.textContent=`${ToTalALL} cookies  of all`;
}

let form=document.getElementById('form');
form.addEventListener('submit',submiting);


function submiting(event) {
    event.preventDefault();
   
    let name=event.target.nameOfTheTown.value;
    let MAXX=parseInt (event.target.maxOfNumber.value);
    let MINN=parseInt(event.target.minOfNumber.value);
    let AVGG=parseInt(event.target.avgOfNumber.value);
    let addcookies=new Cookies(name,MAXX,MINN,AVGG);
    
    table.textContent="";
    console.log(Shop);
makeHader();
    for (let i = 0; i < Shop.length; i++) {
        Shop[i].cookisAvg();
        Shop[i].repet(); 
        }
makeFooter();
}
makeFooter();