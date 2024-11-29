import React, { useEffect, useRef, useState } from "react";

const SM_SCREEN_WIDTH = 767;

const ProductPreviewCard = () => {
    // 	<link rel="preconnect" href="https://fonts.googleapis.com">
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    // <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

    const [isMobile, setIsMobile] = useState(
        window.innerWidth <= SM_SCREEN_WIDTH
    );
    const prevWidth = useRef(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const currWidth = window.innerWidth;
            if (
                currWidth <= SM_SCREEN_WIDTH &&
                prevWidth.current > SM_SCREEN_WIDTH
            ) {
                setIsMobile(true);
            } else if (
                currWidth > SM_SCREEN_WIDTH &&
                prevWidth.current <= SM_SCREEN_WIDTH
            ) {
                setIsMobile(false);
            }
            prevWidth.current = currWidth;
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="grid place-content-center min-h-screen p-5 bg-[#F2EBE3]">
            <div className="max-w-[340px] rounded-xl overflow-hidden  md:max-w-[600px] md:flex md:items-stretch">
                <div className="w-full rounded-t-xl md:h-full md:object-cover md:flex-1">
                    <img
                        src={
                            isMobile
                                ? "image-product-mobile.jpg"
                                : "image-product-desktop.jpg"
                        }
                        alt="product"
                        className="w-full  md:flex-1 md:h-full md:object-cover"
                    />
                </div>
                <div className="p-5 bg-white  md:flex-1">
                    <div className=" h-full md:px-4 md:py-2 md:flex md:flex-col md:justify-evenly">
                        <span className="block font-montserrat uppercase text-gray-700 text-xs tracking-[0.4em] ">
                            perfume
                        </span>
                        <h1 className="mt-3 text-3xl font-fraunces font-bold text-slate-900 md:max-w-52 leading-8">
                            Gabrielle Essence Eau De Parfum
                        </h1>
                        <h4 className="mt-4 font-montserrat text-sm tracking-wide text-gray-800 leading-6 ">
                            A floral, solar and voluptuous interpretation
                            composed by Olivier Polge, Perfumer-Creator for the
                            House of CHANEL.
                        </h4>
                        <p className="flex items-center gap-5 font-fraunces text-[#3C8067] text-3xl font-bold mt-5 ">
                            $149.99{" "}
                            <span className="text-xs font-montserrat font-medium line-through">
                                $169.99
                            </span>
                        </p>
                        <button className="w-full bg-[#3C8067] text-white flex items-center justify-center gap-2 mt-5 rounded-lg p-3  capitalize hover:cursor-pointer hover:bg-[#1e4034] font-montserrat text-sm font-semibold ">
                            <img src="icon-cart.svg" alt="icon" />
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPreviewCard;
