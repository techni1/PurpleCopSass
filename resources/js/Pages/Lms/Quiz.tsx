import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Layout from "../../Layouts";

interface Option {
  id: number;
  option_text: string;
}

interface Question {
  id: number;
  question_text: string;
  options: Option[];
}

interface Answer {
  question_id: number;
  selected_option: number;
}

interface ResultQuestion {
  question_text: string;
  correct_option: string;
  selected_option: string;
  is_correct: boolean;
}

interface PageProps {
  questions: Question[];
  topicId: string;
}

export default function QuizPage({ topicname }) {
  const { questions, topicId } = usePage<PageProps>().props;
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<{
    score: string;
    topicName: string;
    questions: ResultQuestion[];
  } | null>(null);

  const handleOptionChange = (questionId: number, optionId: number) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = () => {
    const userId = 1; // Replace with actual user ID from authentication
    const answerList: Answer[] = Object.keys(answers).map((questionId) => ({
      question_id: parseInt(questionId),
      selected_option: answers[parseInt(questionId)],
    }));

    axios
      .post("/submit-answers", {
        user_id: userId,
        topic_id: topicId,
        answers: answerList,
      })
      .then((response) => {
        const { correctAnswers, totalQuestions, questions, topic_name } =
          response.data;
        setResult({
          score: `Your score is ${correctAnswers} out of ${totalQuestions}`,
          topicName: topic_name, // Store the topic name
          questions: questions, // Store the questions with correct/incorrect answers
        });
      })
      .catch((error) => {
        console.error(
          "Error submitting answers:",
          error.response?.data || error.message
        );
        setResult({
          score: "An error occurred. Please try again.",
          topicName: "",
          questions: [],
        });
      });
  };

  return (
    <React.Fragment>
      <Head title="Quiz Page" />

      <div className="page-content">
        <Container fluid>
          <h4>Quiz Topic: {topicname}</h4>

          {/* Conditionally render questions and submit button */}
          {!result && (
            <>
              {questions.map((question, index) => (
                <div key={question.id} className="p-2">
                  <div>
                    <strong>
                      <span>{index + 1}.</span> {question.question_text}
                    </strong>
                  </div>
                  {question.options.map((option) => (
                    <div key={option.id} className="form-check p-2">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.id}
                        checked={answers[question.id] === option.id}
                        onChange={() =>
                          handleOptionChange(question.id, option.id)
                        }
                        className="form-check-input"
                      />
                      <label className="form-check-label">
                        {" "}
                        {option.option_text}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
              <Row>
                <Col xl={4}></Col>
                <Col xl={4} align="center">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary btn-block"
                  >
                    Submit
                  </button>
                </Col>
                <Col xl={4}></Col>
              </Row>
            </>
          )}

          {/* Result Section */}
          {result && (
            <div>
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <div align="center">
                    <div>{result.score}</div>
                  </div>
                </div>
              </div>
              {result.questions.map((q, index) => (
                <div key={index} className="p-2">
                  <h5>
                    <span>{index + 1}.</span> {q.question_text}
                  </h5>
                  <div>
                    <strong>Selected:</strong> {q.selected_option} <br />
                    <strong>Correct:</strong> {q.correct_option} <br />
                    {q.is_correct ? (
                      <span style={{ color: "green" }}>Correct</span>
                    ) : (
                      <span style={{ color: "red" }}>Incorrect</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
}

QuizPage.layout = (page: any) => <Layout children={page} />;
