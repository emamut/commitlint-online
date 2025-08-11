import './App.css';
import CommitGenerator from './components/CommitGenerator';
import './components/CommitGenerator.css';

export default function App() {
  return (
    <div className="App">
      <h1>Conventional Commit Generator</h1>
      <CommitGenerator />
    </div>
  );
}
