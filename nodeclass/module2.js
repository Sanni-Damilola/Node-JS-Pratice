const { readFile, writeFile, fstat} = require("fs")

readFile("./content/first.txt","utf8", (err, result) => {
      if(err) {
          console.log(err);
      }
      console.log(result);
})

