
function sendMail(){
    var params={
        from_name : document.getElementById("contactName").value,
        email_id : document.getElementById("contactEmail").value,
        message : document.getElementById("ContactText").value,
    }
    emailjs.send("service_e4gnfc7","template_isc598q",params).then(function (){
        alert("email sent successufly")
    })
}