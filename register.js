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
let y=(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
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
 
        if(E.value.match(y)){
            return true
        }
     else {
          return  document.getElementById('errorE').innerHTML='Email not valid'
 } ;
}

function reg(){
   
    
    regconfirm=(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(CE.value.match(regconfirm)){
        return true
    }
 else {
      return  document.getElementById('errorCE').innerHTML='Email not valid'
    }


}

function regc(){
    if(E.valu ==CE.value){
        return true
    }
    else{
        return document.getElementById('errorCE').innerHTML='Email not Confirmed'
    }
}






let x=[];

function data() {
    event.preventDefault();

    console.log(F.value,"data")

  

    // let RegEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   
    //     try{
    //     if(RegEmail.test(E.value)) throw 'must contain @'
    //     if(RegEmail.test(CE.value)) throw 'must  contain @'
        
    //     }
    //     catch (er){
    //         document.getElementById('errorE').innerHTML=er
    //         document.getElementById('errorCE').innerHTML=er
    //     }  


    
//     let users={"firstName":F.value,"lastName":L.value,"Email":E.value,"confirmEmail":CE.value,"mobile":M.value,"Password":P.value,"confirmPassword":CP.value};
   
//     x.push(users);

// let data=JSON.stringify(x);



//     localStorage.setItem( 'data',data);


   
   
}


