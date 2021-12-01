

const reducer = (state, action) => {

    if (action.type === "increment") {

        return state + 1;

    } else if (action.type === "decrement") {

        return state - 1;

    }

}

const Text = () => {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (

        <div>

            <h1>{state}</h1>

            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
        </div>
    )
}

export default Text