import React, { useState } from "react";

const ControlledForm = () => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: "",
    year: "",
  });

  const [submitBook, setSubmitBook] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setBookInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    setIsVisible(true)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitBook(bookInfo);
  };
  const clearInput = () => {
    setBookInfo({
      title: "",
      author: "",
      year: "",
    });
    setSubmitBook({
      title: "",
      author: "",
      year: "",
    });
    setIsVisible(false);
  };
  return (
    <div  className="form-container">
      <h1>Контрольовані поля вводу</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={bookInfo.title}
              onChange={handleTextChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={bookInfo.author}
              onChange={handleTextChange}
            />
          </label>
          <label>
            Year:
            <input
              type="text"
              name="year"
              value={bookInfo.year}
              onChange={handleTextChange}
            />
          </label>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {isVisible && submitBook && (
        <div className="submit-info">
          <h2> Book info: </h2>
          <h4>Title : {submitBook.title}</h4>
          <p>Author : {submitBook.author}</p>
          <span>Year : {submitBook.year}</span>
        </div>
      )}
      <button onClick={clearInput} className="clear-btn">Clear</button>
    </div>
  );
};

export default ControlledForm;
