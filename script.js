
   




function login()
	{
		

		var uname = document.getElementById("user").value;
		var pwd = document.getElementById("pass").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		//window.location="login.html";
		}
		else if(pwd=='')
		{
        	alert("enter the password");
			//window.location="login.html";
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
			//window.location="login.html";
		}
		else if(pwd.length < 6 || pwd.length > 6)
		{
			alert("Password min and max length is 6.");
			
		}
		else 
		{  
       
	  
		localStorage.setItem("UserName",uname);
		localStorage.setItem("Password",pwd); 
		//window.location = "grid.html";
		return;
	}
}	


var list1 = [];
var list2 = [];
var n = 1;
var x = 0;
function AddRow(){


/*var uname = document.getElementById("user").value;
var pwd = document.getElementById("pass").value;
localStorage.setItem("UserName",uname);
localStorage.setItem("Password",pwd); */

var AddRown = document.getElementById('tbl');
var NewRow = AddRown.insertRow(n);

list1[x] = document.getElementById("dd").innerHTML=localStorage.getItem("UserName");
list2[x] = document.getElementById("ss").innerHTML=localStorage.getItem("Password");

var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);


cel1.innerHTML = list1[x];
cel2.innerHTML = list2[x];


n++;
x++;
//return false;
}

