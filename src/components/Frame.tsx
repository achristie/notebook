"use client";
import { useRef, useState } from "react";

interface FrameProps {
  name: string;
}

export default function Frame({ name }: FrameProps) {
  const frame = useRef<HTMLIFrameElement>();
  const [height, setHeight] = useState<string>();

  const onLoad = () => {
    setHeight(frame.current.contentWindow.document.body.scrollHeight + "px");
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
// const [frameHeight , setFrameHeight] = useState()

//      function FrameWrapper() {
//       const ref = React.useRef();
//       const [height, setHeight] = React.useState("0px");
//       const onLoad = () => {
//         setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
//       };
//       return (
//         <iframe
//           ref={ref}
//           onLoad={onLoad}
//           id="myFrame"
//           src="http://demo_iframe.htm"
//           width="100%"
//           height={height}
//           scrolling="no"
//           frameBorder="0"
//           style={{
//             maxWidth: 640,
//             width: "100%",
//             overflow: "auto",
//           }}
//         ></iframe>
//       );
//     }
