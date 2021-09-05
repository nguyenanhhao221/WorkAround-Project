import salaryData  from "./modules/salaryData.js";
import { getRole, getCompany, getDataByRole, getDataByCompany } from "./modules/salaryData.js";
import { formatComma } from "./modules/utilities.js";
import { getSalaryByRole,getAverageSalaryByRole, getAverageSalaryByCompany, getAverageSalaryAll } from "./modules/calculateAverage.js";


const roles = getRole();
const companies = getCompany();

const renderInputButton = (arr, groupName) => {
    //create the section container
    let container = document.createElement('section');
    container.setAttribute('id', `${groupName}Inputs`);

    //create Header h3
    let header = document.createElement('h3');
    header.innerHTML = `Select a ${groupName}`;
    container.appendChild(header);

    //create input radio button and label
    arr.forEach(element => {
        
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'option');
        

        let input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', `${groupName}`);
        input.setAttribute('id', `${groupName}`);
        input.setAttribute('value', `${element}`)
        divElement.appendChild(input);

        let label = document.createElement('label');
        label.setAttribute('for', `${groupName}`);
        label.innerHTML = `${element}`;
        divElement.appendChild(label);

        input.addEventListener('click', updateStatus);

        container.appendChild(divElement); 
    });
    //put the container inside main
    document.querySelector('main').prepend(container);
}



function updateStatus() {
    
    const company = document.querySelector("input[name='company']:checked").value;

    const role = document.querySelector("input[name='role']:checked").value;

    const salaryByRole = formatComma(getSalaryByRole(role,company));
    const averageSalaryByRole =  formatComma(getAverageSalaryByRole(role));
    
    const averageSalaryByCompany = formatComma(getAverageSalaryByCompany(company));
    
    const averageSalaryAll =  formatComma(getAverageSalaryAll(salaryData));
    if (!company || !role) { return; }
    
    //Display detail 
    document.getElementById('salarySelected').innerText = `The Salary for ${role} at ${company} is ${salaryByRole}$`;
    document.getElementById('salaryAverageByRole').innerText = `The Average Salary for ${role} position in the Industry is ${averageSalaryByRole}$`;
    document.getElementById('salaryAverageByCompany').innerText = `The Average Salary in the ${company} is ${averageSalaryByCompany}$`;
    document.getElementById('salaryAverageIndustry').innerText = `The Average Salary in the Tech industry is ${averageSalaryAll}$`;
}

renderInputButton(companies, 'company');
renderInputButton(roles, 'role');