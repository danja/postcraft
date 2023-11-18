// Import the StaticSiteGenerator class
const StaticSiteGenerator = require('./src/ssg_revised'); // Adjust the path as necessary

// Create an instance of StaticSiteGenerator
const ssg = new StaticSiteGenerator();

// Call a function on the instance
ssg.main(); // Replace 'generateSite' with the actual function name you wish to call

// const ssg = require('./src/ssg_revised');
// console.log(ssg.main())