import "./group.style.css";

interface IGroup {
  children: React.ReactNode;
  title: string;
}

const Group: React.FC<IGroup> = ({ children, title }) => {
  return (
    <div className="group-contents">
      <h2 className="group--title">{title}</h2>
      <div className="group--items">{children}</div>
    </div>
  );
};

export default Group;
