// let { PythonShell } = require('python-shell')

// function runPy() {
//     return new Promise(async function(resolve, reject) {
//         let options = {
//             mode: 'text',
//             pythonOptions: ['-u'],
//             scriptPath: './test.py', //Path to your script
//             args: [JSON.stringify({ "name": ["xyz", "abc"], "age": ["28", "26"] })] //Approach to send JSON as when I tried 'json' in mode I was getting error.
//         };

//         await PythonShell.run('test.py', options, function(err, results) {
//             //On 'results' we get list of strings of all print done in your py scripts sequentially. 
//             if (err) throw err;
//             console.log('results: ');
//             for (let i of results) {
//                 console.log(i, "---->", typeof i)
//             }
//             resolve(results[1]) //I returned only JSON(Stringified) out of all string I got from py script
//         });
//     })
// }

// function runMain() {
//     return new Promise(async function(resolve, reject) {
//         let r = await runPy()
//         console.log(JSON.parse(JSON.stringify(r.toString())), "Done...!@") //Approach to parse string to JSON.
//     })
// }

// runMain() //run main function

let { PythonShell } = require('python-shell')
    // var py = new PythonShell();
PythonShell.runString('x=1+1;print(x)', null, function(err) {
    if (err) throw err;
    console.log('finished');
});

// run a simple script
PythonShell.run('test.py', null, function(err, results) {
    // script finished
    if (err) throw err;
    console.log('python file', results);
});