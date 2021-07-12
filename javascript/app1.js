'use strict';
function custmer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
let allpranshes=[];
function Cookies(nameOftawn,max,min,avg){
    this.name=nameOftawn;
    this.max=max;
    this.min=min;
    this.avg=avg;
    this.rAF=[];
allpranshes.push(this)

}


let hours=['................',' 6am ',' 7am ',' 8am ',' 9am ',' 10am ',' 11am ',' 12pm ',' 1pm ',' 2pm ',' 3pm ',' 4pm ',' 5pm ',' 6pm ',' 7pm ','Daily Location Total'];
let  Seattle = new Cookies('Seattle',65,23,6.3);

let Tokyo =new Cookies('Tokyo',24,3,1.2);

let Dubai = new Cookies('Dubai',38,11,3.7);

let Paris = new Cookies('Paris',38,20,2.3);

let Lima = new Cookies('Lima',16,2,4.6);
 
Cookies.prototype.rand=function(){

    for (let o=1;o<hours.length;o++){
        this.rAF.push(custmer(this.min,this.max))

}
}
console.log(hours);

Seattle.rand();



let parent=document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);
let firstraw=document.createElement('tr');
table.appendChild(firstraw);
for (let i = 0; i< hours.length; i++) {
   let firstraw1=document.createElement('th');
    firstraw.appendChild(firstraw1);
    firstraw1.textContent=hours[i]
    }

    
     let secRaw=document.createElement('tr');
     table.appendChild(secRaw);
     let nameOFraw=document.createElement('th');
     secRaw.appendChild(nameOFraw)
     nameOFraw.textContent=Seattle.name;
  let Seattleee=[];
     let total1=0

     for (let i = 1; i < hours.length-1; i++) {
        let re=Math.floor((allpranshes[0].rAF[i])*Seattle.avg);
        let secoudraw1=document.createElement('td');
        secRaw.appendChild(secoudraw1);
        secoudraw1.textContent=`${re} cookies`;
         total1=total1+re;
         Seattleee.push(re);
     }
     console.log(Seattleee);
        let totalnumDaily=document.createElement('td');
        secRaw.appendChild(totalnumDaily);
        totalnumDaily.textContent=`Total : ${total1} cookies`
     

     Tokyo.rand();



         
          let secRaw2=document.createElement('tr');
          table.appendChild(secRaw2);
          let nameOFraw2=document.createElement('th');
          secRaw2.appendChild(nameOFraw2)
          nameOFraw2.textContent=Tokyo.name;
          let  Tokyooo=[];
          let total2=0
          for (let i = 1; i < hours.length-1; i++) {
            let re2=Math.floor((allpranshes[0].rAF[i])*Tokyo.avg);
            let secoudraw2=document.createElement('td');
            secRaw2.appendChild(secoudraw2);
            secoudraw2.textContent=`${re2} cookies`;
             total2=total2+re2;
             Tokyooo.push(re2)
          }
          console.log(Tokyooo);
          let totalnumDaily2=document.createElement('td');
          secRaw2.appendChild(totalnumDaily2);
          totalnumDaily2.textContent=`Total : ${total2} cookies`
     Dubai.rand();



   
         
     let secRaw3=document.createElement('tr');
     table.appendChild(secRaw3);
     let nameOFraw3=document.createElement('th');
     secRaw3.appendChild(nameOFraw3)
     nameOFraw3.textContent=Dubai.name;
     
     let Dubaiii=[];
     let total3=0
          for (let i = 1; i < hours.length-1; i++) {
            let re3=Math.floor((allpranshes[0].rAF[i])*Dubai.avg);
            let secoudraw3=document.createElement('td');
            secRaw3.appendChild(secoudraw3);
            secoudraw3.textContent=`${re3} cookies`;
             total3=total3+re3;
             Dubaiii.push(re3)
          }
          console.log(Dubaiii);
          let totalnumDaily3=document.createElement('td');
          secRaw3.appendChild(totalnumDaily3);
          totalnumDaily3.textContent=`Total : ${total3} cookies`
         
     
     Paris.rand();



   
         
          let secRaw4=document.createElement('tr');
          table.appendChild(secRaw4);
          let nameOFraw4=document.createElement('th');
          secRaw4.appendChild(nameOFraw4)
          nameOFraw4.textContent=Paris.name;
          
          let Parisss=[]
          let total4=0
          for (let i = 1; i < hours.length-1; i++) {
            let re4=Math.floor((allpranshes[0].rAF[i])*Paris.avg);
            let secoudraw4=document.createElement('td');
            secRaw4.appendChild(secoudraw4);
            secoudraw4.textContent=`${re4} cookies`;
             total4=total4+re4;
             Parisss.push(re4);
          }
          console.log(Parisss)
          let totalnumDaily4=document.createElement('td');
          secRaw4.appendChild(totalnumDaily4);
          totalnumDaily4.textContent=`Total : ${total4} cookies`
          


          Lima.rand();



   
         
          let secRaw5=document.createElement('tr');
          table.appendChild(secRaw5);
          let nameOFraw5=document.createElement('th');
          secRaw5.appendChild(nameOFraw5)
          nameOFraw5.textContent=Lima.name;
          
          let Limaaa=[];
          let total5=0
          for (let i = 1; i < hours.length-1; i++) {
            let re5=Math.floor((allpranshes[0].rAF[i])*Lima.avg);
            let secoudraw5=document.createElement('td');
            secRaw5.appendChild(secoudraw5);
            secoudraw5.textContent=`${re5} cookies`;
             total5=total5+re5;
             Limaaa.push(re5);
          }
          console.log(Limaaa)
          let totalnumDaily5=document.createElement('td');
          secRaw5.appendChild(totalnumDaily5);
          totalnumDaily5.textContent=`Total : ${total5} cookies`
              
          let secRaw6=document.createElement('tr');
          table.appendChild(secRaw6);
          let nameOFraw6=document.createElement('th');
          secRaw6.appendChild(nameOFraw6)
          nameOFraw6.textContent='Total';
          let totalHours=0;
          for (let i = 0; i < Seattleee.length; i++) {
           
            totalHours=(Seattleee[i]+Tokyooo[i]+Dubaiii[i]+Parisss[i]+Limaaa[i])
            console.log(totalHours);
            let totalnumDaily7=document.createElement('td');
            secRaw6.appendChild(totalnumDaily7);
            totalnumDaily7.textContent=`Total : ${totalHours} cookies/Hour`
          }
        let totalnumDaily6=document.createElement('td');
        secRaw6.appendChild(totalnumDaily6);
        totalnumDaily6.textContent=`Total : ${total5+total1+total2+total3+total4} cookies from all cities and hours`
