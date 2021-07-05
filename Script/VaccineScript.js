  function store()
            {
                var date = document.getElementById("txtDate").value;
                var time = document.getElementById("txtTime").value;
				var oihp = document.getElementById("txtOihp").value;
				var email = document.getElementById("txtEmail").value;
				var phone = document.getElementById("txtPhone").value;
				var data = {Date: date, Time: time, Oihp: oihp, Email: email,Phone: phone};
			   
                 var array = JSON.parse(localStorage.getItem('data') || '[]');
                 array.push(data);
                 localStorage.setItem('data', JSON.stringify(array));
                
                  alert("Booking added", JSON.stringify(data));
				  
			 
            };