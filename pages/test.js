import { useEffect, useRef } from 'react';
import Head from 'next/head'

export default function Test() {
  const ClientCamera = useRef();
  const ManagerVoice = useRef();

  let currentCamera = "back";
  let camera = {
    front: { audio: true, video: { facingMode: "user" } },
    back: { audio: true, video: { facingMode: { exact: "environment" } } },
  };

  useEffect(() => {
    let forPhoto = {
      video: {
        width: { ideal: 640 },
        height: { ideal: 360 }
      },
    };

    let tmpPhoto = { ...camera[currentCamera] };
    tmpPhoto["video"] = { ...tmpPhoto["video"], ...forPhoto["video"] };
    navigator.mediaDevices
    .getUserMedia(tmpPhoto)
    .then((stream) => {
      let el = ClientCamera.current;
      el.srcObject = stream;
      el.autoplay = true;
    })
    .catch(alert);
  });

  return <>
    <Head>
      <meta name="viewport" content={"width=device-width"} />
    </Head>
    <div>
      <video
        muted
        ref={ClientCamera}
        width={'100%'}
        height={'100%'}
        autoPlay={true}
        loop={true}
        playsInline={true}
      />
    </div>
    <div style={{ display: 'none' }}>
      <audio controls ref={ManagerVoice} />
    </div>
  </>
  ;
}
