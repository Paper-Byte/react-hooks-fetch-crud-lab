import React, { useState, useEffect } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

function App() {
  const [page, setPage] = useState('List');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const questionsFetch = async () => {
      const resp = await fetch('http://localhost:4000/questions');
      const data = await resp.json();
      setQuestions(data);
    };
    questionsFetch();
  }, []);

  const handleNewQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const handleDelete = (questionId) => {
    const newQuestions = questions.filter((question) => {
      return question.id !== questionId;
    });
    setQuestions(newQuestions);
  };

  console.log(questions);
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === 'Form' ? (
        <QuestionForm handleNewQuestion={handleNewQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          handleDelete={handleDelete}
        />
      )}
    </main>
  );
}

export default App;
