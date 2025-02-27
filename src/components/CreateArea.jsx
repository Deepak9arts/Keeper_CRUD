import React, { useState } from "react";

function CreateArea(props) {
  const [InputFields, setText] = useState({
    inputText: "",
    textAreaText: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setText((prevValue) => {
      if (name == "title") {
        return {
          inputText: value,
          textAreaText: prevValue.textAreaText,
        };
      } else if (name == "content") {
        return {
          inputText: prevValue.inputText,
          textAreaText: value,
        };
      }
    });
  }
  function onsubmit(event) {
    event.preventDefault();
    props.onAdd(InputFields);
    setText({ inputText: "", textAreaText: "" });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={InputFields.inputText}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={InputFields.textAreaText}
        />
        <button onClick={onsubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
