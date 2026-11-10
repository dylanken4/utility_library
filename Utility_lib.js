function validateEvent(name, capacity, fee) {
    if (name === "" || capacity < 0 || fee < 0) {
        return "Invalid event";
    }

    return "Valid event";
}

function calculateFee(fee, attendees = 1) {
    return fee * attendees;
}

function calculateDuration(start, end) {
    return end - start;
}

function hasCapacity(capacity, registered) {
    if (registered >= capacity) {
        return false;
    }

    return true;
}

function formatEventLabel(name) {
    return "Event: " + name;
}

function summarizeEvent(name, attendees, fee) {
    let totalCost = calculateFee(fee, attendees);

    return name + " has " + attendees +
        " attendees. Total fees: $" + totalCost;
}



let name;
let capacity;
let fee;
let attendees;
let start;
let end;
let registered;

console.log(validateEvent(name, capacity, fee));

console.log(calculateFee(fee, attendees));

console.log(calculateDuration(start, end));

console.log(hasCapacity(capacity, registered));

console.log(formatEventLabel(name));

console.log(summarizeEvent(name, attendees, fee));
