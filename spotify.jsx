export const command = "osascript 'spotifyWidget/lib/current_track.applescript'";
export const refreshFrequency = 1000;

// the CSS style for this widget, written using Emotion
// https://emotion.sh/

export const className = `
  #medium {
    margin-left: 20px;
    margin-top: 20px;
    width: 300px;
    background-image: url('https://i.scdn.co/image/ab67616d0000b2733ccb55cd765166e424ca0540');
    background-position: center center;
    background-size: 100% 100%;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 24pt 32pt 0 rgba(0, 0, 0, .4);
  }


  #medium #bottom-info {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    height: 60px;
    width: 300px;
    bottom: 0;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 0px 0px 10px 10px;
    flex-direction: column;
    font-family: Montserrat;
  }

  #medium #bottom-info #track-title {
    line-height: 0.2em;
    margin-bottom: 0px;
  }

  #medium #bottom-info #track-artist {
    line-height: 0.5em;
    font-weight: 200;
    font-size: 0.8rem;
  }

  #large {
    width: 300px;
    height: 400px;
    margin: 30px;
  }

  #large #bottom-info {
    height: 20%;
    width: 100%;
    position: relative;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    font-family: Montserrat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
  }

  #large #cover-image {
    vertical-align: middle;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  #large #bottom-info p {
    margin: 0px;
  }
  
  #large #bottom-info #track-artist {
    font-weight: 200;
  }
    
  #small {
    width: 300px;
    height: 75px;
    margin: 30px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px 10px 10px 10px;
    display: flex;
    position: "relative";
  }
  
  #small img {
    border-radius: 10px 0px 0px 10px;
  }
  
  #small #track-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 15px;
    font-family: Montserrat;
  }
  
  #small #track-info #track-name {
    color: black;
    font-weight: 600;
  }
  
  #small #track-info p {
    margin: 0;
  }

`;

export const updateState = (e, prevState) => {
  if (event.error) {
    return {
      ...prevState,
      warning: `We got an error: ${event.error}`
    }
  }
  const [artistName, trackName, albumName, duration, currentTime, coverImage, isLiked, darkMode] = e.output.split(" @ ");
  return {
    artistName,
    trackName,
    albumName,
    duration,
    currentTime,
    coverImage,
    isLiked,
    darkMode
  }
}

const options = {
  widgetSize: "small",
  widgetTheme: "dark",
  transparentInfo: true,
};

export const render = ({
  output, 
  artistName,
  trackName,
  albumName,
  duration,
  currentTime,
  coverImage,
  isLiked,
  darkMode 
}) => {
  return (
    <div>
      {options.widgetSize === "medium" ? (
        <div id="medium">
          <div id="bottom-info">
            <p id="track-title">Voce</p>
            <p id="track-artist">Madame</p>
          </div>
        </div>
      ) : options.widgetSize === "large" ? (
        <div id="large">
          <div>
            <img src={coverImage} id="cover-image" />
          </div>
          <div id="bottom-info">
            <div id="progress-bar" style={{
              backgroundColor: "white",
              height: "2px",
              position: "absolute",
              top: 0,
              left: 0,
              width: currentTime*100/duration + "%",
              transition: "0.2s"
            }}
            >
            </div>
            <p id="track-title">{trackName}</p>
            <p id="track-artist">{artistName}</p>
          </div>
        </div>
      ) : options.widgetSize === "small" && (
        <div id="small">
          <div style={{
            position: "absolute",
            top: 0,
          }}>
            ciao
          </div>
          <div>
            <img src={coverImage} width="75" />
          </div>
          <div id="track-info">
            <p id="track-name">{trackName}</p>
            <p id="artist-name">{artistName}</p>
          </div>
        </div>
      )}
    </div>
  );
};
