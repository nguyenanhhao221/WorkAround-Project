import salaryData from "./salaryData.js";
import { getRole, getCompany,getDataByRole ,getDataByCompany  } from "./salaryData.js";

const getSalaryByRole = (role, company) => {
    let roleData = getDataByRole(role);
    let companyData = roleData.find(item => item.company == company)

    return companyData.salary;

}
const getAverage = arr => {
    let emptyArr = [];
    arr.forEach(item => emptyArr.push(item.salary));

    return (emptyArr.reduce((a,b) => a+b)/emptyArr.length).toFixed(2); 
}

const getAverageSalaryByRole = role => {
    let roleData = getDataByRole(role);
    return getAverage(roleData);
}

const getAverageSalaryByCompany = company => {
    let companyData = getDataByCompany(company);
    return getAverage(companyData);
}

const getAverageSalaryAll = data => {
    return getAverage(data);
}

export { getSalaryByRole, getAverageSalaryByRole, getAverageSalaryByCompany, getAverageSalaryAll };
