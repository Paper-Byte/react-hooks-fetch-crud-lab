import React from 'react';

function QuestionItem({ question, handleDelete, handleUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleQuestionDelete = () => {
    const deleteRequest = async () => {
      const resp = await fetch(
        `http://localhost:4000/questions/${id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await resp.json();
      handleDelete(id);
    };
    deleteRequest();
  };

  const handleQuestionUpdate = () => {
    const updateRequest = () => {
      const resp = fetch(`http://localhost:4000/questions/${id}`, {
        method: 'PATCH',
      });
    };
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleQuestionDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
