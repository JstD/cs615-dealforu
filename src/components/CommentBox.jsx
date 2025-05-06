// src/components/CommentBox.jsx
import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      console.log("Comment submitted:", comment); // Replace with your comment submission logic
      setComment(""); // Clear the input after submission
    }
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-3 w-full max-w-2xl">
      {/* Avatar */}
      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Username and Input */}
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-700">User</div>
        <form onSubmit={handleCommentSubmit} className="mt-1">
          <input
            type="text"
            placeholder="Say something...!"
            className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            aria-label="Add a comment"
          />
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
