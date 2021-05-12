'use strict'
//hours of operation/sales
let hoursArray = ['6am ','7am ', '8am ', '9am ','10am ', '11am ', '12pm ','1pm ','2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];

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
  return Math.floor(Math.random() * ((custMax - custMin) + custMin)*custAvg);
}

//locations
let storeSeattle = new Store('seattle', '23','65','6.3');
storeSeattle.setSales();
console.log(storeSeattle);

let storeTokyo = new Store('tokyo', '3','24','1.2');
storeTokyo.setSales();
console.log(storeTokyo);

let storeDubai = new Store('dubai', '11','38','3.7');
storeDubai.setSales();
console.log(storeTokyo);

let storeParis = new Store('paris', '20','38','2.3');
storeParis.setSales();
console.log(storeParis);

let storeLima = new Store('lima', '2','16','4.6');
storeLima.setSales();
console.log(storeLima);



//Display - elements & table
//Display
const storeDivElem = document.getElementById ('locationSales');

function makeLocationArticle(store){
  let location = store.location;
  const articleElem = document.createElement('article');
  articleElem.setAttribute('id',location);
  storeDivElem.appendChild(articleElem);

  const h2Elem = document.createElement ('h2');
  h2Elem.textContent = store.location;
  articleElem.appendChild(h2Elem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i< hoursArray.length; i++){ 
      const liElem = document.createElement('li');
      //liElem.textContent = store.hoursArr[i];
      ulElem.appendChild(liElem);
  }
}
//Table
function addTable(store) {

  let location = store.location;
  const articleElem = document.getElementById(location);

  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  const trElem = document.createElement('tr');
  tableElem.appendChild(trElem);

  const tr2Elem = document.createElement('tr');
  tableElem.appendChild(tr2Elem);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'store hours'
  trElem.appendChild(th1Elem);

  for (let i = 0; i< hoursArray.length; i++){ 
    const td1Elem = document.createElement('td');
    td1Elem.textContent = hoursArray[i];
    trElem.appendChild(td1Elem);
  }
  const tr3Elem = document.createElement('tr');
  tableElem.appendChild(tr3Elem);

  let td2Elem = document.createElement('td');
  td2Elem.textContent = storeSeattle.location;
  tr3Elem.appendChild(td2Elem);

  for (let i = 0; i< hoursArray.length; i++){ 
    const td2Elem = document.createElement('td');
    td2Elem.textContent = storeSeattle.hoursArr[i];
    tr3Elem.appendChild(td2Elem);
  }
  const tr4Elem = document.createElement('tr');
  tableElem.appendChild(tr4Elem);

  let td3Elem = document.createElement('td');
  td3Elem.textContent = storeTokyo.location;
  tr4Elem.appendChild(td3Elem);

  for (let i = 0; i< hoursArray.length; i++){ 
    const td3Elem = document.createElement('td');
    td3Elem.textContent = storeTokyo.hoursArr[i];
    tr4Elem.appendChild(td3Elem);
  }
  const tr5Elem = document.createElement('tr');
  tableElem.appendChild(tr5Elem);

  let td4Elem = document.createElement('td');
  td4Elem.textContent = storeDubai.location;
  tr5Elem.appendChild(td4Elem);

  for (let i = 0; i< hoursArray.length; i++){ 
    const td4Elem = document.createElement('td');
    td4Elem.textContent = storeDubai.hoursArr[i];
    tr5Elem.appendChild(td4Elem);
  }
  const tr6Elem = document.createElement('tr');
  tableElem.appendChild(tr6Elem);

  let td5Elem = document.createElement('td');
  td5Elem.textContent = storeParis.location;
  tr6Elem.appendChild(td5Elem);

  for (let i = 0; i< hoursArray.length; i++){ 
    const td5Elem = document.createElement('td');
    td5Elem.textContent = storeParis.hoursArr[i];
    tr6Elem.appendChild(td5Elem);
  }
  const tr7Elem = document.createElement('tr');
  tableElem.appendChild(tr7Elem);

  let td6Elem = document.createElement('td');
  td6Elem.textContent = storeLima.location;
  tr7Elem.appendChild(td6Elem);

  for (let i = 0; i< hoursArray.length; i++){ 
    const td6Elem = document.createElement('td');
    td6Elem.textContent = storeLima.hoursArr[i];
    tr7Elem.appendChild(td6Elem);
  }
}

makeLocationArticle(storeSeattle);
addTable(storeSeattle);
addTable(storeTokyo);
addTable(storeDubai);
addTable(storeParis);
addTable(storeLima);