const EventEmitter = require("events");

class Ticket extends EventEmitter {
    constructor(suply) {
        super()
        this.suply = suply
    }

    printSomething() {
        console.log("HELLO")
    }
};

Ticket.printSomething()