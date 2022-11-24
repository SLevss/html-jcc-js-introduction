function createEmployee(id, name, birthYear, salary) {
    return { id, name, birthYear, salary };
}

function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary) {

    let arrayNames = ['Jim', 'Jake', 'Jimes', 'Rob', 'Jack', 'Richie', 'Joe'];
    let minYear = 2000;
    let maxYear = 1960;
    let newArr = [];
    let birthYearForAverage = 0;
    if (idDigits = 4) {
        id_min = 1000;
        id_max = 9999;
    }
    for (i = 1; i <= nEmployees; i++) {

        let id = randomIntFromInterval(id_min, id_max);
        let name = randomArrayNames(arrayNames);
        let idName = id + name;
        let salaryOut = randomIntFromInterval(minSalary, maxSalary);
        birthYear = randomIntFromInterval(minYear, maxYear);
        birthYearForAverage += (2022 - birthYear);
        console.log(createEmployee(id, idName, birthYear, salaryOut));
        newArr.push(createEmployee(id, idName, birthYear, salaryOut));


    }
    let averageAge = birthYearForAverage / nEmployees;
    console.log("Pure mathematics: Average age :" + averageAge);
    console.log(newArr);
    console.log("Second Way: Average age :" + getAverageAge(newArr));
    console.log(getEmployeesBySalary(newArr));
    increaseSalary(newArr, 8000, 10);
}

createRandomEmployees(5, 4, 6000, 20000);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomArrayNames(array) {
    return array[Math.floor(Math.random() * array.length)] + "";
}
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + (2022 - user.birthYear), 0) / users.length;
}
function getEmployeesBySalary(array) {
    let salaryFrom = Math.min(array.salary);
    let salaryTo = Math.max(array.salary);

    return array.sort(function (salaryFrom, salaryTo) { return salaryFrom.salary - salaryTo.salary });
}

function increaseSalary(array, borderSalary, percent) {
    let minSalary = array.filter(function (min) {
        return min.salary < borderSalary;
    }).map(function (min) {
        return min.salary + (min.salary * 10 / 100);
    });
    console.log(minSalary);

}
