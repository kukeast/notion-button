import React from 'react';
import SharedButtons from '../conponent/SharedButtons';
import { useLocation } from 'react-router';
import QueryString from 'qs';

function Share() {
    const location = useLocation()
    const data = location.search && QueryString.parse(location.search, {
        ignoreQueryPrefix: true
    })
    return (
        <SharedButtons data={data}/>
    )
}

export default Share;
