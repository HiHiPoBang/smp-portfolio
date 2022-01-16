import styles from '../styles/Markdown.module.css';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MarkdownWrapper = ({ children }: Props) => {
  return <article className={styles['markdown-body']}>{children}</article>;
};
export default MarkdownWrapper;
