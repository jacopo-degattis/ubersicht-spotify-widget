export const command = "whoami";
export const refreshFrequency = 1000;

// the CSS style for this widget, written using Emotion
// https://emotion.sh/
export const className = `
  margin-left: 20px;
  margin-top: 20px;
  width: 300px;
  background-image: url('https://i.scdn.co/image/ab67616d0000b2733ccb55cd765166e424ca0540');
  background-position: center center;
  background-size: 100% 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 24pt 32pt 0 rgba(0, 0, 0, .4);


  #medium #bottom-info {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    height: 60px;
    bottom: 0px;
    width: 100%;
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
`;

const options = {
  widgetSize: "medium",
  widgetTheme: "dark",
  transparentInfo: true,
};

export const render = ({ output }) => {
  return (
    <div>
      {options.widgetSize === "medium" && (
        <div id="medium">
          <div id="bottom-info">
            <p id="track-title">Voce</p>
            <p id="track-artist">Madame</p>
          </div>
        </div>
      )}
    </div>
  );
};
