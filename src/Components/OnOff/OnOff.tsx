import React from 'react';

type OnOffPropsType = {
    press: boolean
    callBack: (press: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    return (
        <div className={"app-title"}>
            <div className={"onOff"}>
                <div
                    className={props.press ? "onPress on" : "on"}
                    onClick={() => props.callBack(true)}
                >On
                </div>
                <div
                    className={!props.press ? "offPress off" : "off"}
                    onClick={() => props.callBack(false)}>Off
                </div>
                <div className={!props.press ? "circle circleOffPress" : "circle circleOnPress"}></div>
            </div>
        </div>
    );
};

