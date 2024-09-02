import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function submissionHandler(event) {
    event.preventDefault();
    onAddPost({
      body: enteredBody,
      author: enteredAuthor,
    });
    onCancel();
  }

  function bodyChangedHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangedHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <form className={classes.form} onSubmit={submissionHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangedHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangedHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
