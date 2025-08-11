import { useState } from 'react';
import type { FormEvent } from 'react';

interface CommitForm {
  type: string;
  scope: string;
  subject: string;
  body: string;
}

const CommitGenerator = () => {
  const [formData, setFormData] = useState<CommitForm>({
    type: '',
    scope: '',
    subject: '',
    body: '',
  });

  const commitTypes = [
    { value: 'feat', label: 'Features', description: 'A new feature' },
    { value: 'fix', label: 'Bug Fixes', description: 'A bug fix' },
    {
      value: 'docs',
      label: 'Documentation',
      description: 'Documentation only changes',
    },
    {
      value: 'style',
      label: 'Styles',
      description: 'Changes that do not affect the meaning of the code',
    },
    {
      value: 'refactor',
      label: 'Code Refactoring',
      description: 'A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      label: 'Performance Improvements',
      description: 'A code change that improves performance',
    },
    {
      value: 'test',
      label: 'Tests',
      description: 'Adding missing tests or correcting existing tests',
    },
    {
      value: 'build',
      label: 'Builds',
      description:
        'Changes that affect the build system or external dependencies',
    },
    {
      value: 'ci',
      label: 'Continuous Integration',
      description: 'Changes to CI configuration files and scripts',
    },
    {
      value: 'chore',
      label: 'Chores',
      description: "Other changes that don't modify src or test files",
    },
    {
      value: 'revert',
      label: 'Reverts',
      description: 'Reverts a previous commit',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { type, scope, subject, body } = formData;
    const commitMessage = `${type}${
      scope ? `(${scope})` : ''
    }: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(commitMessage);
    alert('Commit message copied to clipboard!');
  };

  return (
    <div className="commit-generator">
      <h2>Commit Message Generator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            {commitTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label} ({type.value})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="scope">Scope:</label>
          <input
            type="text"
            id="scope"
            name="scope"
            value={formData.scope}
            onChange={handleChange}
            placeholder="e.g., auth, database (optional)"
          />
        </div>

        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Brief description"
          />
        </div>

        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Detailed description (optional)"
            rows={4}
          />
        </div>

        <button type="submit">Generate & Copy</button>
      </form>
    </div>
  );
};

export default CommitGenerator;
