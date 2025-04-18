import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { setAddress } from '../service/authApi.js';
import { useDispatch } from 'react-redux';

export default function Postcode ({text}) {
    const dispatch= useDispatch();

    const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        let localAddress = data.sido + ' ' + data.sigungu;

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress = fullAddress.replace(localAddress, '');
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        //console.log('data',data.zonecode);
        
        dispatch(setAddress(fullAddress));

    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return <div className='btn_search_addr' name="address" onClick={handleClick}>{ text ? text : '주소검색'}</div>;
};