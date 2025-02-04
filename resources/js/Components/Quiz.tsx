import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Container, Alert } from 'react-bootstrap';

interface Option {
    id: number;
    text: string;
    is_correct: boolean;
}

interface Question {
    id: number;
    text: string;
    options: Option[];
}

interface Response {
    question_id: number;
    option_id: number;
}

const Quiz: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [responses, setResponses] = useState<Response[]>([]);
    const [score, setScore] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('/api/questions')
            .then(response => setQuestions(response.data))
            .catch(() => setError('Failed to load questions.'));
    }, []);

    const handleOptionChange = (questionId: number, optionId: number) => {
        setResponses(prevResponses => {
            const existingResponse = prevResponses.find(r => r.question_id === questionId);
            if (existingResponse) {
                return prevResponses.map(r =>
                    r.question_id === questionId ? { ...r, option_id: optionId } : r
                );
            } else {
                return [...prevResponses, { question_id: questionId, option_id: optionId }];
            }
        });
    };

    const handleSubmit = () => {
        axios.post('/api/submit-quiz', { responses })
            .then(response => setScore(response.data.score))
            .catch(() => setError('Failed to submit answers.'));
    };

    return (
        <Container>
            <h1>Quiz</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {questions.map(question => (
                <div key={question.id}>
                    <h3>{question.text}</h3>
                    <Form>
                        {question.options.map(option => (
                            <Form.Check
                                key={option.id}
                                type="radio"
                                name={`question-${question.id}`}
                                id={`option-${option.id}`}
                                label={option.text}
                                onChange={() => handleOptionChange(question.id, option.id)}
                            />
                        ))}
                    </Form>
                </div>
            ))}
            <Button onClick={handleSubmit}>Submit</Button>
            {score !== null && <h2>Your Score: {score}</h2>}
        </Container>
    );
};

export default Quiz;
