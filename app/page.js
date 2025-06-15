import React from 'react';
import Button from "@/components/Button";
import AnimatedButton from "@/components/AnimatedButton";

const Page = () => {
    return (
        <div>
            <Button variant={"fade"} color={"warning"} label={"Merhaba"}/>
            <AnimatedButton variant={"fade"} href={"/"} label={"Merhaba"}/>
        </div>
    );
};

export default Page;