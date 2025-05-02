import React, { useState } from 'react'
import Image from './Image'
import EmojiPicker from 'emoji-picker-react'

export default function Comments() {

    const [open, setOpen] = useState(false)

  return (
    <div className='comments'>
        <div className="commentList">
            <span className="commentCount">5 comments</span>
            {/* COMMENT */}
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="" className="commentUserAvatar" />
                <div className="commentContent">
                    <span className='commentUser'>John Doe</span>
                    <p className='commentText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum velit eveniet nihil enim.</p>
                    <span className='commentTime'>1hr</span>
                </div>
            </div>
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="" className="commentUserAvatar" />
                <div className="commentContent">
                    <span className='commentUser'>John Doe</span>
                    <p className='commentText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum velit eveniet nihil enim.</p>
                    <span className='commentTime'>1hr</span>
                </div>
            </div>
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="" className="commentUserAvatar" />
                <div className="commentContent">
                    <span className='commentUser'>John Doe</span>
                    <p className='commentText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum velit eveniet nihil enim.</p>
                    <span className='commentTime'>1hr</span>
                </div>
            </div>
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="" className="commentUserAvatar" />
                <div className="commentContent">
                    <span className='commentUser'>John Doe</span>
                    <p className='commentText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum velit eveniet nihil enim.</p>
                    <span className='commentTime'>1hr</span>
                </div>
            </div>
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="" className="commentUserAvatar" />
                <div className="commentContent">
                    <span className='commentUser'>John Doe</span>
                    <p className='commentText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam earum velit eveniet nihil enim.</p>
                    <span className='commentTime'>1hr</span>
                </div>
            </div>
        </div>

        <form className='commentForm'>
            <input type="text" placeholder='Add a comment' className='comment-input' />
            <div className="emoji">
                <div onClick={() => setOpen(prev => !prev)}>😊</div>
                {open && <div className='absolute right-0 bottom-12'>
                    <EmojiPicker />
                </div>}
            </div>
        </form>
    </div>
  )
}
