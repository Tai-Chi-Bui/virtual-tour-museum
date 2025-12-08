import { startTransition, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Pannellum } from "pannellum-react";

import './style.css';

const Page3 = () => {
    let navigate = useNavigate();
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [image] = useState("https://img.freepik.com/free-photo/ruins-ancient-brick-castle-with-blue-sky-sun-green-grass-3d-spherical-panorama-360-degree-viewing-angle-ready-virtual-reality-vr-beautiful-background-full-equirectangular-projection_1157-6063.jpg");
    const [hotspots] = useState([
        {
            name: "page2",
            type: "custom",
            pitch: -2.5,
            yaw: 164.6,
            navigate: "/page2",
        },
        {
            name: "INI AKU",
            type: "info",
            pitch: 1.6,
            yaw: 177,
            navigate: "",
        },
    ]);
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
                {
                    hotspots.map((hotspot, idx) => {
                        const { name, type, pitch, yaw, navigate: navigatePath } = hotspot;
                        return(
                            <Pannellum.Hotspot 
                                key={idx}
                                name={name}
                                // @ts-ignore
                                type={type}
                                pitch={pitch}
                                yaw={yaw}
                                handleClick={(evt: any, hotspotName: any) => {
                                    console.log('Hotspot clicked:', hotspotName, 'Type:', type);
                                    if (type === 'custom' && navigatePath) {
                                        startTransition(() => navigate(navigatePath));
                                    }
                                }}
                                text={name}
                            />
                        )
                    })
                }
            </Pannellum>
        </div>
    )
}

export default Page3;