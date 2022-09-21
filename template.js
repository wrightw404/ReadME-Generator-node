function template(data) {
    return `
        # ${data.title}
            ${data.license}

        ### Description 
        ${data.description}

        ### Table of Contents 


        ${data.installation}

        ${data.usage}

        ${data.contributing}

       ### Questions 
       ${data.github}
       ${data.email}
    
    
    `
}