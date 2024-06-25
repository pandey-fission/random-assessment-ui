import React, { useState } from "react"
import './UploadedFiles.css';

import { Card, Button } from 'react-bootstrap';
import { FaFilePdf } from "react-icons/fa";


const UploadedFiles = (props) => {
    const { files, handleShowMCQS } = props;

    return <React.Fragment>
        {files.map((file, index) => {
            return <Card className="uploaded-pdfs" key={index}>
                <Card.Body className="uploaded-card-body">
                    <div className="d-flex">
                        <div className="pdf-image">
                            <FaFilePdf size={'2rem'} />
                        </div>
                        <div className="d-flex justify-content-center flex-column p-1 px-4" style={{ width: '20rem' }}>
                            <p className="p-0 m-0">{file?.title || 'title-not-found'}</p>
                            <span className="p-0">{file?.size || 'size-not-found'}</span>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress">
                            {/* Specify width in % on chunk by chunk upload */}
                            <span className={file.status === 'Uploaded' ? 'animation' : ''}></span>
                        </div>
                        <div>100%</div>
                    </div>
                    <div>
                        <div>{file.status}</div>
                    </div>
                    <div>
                        <Button disabled={!file?.mcqs.length} onClick={() => { handleShowMCQS(index) }} variant="dark">Show MCQ's</Button>
                    </div>
                </Card.Body>
            </Card>
        })}
    </React.Fragment>
}

export default UploadedFiles