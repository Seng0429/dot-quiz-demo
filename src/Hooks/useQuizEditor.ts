import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@services/firebase/firebaseService';

export const useQuizEditor = (quizId: string) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load existing data
  useEffect(() => {
    const fetchQuiz = async () => {
      const docRef = doc(db, 'quizzes', quizId);
      const snap = await getDoc(docRef);
      if (snap.exists()) setQuestions(snap.data().questions || []);
      setLoading(false);
    };
    fetchQuiz();
  }, [quizId]);

  const saveProgress = async () => {
    const docRef = doc(db, 'quizzes', quizId);
    await updateDoc(docRef, { questions, lastUpdated: new Date() });
    alert("Progress saved!");
  };

  return { questions, setQuestions, saveProgress, loading };
};