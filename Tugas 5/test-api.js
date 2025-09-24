const http = require('http');

class ApiTester {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  async makeRequest(method, path, data = null) {
    return new Promise((resolve, reject) => {
      const url = new URL(path, this.baseUrl);
      const options = {
        hostname: url.hostname,
        port: url.port,
        path: url.pathname,
        method: method,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const req = http.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        
        res.on('end', () => {
          try {
            const jsonBody = JSON.parse(body);
            resolve({
              status: res.statusCode,
              headers: res.headers,
              body: jsonBody
            });
          } catch (e) {
            resolve({
              status: res.statusCode,
              headers: res.headers,
              body: body
            });
          }
        });
      });

      req.on('error', (err) => {
        reject(err);
      });

      if (data) {
        req.write(JSON.stringify(data));
      }
      
      req.end();
    });
  }

  async testEndpoint(name, method, path, expectedStatus = 200) {
    try {
      console.log(`\nTesting: ${name}`);
      console.log(`   ${method} ${path}`);
      
      const response = await this.makeRequest(method, path);
      
      const statusIcon = response.status === expectedStatus ? 'PASS' : 'FAIL';
      console.log(`   ${statusIcon} Status: ${response.status} (expected: ${expectedStatus})`);
      
      console.log(`   Response:`);
      console.log(`   ${JSON.stringify(response.body, null, 6)}`);
      
      return response.status === expectedStatus;
    } catch (error) {
      console.log(`   FAIL Error: ${error.message}`);
      return false;
    }
  }

  async runAllTests() {
    console.log('Starting API Tests...\n');
    console.log('Base URL:', this.baseUrl);
    
    const tests = [
      { name: 'API Info', method: 'GET', path: '/', expectedStatus: 200 },
      { name: 'Hello Endpoint', method: 'GET', path: '/api/hello', expectedStatus: 200 },
      { name: 'Create Data', method: 'POST', path: '/api/data', expectedStatus: 201 },
      { name: 'Get Setoran', method: 'GET', path: '/api/setoran', expectedStatus: 200 },
      { name: 'Health Check', method: 'GET', path: '/api/status', expectedStatus: 200 },
      { name: 'Delete Data', method: 'DELETE', path: '/api/data', expectedStatus: 200 },
      { name: '404 Test', method: 'GET', path: '/api/notfound', expectedStatus: 404 }
    ];

    let passed = 0;
    let total = tests.length;

    for (const test of tests) {
      const success = await this.testEndpoint(test.name, test.method, test.path, test.expectedStatus);
      if (success) passed++;
    }

    console.log('\n' + '='.repeat(50));
    console.log(`Test Results: ${passed}/${total} passed`);
    
    if (passed === total) {
      console.log('All tests passed! API is working correctly.');
    } else {
      console.log('Some tests failed. Check the output above.');
    }
    
    console.log('='.repeat(50));
  }
}

// Check if server is running
async function checkServer() {
  const tester = new ApiTester();
  try {
    await tester.makeRequest('GET', '/');
    return true;
  } catch (error) {
    return false;
  }
}

// Main execution
async function main() {
  console.log('Checking if server is running...');
  
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('Server is not running!');
    console.log('Please start the server first:');
    console.log('   cd "Tugas 5"');
    console.log('   npm start');
    console.log('\n   Then run this test in another terminal:');
    console.log('   node test-api.js');
    process.exit(1);
  }
  
  console.log('Server is running!\n');
  
  const tester = new ApiTester();
  await tester.runAllTests();
}

if (require.main === module) {
  main();
}

module.exports = ApiTester;