const updatedDate=document.querySelector("#updatedDate");
updatedDate.innerHTML= `Last Modification: ${document.lastModified}`;
const year=new Date();
const currentYear=year.getFullYear();
document.getElementById("currentYear").innerHTML= `&copy; ${currentYear} | Alberto de la Rosa | Mexico`;
