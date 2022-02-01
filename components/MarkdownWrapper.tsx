import '../styles/Markdown.module.css';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MarkdownWrapper = ({ children }: Props) => {
  return <article className="markdown-body">{children}</article>;
};
export default MarkdownWrapper;
