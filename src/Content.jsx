import { useState,useEffect } from 'react';
import './App.css';

const Content = () => {
    
  const [memeImages,setMemeImages]=useState([])
  const [meme, setMeme] = useState({
    upperText: 'When React kicks in',
    lowerText: 'And everything just works',
    imgUrl: 'https://i.imgflip.com/1bij.jpg'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const generateNewMeme = () => {
    const randomIndex = Math.floor(Math.random() * memeImages.length);
    setMeme((prev) => ({
      ...prev,
      imgUrl: memeImages[randomIndex].url
    }));
  };

  useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res=>res.json())
        .then(info=>{setMemeImages(info.data.memes)})
  },[])

  return (
    <div className="content-container">
      <div className="inputs">
        <input
          type="text"
          name="upperText"
          placeholder="Enter upper text"
          value={meme.upperText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lowerText"
          placeholder="Enter lower text"
          value={meme.lowerText}
          onChange={handleChange}
        />
        <button className="generate-btn" onClick={generateNewMeme}>
          Generate New Meme
        </button>
      </div>

      <div className="meme">
        <img src={meme.imgUrl} alt="Meme" className="meme-img" />
        <h2 className="meme-text top">{meme.upperText}</h2>
        <h2 className="meme-text bottom">{meme.lowerText}</h2>
      </div>
    </div>
  );
};

export default Content;
