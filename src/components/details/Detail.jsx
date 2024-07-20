import React from 'react'
import './details.css'
const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>dont chase butterflies else make your garden beautiful</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="data:image/png;base64,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" alt="" />
               <span>photo_2024.png</span>
              </div>
              <img src="./download.png" className='icon' alt="" /> 
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="data:image/png;base64,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" alt="" />
               <span>photo_2024.png</span>
              </div>
            <img src="./download.png" className="icon "alt="" /> 
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="data:image/png;base64,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" alt="" />
               <span>photo_2024.png</span>
              </div>
            <img src="./download.png" className='icon' alt="" /> 
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button className='blockBtn'>Block User</button>
      </div>
    </div>
  )
}

export default Detail