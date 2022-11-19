function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}  



function matchpass(){  
var firstpassword=document.f1.password.value;  
var secondpassword=document.f1.password2.value;  
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("password must be same!");  
return false;  
}  
}  


function validate(){  
var num=document.myform.num.value;  
if (isNaN(num)){  
  document.getElementById("numloc").innerHTML="Enter Numeric value only";  
  return false;  
}else{  
  return true;  
  }  
}  