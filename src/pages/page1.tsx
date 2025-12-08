import { useRef, useState } from "react";
import { Pannellum } from "pannellum-react";

import './style.css';

const Page1 = () => {
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [ image ] = useState('/images/Keangnam.jpg');
    const panImage = useRef<any>(null);

    return (
        <div>
            <div className="pitch-yaw">
                <p className="pitch-yaw-text"> Pitch: {pitch} </p>
                <p className="pitch-yaw-text"> Yaw: {yaw} </p>
                <h5 className="pitch-yaw-text">© Tai Bui from Sun Asterisk</h5>
            </div>
            <Pannellum
                width='100%'
                height='100vh'
                image={image}
                title='360 Virtual Tour'
                previewTitle ="360 Virtual Tour"
                author="Tai Bui from Sun Asterisk"
                previewAuthor="Tai Bui from Sun Asterisk"
                pitch={10}
                yaw={180}
                hfov={110}
                autoRotate={2}
                autoLoad
                compass
                disableKeyboardCtrl
                ref={panImage}
                onMouseup = {(event: any) => {
                    setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
                    setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
                }}
            >
            </Pannellum>
        </div>
    )
}

export default Page1;