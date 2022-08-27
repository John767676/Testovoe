import React from 'react';

const GridItem = (props) => {
    const {name, photo, phone, position, email} = props

    function formatPhoneNumber(phoneNumberString) {
        let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        let match = cleaned.match(/^(38|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            let intlCode = (match[1] ? '+38 ' : '');
            return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        }
        return null;
    }

    return (
        <div className='main__content'>
            <div className="main__content-div">
                <svg className='main__content-image' viewBox="0 0 70 70" width="70" height="70">
                    <title>Tyler</title>
                    <defs>
                        <circle id="circle" cx="35" cy="35" r="35" vectorEffect="non-scaling-stroke"/>
                        <clipPath id="circle-clip">
                            <use href="#circle"/>
                        </clipPath>
                    </defs>
                    <g clipPath="url(#circle-clip)">
                        <image href={photo} width="100%" height="100%" preserveAspectRatio="xMidYMid slice"/>
                        <use href="#circle" fill="none" stroke="#0F1C3F" strokeWidth="2" opacity="0.25"/>
                    </g>
                </svg>
               <h3 className="main__content-header">
                  {name}
                </h3>
                <p className="main__content-description">{position}</p>
                <p className={email.length < 36 ? "main__content-description": "main__content-description tooltip"}>
                    {email}
                    {/*<span className="tooltiptext">{email}</span>*/}
                </p>
                <p className="main__content-description">{formatPhoneNumber(phone)}</p>
            </div>
         </div>
    );
};

export default GridItem;