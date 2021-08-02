import Album from "./Album";
import "./AlbumList.css";

const AlbumList = (props) => {
  if (props.albums.length === 0) {
    return <h2 className="albums-list__fallback"> No Album found!</h2>;
  }

  return (
    <ul className="album-list">
      {props.albums.map((album) => {
        return <Album key={album.name} album={album} />;
      })}
    </ul>
  );
};

export default AlbumList;
