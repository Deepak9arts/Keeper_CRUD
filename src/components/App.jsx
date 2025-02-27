import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNotes] = useState([]);
  function handleClick(newnote) {
    setNotes((prevnote) => [...prevnote, newnote]);
  }

  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((value, index) => index != id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleClick} />
      {note.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.inputText}
          content={item.textAreaText}
          onDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
