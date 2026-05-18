const https = require('https');
https.get('https://www.legendpestcontroltx.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^">]+)"/g);
    console.log(matches);
  });
});
