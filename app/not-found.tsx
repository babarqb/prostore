'use client';
import React from 'react';
import Image from "next/image";
import {APP_NAME} from "@/lib/constants";
import {Button} from "@/components/ui/button";

const NotFoundPage = () => {
    return (
        <div className={`flex flex-col items-center justify-center min-h-screen`}>
            <Image src={`/images/logo.svg`} width={48} height={48} alt={`${APP_NAME} logo`} priority={true}/>
            <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
                <h1 className="font-bold mg-4 text-3xl">Not Found</h1>
                <p className={`text-destructive`}>Could not find requested page.</p>
                <Button variant={`outline`} className={`mt-4 ml-3`}
                        onClick={() => window.location.href = '/'}>
                    Go to Home
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;