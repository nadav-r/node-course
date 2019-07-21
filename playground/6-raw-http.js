const https = require('https');

const url = `https://api.darksky.net/forecast/d5ce81066d903c4020d272c3856845f1/40,-75?units=si`;

const request = https.request(url, (response)=>{
    let data = '';

    response.on('data',(chunk) => {
        data = data + chunk.toString();
    });
    response.on('end', ()=>{
        const body = JSON.parse(data);
        console.log(body);
    });
})

request.on('error', (error) => {
    console.log('An error',error)
});

request.end();