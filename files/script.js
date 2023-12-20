
//get the 
var acc = document.getElementsByClassName('accordion-item');
//console.log(acc);

//add a listener to all accordion buttons
for(let i = 0; i < acc.length; i++){
    let button = acc[i].getElementsByClassName('accordion-btn')[0];
    button.onclick = function(){

        clearAccordion(acc,i);
        var isCollapsed = this.classList.contains('collapsed');
        var acc_text = acc[i].getElementsByClassName('accordion-body')[0];
        
        if(isCollapsed){
          this.classList.remove('collapsed');
          acc_text.classList.replace('collapse','open');
        }
        else{
          this.classList.add('collapsed');
          acc_text.classList.replace('open','collapse');
        }

        var panel_text = this.parentElement.nextElementSibling;
        var maxHeightValue = getStyle(panel_text, "maxHeight");
        
        if (maxHeightValue !== "0px") {
          panel_text.style.maxHeight = null;       
        } else {
          panel_text.style.maxHeight = panel_text.scrollHeight + "px";
        }
    
    };
}

function clearAccordion(acc,value){
  for(let i = 0 ; i < acc.length; i++){
    var current_acc = acc[i].getElementsByClassName('accordion-btn')[0];
    var acc_body = acc[i].getElementsByClassName('accordion-body')[0];
    if(!acc_body.classList.contains('collapse') && i!=value){
      //console.log('picked '+i);
      current_acc.classList.add('collapsed');
      acc_body.classList.replace('open','collapse');

      var panel_text = current_acc.parentElement.nextElementSibling;
      var maxHeightValue = getStyle(panel_text, "maxHeight");
      
      if (maxHeightValue !== "0px") {
        panel_text.style.maxHeight = null;       
      } else {
        panel_text.style.maxHeight = panel_text.scrollHeight + "px";
      }

      break;
    }
  }
}

function getStyle(el, styleProp) {
  var value, defaultView = (el.ownerDocument || document).defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
      return (function(value) {
        var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}