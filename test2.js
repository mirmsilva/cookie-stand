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
Store.prototype.setSales= function(){
  //console.log(this.sales);
  for( let i = 0; i< hoursArray.length; i++){
    this.hoursArr.push(randomSales(this.custMin, this.custMax, this.custAvg));
  }
  console.log(this.hoursArr);
}
function randomSales(custMin, custMax, custAvg) {
  return Math.floor(Math.random() * ((custMax - custMin) + custMin)*custAvg);
}

//location
let storeSeattle = new Store('seattle', '23','65','6.3');
storeSeattle.setSales();
console.log(storeSeattle);


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
      liElem.textContent = store.hoursArr[i];
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
  th1Elem.textContent = 'storeSeattle'
  trElem.appendChild(th1Elem);

  for (let i = 0; i< hoursArray.length; i++){ 
    const td1Elem = document.createElement('td');
    td1Elem.textContent = hoursArray[i];
    trElem.appendChild(td1Elem);
  }
  // let th2Elem = document.createElement('th');
  // th2Elem.textContent = 'Dogs'
  // trElem.appendChild(th2Elem);

  // let td2Elem = document.createElement('td');
  // td2Elem.textContent = kitten.isGoodWithDogs;
  // tr2Elem.appendChild(td2Elem);

  // let th3Elem = document.createElement('th');
  // th3Elem.textContent = 'Cats'
  // trElem.appendChild(th3Elem);

  // let td3Elem = document.createElement('td');
  // td3Elem.textContent = kitten.isGoodWithOtherCats;
  // tr2Elem.appendChild(td3Elem);

}



makeLocationArticle(storeSeattle);
addTable(storeSeattle);
