window.onscroll = function() {scrollFunction()};

function bold1()
{
var x=document.getElementById('text');
   
  if( x.style.fontWeight =='bold')
  

      x.style.fontWeight='normal';
      else 
      	 x.style.fontWeight='bold';

  
}
     

function italic1()
{

var x=document.getElementById('text');
    if (x.style.fontStyle=='italic')
    	x.style.fontStyle='normal';
    else
    	x.style.fontStyle='italic';
 
}
function line1()
{

var x=document.getElementById('text');
    if (x.style.textDecoration =='underline')
    	x.style.textDecoration='none';
    else
    	x.style.textDecoration ='underline';

 
}
function drop1()
{
var x=document.getElementById('text');
var size=document.getElementById('sz').value;
x.style.fontSize=size;

}
function drop2()
{
var x=document.getElementById('text');
var style=document.getElementById('lz').value;
x.style.fontFamily=style;
}


 $("#hide").hide();
 $("#youssef").click(function(){
  $("#hide").fadeToggle(3000);
});

// $("#hide").hide();
// $(document).ready(function(){
//   $("#youssef").click(function(){
//     $("#hide").fadeToggle();
//     });
