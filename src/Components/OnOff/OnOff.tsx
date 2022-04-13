import React from 'react';

type OnOffPropsType = {
    press: boolean
    callBack: (press: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    // return (
    //     <div className={"app-title"}>
    //         <div className={"onOff"}>
    //             <div
    //                 className={props.press ? "onPress on" : "on"}
    //                 onClick={() => props.callBack(true)}
    //             >On
    //             </div>
    //             <div
    //                 className={!props.press ? "offPress off" : "off"}
    //                 onClick={() => props.callBack(false)}>Off
    //             </div>
    //             <div className={!props.press ? "circle circleOffPress" : "circle circleOnPress"}></div>
    //         </div>
    //     </div>
    // );

    const onStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.press ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.press ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.press ? "green" : "red"
    }

    return <div>
        <div style={onStyle} onClick={() => props.callBack(true)}>on</div>
        <div style={offStyle} onClick={() => props.callBack(false)}>off</div>
        <div style={indicatorStyle}></div>
    </div>
};

