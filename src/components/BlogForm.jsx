import React, { useState } from 'react';
import "../index.css";

const BlogForm = ({ onSubmit, loading }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError('Both title and content are required');
      return;
    }
    onSubmit({ title, content });
    setTitle('');
    setContent('');
    setError('');
  };

  return (
    <div className="blog-form-container">
      <h2 className="blog-form-heading">Create a New Post</h2>
      {error && (<div className="blog-form-error">{error}</div>)}
      <div className="blog-form-fields">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="blog-form-input"
          disabled={loading}
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="blog-form-textarea"
          rows="5"
          disabled={loading}
        ></textarea>
        <button
          onClick={handleSubmit}
          className="blog-form-button"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
