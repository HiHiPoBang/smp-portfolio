import React, { useEffect } from 'react';

const Comment = () => {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('repo', 'HiHiPoBang/smp-portfolio');
    scriptEl.setAttribute('issue-term', 'pathname');
    scriptEl.setAttribute('theme', 'github-light');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', 'true');
    anchor?.appendChild(scriptEl);
    return () => {
      const parent = document.getElementById('comment-wrapper');
      const node = document.getElementById('inject-comments-for-uterances');
      if (node) {
        parent?.removeChild(node);
      }
    };
  });
  return (
    <div id="comment-wrapper" className="w-full">
      <div id="inject-comments-for-uterances"></div>
    </div>
  );
};

export default Comment;
