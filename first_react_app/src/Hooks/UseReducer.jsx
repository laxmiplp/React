import React, { useReducer } from "react";

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducerFunction, 0);
    // //Ex: 1 using swith case with string
    // function reducerFunction(count, actionType) {
    //     switch (actionType) {
    //         case 'Increment':
    //             count += 1
    //             return count
    //         case 'Reset':
    //             count = 0
    //             return count
    //         case 'Decrement':
    //             count -= 1
    //             return count
    //         default:
    //             return count

    //     }
    // }
    //Ex: 2 using swith case with object type
    // function reducerFunction(count, actionType) {
    //     switch (actionType.type) {
    //         case "Increment":
    //             count += 1;
    //             return count;
    //         case "Reset":
    //             count = 0;
    //             return count;
    //         case "Decrement":
    //             count -= 1;
    //             return count;
    //         default:
    //             return count;
    //     }
    // }
    // //Ex: 3 using if else condition with object type
    function reducerFunction(count, actionType) {

        if (actionType.type == 'Increment') {
            count = count + 1;
            console.log(`Increment: ${count}`);
            return count
        } else if (actionType.type == 'Reset') {
            count = 0;
            console.log(`Reset: ${count}`);
            return count

        } else if (actionType.type == 'Decrement') {
            count = count - 1;
            console.log(`Decrement: ${count}`);
            return count

        } else {
            return count;
        }
    }
    //Ex: 4 using if else condition with string
    // function reducerFunction(count, actionType) {

    //     if (actionType == 'Increment') {
    //         count = count + 1;
    //         console.log(`Increment: ${count}`);
    //         return count
    //     } else if (actionType == 'Reset') {
    //         count = 0;
    //         console.log(`Reset: ${count}`);
    //         return count

    //     } else if (actionType == 'Decrement') {
    //         count = count - 1;
    //         console.log(`Decrement: ${count}`);
    //         return count

    //     } else {
    //         return count;
    //     }
    // }

    const handleIncrement = () => {
        // //Ex: 1 using swith case with string
        // dispatch('Increment')

        //Ex: 2 using swith case with object type
        dispatch({ type: "Increment" });
    };
    const handleReset = () => {
        // //Ex: 1 using swith case with string
        // dispatch('Reset')

        //Ex: 2 using swith case with object type
        dispatch({ type: "Reset" });
    };
    const handleDecrement = () => {
        // //Ex: 1 using swith case with string
        //dispatch('Decrement')

        //Ex: 2 using swith case with object type
        dispatch({ type: "Decrement" });
    };
    return (
        <>
            <h1>UseReducer Hook</h1>
            <h1>Counter:{count}</h1>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </>
    );
};

export default UseReducer;
