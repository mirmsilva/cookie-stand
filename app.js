'use strict'
//hours of operation/sales
let hoursArray = ['6am ','7am ', '8am ', '9am ','10am ', '11am ', '12pm ','1pm ','2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

//constructor function
function Store (location, custMin, custMax, custAvg){
  this.location = location;
  this.custMin = custMin;
  this.custMax = custMax;
  this.custAvg = custAvg;
  this.hoursArr = [];
}
//protype function
Store.prototype.setSales= function(){
  for( let i = 0; i< hoursArray.length; i++){
    this.hoursArr.push(randomSales(this.custMin, this.custMax, this.custAvg));
  }
  console.log(this.hoursArr);
}
function randomSales(custMin, custMax, custAvg) {
  return Math.floor(custAvg*(Math.random() * (custMax - custMin) + custMin));
}

//locations
let storeSeattle = new Store('seattle', 23,65,6.3);
storeSeattle.setSales();

let storeTokyo = new Store('tokyo', 3,24,1.2);
storeTokyo.setSales();

let storeDubai = new Store('dubai', 11,38,3.7);
storeDubai.setSales();

let storeParis = new Store('paris', 20,38,2.3);
storeParis.setSales();

let storeLima = new Store('lima', 2,16,4.6);
storeLima.setSales();

let storeArray = [storeSeattle, storeTokyo,storeDubai, storeParis, storeLima]; 

//sum total per location



//Display Table
const storeDiv = document.getElementById ('locationSales');

const table = document.createElement('table');
storeDiv.appendChild(table);

//Table
function makeTable(){
  //header
  let storeHours = document.createElement('th')
  storeHours.textContent = 'Hours';
  table.appendChild(storeHours);

  for(let i=0; i< hoursArray.length; i++){
    const thElem = document.createElement('th');
    thElem.textContent = hoursArray[i];
    table.appendChild(thElem);
  }
  //body
  for(let i= 0; i < storeArray.length; i++){
    const trElem = document.createElement('tr');
    table.appendChild(trElem);
    
    let storeLocation = document.createElement ('th')
    storeLocation.textContent = storeArray[i].location;
      trElem.appendChild(storeLocation);

    for(let j=0; j< storeArray[i].hoursArr.length; j++){
      const tdElem = document.createElement('td');
      tdElem.textContent = storeArray[i].hoursArr[j];
      trElem.appendChild(tdElem);
    }
  }

}
makeTable();
