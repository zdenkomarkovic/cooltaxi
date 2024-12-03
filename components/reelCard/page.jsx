"use client";

import React from "react";

import { useInView } from "react-intersection-observer";

const ReelCard = ({ embedUrl }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} style={{ minHeight: "500px", marginBottom: "20px" }}>
      {inView && (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={embedUrl}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "0",
            margin: "1px",
            maxWidth: "540px",
            padding: "0",
            width: "100%",
          }}
        />
      )}
      {inView && <script async src="//www.instagram.com/embed.js"></script>}
    </div>
  );
};

export default ReelCard;
