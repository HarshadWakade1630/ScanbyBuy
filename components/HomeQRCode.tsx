"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeQRCode() {
    const [qr, setQr] = useState("");
    const router = useRouter();

    useEffect(() => {
        QRCode.toDataURL("http://localhost:3000/home", {
            width: 350,
            margin: 2,
            color: {
                dark: "#000000",
                light: "#FFFFFF",
            },
        }).then(setQr);
    }, []);

    return (
        <div
            onClick={() => router.push("/home")}
            className="cursor-pointer rounded-2xl bg-white p-2 transition hover:scale-105"
        >
            {qr && (
                <Image
                    src={qr}
                    alt="Store QR"
                    width={300}
                    height={300}
                    priority
                    className="w-[170px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto"
                />
            )}
        </div>
    );
}