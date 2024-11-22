const SocialLinkProfileTailwind = () => {
    //     <link rel="preconnect" href="https://fonts.googleapis.com">
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    // <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

    return (
        <div className="bg-neutral-900 flex items-center justify-center min-h-screen p-5">
            <div className="bg-neutral-800 p-9 rounded-lg flex items-center justify-center flex-col text-center font-inter text-white max-w-96 w-full">
                <img
                    className="w-24 h-2w-24 object-contain rounded-full"
                    src="avatar-jessica.jpeg"
                    alt=""
                />
                <div className="my-5 text-sm">
                    <h1 className="text-2xl capitalize font-semibold">
                        jessica randall
                    </h1>
                    <p className="mt-1 capitalize text-lime-400 font-semibold">
                        london, united kingdom
                    </p>
                    <span className="mt-5 block font-light">
                        "Front-end developer and avid reader."
                    </span>
                </div>
                <ul className="flex flex-col items-center justify-center gap-4 capitalize w-full text-sm font-semibold">
                    <li className="py-3 rounded-md bg-neutral-700 w-full hover:bg-lime-400 hover:text-black hover:cursor-pointer">
                        github
                    </li>
                    <li className="py-3 rounded-md bg-neutral-700 w-full hover:bg-lime-400 hover:text-black hover:cursor-pointer">
                        frontend mentor
                    </li>
                    <li className="py-3 rounded-md bg-neutral-700 w-full hover:bg-lime-400 hover:text-black hover:cursor-pointer">
                        linkedIn
                    </li>
                    <li className="py-3 rounded-md bg-neutral-700 w-full hover:bg-lime-400 hover:text-black hover:cursor-pointer">
                        twitter
                    </li>
                    <li className="py-3 rounded-md bg-neutral-700 w-full hover:bg-lime-400 hover:text-black hover:cursor-pointer">
                        instagram
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SocialLinkProfileTailwind;
