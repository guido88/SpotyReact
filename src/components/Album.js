import "./Album.css";

const Album = (props) => {
  return (
    <li>
      <div className="album-item">
        <img src={props.album.images[2].url} alt="Album img not available" />
        <div className="album-item__title">
          <h2>{props.album.name} - {props.album.album_type}</h2>
          <div className="album-item__release"> Release date: {props.album.release_date}</div>
        </div>

        {/* <p>Artists: {props.album.artists}</p> */}
      </div>
    </li>
  );
};

export default Album;
