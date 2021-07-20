import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const ReduxSample = () => {
    const dispatch = useDispatch();

    const count = useSelector((state) => state.count)

    const handleCount = () => {
        //dispatch関数にactionを渡す
        dispatch({
            type: "add_count"
        })
    }


    //③DOM部分作成
    return (
        <div>
            <button
                onClick={handleCount}>+1
            </button>
            <p>{count}</p>
        </div>
    )
}

//初期状態を定義
const initialState = {count: 0}

//①Reducer作成
export const counter = (state = initialState, action) => {
    switch (action.type) {
        case "add_count":
            const newCount = state.count + 1;

            //stateはオブジェクトで返す
            return {count: newCount}
        default:
            return state
    }

}


