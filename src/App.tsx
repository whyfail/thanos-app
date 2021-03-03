import React, { useState } from "react";
import { disintegrate } from "./utils/thanos";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";

const App: React.FC = () => {
  const [allImgs, setAllImgs] = useState([
    { url: img1, key: "thanos1" },
    { url: img2, key: "thanos2" },
    { url: img3, key: "thanos3" },
    { url: img4, key: "thanos4" },
  ]);

  const handleThanos = (domId) => {
    const list = allImgs;

    disintegrate(document.querySelector(`#${domId}`));

    setTimeout(() => {
      setAllImgs(
        list.filter((item) => {
          return item.key !== domId;
        })
      );
    }, 2000);
  };

  const handelReset = () => {
    setAllImgs([
      { url: img1, key: "thanos1" },
      { url: img2, key: "thanos2" },
      { url: img3, key: "thanos3" },
      { url: img4, key: "thanos4" },
    ]);
  };

  return (
    <>
      <button onClick={handelReset}>复位</button>
      <div className="app">
        {allImgs.map((item) => {
          return (
            <div
              key={item.key}
              id={item.key}
              onClick={() => handleThanos(item.key)}
            >
              <img src={item.url} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
