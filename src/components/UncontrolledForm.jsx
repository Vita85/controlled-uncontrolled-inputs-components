import React, { useState, useRef } from "react";

const UncontrolledForm = () => {
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const yearRef = useRef(null);

  const [submitBook, setSubmitBook] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitBook({
      title: titleRef.current.value,
      author: authorRef.current.value,
      year: yearRef.current.value,
    });
    setIsVisible(true);
  };
  const clearInput = () => {
    (titleRef.current.value = ""),
      (authorRef.current.value = ""),
      (yearRef.current.value = ""),
      setSubmitBook({
        title: "",
        author: "",
        year: "",
      });
      setIsVisible(false);
  };
  return (
  
    <div className="form-container">
        <h1>Неконтрольовані поля вводу</h1>
      <form onSubmit={handleSubmit}>
        <div  className="form-inputs">
          <label>
            Title:
            <input type="text" ref={titleRef} />
          </label>
          <label>
            Author:
            <input type="text" ref={authorRef} />
          </label>
          <label>
            Year:
            <input type="text" ref={yearRef} />
          </label>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {isVisible && submitBook && (
        <div className="submit-info">
          <h2 > Book info: </h2>
          <h4>Title : {submitBook.title}</h4>
          <p>Author : {submitBook.author}</p>
          <span>Year : {submitBook.year}</span>
        </div>
      )}
      <button onClick={clearInput}  className="clear-btn">Clear</button>
    </div>
  );
};

export default UncontrolledForm;
