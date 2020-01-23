// Redux action set
// All the state changes are made by one of the methods
//
// Author : Simon Li  Jan 23, 2020
//
class Action {
    static increment(value) {
        return value + 1;
    }

    static decrement(value) {
        return value - 1;
    }
     
    static reset() {
        return 0
    }
}

export default Action;
