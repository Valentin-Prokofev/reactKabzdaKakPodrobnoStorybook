import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (press: boolean) => void
}

export function UncontrolledOnOff(props: OnOffPropsType) {
    let [press, setPress] = useState(false)

    const onClicked = () => {
        setPress(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setPress(false)
        props.onChange(false)
    }

    return (
        <div className={"app-title"}>
            <div className={"onOff"}>
                <div
                    className={press ? "onPress on" : "on"}
                    onClick={onClicked}
                >On
                </div>
                <div
                    className={!press ? "offPress off" : "off"}
                    onClick={offClicked}
                >Off
                </div>
                <div className={!press ? "circle circleOffPress" : "circle circleOnPress"}></div>
            </div>
        </div>
    );
};

