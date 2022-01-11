Ecwid.OnPageLoaded.add(function(page){
  if(page.type == 'CHECKOUT_ADDRESS'){
    adress1 = document.querySelector('#ec-address-line1');
    adress1.value = 'Москва';
    adress1.dispatchEvent(new Event('input', { bubbles: true }));
    code = document.querySelector('#ec-postal-code');
    code.value = '101000';
    code.dispatchEvent(new Event('input', { bubbles: true }));
      }
  
});
