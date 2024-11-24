const array = [
{id: 1, 

},

{
id: 2,
},

{
id: 14,
}
]



array.sort((a, b) => {
    if (a.id === b.id) {
        return 0;
    }

    if (a.id < b.id) {
        return -1;
    }

    if (a.id > b.id) {
        return 1;
    }
})

// This for an array sort func that allocates the >, < and === operators for these functions. 

console.log(array)


// var a = '1';
// this is an assignment operator, whereas 