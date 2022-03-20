let employees = [{id :101, name :"Nareshreddy",salary : 80000},
{id :102 , name :"Chaitanya", salary :50000}
];

let createEmployee = (emp,callback) =>{
    setTimeout(() => {
        employees.push(emp);
        callback()

    },3000);
    
};
let getEmployee = () => {
    setTimeout(()=> {
        let rows = "";
        employees.forEach((employee) => {
            rows = rows + <tr>
       
                         <td>${employee.id}</td> 
                         <td>${employee.name}</td>
                         <td>${employee.salary}</td>
                          </tr> ;
        });
        document.getElementById('tbody-data').innerHTML = rows
     },1000);
};

 createEmployee({ id :103, name :"Shilpa", salary :60000});
 getEmployee();