import React from 'react';

type MessPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessPropsType) {
    return (
        <div className="main-block">
            <ul className="message_body">
                <div className="message_item">
                    <li>
                        <div className="avatar left">
                            <img src={props.avatar} className="img-rounded"/>
                            </div>
                        <div className="message left alert triangle-left">
                            <div className="author-name">{props.name}</div>
                            <span>{props.message}</span>
                            <div className="time">{props.time}</div>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Message;
