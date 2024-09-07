// your code here
let nameInput=document.getElementById("name");
let yearInput=document.getElementById("year");
let button=document.getElementById("button");
 const urlElement = document.getElementById('url1');



button.addEventListener("click",function(){
   let name = encodeURIComponent(nameInput.value.trim());  
   let year = encodeURIComponent(yearInput.value.trim());

 if(name.value==""&&year.value==""){
	document.getElementById("ur1").innerHTML=`https://localhost:8080/?`
   
 } else if(name.value!==""&&year.value==''){document.getElementById("ur1").innerHTML=`https://localhost:8080/?name=${name}`

}  else if(year.value!==""&&name.value==''){document.getElementById("ur1").innerHTML=`https://localhost:8080/?name=year=${year}`}
else if(year.value!==""&&name.value!==''){document.getElementById("ur1").innerHTML=`https://localhost:8080/?name=${name}&year=${year}`}



})

   
	