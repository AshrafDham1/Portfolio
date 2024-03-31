
// function sendMail(){
//     var params={
//         from_name : document.getElementById("contactName").value,
//         email_id : document.getElementById("contactEmail").value,
//         message : document.getElementById("ContactText").value,
//     }
//     console.log(params);
//     emailjs.send("service_e4gnfc7","template_isc598q",params).then(function (){
//         alert("email sent successufly")
//     })
//     return false
// }


document.getElementById("emailForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior(reloading the page)

    
    var params = {
        from_name: document.getElementById("contactName").value,
        email_id: document.getElementById("contactEmail").value,
        message: document.getElementById("ContactText").value,
    };
    emailjs.send("service_e4gnfc7", "template_isc598q", params).then(function () {
        alert("Email sent successfully");
    });
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("ContactText").value = "";

}