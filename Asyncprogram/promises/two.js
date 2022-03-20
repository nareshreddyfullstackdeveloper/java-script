let employes = [{id : 101, name : 'Nareshreddy', sal :95000},
{ id : 102, name :'Vikramkumar', sal :85000}
]
let createEmployee = (emp) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let flag = false;
            employes.push(emp);
            flag ? resolve('successfully inserted') : reject('failed-success')

        }, 3000);
    });

}
let getEmployee = () => {
    setTimeout(() => {
        let rows = ''
        employess.forEach((employee) => {
            rows = rows + `<tr>
                             <td>${employee.id}</td>
                             <td>${employee.name}</td>
                             <td>${employee.sal}</td>
                           </tr>`

        });
        document.getElementById("tbody-data").innerHTML= rows
    }, 1000)
}

createEmployee({id : 103, name :'Nagachaitanya', sal :64000}) .then ((msg) => {
    getEmployee();
    console.log(msg)

}).catch((err) => {
    console.log(err)

})

