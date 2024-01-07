import { AboutUs } from "@/components/home/AboutUs";
import { Hero } from "@/components/home/Hero";
import { How } from "@/components/home/How";

export default function Home() {
    return (
        <>
            <section className="text-center w-[95%] m-auto space-y-2 p-4 border-blue-500">
                <Hero />
            </section>

            <section id="how" className="my-12">
                <How />
            </section>
            <section id="about">
                <AboutUs />
            </section>
        </>
    );
}
