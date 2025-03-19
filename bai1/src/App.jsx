import React, {useReducer } from "react";

export default function TangGia(){
    
      const initialState = {count: 0};
    
      const reducer = (state, action) => {
        switch (action.type) {
            case '+':
                return {...state, count: state.count + action.value};
            case '-':
                return {...state, count: state.count - action.value};
            default:
                return state;
        }
      }

      const [state, dispatch] = useReducer(reducer, initialState);
      const handleChange = (type) =>{
        var value = 1;
        console.log(type);
        dispatch({type, value});
      }
    
    return(
        <div className="wrapper" style={{padding: 50}}>
            <h1>Tăng giảm</h1>
            <span >{state.count}</span>
            <br />
            <button 
                onClick={() => handleChange('+')}
            >
                Increase
            </button>
            <button
                onClick={() => handleChange('-')}
            >
                Decrease
            </button>
        </div>
    )
}