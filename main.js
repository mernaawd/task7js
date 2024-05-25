var main_div = document.getElementsByClassName('main-div')[0];
main_div.addEventListener('click', dublicate);

function dublicate() {
   var r = parseInt(Math.random() * 100);
   var g = parseInt(Math.random() * 1000);
   var b = parseInt(Math.random() * 100);
   var color_random = 'rgb(' + r + ',' + g + ',' + b + ')  ';
   var div_another = main_div.cloneNode(false);
   div_another.innerText = 'sub-original';
   console.log(div_another);
   div_another.style.backgroundColor = color_random.toString();
   document.body.append(div_another);
}

  