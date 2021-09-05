import React, {useState} from 'react';
import './styles.css';
import Message from "./Message";

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const HW1 = () => {
    const [messageData, setMessageData] =  useState<Array<MessageType>>(
            [{
                avatar: 'https://www.krible.com/images/avatars/new/man1.png',
                name: 'Some Name',
                message: 'some text',
                time: '22:00',
            }]
    )
    console.log("messageData: ", ...messageData);
    const allData =  messageData[0];
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={allData.avatar}
                name={allData.name}
                message={allData.message}
                time={allData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1;
