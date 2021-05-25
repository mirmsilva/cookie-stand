'use strict'
//global
let storeArray = [];
let hoursArray = ['6am ','7am ', '8am ', '9am ','10am ', '11am ', '12pm ','1pm ','2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ','Total']; 
const storeDiv = document.getElementById ('locationSales');
const formElem = document.getElementById("addLocationForm");
const table = document.createElement('table');
storeDiv.appendChild(table);

//constructor function
function Store (location, custMin, custMax, custAvg){
  this.location = location;
  this.custMin = custMin;
  this.custMax = custMax;
  this.custAvg = custAvg;
  this.hoursArr = [];
  
  storeArray.push(this);
}

//protype functions
Store.prototype.setSales= function(){
  let sum = 0
  for( let i = 0; i< hoursArray.length - 1; i++){
    let randomSale = randomSales(this.custMin, this.custMax, this.custAvg);
    sum += randomSale 
    this.hoursArr.push(randomSale);
  }
  this.hoursArr.push(sum);
  console.log(this.hoursArr);
  
}


Store.prototype.render = function(){
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
  //footer
  let hourlyTotal = document.createElement('th')
  hourlyTotal.textContent='Hourly Sales';
  table.appendChild(hourlyTotal);
  let sum = 0;
  for( let i = 0; i< hoursArray.length; i++){
    for (let j=0; j< storeArray.length; j++){
      sum = sum + storeArray[j].hoursArr[i];
    }
    const thElem = document.createElement('th');
    thElem.textContent = sum - hoursArr[i];
    table.appendChild(thElem);
    sum = 0
    }
  }

//functions
function randomSales(custMin, custMax, custAvg) {
  return Math.floor(custAvg*(Math.random() * (custMax - custMin) + custMin));
}
  
function dailySales(){
    let sum = 0;
    for (let i = 0; i< storeArray.length; i++){
      for (let j=0; j< hoursArray.length-1; j++){
        sum = sum + hoursArr[j].storeArr[1];
    }
  }
}
  
//callback function 
function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);
  let location = event.target.location.value;
  let custMin = parseInt(event.target.custMin.value);
  let custMax = parseInt(event.target.custMax.value);
  let custAvg = parseInt(event.target.custAvg.value);
  
  let newStore = new Store(location, custMin, custMax, custAvg);
  newStore.setSales();
  
  renderAllStores();

  event.target.reset();
  }

function renderAllStores(){
  for (let i=0; i< storeArray.length; i++){
    storeArray[i].render();
  }
}
//listner
formElem.addEventListener('submit', handleSubmit)

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

//call function
renderAllStores();
