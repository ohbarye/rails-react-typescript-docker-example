import React from 'react';
import './App.css';

const fetchContent = async (updateContent: (content: string) => void) => {
  const response = await fetch('http://localhost:3001/greetings/hello',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  updateContent(data.content);
};

const App: React.FC = () => {
  const [content, updateContent] = React.useState('Waiting for a response from Rails...');

  React.useEffect(() => {
    fetchContent(updateContent);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {content}
        </p>
      </header>
    </div>
  );
}

export default App;
