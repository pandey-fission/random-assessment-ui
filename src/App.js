import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Upload from './components/Upload/Upload';

//background Images - Upload
import pdfIcon from './Assets/file pdf icon.png';
import microsoftWordIcon from './Assets/Icon simple-microsoftword.png';
import wordIcon from './Assets/Icon awesome-file-word.png';
import fileIcon from './Assets/Icon document.png';
import downloadIcon from './Assets/Icon download.png';

//background Images - Generate
import messageIcon from './Assets/Icon material-question-answer.png';
import smallQuestion from './Assets/Icon metro-question.png';
import boldQuestion from './Assets/Icon awesome-question.png';
import thinQuestion from './Assets/Icon open-question-mark.png';
import questionCircle from './Assets/Icon awesome-question-circle.png'
import MCQs from './components/MCQs/MCQs';

const randomMcqs = [
  {
    "question": "What is Artificial Intelligence?",
    "options": [
      "A type of hardware used in computers",
      "The science of making computers behave like humans",
      "A programming language",
      "A type of network protocol"
    ],
    "answer": "The science of making computers behave like humans"
  },
  {
    "question": "Which of the following is a common application of AI in daily life?",
    "options": [
      "Web development",
      "Online customer support chatbots",
      "Network security protocols",
      "Desktop publishing"
    ],
    "answer": "Online customer support chatbots"
  },
  {
    "question": "What does 'machine learning' refer to in the context of AI?",
    "options": [
      "Machines learning how to operate without human intervention",
      "The ability of machines to adapt to new data and learn from it",
      "Teaching machines to understand human emotions",
      "Programming machines to perform tasks"
    ],
    "answer": "The ability of machines to adapt to new data and learn from it"
  },
  {
    "question": "Which of the following is NOT a type of machine learning?",
    "options": [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Manual learning"
    ],
    "answer": "Manual learning"
  },
  {
    "question": "What is the main goal of natural language processing (NLP)?",
    "options": [
      "To develop new programming languages",
      "To enable machines to understand and respond to human language",
      "To create realistic animations",
      "To enhance computer graphics"
    ],
    "answer": "To enable machines to understand and respond to human language"
  },
  {
    "question": "Who is considered one of the pioneers of AI and created the Turing Test?",
    "options": [
      "Alan Turing",
      "Isaac Newton",
      "Albert Einstein",
      "Nikola Tesla"
    ],
    "answer": "Alan Turing"
  },
  {
    "question": "Which algorithm is often used for classification and regression tasks in machine learning?",
    "options": [
      "Quick Sort",
      "K-means clustering",
      "Linear regression",
      "Breadth-First Search"
    ],
    "answer": "Linear regression"
  },
  {
    "question": "What is 'deep learning'?",
    "options": [
      "A subset of machine learning involving neural networks with many layers",
      "The process of learning AI programming languages",
      "A type of reinforcement learning",
      "Learning algorithms that mimic human brain function"
    ],
    "answer": "A subset of machine learning involving neural networks with many layers"
  },
  {
    "question": "Which of the following is a popular framework for building machine learning models?",
    "options": [
      "React",
      "TensorFlow",
      "Django",
      "Bootstrap"
    ],
    "answer": "TensorFlow"
  },
  {
    "question": "What is the primary function of a convolutional neural network (CNN)?",
    "options": [
      "To process and analyze sequential data",
      "To perform natural language processing tasks",
      "To recognize and process visual data, such as images and videos",
      "To manage database transactions"
    ],
    "answer": "To recognize and process visual data, such as images and videos"
  }
]


function App() {
  const [file, setFile] = useState(null);
  const [isFileAttached, setFileAttached] = useState(false);
  const [mcqs, setMcqs] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const handleGetMcqs = () => {
    setisLoading(true)
    setTimeout(() => {
      setMcqs(randomMcqs);
      setisLoading(false);
    }, 2000);
  }

  return (
    <div className="App">
      <Header />
      {mcqs.length > 0 ?
        <MCQs mcqs={mcqs} /> :
        <>
          <div className='background-images'>
            <img src={isFileAttached ? messageIcon : pdfIcon} alt="pdf-icon" className='pdf-icon' />
            <img src={isFileAttached ? smallQuestion : microsoftWordIcon} alt="microsoftwordIcon" className='microsoftwordIcon' />
            <img src={isFileAttached ? boldQuestion : wordIcon} alt="wordIcon" className='wordIcon' />
            <img src={isFileAttached ? thinQuestion : fileIcon} alt="fileIcon" className='fileIcon' />
            <img src={isFileAttached ? questionCircle : downloadIcon} alt="downloadIcon" className='downloadIcon' />
          </div>
          <Upload file={file} setFile={setFile} isFileAttached={isFileAttached} setFileAttached={setFileAttached} handleGetMcqs={handleGetMcqs} isLoading={isLoading} />
        </>}
    </div>
  );
}

export default App;
