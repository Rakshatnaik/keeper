import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function passValues(newArea) {
    setNotes((preNotes) => {
      return [...preNotes, newArea];
    });
  }
  function deleteOnClick(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea newValues={passValues} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteOnClick}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
