const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink= document.querySelector(".signup-link a");
const loginText= document.querySelector(".title_text .login");
const signupText= document.querySelector(".title_text .signup");

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick=(()=>{
    signupBtn.click()
    return false ; 
}
)


var F=document.getElementById("firstname") ;
var L=document.getElementById("lastname" ) ;
var E=document.getElementById("email") ;
var CE=document.getElementById("ConfirmEmail");
var M=document.getElementById("Mobile") ;
var P=document.getElementById("password");
var CP=document.getElementById("ConfirmPassword");



function regex(){
    event.preventDefault();
let regname =/\d/;

try{
if(regname.test(F.value)) throw 'must not contain Numbers'

}
catch (err){
    document.getElementById('errorF').innerHTML=err
   
}

try{if(regname.test(L.value)) throw 'must not contain Numbers'
}
catch(er){
    document.getElementById('errorL').innerHTML=er
};
 
       
}

function regE() {
    let y=(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(E.value.match(y)){
        return true
    }
 else {
      return  document.getElementById('errorE').innerHTML='Email not valid'
} ;
    
}

// function reg(){
   
    
//     regconfirm=(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
//     if(CE.value.match(regconfirm)){
//         return true
//     }
//  else {
//       return  document.getElementById('errorCE').innerHTML='Email not valid'
//     }


// }

function regc(){
    if(E.value == CE.value){
        return true
    }
    else{
        return document.getElementById('errorCE').innerHTML='Email not Confirmed'
    }
    
}

function regM() {
  let  reg=/^\d{10}$/
    if (!isNaN(M.value) && (M.value.match(reg) )){
        return true;

    }

    else{return document.getElementById('errorM').innerHTML='mobile Number invalid'
}
}

function regp(){
   
        let isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(P.value)) {
          return document.getElementById('errorP').innerHTML= "Password must not contain Whitespaces.";
        }
      
        let isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(P.value)) {
          return document.getElementById('errorP').innerHTML= "Password must have at least one Uppercase Character.";
        }
      
        let isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(P.value)) {
          return document.getElementById('errorP').innerHTML="Password must have at least one Lowercase Character.";
        }
      
        let isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(P.value)) {
          return document.getElementById('errorP').innerHTML="Password must contain at least one Digit.";
        }
      
      let isContainsSymbol =
          /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!isContainsSymbol.test(P.value)) {
          return document.getElementById('errorP').innerHTML="Password must contain at least one Special Symbol.";
        }
      
        let isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(P.value)) {
          return document.getElementById('errorP').innerHTML="Password must be 10-16 Characters Long.";
        }
}

function regcp(){
    if(P.value ==CP.value){
        return true
    }
    else{
        return document.getElementById('errorCP').innerHTML='Password not Confirmed'
    }
}







let x=[];

function data() {
    event.preventDefault();

    console.log(F.value,"data")

    
    let users={"firstName":F.value,"lastName":L.value,"Email":E.value,"confirmEmail":CE.value,"mobile":M.value,"Password":P.value,"confirmPassword":CP.value};
   
    x.push(users);

let data=JSON.stringify(x);



    localStorage.setItem( 'data',data);


   
   
}


