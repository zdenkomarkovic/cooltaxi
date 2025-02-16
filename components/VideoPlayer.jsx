"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Video je u vidnom delu ekrana
        } else {
          setIsInView(false); // Video nije u vidnom delu ekrana
        }
      },
      {
        threshold: 0.5, // Video mora biti 50% vidljiv da bi počeo
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play(); // Pokreni video
      } else {
        videoRef.current.pause(); // Pauzira video kada nije u vidnom delu
      }
    }
  }, [isInView]);

  return (
    <div className="container mb-10 md:mb-20 mx-auto space-y-6 md:space-y-12 text-center">
      <h2 className="px-2 text-2xl  md:text-3xl">
        Centrala <span className="text-cool-green  font-bold"> Cool taxi</span>{" "}
        radi 24/7 Dostupna nasim musterijama tokom celog dana i noci
      </h2>
      <video ref={videoRef} controls width="100%" loop muted>
        <source src="/api/video" type="video/mp4" />
        Vaš pretraživač ne podržava video tag.
      </video>
    </div>
  );
}
