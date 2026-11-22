const axios = require('axios');
const fs = require('fs');

async function testApi() {
    try {
        const response = await axios.post('http://localhost:3000/send-message', {
            number: "1234567890",
            message: "Test message from automated audit"
        });
        
        fs.writeFileSync('api_response.json', JSON.stringify({
            status: response.status,
            data: response.data
        }, null, 2));
        console.log("Success");
    } catch (error) {
        fs.writeFileSync('api_response.json', JSON.stringify({
            status: error.response?.status || 500,
            error: error.response?.data || error.message
        }, null, 2));
        console.log("Failed but captured response");
    }
}

testApi();
