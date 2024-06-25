import React, { useState } from "react";
import './MCQs.css'
import { Accordion, Form, Button } from "react-bootstrap";

function MCQs(props) {
    const { mcqs } = props
    const [page, setPage] = useState(0);
    const [showAnswer, setShowAnswer] = useState([]);

    return <>
        <div className="mcq-parent-container">
            <div className="mcq-container">
                {mcqs.slice(page, page + 3).map((mcq, index) => {
                    return <Accordion className="p-1">
                        <Accordion.Item eventKey="1" className="py-4">
                            <Accordion.Header><h5>{page + index + 1} {'. '}{mcq.question}</h5></Accordion.Header>
                            <Accordion.Body className="accordion-body">
                                {mcq.options.map((m, index) => {
                                    return <Form.Check
                                        key={index}
                                        inline
                                        label={`${m}`}
                                        name={mcq.question}
                                        type={'radio'}
                                        id={`inline-radio-1`}
                                    />
                                })}
                                <div className="py-3">
                                    <Button className="mx-3" variant="dark" onClick={() => setShowAnswer(prev => [...prev, index])}>Show Answer</Button>
                                    {showAnswer.includes(index) && `Answer: ${mcq.answer}`}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                })}
                <div className="d-flex justify-content-end p-3">
                    <button className="previous-button" disabled={page <= 0} onClick={() => setPage(page - 3)}>{'<< previous'}</button>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center p-3">
            <Button className="next-button" disabled={mcqs.slice(page, page + 3).length < 3 || page + 3 === mcqs.length} onClick={() => setPage(page + 3)}>{'Next >>'}</Button>
        </div>
    </>
}

export default MCQs