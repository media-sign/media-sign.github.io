Ecwid.OnPageLoaded.add(function(page){
  console.log("Current page is of type: " + page.type);
  if(page.type == 'CHECKOUT_ADDRESS'){
    console.log('y')
  }
});
