"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center  ">
            <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Side: 404 and Description */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-8xl md:text-9xl font-extrabold text-gray-900 tracking-tight">
                        404
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
                        Sayfa Bulunamadı
                    </h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-md mx-auto md:mx-0">
                        Aradığınız sayfa mevcut değil veya kaldırılmış olabilir. Ana sayfaya dönerek yolculuğunuza devam edin.
                    </p>
                    <Link href="/">
                        Anasayfa
                    </Link>
                </div>

                {/* Right Side: Vertical Magnesify Text */}
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <div className="flex flex-col items-center">
                            <div className="writing-mode-vertical text-3xl font-bold text-gray-900 uppercase tracking-wider border-l-4 border-gray-900 pl-4 py-2">
                                Magnesify<sub className={"text-xs"}>.com</sub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}