import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const DownloadTikTokVideo = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const handleDownload = async () => {
    setIsDownloading(true);
    const response = await axios.get(videoUrl, {
      responseType: "blob",
    });
    const blob = new Blob([response.data], { type: "video/mp4" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tiktok-video.mp4";
    a.click();
    setIsDownloading(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter TikTok video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
      {isDownloading && (
        <div>
          Downloading... {downloadProgress}%
        </div>
      )}
    </div>
  );
};
export default DownloadTikTokVideo;