import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


export default function Page() {
    return  (   <div className="mx-72 mt-9 mb-9 space-y-7">
                <h1>Event List</h1>
                
                <div className="grid grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="flex-col items-start p-5">
                                <h2>Judul Event</h2>
                                <p>2024/05/22 - 09:00</p> 
                                <h3>Bandung - Jawa Barat</h3>
                            </CardHeader>
                            <CardBody class="h-64 w-full rounded-lg bg-indigo-200 ">
                                <Image />
                            </CardBody>
                        </Card>


                </div>
                

                </div>
    );
}