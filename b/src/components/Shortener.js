import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import '../css/Shortener.css'
import axios from "axios";
import DisplayLink from './DisplayLink';

function Shortener() {
  const [inputValue, setInputValue] = useState("")
  const [shortenLink, setShortenLink] = useState("");
  const [error, setError] = useState(false);
  const [domain, setDomain] = useState("shrtco.de")

  const handleClick = (e) => {
    setInputValue(e.target.value);
  }

  const fetchData = async () => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      if (domain === "shrtco.de"){
        setShortenLink(res.data.result.full_short_link);
      }
      if (domain === "9qr.de"){
        setShortenLink(res.data.result.short_link2);
      }
      if (domain === "shiny.link"){
        setShortenLink(res.data.result.original_link);
      }
      
    } catch(err) {
      setError(err);
    } 
  }

  const onHandleDomain = (e) => { 
    setDomain(e.target.value)
    console.log(domain)
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);


  return (
    <div>
      <h1>The <span>privacy-friendly</span> URL Shortener</h1>
      <div className='container'>
        <h1>Link Shortener</h1>
        <div className='link-input'>
          <label htmlFor='link' className='title'>Enter a link:</label>
          <input type="text" name="link" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
          <button onClick={handleClick}><FontAwesomeIcon icon={faArrowRight}/></button>
        </div>

        <div>
          <label>Short domain: </label>
          <input type="button" onClick={onHandleDomain} value="shrtco.de" />
          <input type="button" onClick={onHandleDomain} value="9qr.de" />
          <input type="button" onClick={onHandleDomain} value="shiny.link" />
        </div>

        <p>With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to grenerate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link</p>

      </div>
      <DisplayLink shortenLink={shortenLink}/>
    </div>
  )
}

export default Shortener