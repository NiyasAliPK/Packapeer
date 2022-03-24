
function ValidationForm(){
    let n=document.forms.eform.username.value;
    let m=document.forms.eform.useremail.value;
    let a=document.forms.eform.useremail.value;
    
 let s=document.forms.eform.usermessage.value;
    let b = document.getElementById("typeNumber").value

    let atposition=a.indexOf("@");
    let dotposition=a.lastIndexOf(".");
    if(n==""){
        alert("Please Enter a Name");
       return false
    }else{
        if((n.length < 3)){
            alert("Name must be greater than 2 letters");
            return false;
        }
    }
    if(m==""){
        alert("Please enter your mail")
        return false;
    }

if (atposition<1 || dotposition<atposition+2 || dotposition+2>=z.length){
  alert("Please enter a valid e-mail address");
  return false;
  }

//   if(b.length != 10){
//     alert("Please Enter Your Mobile Number")
//      return false;
//  }
// if(s.length == 0){
//     alert("Please Enter a Message");
//     return false;
// }

// return true;
}

const form = document.querySelector('form')
const n = document.querySelector('#name');
const m = document.querySelector('#exampleInputEmail1');
const num = document.querySelector('#typeNumber');
const s = document.querySelector('#meesage');
    
    

form.addEventListener('submit', function(){

//     const atposition=m.value.indexOf("@");
//     const dotposition=m.value.lastIndexOf(".");
    
//     if(n==""){
//         alert("Please Enter a Name");
//        return false
//     }else{
//         if((n.length < 3)){
//             alert("Name must be greater than 2 letters");
//             return false;
//         }
//     }
//     if(m==""){
//         alert("Please enter your mail")
//         return false;
//     }

//     console.log(atposition, dotposition);

// if (atposition<1 || dotposition<atposition+2){
//   alert("Please enter a valid email address");
//   return false;
//   }

// if(isNaN(num)){
//     alert("Please Enter Digits Only")
//     return false
// }

if (num.value.length != 10 && isNaN(num)) {
    alert("Enter a valid Phone Number")
    return false;
}

if(s.value.length < 3){
    alert("Please Enter a Message");
    return false;
}

})

// $(document).ready(function(){
//     $("#messageform").validate({
//         rules:{
//             usernumber:{
//                 required:true,
//                 minlength:10
//             },

//         }
        
//     })
// })

