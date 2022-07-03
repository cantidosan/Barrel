import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";


const QrCode = () => {
    const [url, setUrl] = useState("989");




    const qrcode = (
        <QRCodeCanvas
            id="qrCode"
            value={url}
            size={80}
            bgColor={"#00ff00"}
            level={"H"}
        />
    );
    return (
        <div className="">
            <div className="">{qrcode}</div>

        </div>
    );
};

export default QrCode;
