"use client";

import React from "react";

import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { useRouter } from "next/navigation";

export const Search = () => {
    const router = useRouter();

    function queryHandler(e) {
        e.preventDefault();
        const query = e.target.query.value;
        router.push(`?q=${query}`);
    }

    return (
        <form onSubmit={queryHandler}>
            <Input
                type="text"
                variant="bordered"
                label="Search"
                radius="lg"
                isClearable
                className="md:w-full w-[80%] m-auto md:m-0 text-purple-500"
                startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
                placeholder="Type to search..."
            />
        </form>
    );
};
