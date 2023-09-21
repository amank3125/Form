let api = "https://selfserveapp.kapturecrm.com/support-portals/prod/vik/pw-form/controller/getCustomerDetails.php?cus_id=";

let empID = document.querySelector('.empid');
let empName = document.querySelector('.empname');
let empEmail = document.querySelector('.empemail');
let empDept = document.querySelector('.empdept');
let empDesig = document.querySelector('.empdesig');
let empLoc = document.querySelector('.emploc');
let empMob = document.querySelector('.empmob');

function getEmpDetails(){
    // console.clear();
    fetch(`${api}${empID.value}`)
    .then(response=>response.json())
    .then((data)=>{
        // console.log(data['Customer Details'])
        empName.value=data['Customer Details'].name;
        empEmail.value=data['Customer Details'].contacts[0].email;
        empDesig.value=data['Customer Details'].attr2; //designation
        empDept.value=data['Customer Details'].attr3; //department
        empLoc.value=data['Customer Details'].address;
    })
}