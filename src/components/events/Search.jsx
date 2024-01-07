import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";

export default function Search() {
    return (
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
        // <Input
        //     label="Search"
        //     isClearable
        //     radius="lg"
        //     classNames={{
        //         label: "text-black/50 dark:text-white/90",
        //         input: [
        //             "bg-transparent",
        //             "text-black/90 dark:text-white/90",
        //             "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        //         ],
        //         innerWrapper: "bg-transparent",
        //         inputWrapper: [
        //             "shadow-xl",
        //             "bg-default-200/50",
        //             "dark:bg-default/60",
        //             "backdrop-blur-xl",
        //             "backdrop-saturate-200",
        //             "hover:bg-default-200/70",
        //             "dark:hover:bg-default/70",
        //             "group-data-[focused=true]:bg-default-200/50",
        //             "dark:group-data-[focused=true]:bg-default/60",
        //             "!cursor-text",
        //         ],
        //     }}
        //     placeholder="Type to search..."
        //startContent={
        //     <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        //   }
        //     className="md:w-full w-[80%] m-auto md:m-0"
        // />
    );
}
