import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Upload from './components/Upload/Upload';
import MCQs from './components/MCQs/MCQs'

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
  const [headerData, setHeaderData] = useState({ title: 'Upload and attach files', subtitle: 'upload and attach files to this project' });
  const [mcqs, setMcqs] = useState([]);
  const [files, setFiles] = useState([{ title: 'Construction', size: '110MB', status: 'Uploaded', mcqs: randomMcqs }])

  const uploadAndGenerateMCQs = async (file) => {
    try {
      const data = {
        title: file.name,
        size: `${Math.ceil(file.size / 1024)}KB`,
        status: 'Uploading',
        mcqs: []
      };
      setFiles(prev => [data, ...prev]);
      setFile(null);

      // Create a FormData object to hold the file
      const formData = new FormData();
      formData.append('file', file);

      // Uploading
      const response = await axios.post('https://bac6-2409-40f0-11d2-5d6b-c4f5-1dc9-d27-b8df.ngrok-free.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { mcqs_list } = response?.data;
      if (mcqs_list) {
        const responseData = {
          title: file.name,
          size: `${Math.ceil(file.size / 1024)}KB`,
          status: 'Uploaded',
          mcqs: mcqs_list
        };
        setFiles(prev => [responseData, ...prev.slice(1)])
      }
    } catch (error) {
      console.error(error);
      setFiles(prev => [{ title: file.name, size: `${Math.ceil(file.size / 1024)}KB`, status: 'Failed', mcqs: [] }, ...prev.slice(1)])
    }
  };
  
  return (
    <div className="App">
      <Header title={headerData.title} subtitle={headerData.subtitle} setMcqs={setMcqs} />
      {!mcqs.length ?
        <Upload files={files} file={file} setFile={setFile} uploadAndGenerateMCQs={uploadAndGenerateMCQs} setHeaderData={setHeaderData} setMcqs={setMcqs} /> :
        <MCQs mcqs={mcqs} />
      }
    </div>
  );
}

export default App;
