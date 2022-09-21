function template(data) {
    return `
        ### Project Title  
        ${data.title}

        ### Description 
        ${data.description}

        ### Table of Contents 
        -  [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)

        #installation
        ${data.installation}

        #usage
        ${data.usage}

        ## license 
        ${data.license}

        #contributing
        ${data.contributing}

        #tests
        ${data.tests}

       ### Questions 
       ${data.github}
       ${data.email}
    
    `
}