istanbul-phantom-jasmine example
--------------------------

This is an example app showing how to use [istanbul](https://github.com/gotwarlost/istanbul), [phantomjs](http://phantomjs.org/), and [jasmine](https://jasmine.github.io/) together.

There are a few steps to get Istanbul tests on the browser:
1. Manually instrument the source code via `istanbul instrument`
2. Make the specs use the instrumented source code instead of the actual code
3. Get the coverage data from `window.__coverage__` after all tests have been run
4. Send the data from `window.__coverage__` to a server so that the coverage data can be saved
5. Run `istanbul report` to generate a report out of the coverage data

Run this with
```
npm install;
npm run test;
open tmp/report/index.html
```
