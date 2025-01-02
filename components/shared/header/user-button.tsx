import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {auth} from "@/lib/auth"
import {signOutUser} from "@/lib/actions/user.actions";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import {UserIcon} from 'lucide-react';

async function UserButton() {
    const session = await auth();
    if (!session) {
        return (
            <Button asChild>
                <Link href={`/sign-in`}>
                    <UserIcon size={24}/>Sign In
                </Link>
            </Button>
        );
    }
    const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? 'U';
    return (
        <div className={`flex gap-2 items-center`}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center">
                        <Button variant={`ghost`}
                                className={`relative w-8 h-8 rounded-full
                                ml-2 flex items-center justify-center bg-gray-200 `}
                        >
                            {firstInitial}
                        </Button>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`w-56`} align={`end`} forceMount>
                    <DropdownMenuLabel className={`font-normal`}>
                        <div className="flex flex-col space-y-2">
                            <div className="text-sm font-medium leading-none">
                                {session.user?.name}
                            </div>
                            <div className="text-sm text-muted-foreground leading-none">
                                {session.user?.email}
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className={`p-0 mb-1`}>
                        {/*<form   className={`w-f`} action={async () => {*/}
                        {/*    'use server';*/}
                        {/*    await signOut();*/}
                        {/*}}>*/}
                        <form action={signOutUser} className={`w-f`}>
                            <Button variant={`ghost`} type={`submit`} className={`w-full py-4 h-2 px-2 justify-start `}>
                                Sign Out
                            </Button>
                        </form>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default UserButton;