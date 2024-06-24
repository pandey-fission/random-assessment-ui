import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import DropIcon from '../../Assets/download.png';
import './Upload.css'

import UploadedFiles from "../UploadedFiles/UploadedFiles";

//background Images - Upload
import pdfIcon from '../../Assets/file pdf icon.png';
import microsoftWordIcon from '../../Assets/Icon simple-microsoftword.png';
import wordIcon from '../../Assets/Icon awesome-file-word.png';
import fileIcon from '../../Assets/Icon document.png';
import downloadIcon from '../../Assets/Icon download.png';

function Upload(props) {
    const { files, file, setFile, uploadAndGenerateMCQs, setHeaderData, setMcqs } = props;

    useEffect(() => {
        setMcqs([]);
        setHeaderData({ title: 'Upload and attach files', subtitle: 'upload and attach files to this project' })
    }, [])

    const handleUpload = (files) => {
        if (files.length > 0 && files[0].type.includes('pdf')) {
            setFile(files[0])
        } else {
            alert('Please Choose a PDF')
        }
    }

    const handleShowMCQS = (index) => {
        setHeaderData({ title: "MCQ'S", subtitle: 'Multiple Choice Questions' })
        setMcqs(files[index]?.mcqs || []);
    }

    return <React.Fragment>
        <div className='background-images'>
            <img src={pdfIcon} alt="pdf-icon" className='pdf-icon' />
            <img src={microsoftWordIcon} alt="microsoftwordIcon" className='microsoftwordIcon' />
            <img src={wordIcon} alt="wordIcon" className='wordIcon' />
            <img src={fileIcon} alt="fileIcon" className='fileIcon' />
            <img src={downloadIcon} alt="downloadIcon" className='downloadIcon' />
        </div>
        <div className="upload">
            <div className="upload-container">
                <Dropzone className="upload-section" multiple={false} accept="application/pdf" onDrop={acceptedFiles => handleUpload(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <section className="drop-box" accept={["pdf"]}>
                            <div {...getRootProps()} className="drop-icon">
                                <input {...getInputProps()} />
                                <img src={DropIcon} alt="drop-icon" />
                                {file ? <p>{file.path}</p> : <p><u>Click to Upload</u> or Drag and Drop</p>}
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button className="p-3" disabled={!file} onClick={() => uploadAndGenerateMCQs(file)} variant="dark">Attach files</Button>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </div>
        </div>
        <div>
            <UploadedFiles files={files} handleShowMCQS={handleShowMCQS} />
        </div>
    </React.Fragment>
}

export default Upload;