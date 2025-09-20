import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = ({ taskId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetch(`/api/comments/task/${taskId}`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(console.error);
  }, [taskId]);

  const submitComment = async () => {
    if (!newComment) return;
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ content: newComment, task: taskId }),
      });
      const comment = await res.json();
      setComments([...comments, comment]);
      setNewComment('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="comments-container">
      <h4>Comments</h4>
      {comments.map(c => (
        <div key={c._id} className="comment">
          <strong>{c.user?.username || "User"}</strong> <span>{new Date(c.createdAt).toLocaleString()}</span>
          <p>{c.content}</p>
        </div>
      ))}
      <textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Add a comment..."></textarea>
      <button onClick={submitComment}>Post</button>
    </div>
  );
};

export default Comments;
