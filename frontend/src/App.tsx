import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const fetchContent = async (updateContent: (content: string) => void) => {
  const response = await axios.get('http://localhost:3001/greetings/hello',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  updateContent(response.data.content)
};

const App: React.FC = () => {
  const [content, updateContent] = React.useState('Waiting for a response from Rails...');

  React.useEffect(() => {
    fetchContent(updateContent);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {content}
        </p>
      </header>
    </div>
  );
}

export default App;
