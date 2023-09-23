// let heading = document.querySelector(".check");
// heading.innerText="Table Construction for frontend contest";
let url = "https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json";
let StudentData;
async function getData(){
    try{
        let res = await fetch(url);
    let data = await res.json();
   
    console.log(data);
    StudentData = data;
    
    }
    catch(error){
        console.log("Er: ", error)
    }



    let l = StudentData.length;
    for(let i=0;i<l;i++){

        let tr=document.createElement("tr");
    
   
    let student = StudentData[i];
   let td_id=document.createElement("td");
   td_id.innerText=student.id;
   let td_name=document.createElement("td");
   td_name.innerText=student.first_name;
   let td_gender=document.createElement("td");
   td_gender.innerText=student.gender;
   let td_class=document.createElement("td");
   td_class.innerText=student.class;
   let td_marks=document.createElement("td");
   td_marks.innerText=student.marks
   let td_pass=document.createElement("td");
   if(student.passing){
    td_pass.innerText="Pass"
   }else td_pass.innerText="Fail"
   
   let td_email=document.createElement("td");
   td_email.innerText=student.email;

   let tableBody=document.querySelector("tbody");
   tableBody.appendChild(tr);
   tr.append(td_id,td_name,td_gender,td_class,td_marks,td_pass,td_email);
    }
    
   
}

getData();



function Add(){
    console.log(StudentData[0]);

   
       
       
       

        
    
}

function sortAtoZ(){
    let SortedAtoZ=StudentData.map((el,i)=>el)
}