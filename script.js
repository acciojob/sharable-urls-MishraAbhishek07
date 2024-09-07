// your code here
let name=document.getElementById("name");
let year=document.getElementById("year");
let button=document.getElementById("button");


button.addEventListener("click",function(){
   if(name.value==""&&year.value==""){
	document.getElementById("ur1").innerHTML=`https://localhost:8080/?`
   
 } else if(name.value!==""&&year.value==''){document.getElementById("ur1").innerHTML=`https://localhost:8080/?name=${name.value}`

}  else if(year.value!==""&&name.value==''){document.getElementById("ur1").innerHTML=`https://localhost:8080/?name=year=${year.value}`}
else if(year.value!==""&&name.value!==''){document.getElementById("ur1").innerHTML=`https://localhost:8080/?name=${name.value}&year=${year.value}`}


})

   
	