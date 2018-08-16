const name = 'Al Amin';
const age = 22;
const job = 'Front End Developer';
const city = 'Chittagong';

let html;

// without template string (es5 way)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Jov: ' + job + '</li><li>City: ' + city + '</li></ul>';

// With template string
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`;

// Printing out the html to body
document.body.innerHTML = html;