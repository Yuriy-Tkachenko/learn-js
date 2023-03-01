let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries) {
    let maxSalary = 0;
    let maxNameSalary = null;

    if(salaries === '' || salaries === undefined || salaries === null) {
        return null;
    } else {
        for(let [name, salary] of Object.entries(salaries)) {
            if(maxSalary < salary) {
                maxSalary = salary;
                maxNameSalary = name;
            }
        }
    }

    return maxNameSalary;
}