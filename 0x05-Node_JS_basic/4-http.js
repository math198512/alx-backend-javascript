const http = require('http');

// Create an HTTP server that responds to all requests with the same message
const app = http.createServer((req, res) => {
  // Set the response header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

// Export the app for potential use in other modules
module.exports = app;
