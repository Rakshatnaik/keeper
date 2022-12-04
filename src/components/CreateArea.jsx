import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newArea, setNewArea] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNewArea((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.newValues(newArea);

    setNewArea({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expandClick() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={newArea.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expandClick}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={newArea.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
