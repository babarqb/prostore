import React from 'react';
import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            zIndex: 9999
        }}>
            <Image src={loader} alt={`Loading...`} width={150} height={150}/>
        </div>
    );
};

export default LoadingPage;