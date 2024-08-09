// components/TextEditor.js
import { useState, useEffect, useRef } from 'react';

const TextEditor = () => {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const audioRef = useRef(null);

  const handleChange = (event) => {
    const newText = event.target.value;

    // If we are in the middle of history, remove any future steps
    if (currentStep < history.length - 1) {
      setHistory((prev) => prev.slice(0, currentStep + 1));
    }

    setText(newText);
    setHistory((prev) => [...prev, newText]);
    setCurrentStep((prev) => prev + 1);
  };

  const handleClick = () => {
    // Play the sound
    if (audioRef.current) {
      audioRef.current.play();
    }
    // You can add additional functionality for the button here
    console.log('Button clicked!');
  };
  const handleUndo = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setText(history[currentStep - 1]);
    }
  };

  const handleRedo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setText(history[currentStep + 1]);
    }
  };

  useEffect(() => {
    // Set text to the current history step
    if (currentStep >= 0 && currentStep < history.length) {
      setText(history[currentStep]);
    }
  }, [currentStep, history]);

  return (
    <div className="flex flex-col items-center p-4">
      <textarea
        className="w-full h-64 p-2 border border-gray-300 rounded"
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
      />
      <div className="flex space-x-2 mt-4">
        <button
          onClick={handleUndo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={currentStep <= 0}
        >
          Undo
        </button>
        <button
          onClick={handleRedo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={currentStep >= history.length - 1}
        >
          Redo
        </button>
        <butto onClick={handleClick}n>Click me</butto>
        <audio ref={audioRef} src="/sounds/clicksound.mp3" preload="auto" />
      </div>
    </div>
  );
};

export default TextEditor;
