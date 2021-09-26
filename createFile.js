const fs = require("fs")

fs.writeFile("HelloWorld.txt", "Hello Wolrd!", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successfully wrote file!");
    }
});