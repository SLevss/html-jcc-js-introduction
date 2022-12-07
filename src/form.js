const inputElements = document.querySelectorAll(".form-class [name]");
const bouttonElements = document.querySelectorAll(".main-button");
const errorElem = document.querySelector(".error");
const sectionElem = document.querySelectorAll(".section");
const listElement = document.querySelector(".employees-list");
const salaryListElement = document.querySelector(".employees-list-salary");

const minSalary = 1000;
const maxSalary = 40000;
const minYear = 1950;
const curYear = new Date().getFullYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const company = new Company();

const dateErrElem = document.getElementById("date_error");
const salaryErrElem = document.getElementById("salary_error");
const allEmployees = document.getElementById("all-emlloyees");
const salaryElem = document.getElementById("salary");
const fromToError = document.getElementById("from_to_error");


// let timerId = -1;

function show(index) {
    if(index==1) {
        allEmployees.innerHTML = `Full Employees List`;
        listElement.innerHTML = getFullEmployeesList();
    } else if(index==2) {
        from = -1;
        to = -1;
    }
    sectionElem.forEach(section => section.hidden = true);
    sectionElem[index].hidden = false;
}

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee);
    company.hireEmployee(employee);

}
function onChange(event) {
    if (event.target.name == "salary") {
        const salary = +event.target.value;

        if (salary < minSalary || salary > maxSalary) {
            errorMission(event, `salary wrong, the salary should be in the range ${minSalary}...${maxSalary}`);
        }
    }

    else if (event.target.name == "birthDate") {
        const arrDate = (event.target.value).split('-');
        const needYear = +arrDate[0];
        if (needYear < minYear || needYear > curYear) {
            errorMission(event, `year wrong, the year should be in the range ${minYear}...${curYear}`);
        }
    }
}
let from = -1;
let to = -1;
function onChangeSalary(event) {
    if (event.target.name == "salaryFrom") {
        salaryFrom(event.target)
    } else if (event.target.name == "salaryTo") {
        salaryTo(event.target);
    }
}
function salaryFrom(elem) {
    const sal = +elem.value;
    from = (sal < 0) ? 0 : sal;
    if (to > -1 && from > to) {
        errorMission(elem, `salary ${from} less ${to}`);
    }
}

function salaryTo(elem) {
    const sal = +elem.value;
    to = (sal < 0) ? 0 : sal;
    if (from > -1 && from > to) {
        errorMission(elem, `salary ${from} less ${to}`);
    }
}
function errorMission(event, messages) {
    event.target.value = '';
    errorElem.innerHTML = 'Error: ' + messages;
    timerId = setTimeout(() => {
        errorElem.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}
function getMaxYear() {
    return new Date().getFullYear();
}
function Company() {
    this.employees = [];
}
Company.prototype.hireEmployee = function (employee) {
    this.employees.push(employee);
}
Company.prototype.getAllEmployees = function () {
    return this.employees;
}

Company.prototype.getEmployeesBySalary = function (salaryFrom, salaryTo) {
    let empls =  this.employees.filter( (emp) => {
        return emp.salary > salaryFrom && emp.salary<salaryTo;
        })
    return empls;
}
function getEmployeesDataArray(arrEmps) {
    let arrItems = arrEmps.map( emp => getEmployeeData(emp));
    return arrItems.join('');
}
function getFullEmployeesList() {
    let arrEmps = company.getAllEmployees();
    console.log('len=', arrEmps.length);
    return getEmployeesDataArray(arrEmps);
}

function getEmployeeData(emp) {
    return `<li class="employee-item">
    <div class="employees-item-container">| Name: ${emp.employee_name} | Birthdate: ${emp.birthDate} |
    Department: ${emp.department} | Salary: ${emp.salary} | EMAIL: ${emp.email} </div></li>`
}


