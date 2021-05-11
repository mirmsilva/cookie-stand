'use strict';

const seattle = {
  name: 'seattle',
  customerSales: function() {
    console.log(this.sale);
    this.sale = randomCustomer(23,65,6.3) + ' sales per hour';
  }
}
const tokyo = {
  name: 'seattle',
  customerSales: function() {
    console.log(this.sale);
    this.sale = randomCustomer(3,24,1.2) + ' sales per hour';
  }
}
const dubai = {
  name: 'dubai',
  customerSales: function() {
    console.log(this.sale);
    this.sale = randomCustomer(11,38,3.7) + ' sales per hour';
  }
}
const paris = {
  name: 'paris',
  customerSales: function() {
    console.log(this.sale);
    this.sale = randomCustomer(20,38,2.3) + ' sales per hour';
  }
}

function randomCustomer(min, max, avg) {
  return (Math.floor(Math.random() * (max - min) + min))*avg;
}

let hoursArray = ['6am ','7am ', '8am ', '9am ','10am ', '11am ', '12pm ','1pm ','2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];
let hoursArrayTwo = hoursArray.map(myFunction);

function myFunction(){
  seattle.customerSales();
}

console.log(seattle.customerSales());

const locationDivElem = document.getElementById ('locationSales');

function makeLocationArticle(location){
  const articleElem = document.createElement('article');
  locationDivElem.appendChild(articleElem);

  const h2Elem = document.createElement ('h2');
  h2Elem.textContent = location.name;
  articleElem.appendChild(h2Elem);

  

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i< hoursArray.length; i++){
    const liElem = document.createElement('li');
    liElem.textContent = hoursArray[i] + hoursArrayTwo[i];
    ulElem.appendChild(liElem);
   }
}

makeLocationArticle(seattle);
makeLocationArticle(tokyo);
makeLocationArticle(dubai);
makeLocationArticle(paris);