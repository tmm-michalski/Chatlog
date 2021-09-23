import React, { useState } from 'react';
import artwork from '../styles/img/artwork.svg';
import av0 from '../styles/img/av-0.svg';
import av1 from '../styles/img/av-1.svg';
import av2 from '../styles/img/av-2.svg';
import av3 from '../styles/img/av-3.svg';

interface Props {
    handleNick?: void;
    setData?: void;
}

export const Login: React.FC<Props> = () => {
    const [nickname, setnickname] = useState<string>('');
    const [avatar, setavatar] = useState<number>(100);

    const handleNick = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 20) {
            setnickname(e.target.value.replace(/[^a-zA-Z0-9]/g, ''));
        } // limit 20 characters, special characters are forbidden
    };

    const setData = () => {
        if (nickname.length > 2) {
            const user = {
                id: new Date().getTime(), // is better way?
                name: nickname,
                avatar: avatar === 100 ? Math.floor(Math.random() * 4) : avatar, // set random avatar if is unselected
            };
            console.log(user);
        }

        // todo: implement data validation and add user to users list
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src={artwork} alt={artwork} className="login__artwork" />
            </div>

            <h1 className="login__title">Hello!</h1>
            <div className="login__container">
                <input
                    onChange={handleNick}
                    type="text"
                    className="login__input"
                    placeholder="set your nickname"
                    value={nickname}
                />
            </div>

            <div className="login__selectText">Select avatar</div>

            <div className="login__avatars">
                <div
                    onClick={() => setavatar(0)}
                    className={`${
                        avatar === 0 || avatar === 100
                            ? 'login__item--active'
                            : 'login__item'
                    }`}
                >
                    <img src={av0} alt={av0} className="login__avatar" />
                </div>
                <div
                    onClick={() => setavatar(1)}
                    className={`${
                        avatar === 1 || avatar === 100
                            ? 'login__item--active'
                            : 'login__item'
                    }`}
                >
                    <img src={av1} alt={av1} className="login__avatar" />
                </div>
                <div
                    onClick={() => setavatar(2)}
                    className={`${
                        avatar === 2 || avatar === 100
                            ? 'login__item--active'
                            : 'login__item'
                    }`}
                >
                    <img src={av2} alt={av2} className="login__avatar" />
                </div>
                <div
                    onClick={() => setavatar(3)}
                    className={`${
                        avatar === 3 || avatar === 100
                            ? 'login__item--active'
                            : 'login__item'
                    }`}
                >
                    <img src={av3} alt={av3} className="login__avatar" />
                </div>
            </div>

            <button onClick={setData} className="login__btn">
                Let's go
            </button>
        </div>
    );
};
