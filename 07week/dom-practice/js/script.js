'use strict';

window.onload=function() {
  var listCountMessage = setListMessage();
  alert(listCountMessage);
  //createListCountHeaderElement();
  //updateListCountHeaderMessage();
  //createNewItemTextInput();
  //addRemoveButtonsToExistingItems();
}
  function setListMessage() {
    let list = document.getElementsByTagName("ul");
    return "This page has "+ list[0].children.length + " Items in the shopping cart";
  }
  function createListCountHeaderElement(message){
    let listHeading = document.createElement("h2");
    document.getElementsByTagName("h1")[0].appendChild(listHeading);
    listHeading.setAttribute("id", "list-heading");
  }
