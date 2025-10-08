import { useContext } from "react";

import AppContext from "./contexts/AppContext";

import Group from "./components/molecules/Group";
import Link from "./components/atoms/Link";
import Text from "./components/atoms/Text";

/** Assets files */
import "./App.css";

const App: React.FC = () => {
  const { getTranslate } = useContext(AppContext);
  return (
    <>
      {getTranslate.groups.map((group, groupIndex) => {
        return (
          <Group key={groupIndex} title={group.name}>
            {group.description && <Text>{group.description}</Text>}
            {group.links.map((link, linkIndex) => {
              return (
                <Link
                  key={linkIndex}
                  name={link.name}
                  url={link.url}
                  image={{ url: link.image?.url, alt: link.name }}
                />
              );
            })}
          </Group>
        );
      })}
    </>
  );
};

export default App;
