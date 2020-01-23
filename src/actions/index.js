// Redux action set
// All the state changes are made by one of the methods
//
// Author : Simon Li  Jan 23, 2020
//
class Action {
    static increment(value) {
        return {"TYPE": 'INCREMENT', "value": value + 1};
    }

    static decrement(value) {
        return {"TYPE": 'DECREMENT', "value": value - 1};
    }
     
    static reset() {
        return {"TYPE": 'RESET', "value": 0}
    }
}

export default Action;
