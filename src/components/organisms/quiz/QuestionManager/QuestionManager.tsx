import { useState } from 'react';
import QuestionCard from '@components/molecules/quiz/QuestionCard/QuestionCard';
import clsx from 'clsx'; // Use clsx for cleaner dynamic classes
import styles from './QuestionManager.module.css';

interface QuestionManagerProps {
  questions: any[];
  setQuestions: (questions: any[]) => void;
}

const QuestionManager = ({ questions, setQuestions }: QuestionManagerProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default first card active

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now().toString(),
      type: 'text',
      content: '',
      options: ['', '', '', ''], // Standardize to 4 for the grid
      correctAnswer: 0
    };
    setQuestions([...questions, newQuestion]);
    setActiveIndex(questions.length); // Auto-focus the new question
  };

  const updateQuestion = (index: number, updatedData: any) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], ...updatedData };
    setQuestions(newQuestions);
  };

  const deleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
    setActiveIndex(null);
  };

  return (
    <div className={styles.managerContainer}>
      {questions.map((q, index) => (
        <div 
          key={q.id} 
          onClick={() => setActiveIndex(index)}
          className={clsx(
            styles.cardWrapper, 
            activeIndex === index && styles.activeCard
          )}
        >
          <QuestionCard 
            data={q} 
            isActive={activeIndex === index} // Pass state to child
            onChange={(data: any) => updateQuestion(index, data)} 
            onDelete={() => deleteQuestion(index)}
          />
        </div>
      ))}
      
      <button className={styles.addBtn} onClick={addQuestion}>
        <span>+</span> Add Question
      </button>
    </div>
  );
};

export default QuestionManager;