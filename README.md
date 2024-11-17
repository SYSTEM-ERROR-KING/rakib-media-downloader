## Example 
```code
const nayan = require('rakib-media-downloader');

nayan.alldown('url')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error downloading:', error);
  });
```
