import React, { useState } from 'react';
import './mobileAboutUsQuestions.css';

const MobileAboutUsQuestions = ({ questionsData }) => {
    const [questions, setQuestions] = useState(questionsData);

    const toggleQuestionStatus = (id) => {
        const oldItem = questions[id - 1];
        const value = !oldItem['showAnswer'];
        const newItem = { ...questions[id - 1], showAnswer: value };
        const before = questions.slice(0, id - 1);
        const after = questions.slice(id);
        setQuestions([...before, newItem, ...after]);
    };

    const renderQuestions = () => {
        return questions.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-unstyled mobile-about-us-questions-li-wrapper"
                >
                    <div onClick={() => toggleQuestionStatus(item.id)}>
                        <span className="mobile-about-us-questions-li-number">{`0.${item.id}`}</span>
                        <span className="mobile-about-us-questions-li-question">
                            {item.question}
                        </span>
                        <span className="mobile-about-us-questions-li-show-answer">
                            {item.showAnswer ? '-' : '+'}
                        </span>
                    </div>

                    <span className="mobile-about-us-questions-li-answer">
                        {item.showAnswer ? item.answer : null}
                    </span>
                </li>
            );
        });
    };
    return (
        <div className="mobile-about-us-questions-wrapper">
            <div className="mobile-about-us-introduce-hebron-command-squares-text-wrapper">
                <div className="mobile-about-us-introduce-hebron-command-squares-wrapper">
                    <div className="mobile-about-us-introduce-hebron-command-square"></div>
                    <div className="mobile-about-us-introduce-hebron-command-square"></div>
                </div>
                <span>Питання (FAQ)</span>
            </div>

            {renderQuestions()}
            <div className="mobile-about-us-questions-empty-block"></div>
        </div>
    );
};

export default MobileAboutUsQuestions;
