// const square = function (x) {
//     return x*x;
// }

// const square = x => x * x;


// console.log(square(13));

const event = {
    name: 'Birthday Party',
    guesList: ['Andrew', 'Jane','Mike'],
    printGuestList() {
        console.log('Guest list for '+ this.name);
        this.guesList.forEach(guest => {
            console.log(guest +' is attending ' + this.name)
        })
    }
}

event.printGuestList();
