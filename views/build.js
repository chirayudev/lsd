import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./build.module.css";
import {BsDice5} from "react-icons/bs"
import {FaDiscord,FaTwitter} from "react-icons/fa"
import Link from "next/link";
import { Router, useRouter } from "next/router";
import Popup from "./modal";
import {bodyArr,costumesArr,GlassesArr,EyeArr,SmilesArr,HeadArr,NeckArr} from "./images"


function BuildABruh() {

  let bodyNum = Math.floor(Math.random() * 6) 
  let ClothesNum = Math.floor(Math.random() * 20) 
  let EyeNum = Math.floor(Math.random() * 8) 
  let GlassesNum = Math.floor(Math.random() * 12) 
  let NeckNum = Math.floor(Math.random() * 16) 
  let SmileNum = Math.floor(Math.random() * 11) 
  let HeadNum = Math.floor(Math.random() * 25) 


  const [bgColor, setBgColor] = useState("white");
  const router = useRouter()
  const [manualRefresh, setManualRefresh] = useState(0);
  const [randomRefresh, setRandomRefresh] = useState(0)

  const [onlyBg, setOnlyBg] = useState(false);
  const [mapArray, setMapArray] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [imgCollection, setImgCollection] = useState([
    { uri: `/new/Races/Zombie.png`,order:  1,value:1 },
    { uri: `/new/Bosstumes/None.png`,order:2,value:1 },
    { uri: `/new/Gaze/Boggly.png`,order:3,value:1 },
    { uri: `/new/EyePieces/None.png`,order:4,value:1 },
    { uri: `/new/Funk/None.png`,order:5,value:1 },
    { uri: `/new/Smiles/Cigar.png`,order:6,value:1 },
    { uri: `/new/Headwears/None.png`,order:7,value:1 },
  ]);

  console.log(imgCollection, "imgCollection");
  console.log(onlyBg, "onlyBg");
  console.log(mapArray,"mapArray");
  console.log(costumesArr[0],"firstImg");




  const loadImage = (url) => {

    return new Promise((resolve, reject) => {
      const img = new Image();
      console.log(img, "checkImg");
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`load ${url} fail`));
      img.src = url;
    });
  };

  function order(a, b) {
    return a.order < b.order ? -1 : (a.order > b.order ? 1 : 0);
}

