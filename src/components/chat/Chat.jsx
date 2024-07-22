import React, { useEffect, useState,useRef} from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const[open,setOpen]=useState(false)
  const[message,setMessage]=useState("")
  const handleEmoji=e=>{
    setMessage((prev)=>prev+e.emoji);
    setOpen(false);
  }
  const endRef=useRef(null);

  useEffect(()=>{
   endRef.current?.scrollIntoView({behavior:'smooth'})
  },[])
  console.log(message)
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jae Doe</span>
            <p>life is beautiful</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hii bro how are you hope you are fine brother Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, minus. Error optio quas distinctio dolore quae perspiciatis rerum fugit, excepturi temporibus rem consequatur? Omnis maxime eaque quod, ut harum corporis?</p>
            <span>1 min ago</span>
          </div>
        </div>
        
        <div className="message own">
          <div className="texts">
            <p>hii bro how are you hope you are fine brother Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nisi reiciendis debitis soluta aliquam magni error. Sed ratione nisi ex ad voluptas eligendi deleniti amet et? Provident, quaerat repellendus? Ea.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hii bro how are you hope you are fine brother Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti odio itaque, omnis recusandae illo nihil, hic id ad ipsam possimus suscipit? Ab esse nulla qui eum autem id. Laudantium!</p>
            <span>1 min ago</span>
          </div>
        </div>
        
        <div className="message own">
          
          <div className="texts">
            <p>hii bro how are you hope you are fine brother Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea fuga incidunt reiciendis at veniam sed iste possimus, dicta vitae nulla sequi inventore quasi? Quidem fugiat dolores itaque aspernatur nisi.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hii bro how are you hope you are fine brother Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti odio itaque, omnis recusandae illo nihil, hic id ad ipsam possimus suscipit? Ab esse nulla qui eum autem id. Laudantium!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fdslr-camera--540291286554933760%2F&psig=AOvVaw22oLYBI12_jJemWY_fd_RY&ust=1721556421570000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODpmeuvtYcDFQAAAAAdAAAAABAE" alt="" /> */}
            <img src="data:image/jpeg;base64,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" alt="" />
            <p>hii bro how are you hope you are fine brother Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea fuga incidunt reiciendis at veniam sed iste possimus, dicta vitae nulla sequi inventore quasi? Quidem fugiat dolores itaque aspernatur nisi.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
          <img src="./img.png" alt="" />
        </div>
          <input type='text' placeholder='Type a message...' onChange={(e)=>setMessage(e.target.value)} value={message}/>
          <div className="emoji" >
            <img src="./emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
            <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>
            

          </div>
          <button className='sendButton'>Send</button>
        
      </div>
    </div>
  )
}

export default Chat
