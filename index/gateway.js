document.querySelector(".sidebar").addEventListener("click", () => {
    document.querySelector(".wrapper").classList.toggle("sPwrapper");
  });
  function proceedTopay(){

    var data={
      cardnum:document.querySelector("#ccn").value ,
      expdate:document.querySelector("#dateCCN").value ,
      cvvnum:document.querySelector("#cvv").value ,
      cardname:document.querySelector("#namelk").value ,
    }
    // console.log(data)

    localStorage.setItem("carddetails",JSON.stringify(data))
    
    var box= document.getElementById("namelk").innerText="Payment success! Your Order is delivered within few minutes";
         alert(box)
        window.location.href="index.html"
        
        }

   
