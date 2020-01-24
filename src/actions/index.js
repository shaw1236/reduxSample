// Redux action set
// All the state changes are made by one of the methods
//
// Author : Simon Li  Jan 23, 2020
//
//////////////////////////////////////////////////////

class Action {
    static current_value = 0;

    static increment() {
        ++Action.current_value;
        Action.doSomething();
        return {type: 'INCREMENT'}; //triger the reducer
    }

    static decrement() {
        --Action.currentValue;
        Action.doSomething();
        return {type: 'DECREMENT'};  //triger the reducer
    }
     
    static reset() {
        Action.currentValue = 0;
        Action.doSomething();
        return {type: 'RESET'};  //triger the reducer
    }

    static doSomething() {
        //console.log(Action.currentValue);  // dummy code
        // do something with the currentValue....
    }
}

export default Action;
