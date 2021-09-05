const salaryData = [
    { role: 'CTO', company: 'Big Data Inc.', salary: 320000},
    { role: 'Technical Lead', company: 'Big Data Inc.', salary: 230000},
    { role: 'Software Engineer II', company: 'Big Data Inc.', salary: 180000},
    { role: 'Software Engineer I', company: 'Big Data Inc.', salary: 140000},
    { role: 'CTO', company: 'Medium Data Inc.', salary: 215000},
    { role: 'Technical Lead', company: 'Medium Data Inc.', salary: 165000},
    { role: 'Software Engineer II', company: 'Medium Data Inc.', salary: 140000},
    { role: 'Software Engineer I', company: 'Medium Data Inc.', salary: 115000},
    { role: 'CTO', company: 'Small Data Inc.', salary: 175000},
    { role: 'Technical Lead', company: 'Small Data Inc.', salary: 135000},
    { role: 'Software Engineer II', company: 'Small Data Inc.', salary: 115000},
    { role: 'Software Engineer I', company: 'Small Data Inc.', salary: 95000},
  ];

  const getRole = () => {
    let roleArr = salaryData.map(item => item.role);
    return roleArr.filter((item, index, thisArr) => thisArr.indexOf(item) == index);
  }

  const getCompany = () => {
    let companyArr = salaryData.map(item => item.company);
    return companyArr.filter((item, index, thisArr) => thisArr.indexOf(item) == index);
  }

  const  getDataByRole = role => salaryData.filter(item => item.role === role);

  const  getDataByCompany = company => salaryData.filter(item => item.company === company);

 
  export default salaryData; 
  export { getRole, getCompany,getDataByRole ,getDataByCompany  }