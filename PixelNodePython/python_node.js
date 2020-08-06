var PythonShell = require('python-shell');

PythonShell.run('d_alembert.py', null, function(err) {
    if (err) throw err;
    console.log('finished');
});