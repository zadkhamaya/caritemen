import React from "react";
import {Avatar, AvatarGroup} from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import {Image} from "@nextui-org/react";




export default function Page() {
    return      <div className="mx-72 mt-9 mb-9">
                <div class="h-72 rounded-lg bg-gray-300 mb-5">
                    <Image />
                </div>

                <h1>Title Event</h1>
                <div className="border-b-1 border-gray-400 mt-3 mb-3"></div>

                <div className="flex flex-col space-y-2 mt-5 mb-9">
                        <div class="flex justify-between gap-4">
                            <p>2024/05/22 - 09:00</p> 
                            <h6 class="text-gray-600">Kategori</h6>
                        </div>
                        <h3>Bandung - Jawa Barat</h3>
                       
                    
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu augue ut. Scelerisque purus semper eget duis at tellus at urna. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Varius sit amet mattis vulputate enim. Sed ullamcorper morbi tincidunt ornare massa. Malesuada proin libero nunc consequat interdum varius sit amet. Quis auctor elit sed vulputate mi. Arcu dictum varius duis at consectetur lorem.
                        </p>

                        <h5>Participants</h5>

                        <div className="flex space-x-4">
                        <AvatarGroup isBordered>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                        </AvatarGroup>
                        </div>

                        <div className="py-8">

                        <div class="grid gap-x-8 gap-y-4 grid-cols-4">
                            <div class="h-40 w-80 rounded-lg bg-gray-300 mb-5">
                            <Image />
                            </div>

                            <div class="h-40 w-80 rounded-lg bg-gray-300 mb-5">
                            <Image />
                            </div>

                            <div class="h-40 w-80 rounded-lg bg-gray-300 mb-5">
                            <Image />
                            </div>

                            <div class="h-40 w-80 rounded-lg bg-gray-300 mb-5">
                            <Image />
                            </div>
                        </div>



                        <Button color="primary" type="submit">
                            Add New Event
                        </Button>
                        </div>
                        </div>
            </div>
}