import "./text.style.css";

interface IText {
  children: React.ReactNode;
}
const Text: React.FC<IText> = ({ children }) => {
  return <p className="text-item">{children}</p>;
};

export default Text;
