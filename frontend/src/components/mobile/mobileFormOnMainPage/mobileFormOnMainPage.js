import React from 'react';
import { useForm } from 'react-hook-form';
import './mobileFormOnMainPage.css';
import SmilePhoto from './smile.png';

const MobileFormOnMainPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (d) => {
        alert(JSON.stringify(d));
    };
    return (
        <div className="mobile-form-on-main-page-wrapper">
            <div className="mobile-form-on-main-page-preform-content-wrapper">
                <span className="mobile-form-on-main-page-preform-subtitle">
                    ПРИЄДНУЙТЕСЬ
                </span>

                <span className="mobile-form-on-main-page-preform-title">
                    Твоя історія успіху теж
                </span>
                <span className="mobile-form-on-main-page-preform-title">
                    може бути тут!
                </span>
            </div>
            <div className="mobile-form-on-main-page">
                <img src={SmilePhoto} alt="smileOnform"></img>
                <div className="mobile-form-on-main-page-fill-statement">
                    <span>
                        <b>Заповнюй заявку</b>
                    </span>
                    <span>
                        <b>на вступ!</b>
                    </span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="d-flex flex-column mobile-form-label-wrapper">
                        <span>Name:</span>
                        <input type="text" {...register('name')} />
                    </label>
                    <label className="d-flex flex-column mobile-form-label-wrapper">
                        <span>Number:</span>
                        <input type="number" {...register('number')} />
                    </label>
                    <label className="d-flex flex-column mobile-form-label-wrapper">
                        <span>Email:</span>
                        <input type="email" {...register('email')} />
                    </label>
                    <label className="d-flex flex-column  mobile-form-label-wrapper">
                        <span>Comment:</span>
                        <input
                            type="textarea"
                            className="mobile-form-textarea"
                            {...register('comment')}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Надіслати"
                        className="mobile-form-submit-button"
                    ></input>
                </form>
            </div>
        </div>
    );
};

export default MobileFormOnMainPage;
