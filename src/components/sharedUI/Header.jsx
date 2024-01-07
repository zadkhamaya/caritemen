"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    NavbarItem,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = ["Home", "Events", "How It Works", "About Us"];

    const hrefMapping = {
        Home: "/",
        Events: "/event-list",
        "How It Works": "/#how",
        "About Us": "/#about",
    };

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="border-3 border-purple-500 rounded-full w-[90%] m-auto md:w-full"
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit text-2xl text-purple-700">
                        CariTemen.
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/"
                        className="text-purple-500"
                    >
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/event-list"
                        className="text-purple-500"
                    >
                        Events
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/#how"
                        className="text-purple-500"
                    >
                        How It Works
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/#about"
                        className="text-purple-500"
                    >
                        About Us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login" className="text-purple-500">
                        Login
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        color="secondary"
                        href="/register"
                        variant="flat"
                    >
                        Register
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? "secondary"
                                    : index === menuItems.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            className="w-full"
                            href={hrefMapping[item]}
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};
