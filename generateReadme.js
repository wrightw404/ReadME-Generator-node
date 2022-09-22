//module.exports = {
//    generateReadme
//}
 
 
export default function generateReadme(data) {
    return `
        ## Project Title  
        <h1>${data.title}</h1>


        # Table of Contents 
        1. [Description](#description)
        2. [Installation](#installation)
        3. [Usage](#usage)
        4. [License](#license)
        5. [Contributing](#contributing)
        6. [Tests](#tests)
        7. [Questions](#questions)

        ##Description <a name ="description"></a>
        ${data.description}

        ##installation <a name ="installation"></a>
        ${data.installation}

        ##usage <a name ="usage"></a>
        ${data.usage}

        ##license <a name ="license"></a>
        ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
        This project is using a(n) ${data.license} license. 

        ##contributing <a name ="contributing"></a>
        ${data.contributing}

        ##tests <a name ="tests"></a>
        ${data.tests}

        ##Questions <a name ="questions"></a>
        Find me on GitHub: [${data.github}](https://github.com/${data.github})
        If you have any questions or concerns you can reach out to me by email at ${data.email}
    `
}