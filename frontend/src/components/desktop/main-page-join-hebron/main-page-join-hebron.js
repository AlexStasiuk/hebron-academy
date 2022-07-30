import React, { useState } from 'react';

import './main-page-join-hebron.css';
import RectImage from './Rect.png';

const MainPageJoinHebron = (props) => {
    const [info, setInfo] = useState({
        PIB: '',
        phoneNumber: '',
        email: '',
        comment: '',
    });
    //const [isSubmited, setIsSubmited] = useState(false);
    const setValues = (e) => {
        console.log(e.target.value, e.target.name, info);
        let field = e.target.name;
        setInfo((items) => {
            return { ...items, [field]: e.target.value };
        });
    };
    const sendData = (e) => {
        e.preventDefault();
        console.log('info:', info);
        fetch('http://localhost:8000/main-page-become-the-part-of-hebron/', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(info),
        }).then((res) => {
            props.catchClick();
            console.log(res);
            setInfo({ PIB: '', phoneNumber: '', email: '', comment: '' });
        });
    };
    return (
        <div className="main-page-join-hebron-wrapper row no-gutters">
            <div className="col-6 main-page-join-hebron-content-left">
                <div className="main-page-join-hebron-content-left-wrapper">
                    <span className="red-title">ПРИЄДНУЙТЕСЬ</span>
                    <div className="text-under-title">
                        <span>Станьте частиною</span>
                        <span>Хеврону вже СЬОГОДНІ!</span>
                    </div>
                    <form
                        method="POST"
                        className="form-style"
                        onSubmit={sendData}
                    >
                        <span>П.І.Б</span>
                        <input
                            type="text"
                            name="PIB"
                            value={info['PIB']}
                            onChange={setValues}
                            placeholder=""
                        />
                        <span>Номер телефону:</span>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={info['phoneNumber']}
                            onChange={setValues}
                            placeholder=""
                        />
                        <span>Email:</span>
                        <input
                            type="text"
                            name="email"
                            value={info['email']}
                            onChange={setValues}
                            placeholder=""
                        />
                        <span>Коментар:</span>
                        <input
                            type="textarea"
                            className="textarea-style"
                            name="comment"
                            value={info['comment']}
                            onChange={setValues}
                            placeholder=""
                        />

                        <input
                            type="submit"
                            value="Надіслати"
                            className="send-form-button"
                        />
                    </form>
                </div>
            </div>
            <div className="col-6 main-page-join-hebron-content-right">
                <img src={RectImage} alt="" />
            </div>
        </div>
    );
};

export default MainPageJoinHebron;
