let fs = require("fs");

let arr = [`index1.js`, "index2.js", "index3.js"];

let arr1 = arr.forEach((file) => {
  fs.writeFile(`${file}`, "", "utf-8", (err) => {
    if (err) {
      console.log("something Error");
    } else {
      console.log(`${file} is created`);
    }
  });

  fs.unlink(`${file}`, (err) => {
    if (err) {
      console.log("Error Found");
    } else {
      console.log(`${file} is deleted`);
    }
  });
});
