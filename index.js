var fs = require('fs');
var casper = require("casper").create({
    // other options here
    viewportSize: {
        width: 1920,
        height: 1080
    }
}); 

var contents = fs.read('./brillTest.txt') + "";

var links = contents.split('\n');


var i = 291;
casper.start().each(links, function(self, link) {
    self.thenOpen(link,
        {
            method: "get",
            data: {
                p: Math.floor(i/291),
            }
        },
        function() {
        this.wait(3000, function() {
            this.capture('Brilliant '+i+'.png', {
                top: 90,
                left: 370,
                width: 1185,
                height: 990
            });
        });
        i+=1;
    });
});







// casper.start(link[0], function() {
//     console.log('hi')
// });

// var i = 0

//             casper.waitFor(function check() {
//                 casper.open(link[i]);
//                 casper.then(function() {
//                     this.echo('.');
//                     this.capture('Brilliant '+i+'.png', {
//                         top: 90,
//                         left: 370,
//                         width: 1185,
//                         height: 990
//                     });
//                 });

//                 return fs.exists('Brilliant '+i+'.png')

//                 }, function then() {

//                     console.log('done' + i);
//                     i+=1;

//                 }, function timeout(){
                
//                 }, 5000000);
// casper.then(function(){
//     setInterval(downloadI, 3000); 
// });

// casper.waitFor(function check() {
//     return fs.exists('Brilliant '+1454+'.png')
// }, function then() {
//     console.log('done2!');
// }, function timeout(){

// }, 5000000);


casper.run();