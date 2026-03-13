import { DeleteOutlined, PictureOutlined, FontColorsOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import styles from './QuestionCard.module.css';

interface QuestionCardProps {
  data: any;
  isActive: boolean; // Control visibility of tools
  onChange: (updatedData: any) => void;
  onDelete: () => void;
}

const QuestionCard = ({ data, isActive, onChange, onDelete }: QuestionCardProps) => {
  
  const handleOptionChange = (optIndex: number, value: string) => {
    const newOptions = [...data.options];
    newOptions[optIndex] = value;
    onChange({ options: newOptions });
  };

  const addOption = () => {
    if (data.options.length < 4) {
      onChange({ options: [...data.options, ''] });
    }
  };

  return (
    <div className={styles.cardContent}>
      {/* 1. Header Logic: Show tools only if Active */}
      <div className={styles.header}>
        <div className={styles.modeToggle}>
          <button 
             onClick={(e) => { e.stopPropagation(); onChange({ type: 'text' }); }}
             className={clsx(styles.modeBtn, data.type === 'text' && styles.activeMode)}
          >
            <FontColorsOutlined /> Text
          </button>
          <button 
             onClick={(e) => { e.stopPropagation(); onChange({ type: 'image' }); }}
             className={clsx(styles.modeBtn, data.type === 'image' && styles.activeMode)}
          >
            <PictureOutlined /> Image
          </button>
        </div>

        {isActive && (
          <button className={styles.deleteBtn} onClick={(e) => { e.stopPropagation(); onDelete(); }}>
            <DeleteOutlined />
          </button>
        )}
      </div>

      {/* 2. Main Input Area */}
      <div className={styles.body}>
        {data.type === 'text' ? (
          <textarea 
            className={styles.questionInput}
            placeholder="Type your question here..."
            value={data.content}
            readOnly={!isActive} // Prevent typing if not clicked
            onChange={(e) => onChange({ content: e.target.value })}
          />
        ) : (
          <div className={styles.imageUploadPlaceholder}>
             {/* Replace with your Firebase Upload logic later */}
             <input type="file" disabled={!isActive} />
          </div>
        )}

        {/* 3. Options Grid: Always visible, but only editable if Active */}
        <div className={styles.optionsGrid}>
          {data.options.map((opt: string, i: number) => (
            <div key={i} className={styles.optionItem}>
              <div className={clsx(styles.radioCircle, data.correctAnswer === i && styles.correct)}></div>
              <input 
                placeholder={`Option ${i + 1}`}
                value={opt}
                disabled={!isActive}
                onChange={(e) => handleOptionChange(i, e.target.value)}
                className={styles.optionInput}
              />
            </div>
          ))}
        </div>

        {/* 4. Footer Tools */}
        {isActive && data.options.length < 4 && (
          <button onClick={addOption} className={styles.addOptionBtn}>
            + Add Option
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;