$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#programButton').on('click', runCalculator);
}

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
const employeesWithBonuses = []


function EmployeeBonusObject(employeeObject) {
  let bonusPercentage = 0;
  if (employeeObject.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employeeObject.reviewRating === 3) {
    bonusPercentage = 4;
  } else if (employeeObject.reviewRating === 4) {
    bonusPercentage = 6;
  } else if (employeeObject.reviewRating === 5) {
    bonusPercentage = 10;
  }

  if (employeeObject.employeeNumber.length === 4 && !employeeObject.reviewRating <= 2) {
    bonusPercentage += 5;
  }


  if (employeeObject.annualSalary > 65000) {
    bonusPercentage -= 1;
  }

  if (bonusPercentage > 13) {
    bonusPercentage = 13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  let bonusDollars = Math.round(employeeObject.annualSalary * (bonusPercentage / 100));

  this.name = employeeObject.name;
  this.bonusPercentage = bonusPercentage;
  this.totalCompensation = Number(employeeObject.annualSalary) + bonusDollars;
  this.totalBonus = bonusDollars;
}


function bonusCalculator (employeesArray) {
  let el = $('#list-output');
  el.empty();
  for (const employee of employeesArray) {
    console.log(employee.name);
    let employeeBonus = new EmployeeBonusObject(employee);
    employeesWithBonuses.push(employeeBonus);
    // adds employee info to the DOM
    //console.log(employeeBonus.name);
    el.append(`<li>Name: ${employeeBonus.name}<br>Bonus Percent: ${employeeBonus.bonusPercentage}<br>
              Total Compensation: ${employeeBonus.totalCompensation}<br>Total Bonus: ${employeeBonus.totalBonus}</li>`)
  }
}

function runCalculator() {
  bonusCalculator(employees);
}


// function addToDom(finalEmployeeObject) {
//   let el = $('#list-output');
//   el.empty();
//   el.append(`<li>Name: `${employeesWithBonuses.name}`</li>`)
// }

console.log( employees );
// bonusCalculator(employees);
console.log(employeesWithBonuses);