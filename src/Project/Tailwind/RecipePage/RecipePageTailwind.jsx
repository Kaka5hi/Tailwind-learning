import React from "react";

const RecipePageTailwind = () => {
    // <link rel="preconnect" href="https://fonts.googleapis.com">
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    // <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Young+Serif&display=swap" rel="stylesheet">

    return (
        <div className=" md:bg-orange-100 md:py-20">
            <div className=" pb-8 box-border md:bg-white md:max-w-3xl md:mx-auto md:rounded-3xl md:overflow-hidden md:p-10">
                <div className="h-full max-h-80 overflow-hidden md:rounded-2xl ">
                    <img
                        src="https://www.simplyrecipes.com/thmb/LLhiA8KZ7JZ5ZI0g-1bF1eg-gGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__HT-Make-an-Omelet-LEAD-HORIZONTAL-17cd2e469c4a4ccbbd1273a7cae6425c.jpg"
                        alt="image"
                        className="object-cover"
                    />
                </div>
                <div className="mx-8 flex flex-col gap-8 md:mx-0">
                    <div className="mt-8">
                        <h1 className="capitalize font-serif text-stone-900 text-4xl font-bold">
                            title
                        </h1>
                        <p className="pt-5  text-stone-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur pariatur modi iure voluptas,
                            repudiandae deleniti facilis nulla nobis repellat
                            vero.
                        </p>
                    </div>
                    <div className=" p-6 bg-fuchsia-50 border rounded-lg border-transparent">
                        <h1 className="capitalize text-fuchsia-900 text-xl font-semibold">
                            preparation time
                        </h1>
                        <ol className=" flex flex-col gap-2 list-disc list-inside mt-4 mx-2 text-stone-600 marker:text-fuchsia-950 marker:text-sm">
                            <li>
                                <span className="font-bold capitalize text-stone-600">
                                    total
                                </span>
                                : Lorem ipsum dolor, sit
                            </li>
                            <li>
                                <span className="font-bold capitalize text-stone-600">
                                    total
                                </span>
                                : Lorem ipsum dolor, sit
                            </li>
                            <li>
                                <span className="font-bold capitalize text-stone-600">
                                    total
                                </span>
                                : Lorem ipsum dolor, sit
                            </li>
                        </ol>
                    </div>
                    {/* ingredient container */}
                    <div className=" ">
                        <h1 className="text-amber-800 font-semibold font-serif text-3xl capitalize">
                            ingredient
                        </h1>
                        <ol className="flex flex-col gap-2.5 border-b border-stone-300 pt-4 pb-8 px-1 list-disc list-outside text-stone-600 marker:text-sm ">
                            <li className="ml-5 ">
                                <p className="ml-5 text-stone-600 ">
                                    Lorem ipsum dolor sit amet consectetur
                                </p>
                            </li>
                            <li className="ml-5 ">
                                <p className="ml-5 text-stone-600 ">
                                    Lorem ipsum dolor sit
                                </p>
                            </li>
                            <li className="ml-5 ">
                                <p className="ml-5 text-stone-600 ">
                                    Lorem ipsum dolor sit amet
                                </p>
                            </li>
                            <li className="ml-5 ">
                                <p className="ml-5 text-stone-600 ">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt amet inventore
                                    mag
                                </p>
                            </li>
                        </ol>
                    </div>
                    {/* instructions container */}
                    <div className=" ">
                        <h1 className="text-amber-800 font-semibold font-serif text-3xl capitalize">
                            instructions
                        </h1>
                        <ol className="flex flex-col gap-2.5 border-b border-stone-300 pt-4 pb-8 px-1 list-decimal list-outside text-stone-800 marker:text-base marker:font-bold marker:text-amber-800 ">
                            <li className="ml-5 ">
                                <p className="ml-5 text-stone-600 ">
                                    <span className="text-stone-600 font-bold">
                                        Lorem
                                    </span>
                                    : Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt amet inventore
                                    magnam provident cumque, exercitationem
                                    numquam aspernatur ab minus animi
                                </p>
                            </li>
                            <li className="ml-5 ">
                                <p className="ml-5 text-stone-600 ">
                                    <span className="text-stone-600 font-bold">
                                        Lorem
                                    </span>
                                    : Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt amet inventore
                                    magnam provident cumque, exercitationem
                                    numquam aspernatur ab minus animi
                                </p>
                            </li>
                            <li className="ml-5 ">
                                <p className="ml-5 text-stone-600 ">
                                    <span className="text-stone-600 font-bold">
                                        Lorem
                                    </span>
                                    : Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt amet inventore
                                    magnam provident cumque, exercitationem
                                    numquam aspernatur ab minus animi
                                </p>
                            </li>
                            <li className="ml-5 ">
                                <p className="ml-5 text-stone-600 ">
                                    <span className="text-stone-600 font-bold">
                                        Lorem
                                    </span>
                                    : Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt amet inventore
                                    magnam provident cumque, exercitationem
                                    numquam aspernatur ab minus animi
                                </p>
                            </li>
                            <li className="ml-5 ">
                                <p className="ml-5 text-stone-600 ">
                                    <span className="text-stone-600 font-bold">
                                        Lorem
                                    </span>
                                    : Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt amet inventore
                                    magnam provident cumque, exercitationem
                                    numquam aspernatur ab minus animi
                                </p>
                            </li>
                        </ol>
                    </div>
                    {/* nutrition container */}
                    <div className=" ">
                        <h1 className="text-amber-800 font-semibold font-serif text-3xl capitalize">
                            nutrition
                        </h1>
                        <p className="my-4 text-stone-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eum dolor mollitia molestiae nulla consectetur
                        </p>
                        <ul className="">
                            <li className="flex items-center border-b border-stone-300 p-4">
                                <span className="flex-1 text-center capitalize">
                                    title
                                </span>
                                <span className="flex-1 text-center text-amber-800 font-bold">
                                    value
                                </span>
                            </li>
                            <li className="flex items-center border-b border-stone-300 p-4">
                                <span className="flex-1 text-center capitalize">
                                    title
                                </span>
                                <span className="flex-1 text-center text-amber-800 font-bold">
                                    value
                                </span>
                            </li>
                            <li className="flex items-center pt-4 px-4">
                                <span className="flex-1 text-center capitalize">
                                    title
                                </span>
                                <span className="flex-1 text-center text-amber-800 font-bold">
                                    value
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipePageTailwind;
