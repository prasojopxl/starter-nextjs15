"use client"
import HelloWorld from "@/components/HelloWorld";
import ExampleSlider from "@/components/ExampleSlider";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-green-50 p-2">
            <ExampleSlider/>
            <HelloWorld />
        </div>
    );
}
