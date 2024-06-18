import React, { useState } from "react";
import './MCQs.css'
import { Accordion, Form, Button } from "react-bootstrap";

function MCQs(props) {
    const { mcqs } = props
    const [showAnswer, setShowAnswer] = useState([]);

    return <>
        <div className="mcq-header bg-black">
            <h1>MCQ's</h1>
            <span> Multiple Choice Questions </span>
        </div>
        <div className="p-5">
            {mcqs.map((mcq, index) => {
                return <Accordion className="p-1">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{mcq.question}</Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            <Form.Check
                                inline
                                label={`A. ${mcq.options[0]}`}
                                name={mcq.question}
                                type={'radio'}
                                id={`inline-radio-1`}
                            />
                            <Form.Check
                                inline
                                label={`B. ${mcq.options[1]}`}
                                name={mcq.question}
                                type={'radio'}
                                id={`inline-radio-2`}
                            />
                            <Form.Check
                                inline
                                label={`C. ${mcq.options[2]}`}
                                name={mcq.question}
                                type={'radio'}
                                id={`inline-radio-1`}
                            />
                            <Form.Check
                                inline
                                label={`D. ${mcq.options[3]}`}
                                name={mcq.question}
                                type={'radio'}
                                id={`inline-radio-2`}
                            />
                            <div className="py-3">
                                <Button className="mx-3" variant="dark" onClick={() => setShowAnswer(prev => [...prev, index])}>Show Answer</Button>
                                {showAnswer.includes(index) && `Answer: ${mcq.answer}`}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            })}
        </div>
    </>
}

export default MCQs