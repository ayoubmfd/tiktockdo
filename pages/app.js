import React from "react";
import ReactDOM from "react-dom";
import DownloadTikTokVideo from "./DownloadTikTokVideo";
const App = () => {
  return (
    <div>
      <h1>TikTok Video Downloader</h1>
      <DownloadTikTokVideo />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));