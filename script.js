// your code here
let nameInput=document.getElementById("name");
let yearInput=document.getElementById("year");
let button=document.getElementById("button");
 const urlElement = document.getElementById('url');



button.addEventListener("click",function(){
   let name = encodeURIComponent(nameInput.value.trim());  
   let year = encodeURIComponent(yearInput.value.trim());

  let queryString = 'https://localhost:8080/?';
        if (name) queryString += `name=${name}`;
        if (name && year) queryString += '&';
        if (year) queryString += `year=${year}`;
	urlElement.textContent = queryString;

})

   
	