const BlogCardTailwind = () => {
    //     <link rel="preconnect" href="https://fonts.googleapis.com">
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    // <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

    return (
        <div className="font-figtree bg-amber-300 min-h-screen min-w-full flex items-center justify-center p-3">
            <div className="max-w-80 w-full bg-white p-5 rounded-2xl border border-black shadow-blogCard">
                <img
                    className="w-full object-cover rounded-lg"
                    src="illustration-article.svg"
                    alt="image"
                />
                <div className="flex flex-col my-4">
                    <span className="bg-amber-300 text-xs w-fit px-2.5 py-1 capitalize font-bold rounded">
                        learning
                    </span>
                    <span className="mt-2.5 text-xs capitalize font-semibold text-neutral-700">
                        published 21 dec 2023
                    </span>
                    <span className="mt-2.5 text-lg font-extrabold hover:cursor-pointer hover:text-amber-300">
                        HTML & CSS foundations
                    </span>
                    <span className="mt-2 text-sm text-neutral-500 first-letter:capitalize font-medium">
                        these languages are the backbone of every website,
                        defining structure, content and presentation.
                    </span>
                </div>
                <div className="flex items-center gap-2.5 mt-1">
                    <img
                        className="w-7 h-7 object-cover"
                        src="image-avatar.webp"
                        alt="greg hooper"
                    />
                    <span className="text-xs font-extrabold capitalize">
                        greg hooper
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BlogCardTailwind;
