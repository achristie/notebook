"use client";
import { useRef, useState } from "react";

interface FrameProps {
  name: string;
}

export default function Frame({ name }: FrameProps) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<string>("800px");

  const onLoad = () => {
    setHeight(frame.current?.contentWindow?.document.body.scrollHeight + "px");
  };

  return (
    <iframe
      ref={frame}
      src={`/${name}.html`}
      width="100%"
      height={height}
      onLoad={onLoad}
      scrolling="no"
    ></iframe>
  );
}