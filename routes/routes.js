var fs = require('fs')

var appRouter = function (app) {

    // app.get("/", ( req, res ) => {
    //     res.send("Hello World");
    // });

    app.get("/data/dashboard", ( req, res ) => {
        var data;
        fs.readFile('src/app/data/dashboard.json', function (err, file_data){
            if(err)
                res.send('file not found');

            data = JSON.parse(file_data);
            res.status(200).send(data);
        });
        
    });

}
  
module.exports = appRouter;