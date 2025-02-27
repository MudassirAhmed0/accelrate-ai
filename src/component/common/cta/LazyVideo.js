"use client";
import { useEffect, useState } from "react";

const LazyVideo = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("video-container");
      if (footer && footer.getBoundingClientRect().top < window.innerHeight) {
        setLoadVideo(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="video-container" className="w-full h-[63vh]">
      {loadVideo ? (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/0w8nGZL4nWQ?autoplay=1&mute=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-xl border border-white"
        ></iframe>
      ) : (
        <div className="bg-black w-full h-full flex items-center justify-center text-white">
          Loading video...
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
