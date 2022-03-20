let employees =[{id :101, name :'Nareshreddy',sal :95000},
{ id : 102, name : 'Sujatha',sal :55000}
]
let createEmployee = (emp) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let flag = true;
            employees.push(emp);
            flag ? resolve('successfully inserted') : reject('failed-success')
        },3000);
    });
}

let getEmployee = () => {
    setTimeout(() => {
        let rows = ''
        employees.forEach((employee) => {
            rows = rows + `<tr>
                           <td>${employee.id}</td>
                           <td>${employee.name}</td>
                           <td>${employee.sal}</td>
                           </tr>`
        });
        document.getElementById('tbody-data').innerHTML= rows
    },1000)
}

let run = async () => {
    await createEmployee({id :103, name :'Keerthi',sal :68000});
    getEmployee();
}
run();