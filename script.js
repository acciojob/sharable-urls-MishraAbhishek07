// your code here
let nameInput=document.getElementById("name");
let yearInput=document.getElementById("year");
let button=document.getElementById("button");
 



button.addEventListener("click",function(){
   let name = encodeURIComponent(nameInput.value.trim());  
   let year = encodeURIComponent(yearInput.value.trim());

 if(nameInput.value==""&&yearInput.value==""){
	document.getElementById("url").innerHTML=`https://localhost:8080/?`
   
 } else if(nameInput.value!==""&&yearInput.value==''){document.getElementById("url").innerHTML=`https://localhost:8080/?name=${name}`

}  else if(yearInput.value!==""&&nameInput.value==''){document.getElementById("url").innerHTML=`https://localhost:8080/?year=${year}`}
else if(yearInput.value!==""&&nameInput.value!==''){document.getElementById("url").innerHTML=`https://localhost:8080/?name=${name}&year=${year}`}



})

   
	