import React, {memo} from 'react';
import {Shape, ShapeContainer} from "../../styledComponents";


const MovingShapes = memo((props) => {
    return (
        <ShapeContainer>
            <Shape {...props}>
                <img style={{width: props.sWidth}} src={props.sSrc} alt={props.sSrc}/>
            </Shape>
        </ShapeContainer>
    )
});

export default MovingShapes