import React, {memo} from 'react';
import {Spin} from "antd";
import {Icon} from "../../styledComponents";


const Loading = memo(() => {
    return (
        <Icon data-testid="app-loading">
            <Spin/> 
        </Icon>
    )
})

export default Loading;