import { useParams } from 'react-router-dom';
import { useQuizEditor } from '@/Hooks/useQuizEditor';
import QuestionManager from '@components/organisms/quiz/QuestionManager/QuestionManager';
import './EditQuizPage.css';

const EditQuizPage = () => {
  const { id } = useParams();
  const { questions, setQuestions, saveProgress, loading } = useQuizEditor(id || '');
  const MOCK_QUESTIONS = [
    {
      id: "q1",
      type: "text",
      content: "What is the capital of Malaysia?",
      options: ["Kuala Lumpur", "Penang", "Johor Bahru", "Kuching"],
      correctAnswer: 0, // Index of the correct option
      points: 1000,
      timeLimit: 20 // seconds
    },
    {
      id: "q2",
      type: "image",
      content: "Which food is shown in this picture?",
      imageUrl: "https://example.com/path-to-sarawak-laksa.jpg",
      options: ["Nasi Lemak", "Sarawak Laksa", "Kolo Mee", "Satay"],
      correctAnswer: 1,
      points: 1000,
      timeLimit: 30
    },
    {
      id: "q3",
      type: "text",
      content: "Which framework is known for using a Virtual DOM?",
      options: ["Angular", "Svelte", "React", "Vanilla JS"],
      correctAnswer: 2,
      points: 1000,
      timeLimit: 20
    }
  ];

  //   if (loading) return <div>Loading...</div>;

  // EditQuizPage.tsx
  return (
    <div className="edit-quiz-container"> {/* Matches .edit-quiz-container in CSS */}
      <header className="edit-header"> {/* Matches .edit-header in CSS */}
        <h1>Edit Quiz Questions</h1>
        <button className="save-btn" onClick={saveProgress}>
          Save Progress
        </button>
      </header>

      <main className="questions-list"> {/* Matches .questions-list in CSS */}
        <QuestionManager 
          questions={MOCK_QUESTIONS} 
          setQuestions={(q) => setQuestions(q as any)} 
        />
        
        {/* Assuming you want an Add Question button at the bottom */}
        <button className="add-q-btn">
          + Add New Question
        </button>
      </main>
    </div>
  );
};

export default EditQuizPage;