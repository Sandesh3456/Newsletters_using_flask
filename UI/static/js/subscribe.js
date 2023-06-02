function popup(){
    const email_entry =document.getElementById("email").value;
    const overlay=document.getElementById("overlay");
    const popup=document.getElementById("popup");
    overlay.style.display="block";
    popup.style.display="block";
    document.getElementById("gmail_output").innerHTML=email_entry+"."; 
  }
  function validate(){
    const email_entry =document.getElementById("email").value;
    const errors=document.getElementById("error");
    if (/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i .test(email_entry)!=true)
    {    const error=document.getElementById("error");
         console.log(error);
         error.style.display="inline-block";
    return (false);
  }
//   console.log(email_entry);
  // console.log((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_entry)));
  popup();
  return (true);
  }
  
  function exit(){
    const overlay=document.getElementById("overlay");
    const popup=document.getElementById("popup");
    error.style.display="none";
    overlay.style.display="none";
    popup.style.display="none";
  }