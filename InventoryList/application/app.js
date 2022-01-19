'use strict';
//DOM selectors

const inventoryTable = document.getElementById('tbody');
let deleteButtons = document.querySelectorAll('.delete__button');
let tableRows = document.querySelectorAll('.table__row');
let updateRows = document.querySelectorAll('.update__button');
let createButton;
let row;
//initial number of rows in table
let currentOrderNumber = 0;

//create button function
createButton = function (className, text) {
  const btn = document.createElement('button');
  btn.classList.add(className);
  btn.textContent = text;
  return btn;
};

//delete row and update order numbers in first column with $(document).ready...
function deleteRow() {
  deleteButtons.forEach((button) =>
    button.addEventListener('click', function (event) {
      event.preventDefault();
      row = event.target.closest('.table__row');
      row.remove();
    })
  );
  $(document).ready(function () {
    $('.delete__button').click(function () {
      $('.order__number').each(function (i) {
        $(this).text(i + 1);
      });
    });
  });
}

document.getElementById('submitButton').onclick = function (e) {
  e.preventDefault();
  const row = inventoryTable.insertRow();
  row.id = 'tableRow';
  row.classList.add('table__row');
  const orderNumber = row.insertCell();
  orderNumber.classList.add('order__number');
  const location = row.insertCell();
  const name = row.insertCell();
  const id = row.insertCell();
  const recordUpdateList = row.insertCell();
  const recordDeleteList = row.insertCell();

  //adding row number when new inventory is saved
  currentOrderNumber += 1;

  orderNumber.textContent = currentOrderNumber;
  console.log(orderNumber);
  location.innerHTML = document.getElementById('inventoryLocation').value;
  name.innerHTML = document.getElementById('inventoryName').value;
  id.innerHTML = document.getElementById('inventoryID').value;

  console.log('new row was added');

  //reseting inputs to blank
  inventoryLocation.value = '';
  inventoryName.value = '';
  inventoryID.value = '';

  //appends button in a row for inventory edit after saving new inventory
  recordUpdateList.appendChild(
    createButton('update__button', 'Upraviť záznam')
  );
  //appends button in a row for inventory row deleting
  recordDeleteList.appendChild(
    createButton('delete__button', 'Vymazať záznam')
  );

  deleteButtons = document.querySelectorAll('.delete__button');
  tableRows = document.querySelectorAll('.table__row');
  console.log(deleteButtons);
  deleteRow();
};

//*missing function for uploading row data to "Upraviť záznam" after pressing button "Upraviť záznam"
//!when adding new inventory after deleting of some row "Poradové číslo" is not updated according current order
