type ResultBoardProps = {};

const ResultBoard: React.FC<ResultBoardProps> = ({ children }) => {
  return <div className="w-20 h-12 bg-white flex items-center justify-center mx-auto rounded-md font-bold">{children}</div>;
};

export default ResultBoard;
