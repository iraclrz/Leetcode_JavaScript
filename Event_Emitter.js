class EventEmitter {
    eventMap = {};

    subscribe(event, cb) {
        if (!this.eventMap.hasOwnProperty(event)) {
            this.eventMap[event] = new Set();
        }
        this.eventMap[event].add(cb);
        return {
            unsubscribe: () => {
                this.eventMap[event].delete(cb);
            }
        };
    }

    emit(event, args = []) {
        const res = [];
        (this.eventMap[event] ?? []).forEach((cb) => res.push(cb(...args)));
        return res;
    }
}

const actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"];
const values = [[], ["firstEvent"], ["firstEvent", function cb1() { return 5; }], ["firstEvent", function cb1() { return 6; }], ["firstEvent"]];

const eventEmitter = new EventEmitter();
let output = [];

for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const value = values[i];

    switch (action) {
        case "EventEmitter":
            output.push([]);
            break;
        case "subscribe":
            eventEmitter.subscribe(value[0], value[1]);
            output.push(["subscribed"]);
            break;
        case "emit":
            if (value && value.length > 0) {
                output.push(["emitted", eventEmitter.emit(value[0], value.slice(1))]);
            } else {
                output.push(["emitted", []]);
            }
            break;
        default:
            break;
    }
}

// Display output in terminal
console.log(output);


