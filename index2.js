function nodeStyleCallback(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
}

function addNumbers(x, y, callback) {
    if (typeof x !== 'number') {
        callback(new Error('The first argument is not a number!'));
        return;
    }

    if (typeof y !== 'number') {
        callback(new Error('The second argument is not a number!'));
    } 

    var result = x + y;

    callback(null, result);
}

addNumbers(1, 2, nodeStyleCallback);
addNumbers('a', 2, nodeStyleCallback);
addNumbers(1, 'b', nodeStyleCallback);