import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (press: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: OnOffPropsType) {
    let [press, setPress] = useState(props.defaultOn ? props.defaultOn : false)

    const onClicked = () => {
        setPress(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setPress(false)
        props.onChange(false)
    }


    const onStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: press ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: press ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: press ? "green" : "red"
    }

    return <div>
        <div style={onStyle} onClick={onClicked}>on</div>
        <div style={offStyle} onClick={offClicked}>off</div>
        <div style={indicatorStyle}></div>
    </div>
    // return (
    //     <div className={"app-title"}>
    //         <div className={"onOff"}>
    //             <div
    //                 className={press ? "onPress on" : "on"}
    //                 onClick={onClicked}
    //             >On
    //             </div>
    //             <div
    //                 className={!press ? "offPress off" : "off"}
    //                 onClick={offClicked}
    //             >Off
    //             </div>
    //             <div className={!press ? "circle circleOffPress" : "circle circleOnPress"}></div>
    //         </div>
    //     </div>
    // );
};

