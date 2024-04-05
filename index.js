
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(item) {
        result.push(callback(item));
    });
    return result;
}
function myReduce(collection, callback, initial) {
    let accumulator = initial !== undefined ? initial : collection[0];
    let startIndex = initial !== undefined ? 0 : 1;

    if (Array.isArray(collection)) {
        for (let i = startIndex; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], collection);
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = startIndex; i < keys.length; i++) {
            accumulator = callback(accumulator, collection[keys[i]], collection);
        }
    }

    return accumulator;
}

function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            return collection[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(item) {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
}

function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}


