// your code here
let name=document.getElementById("name");
let year=document.getElementById("year");
let button=document.getElementById("button");


button.addEventListener("click",function(){
   let name = encodeURIComponent(nameInput.value.trim());  // Encode and trim whitespace
   let year = encodeURIComponent(yearInput.value.trim());

   if(name.value==""&&year.value==""){
	document.getElementById("ur1").innerHTML=`https://localhost:8080/?`
   
 } else if(name.value!==""&&year.value==''){document.getElementById("ur1").innerHTML=`https://localhost:8080/?name=${name}`

}  else if(year.value!==""&&name.value==''){document.getElementById("ur1").innerHTML=`https://localhost:8080/?name=year=${year}`}
else if(year.value!==""&&name.value!==''){document.getElementById("ur1").innerHTML=`https://localhost:8080/?name=${name}&year=${year}`}


})

   
	