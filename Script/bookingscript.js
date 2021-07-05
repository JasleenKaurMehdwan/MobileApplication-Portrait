function getData()
{
var toObject = JSON.parse(localStorage.data);
for (var i = 0; i < toObject.length; i++)   {
   
	
	var date = toObject[i].Date;
	var time = toObject[i].Time;
	var oihp = toObject[i].Oihp;
	var email=toObject[i].Email;
	var phone=toObject[i].Phone;
	var nameList="<li>"+"Date: " + date +"<br>"+ " Time: " + time +"<br>"+ " OIHP#: " + oihp +"<br>"+" Email: "+ email+"<br>"+ " Phone: "+phone + "</li> <br>";
	document.getElementById("data").innerHTML +=nameList;
	//document.getElementById("data").innerHTML +=" Date: " + date + " Time: " + time + " OIHP#: " + oihp +" Email: "+ email+ "Phone: "+phone +"<br>";
	 
}
};