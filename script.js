let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phone');
let address = document.getElementById('address');
let dateOfBirth = document.getElementById('dateofbirth');
let userImg = document.getElementById('output')

let studentDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    userImg: ''
}


var loadFile = function (event) {
    userImg.src = URL.createObjectURL(event.target.files[0]);
};

function submitForm(event) {   
    event.preventDefault();
    studentDetails.firstName = firstName.value;
    studentDetails.lastName = lastName.value;
    studentDetails.address = address.value;
    studentDetails.email = email.value;
    studentDetails.dateOfBirth = dateOfBirth.value;
    studentDetails.phoneNumber = phoneNumber.value;
    studentDetails.userImg = userImg.src;

    // Form Validation =>
    if(studentDetails.firstName == ""){
        alert("Please Enter Your First Name!");
    }else if(studentDetails.lastName == ""){
        alert("Please Enter Your Last Name!");
    }else if(studentDetails.email == ""){
        alert("Please Enter Your Email!");
    }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(studentDetails.email))) {
        alert("You have entered an invalid email address!")
    }else if(studentDetails.phoneNumber == ""){
        alert("Please Enter Your Phone Number!");
    }else if(!(studentDetails.phoneNumber.match(/^\d{10}$/))){
        alert("Plese Enter Youe Correct Phone Number")
    }else if(studentDetails.address == ""){
        alert("Please Enter Your Address!");
    }else if(studentDetails.dateOfBirth == ""){
        alert("Please Enter Your Date OF Birth!");
    }else if(studentDetails.userImg == ""){
        alert("Please Upload Your Profile Picture!");
    }else{
        console.log(studentDetails)
    }
}

var submitBtn = document.getElementById('submitBtn') 
submitBtn.addEventListener('click', submitForm) // Form submit handler event


