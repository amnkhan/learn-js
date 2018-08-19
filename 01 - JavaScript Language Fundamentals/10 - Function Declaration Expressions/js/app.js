// Function Decalration

function greet( firstName = 'Al Amin' , lastName = 'Khan' ) {
    // Old ES5 way of setting defaults
    if ( typeof firstName === 'undefined' ) {
        firstName = 'Al Amin';
    }
    if ( typeof lastName === 'undefined' ) {
        lastName = 'Khan';
    }
    return 'Hello' + ' ' + firstName + ' ' + lastName;
}

console.log(greet('Rahat' , 'Nizam'));

// Function Expression
const square = function (x) {
    return x*x;
};

console.log(square(9));

// Immidiatley Invokable Function Expression

(function () {
    console.log('Iffie Ran..')
})();

(function (name) {
    console.log('Iffie Ran..' + name)
})('Now');

// Property Methods
const todo = {
    add: function() {
        console.log('Add todo..')
    },
    edit: function(id) {
        console.log(`This is your ${id}`)
    },
}

todo.add();
todo.edit(34);