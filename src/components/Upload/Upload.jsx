import React from "react";
import { Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import DropIcon from '../../Assets/download.png';
import Spinner from "../../Common/Spinner/Spinner";
import './Upload.css'

function Upload(props) {
    const { file, setFile, isFileAttached, setFileAttached, handleGetMcqs, isLoading } = props;

    const handleUpload = (files) => {
        if (files.length > 0 && files[0].type.includes('pdf')) {
            setFile(files[0])
        } else {
            alert('Please Choose a PDF')
        }
    }

    return <React.Fragment>
        <div className="upload">
            <div className="upload-container">
                {!isFileAttached ? <>
                    <h3>Upload and Attach Files</h3>
                    <span>Upload and attach files to this project.</span>
                    <Dropzone multiple={false} accept="application/pdf" onDrop={acceptedFiles => handleUpload(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <section className="drop-box" accept={["pdf"]}>
                                <div {...getRootProps()} className="drop-icon">
                                    <input {...getInputProps()} />
                                    <img src={DropIcon} alt="drop-icon" />
                                    {file ? <p>{file.path}</p> : <p><u>Click to Upload</u> or Drag and Drop</p>}
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <div className="d-flex justify-content-center">
                        <Button onClick={() => setFileAttached(true)} variant="dark">Attach Files</Button>
                    </div>
                </> : <>
                    <div className="d-flex flex-column generate-window h-100">
                        {!isLoading ? <>
                            <h2>Generate Questions</h2>
                            <Button onClick={handleGetMcqs} variant="dark">Generate</Button>
                        </> : <>
                            <Spinner />
                        </>}
                    </div>
                </>}

            </div>
        </div>
    </React.Fragment>
}

export default Upload;