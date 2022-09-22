 export default function generateReadme(data) {
    return ` # ${data.title}

# Table of Contents 
* [Description](#description) 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
        
# Description 
# ${data.description}

# installation
# ${data.installation}

# usage 
# ${data.usage}

# license 
# ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
# This project is using a(n) ${data.license} license.

# contributing 
# ${data.contributing}

# tests
# ${data.tests}

# Questions
# Find me on GitHub: (https://github.com/${data.github})
# If you have any questions or concerns you can reach out to me by email at [${data.email}](mailto:${data.email})
`;
}