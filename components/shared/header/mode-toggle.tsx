'use client';
import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoonIcon, SunIcon, SunMoonIcon} from "lucide-react";

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={`ghost`} className={`focus-visible:ring-0 focus-visible:ring-offset-0`}>
                    {/*{theme === 'dark' ? '🌙' : '☀️'}*/}
                    {
                        theme === 'system' ? (
                                <SunMoonIcon/>
                            ) :
                            theme === 'dark' ? (
                                <MoonIcon/>
                            ) : (
                                <SunIcon/>
                            )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuCheckboxItem
                    checked={theme === 'system'}
                    onClick={() => setTheme('system')}>
                    <SunMoonIcon/>System
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                    checked={theme === 'dark'}
                    onClick={() => setTheme('dark')}>
                    <SunMoonIcon/>Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === 'light'}
                    onClick={() => setTheme('light')}>
                    <SunMoonIcon/>Light
                </DropdownMenuCheckboxItem>


            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;