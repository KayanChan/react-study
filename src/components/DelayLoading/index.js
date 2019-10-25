import React from 'react';

const DelayLoading = ({ pastDelay, error }) => {
    if (error) {
        return <div>抱歉，页面加载出现问题</div>
    } else {
        return null
    }
}
export default DelayLoading;
