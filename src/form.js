const inputElements = document.querySelectorAll(".form-class [name]");
const errorElem = document.querySelector(".error");
const minSalary = 1000;
const maxSalary = 40000;
const minYear = 1950;
const curYear = new Date().getFullYear();
let timerId = -1;

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
}
function onChange(event) {
    if (event.target.name == "salary") {
        const salary = +event.target.value;
        if (salary < minSalary || salary > maxSalary) {
            errorMission(event, `salary wrong, the salary should be in the range ${minSalary}...${maxSalary}`);
        }
    }

    if (event.target.name == "birthDate") {
        const arrDate = (event.target.value).split('-');
        const needYear = +arrDate[0];
        if (needYear < minYear || needYear > curYear) {
            errorMission(event, `year wrong, the year should be in the range ${minYear}...${curYear}`);
        }
    }
}


function errorMission(event, messages) {
    event.target.value = '';
    errorElem.innerHTML = 'Error: ' + messages;
    timerId = setTimeout(() => {
        errorElem.innerHTML = '';
    }, 5000);
}

