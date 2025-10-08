import Header from "../components/organisms/Header";
import "./layout.style.css";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="center">{children}</div>
      </div>
    </>
  );
};

export default Layout;
