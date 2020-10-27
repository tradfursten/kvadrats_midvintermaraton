const fs = require('fs');
const fetch = require('node-fetch');

if (process.env.NETLIFY_SIGNUP_FORM_ID === undefined) {
  console.log('Missing NETLIFY_SIGNUP_FORM_ID environment variable!');
  done();
  return;
}
if (process.env.NETLIFY_RESULT_FORM_ID === undefined) {
  console.log('Missing NETLIFY_RESULT_FORM_ID environment variable!');
  done();
  return;
}

if (process.env.NETLIFY_API_AUTH === undefined) {
  console.log('Missing NETLIFY_API_AUTH environment variable!');
  done();
  return;
}

let registrationUrl = `https://api.netlify.com/api/v1/forms/${process.env.NETLIFY_SIGNUP_FORM_ID}/submissions/?access_token=${process.env.NETLIFY_API_AUTH}`;
let resultsUrl = `https://api.netlify.com/api/v1/forms/${process.env.NETLIFY_RESULT_FORM_ID}/submissions/?access_token=${process.env.NETLIFY_API_AUTH}`;

const buildDest = '.';

(async () => {
  await fetch(registrationUrl)
    .then(res => res.json())
    .then(json => {
        let signUps = [];

        for (let item of json) {
          let signUp = {
            name: item.data.name,
            distance: item.data.distance,
            time: item.data.time,
          };

          signUps.push(signUp);
        }

        // write data to file
        fs.mkdir(buildDest, function(err) {
          if (err && err.code !== 'EEXIST') {
            console.log(err);
            done();
          } else {
            fs.mkdir(buildDest + '/data', function(err) {
              if (err && err.code !== 'EEXIST') {
                console.log(err);
                done();
              } else {
                fs.writeFile(
                  buildDest + '/data/signUps.json',
                  JSON.stringify(signUps, null, 2),
                  function(err) {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log('Sign up data saved.');
                    }
                  }
                );
              }
            });
          }
        });
    })
    .catch(err => console.log(err));
})();


(async () => {
  await fetch(resultsUrl)
    .then(res => res.json())
    .then(json => {
        let results = [];

        for (let item of json) {
          let result = {
            name: item.data.name,
            distance: item.data.distance,
            time: item.data.time,
            link: item.data.link
          };

          results.push(result);
        }

        // write data to file
        fs.mkdir(buildDest, function(err) {
          if (err && err.code !== 'EEXIST') {
            console.log(err);
            done();
          } else {
            fs.mkdir(buildDest + '/data', function(err) {
              if (err && err.code !== 'EEXIST') {
                console.log(err);
                done();
              } else {
                fs.writeFile(
                  buildDest + '/data/results.json',
                  JSON.stringify(results, null, 2),
                  function(err) {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log('Result data saved.');
                    }
                  }
                );
              }
            });
          }
        });
    })
    .catch(err => console.log(err));
})();
