import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { Image } from 'antd'

export default function Test() {
  const ClientCamera = useRef();
  const ManagerVoice = useRef();
  const [img, setImg] = useState(null);

  let currentCamera = "back";
  let camera = {
    front: { audio: true, video: { facingMode: "user" } },
    back: { audio: true, video: { facingMode: { exact: "environment" } } },
  };

  useEffect(() => {
    let forPhoto = {
      video: {
        width: { ideal: 1980 },
        height: { ideal: 1080 }
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

  const makePhoto = () => {
    let video = ClientCamera.current;
    let width = video.offsetWidth;
    let height = video.offsetHeight;
    let newWidth = 0;
    let newHeight = 0;

    while (newWidth < 3000 && newHeight < 3000) {
      newWidth += width;
      newHeight += height;
    }
    const res = {
      width: newWidth,
      height: newHeight
    };

    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    canvas.width = res.width;
    canvas.height = res.height;
    context.drawImage(video, 0, 0, res.width, res.height);

    let data = canvas.toDataURL("image/jpeg", 0.5);  
    setImg(data);  
  }

  return <>
    <Head>
      <meta name="viewport" content={"width=device-width"} />
    </Head>
    <div>
      <Image style={{ width: '100px', height: '100px', objectFit: 'cover' }} src={img} />
      <span tabIndex={0} role="button" style={{ color: '#D02323', textDecorationLine: 'underline', cursor: 'pointer', fontSize: '2em' }} onClick={() => makePhoto()}>Сделать снимок</span>
    </div>
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
