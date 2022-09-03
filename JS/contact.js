let enterDetails = ()=>{
     let form = document.getElementById('my-form');

    let {name,lname,email,tarea} = form.elements;

    validation(name,lname,email,tarea);
}

function validation(name,lname,email,textarea){
    let errordisplay = document.getElementById('errordisp');
    errordisplay.innerHTML= ``;
    errordisplay.style.backgroundColor = 'red';
    errordisplay.style.color = 'white';
    errordisplay.style.fontWeight = 700;
    errordisplay.style.display = 'block';
    
    if(name.value.trim().length <2){
        let msg = '<div>your name is wrong</div>';
        errordisplay.innerHTML+= msg;
    }

    else if(lname.value.trim().length <2){
        let msg = '<div>your last name is wrong</div>';
        errordisplay.innerHTML+= msg;
    }

    else if(!email.value.includes("@")){
        let msg = '<div>Incorrect email</div>'
        errordisplay.innerHTML+= msg;
    }

    else if(textarea.value.trim().length<1){
        let msg = '<div>Please write some contnent</div>'
        errordisplay.innerHTML+= msg;
    }

    else{
        errordisplay.style.backgroundColor = 'green';
        let msg = '<div>Comment sent!</div>'
        errordisplay.innerHTML+= msg;
    }
    setTimeout(()=>{errordisplay.style.display = 'none'}, 5000);
}
