let myform = document.querySelector('form');
let Name = document.getElementById('name');
let docid = document.getElementById('doctor_id');
let speciality = document.getElementById('specialization');
let exp = document.getElementById('experience');
let email = document.getElementById('email');
let mob = document.getElementById('mobile');
let tbody = document.querySelector('tbody');
let alldata = [];

    function rolefinder(x){
        console.log(x);
//         Senior, if experience > 5 years
// Junior, if experience is between 2 and 5 years
// Trainee, if experience is less than or equal to 1 year
        if(x <= 1){
            return "Trainee";
        }
        else if(x >= 2 && x < 5){
            return "Junior";
        }
        else{
            return "Senior";
        }
    }

    function deletebtn(x){

    }

myform.addEventListener('submit', function(ele){
    ele.preventDefault();

    let data = {};
    data.name1 = Name.value;
    data.doc_id = docid.value;
    data.spec = speciality.value;
    data.experi = exp.value;
    data.mail = email.value;
    data.Mobno = mob.value;

    // console.log(data);
    alldata.push(data);
    tbody.innerHTML = null;
    alldata.map((ele)=>{
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');

        td1.innerText = ele.name1;
        td2.innerText = ele.doc_id;
        td3.innerText = ele.spec;
        td4.innerText = ele.experi;
        td5.innerText = ele.mail;
        td6.innerText = ele.Mobno;
        td7.innerText = rolefinder(td4.innerText);
        // td8.innerText = deletebtn(td8.innerText)
        
        row.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(row);
    })
});

console.log(alldata);

