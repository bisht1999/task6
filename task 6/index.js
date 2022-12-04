
var input=document.querySelector('input');
input.value='HELLO';

var Seconditem = document.querySelector('.list-group-item:nth-child(2)');
Seconditem.style.backgroundColor = "green";
//Seconditem.style.color='red';


var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden';

var Item=document.querySelectorAll('.list-group-item');
Item[1].style.color='green';

var odd = document.querySelectorAll('li:nth=child(odd)');

for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='purple';
}

