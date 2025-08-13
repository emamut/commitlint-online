import './App.css';
import CommitGenerator from './components/CommitGenerator';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import './components/CommitGenerator.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ThemeToggle />
        <div className="App">
          <h1>Conventional Commit Generator</h1>
          <CommitGenerator />
        </div>
      </div>
    </ThemeProvider>
  );
}
