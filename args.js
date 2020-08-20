function sum1() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}   


function sum2(...args) {
    let sum = 0;
    for(let i =0; i<args.length; i++) {
        sum += args[i]
    }
    return sum
}

Function.prototype.myBind = function (ctx) {
    const fn = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function _boundFn() {
        const callArgs = Array.from(arguments);
        return fn.apply(ctx, bindArgs.concat(callArgs));
    }
}

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
    return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

function curriedSum(numArgs) {
    let numbers = [];

    function _curriedSum(num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            let sum = 0;

            numbers.forEach((ele) => {sum += ele});

            return sum;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
    const args = [];
    const fn = this;

    function _curriedFn(arg) {
        args.push(arg);

        if (args.length === numArgs) {
            return fn(...args);
        } else {
            return _curriedFn;
        }
    }
    return _curriedFn;
}

Function.prototype.curry1 = function(numArgs) {
    const args = [];
    const fn = this;

    function _curriedFn(arg) {
        args.push(arg);

        if (args.length === numArgs) {
            return fn.apply(null,args);
        } else {
            return _curriedFn;
        }
    }
    return _curriedFn;
}