useEffect(() => {
  if (window.performance) {
    if (performance.navigation.type == 1) {
     
      RandomFunc()
    }
  }
}, [])

  useEffect(() => {
    imgCollection.forEach(depictRandom);

  }, [manualRefresh,randomRefresh]);





  


  const  depictRandom = async (options) => {
  
console.log(options,"options");

    const myOptions = Object.assign({}, options);
    setMapArray([])
   console.log(myOptions,"myOptions");

      loadImage(myOptions.uri).then((img) => {
      
        
      let newObject = {newImg:img,order:options.order}
      console.log(newObject,"newObject");
      setMapArray((pre) => [...pre, newObject])
      console.log(mapArray,mapArray.sort(order),"renderImg");
     
      
    });
  };

  function uniqByKeepLast(a, key) {
    return [
        ...new Map(
            a.map(x => [key(x), x])
        ).values()
    ]
}
  useEffect(() => {
    const getContext = () =>
    document.getElementById("myCanvas").getContext("2d");
  const ctx = getContext();

  ctx.clearRect(0, 0, 500, 500);
 

  if (onlyBg) {
    ctx.globalCompositeOperation = "destination-over";
    setOnlyBg(false);
    console.log("entered");
  } else {
    ctx.globalCompositeOperation = "source-over";
    setOnlyBg(false);
    console.log("notentered");

  }

  console.log(uniqByKeepLast(mapArray, it => it.order),"mapArrayInside");
  uniqByKeepLast(mapArray, it => it.order).sort(order).map(i => {
      return ctx.drawImage(
        i.newImg,0,0,500,500  
      );
    }) 
  }, [mapArray,randomRefresh])
  

  function updateFieldChanged(value,ogValue, index) {
    console.log("index: " + index);
    let newArr = [...imgCollection];
    newArr[index]["uri"] = value;
    newArr[index]["value"] = ogValue;

    setImgCollection(newArr);
  }


  function DownloadImage() {
 var link = document.createElement('a');
      link.download = 'lsd.png';
      link.href = document.getElementById('myCanvas').toDataURL()
      link.click();
    setShowPopup(false)
  }

  function RandomFunc() {

    
    updateFieldChanged(`/new/Races/${bodyArr[bodyNum]}.png`,bodyArr[bodyNum], 0);
    
    updateFieldChanged(`/new/Bosstumes/${costumesArr[ClothesNum]}.png`,costumesArr[ClothesNum],1);
    updateFieldChanged(`/new/Gaze/${EyeArr[EyeNum]}.png`, EyeArr[EyeNum],2);
    updateFieldChanged(`/new/EyePieces/${GlassesArr[GlassesNum]}.png`,GlassesArr[GlassesNum],3);
    updateFieldChanged(`/new/Funk/${NeckArr[NeckNum]}.png`,NeckArr[NeckNum], 4);
    updateFieldChanged(`/new/Smiles/${SmilesArr[SmileNum]}.png`,SmilesArr[SmileNum], 5);
    updateFieldChanged(`/new/Headwears/${HeadArr[HeadNum]}.png`,HeadArr[HeadNum],6);
    setRandomRefresh(randomRefresh + 1)
  }

  return (
    <div>
        <nav id="header">
        <div class="wrapper">
           
        <a href="index.html" class="main-logo">
                            <img src="/assets/logo.png" alt="Lousy Sloth Den NFT" width="188" />
                        </a>
            <div class="navigation">
                
  
                <a class="menu-toggle" tooltip="Menu" tooltip-position="bottom"><i class="bx bx-menu"></i></a>
           
                  
                    <Link href="/" style={{textDecoration:"none"}} >Home</Link>
                    <Link href="/" style={{textDecoration:"none"}} >FAQ</Link>
                  
                    <FaDiscord style={{color:"#acacac",marginLeft:"30px",cursor:"pointer",fontSize:"30px",marginBottom:"5px"}} />
               
                    <FaTwitter style={{color:"#acacac",marginLeft:"30px",cursor:"pointer",fontSize:"28px",marginBottom:"5px"}}  />
                
                </div>
            </div>
        </nav>


        <Popup show={showPopup} setShow={setShowPopup} primaryCta={DownloadImage} />
   
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.mainTxt}>Build Your <span style={{color:"#f9be70"}} >LSD</span> </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "55rem",
            margin: "55px auto 0",
          }}
        >
          <div style={{position:"relative"}} >
            <canvas
              id="myCanvas"
              width="500"
              height="500"
              style={{ backgroundColor: bgColor }}
            ></canvas>
            <div className={styles.randomBtn} onClick={RandomFunc} > 
              <BsDice5 />
            </div>
          </div>

          <div style={{ width: "30%" }}>
            <div style={{ marginTop: "20px" }}>
              <Form.Select onChange={(e) => setBgColor(e.target.value)}>
                <option>Select Background</option>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="lightgreen">Green</option>
                <option value="lightblue">Blue</option>
                <option value="lightpink">Pink</option>
                <option value="purple">Purple</option>
              </Form.Select>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Form.Select
              value={imgCollection[0].value}
                onChange={(e) => {
                  // setBody(e.target.value);
                  updateFieldChanged(`/new/Races/${e.target.value}.png`,e.target.value, 0);
                  setOnlyBg(true);
                  setManualRefresh(manualRefresh + 1)
                }}
              >
                <option value={1} >Select Fur</option>
                {bodyArr.map((i) => {
                  return (
                    <option key={i} value={i}>
                      {i }
                    </option>
                  );
                })}
              </Form.Select>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Form.Select
              value={imgCollection[1].value}
                onChange={(e) => {
                  updateFieldChanged(
                    `/new/Bosstumes/${e.target.value}.png`,
                    e.target.value,
                    1
                  );
                  setManualRefresh(manualRefresh + 1)
                }}
              >
                <option value={1}> Select Clothes</option>
                {costumesArr.map((i) => {
                  return (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  );
                })}
              </Form.Select>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Form.Select
              value={imgCollection[6].value}
                onChange={(e) => {
                  updateFieldChanged(
                    `/new/Headwears/${e.target.value}.png`,
                    e.target.value,
                    6
                  );
                  setManualRefresh(manualRefresh + 1)
                }}
              >
                <option value={1} >Select Head</option>
                {HeadArr.map((i) => {
                  return (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Form.Select
              value={imgCollection[2].value}
                onChange={(e) => {
                  updateFieldChanged(`/new/Gaze/${e.target.value}.png`,e.target.value, 2);
                  setManualRefresh(manualRefresh + 1)
                }}
              >
                <option value={1} >Select Eyes</option>
                {EyeArr.map((i) => {
                  return (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  );
                })}
              </Form.Select>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Form.Select
              value={imgCollection[3].value}
                onChange={(e) => {
                  updateFieldChanged(
                    `/new/EyePieces/${e.target.value}.png`,
                    e.target.value,
                    3
                  );
                  setManualRefresh(manualRefresh + 1)
                }}
              >
                <option value={1} >Select Glasses</option>
                {GlassesArr.map((i) => {
                  return (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Form.Select
              value={imgCollection[5].value}
                onChange={(e) => {
                  updateFieldChanged(`/new/Smiles/${e.target.value}.png`,e.target.value, 5);
                  setManualRefresh(manualRefresh + 1)
                }}
              >
                <option value={1} >Select Mouth</option>
                {SmilesArr.map((i) => {
                  return (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  );
                })}
              </Form.Select>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Form.Select
              value={imgCollection[4].value}
                onChange={(e) => {
                  updateFieldChanged(`/new/Funk/${e.target.value}.png`,e.target.value, 4);
                  setManualRefresh(manualRefresh + 1)
                }}
              >
                <option value={1}>Select Neck</option>
                {NeckArr.map((i) => {
                  return (
                    <option key={i} value={i}>
                      {i }
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </div>
        </div>

        <div>
          <button onClick={() => setShowPopup(true) } className={styles.button} >Download </button>
        </div>
      </div>
    </div>
     </div>
  );
}

export default BuildABruh;
