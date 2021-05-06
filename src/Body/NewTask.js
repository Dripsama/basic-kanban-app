import React from "react";
import { useState, useRef } from "react";
import useComFocus from "./useComFocus";

export default function NewTask({ task }) {
  const [focus, setFocus] = useState(initialState);

  const component = useRef();
  useComFocus(component, () => setFocus(false));

  //getting the value of the task
  const getTaskValue = () => {
    const input = document.getElementById("inputTaskArea").value;
    //if empy return
    if (input.trim().length === 0) {
      return;
    }
    task(input);
    setFocus(false);
  };

  //value of task is taken if input is pressed
  const onKeyDown = (e) => {
    const { key, shiftKey } = e;
    if (shiftKey && key === "Enter") {
      return;
    }
    if (key === "Enter") {
      getTaskValue();
    }
  };
  return focus ? (
    <div ref={component} isFocused={focus}>
      <textarea
        onKeyDown={onKeyDown}
        id="inputTaskArea"
        autoFocus
        placeholder="enter the task"
        type="text"
      />
      <br />
      <button value="" onClick={getTaskValue}>
        <b>addicon</b>Add new task
      </button>
    </div>
  ) : (
    <div ref={component} isFocused={focus} onClick={() => setFocus(true)}>
      <b>addicon</b>Add new task
    </div>
  );
}
