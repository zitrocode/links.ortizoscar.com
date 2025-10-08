import "./link.style.css";

interface ILinkCover {
  url: string | undefined;
  alt: string;
}

interface ILink {
  name: string;
  url: string;
  image?: ILinkCover;
}

const LinkImage: React.FC<ILinkCover> = ({ url, alt }) => {
  return <img src={url} alt={alt} />;
};

const Link: React.FC<ILink> = ({ name, url, image }) => {
  return (
    <a
      href={url}
      className={` ${
        image?.url !== undefined ? "link-item--image" : "link-item"
      }`}
      target="_blank"
    >
      {image?.url !== undefined ? (
        <LinkImage url={image.url} alt={image.alt} />
      ) : (
        name
      )}
    </a>
  );
};

export default Link;
