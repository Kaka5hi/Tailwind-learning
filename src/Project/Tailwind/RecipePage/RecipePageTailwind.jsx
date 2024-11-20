import React from "react";

const data = {
    image: "https://www.simplyrecipes.com/thmb/LLhiA8KZ7JZ5ZI0g-1bF1eg-gGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__HT-Make-an-Omelet-LEAD-HORIZONTAL-17cd2e469c4a4ccbbd1273a7cae6425c.jpg",
    title: "simple omlette recipe",
    description:
        "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
    prep: {
        title: "Preparation time",
        description: [
            {
                subheading: "total",
                subheadingDescription: "Approximately 10 minutes",
            },
            {
                subheading: "Preparation",
                subheadingDescription: "5 minutes",
            },
            {
                subheading: "Cooking",
                subheadingDescription: "5 minutes",
            },
        ],
    },
    ingredient: {
        title: "Ingredients",
        list: [
            "2-3 large eggs",
            "Salt, to taste",
            "Pepper, to taste",
            "1 tablespoon of butter or oil",
            "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
        ],
    },
    instruction: {
        title: "Instructions",
        list: [
            {
                point: "Beat the eggs",
                desc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
            },
            {
                point: "Heat the pan",
                desc: "Place a non-stick frying pan over medium heat and add butter or oil.",
            },
            {
                point: "Cook the omelette",
                desc: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
            },
            {
                point: "Add fillings (optional)",
                desc: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
            },
            {
                point: "Fold and serve",
                desc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
            },
            {
                point: "Enjoy",
                desc: "Serve hot, with additional salt and pepper if needed.",
            },
        ],
    },
    nutrition: {
        title: "Nutrition",
        desc: "The table below shows nutritional values per serving without the additional fillings.",
        tableData: [
            {
                key: "Calories",
                value: "277kcal",
            },
            {
                key: "Carbs",
                value: "0g",
            },
            {
                key: "Protein",
                value: "20g",
            },
            {
                key: "Fat",
                value: "22g",
            },
        ],
    },
};

const RecipePageTailwind = () => {
    // font link
    // <link rel="preconnect" href="https://fonts.googleapis.com">
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    // <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Young+Serif&display=swap" rel="stylesheet">

    return (
        <div className=" md:bg-orange-100 md:py-20">
            <div className=" pb-8 box-border md:bg-white md:max-w-3xl md:mx-auto md:rounded-3xl md:overflow-hidden md:p-10">
                <div className="h-full max-h-80 overflow-hidden md:rounded-2xl ">
                    <img
                        src={data?.image}
                        alt={data?.title}
                        className="object-cover"
                    />
                </div>
                <div className="mx-8 flex flex-col gap-8 md:mx-0">
                    <div className="mt-8">
                        <h1 className="capitalize font-youngSerif text-stone-800 text-4xl font-medium">
                            {data?.title}
                        </h1>
                        <p className="pt-5  text-stone-500 font-outfit">
                            {data?.description}
                        </p>
                    </div>
                    <div className=" p-6 bg-fuchsia-50 border font-outfit rounded-lg border-transparent">
                        <h1 className="capitalize text-fuchsia-900 text-xl font-semibold ">
                            {data?.prep?.title}
                        </h1>
                        <ol className=" flex flex-col gap-2 list-disc list-inside mt-4 mx-2 text-stone-600 marker:text-fuchsia-950 marker:text-sm">
                            {data?.prep?.description?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span className="font-bold capitalize text-stone-600">
                                            {item.subheading}
                                        </span>
                                        : {item.subheadingDescription}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                    {/* ingredient container */}
                    <div className=" ">
                        <h1 className="text-amber-800 font-medium font-youngSerif text-3xl capitalize">
                            {data?.ingredient.title}
                        </h1>
                        <ol className="flex flex-col gap-2.5 border-b border-stone-300 pt-4 pb-8 px-1 font-outfit list-disc list-outside text-stone-600 marker:text-sm ">
                            {data?.ingredient?.list?.map((item, index) => {
                                return (
                                    <li className="ml-5 " key={index}>
                                        <p className="ml-5 text-stone-600 ">
                                            {item}
                                        </p>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                    {/* instructions container */}
                    <div className=" ">
                        <h1 className="text-amber-800 font-medium font-youngSerif  text-3xl capitalize">
                            {data?.instruction.title}
                        </h1>
                        <ol className="flex flex-col gap-2.5 border-b border-stone-300 pt-4 pb-8 px-1 list-decimal list-outside font-outfit text-stone-800 marker:text-base marker:font-bold marker:text-amber-800 ">
                            {data?.instruction?.list?.map((item, index) => {
                                return (
                                    <li className="ml-5 " key={index}>
                                        <p className="ml-5 text-stone-600 ">
                                            <span className="text-stone-600 font-bold">
                                                {item.point}
                                            </span>
                                            : {item.desc}
                                        </p>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                    {/* nutrition container */}
                    <div className="font-outfit">
                        <h1 className="text-amber-800 font-medium font-youngSerif text-3xl capitalize">
                            {data?.nutrition?.title}
                        </h1>
                        <p className="my-4 text-stone-600">
                            {data?.nutrition?.desc}
                        </p>
                        <ul>
                            {data?.nutrition?.tableData.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            data?.nutrition?.tableData
                                                ?.length !==
                                            index + 1
                                                ? "flex items-center border-b border-stone-300 px-8 py-4  "
                                                : "flex items-center pt-4 px-8 "
                                        }
                                    >
                                        <span className="flex-1 capitalize">
                                            {item?.key}
                                        </span>
                                        <span className="flex-1 text-amber-800 font-bold">
                                            {item?.value}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipePageTailwind;
