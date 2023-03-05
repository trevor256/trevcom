exports.myDateTime = function () {
    return Date();
  }; 


exports.logToFile = function () {
fs.appendFile('log.txt', 'Hello content2!', function (err) {
    if (err) throw err;
    console.log('loged!');
  }); 
};