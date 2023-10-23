import "./Test.css";

interface TestProps {
  content: string;
  backgroundColor?: string;
}

export const Test = ({ content, backgroundColor }: TestProps) => {
  return (
    <div style={{ backgroundColor: backgroundColor }} className="test-wrapper">
      <p>{content}</p>
    </div>
  );
};
