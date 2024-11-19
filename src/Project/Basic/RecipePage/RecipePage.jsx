import "./RecipePage.css";

const RecipePage = () => {
    return (
        <div className="body_container">
            <div className="inner_container">
                <div className="img_container">
                    <img
                        src="https://www.simplyrecipes.com/thmb/LLhiA8KZ7JZ5ZI0g-1bF1eg-gGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__HT-Make-an-Omelet-LEAD-HORIZONTAL-17cd2e469c4a4ccbbd1273a7cae6425c.jpg"
                        alt="omelete image"
                    />
                </div>
                <h1>simple omlette recipe</h1>
                <p>
                    An easy and quick dish, perfect for any meal. This classic
                    omelette combines beaten eggs cooked to perfection,
                    optionally filled with your choice of cheese, vegetables, or
                    meats.
                </p>
                <div className="prep_container">
                    <h2>preparation</h2>
                    <ul>
                        <li>
                            <span>total:</span>
                            Approximately 10 minutes
                        </li>
                        <li>
                            <span>Preparation:</span>5 minutes
                        </li>
                        <li>
                            <span>Cooking:</span>5 minutes
                        </li>
                    </ul>
                </div>

                <div className="ingredient_container">
                    <h2>Ingredients</h2>
                    <ul>
                        <li>
                            <span>2-3 large eggs</span>
                        </li>
                        <li>
                            <span>Salt, to taste</span>
                        </li>
                        <li>
                            <span>Pepper, to taste</span>
                        </li>
                        <li>
                            <span>1 tablespoon of butter or oil</span>
                        </li>
                        <li>
                            <span>
                                Optional fillings: cheese, diced vegetables,
                                cooked meats, herbs
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="instructions_container">
                    <h2>instructions</h2>
                    <ol>
                        <li>
                            <span>Beat the eggs</span>: In a bowl, beat the eggs
                            with a pinch of salt and pepper until they are well
                            mixed. You can add a tablespoon of water or milk for
                            a fluffier texture.
                        </li>
                        <li>
                            <span>Heat the pan</span>: Place a non-stick frying
                            pan over medium heat and add butter or oil.
                        </li>
                        <li>
                            <span>Cook the omelette</span>: Once the butter is
                            melted and bubbling, pour in the eggs. Tilt the pan
                            to ensure the eggs evenly coat the surface.
                        </li>
                        <li>
                            <span>Add fillings (optional)</span>: When the eggs
                            begin to set at the edges but are still slightly
                            runny in the middle, sprinkle your chosen fillings
                            over one half of the omelette.
                        </li>
                        <li>
                            <span>Fold and serve</span>: As the omelette
                            continues to cook, carefully lift one edge and fold
                            it over the fillings. Let it cook for another
                            minute, then slide it onto a plate.
                        </li>
                        <li>
                            <span>Enjoy</span>: Serve hot, with additional salt
                            and pepper if needed.
                        </li>
                    </ol>
                </div>

                <div className="nutrition_container">
                    <h2>nutrition</h2>
                    <p>
                        The table below shows nutritional values per serving
                        without the additional fillings.
                    </p>
                    <div className="nutrition_inner_container">
                        <p>
                            <span className="item">Calories</span>
                            <span className="value">277kcal</span>
                        </p>
                        <p>
                            <span className="item">Calories</span>
                            <span className="value">277kcal</span>
                        </p>
                        <p>
                            <span className="item">Calories</span>
                            <span className="value">277kcal</span>
                        </p>
                        <p>
                            <span className="item">Calories</span>
                            <span className="value">277kcal</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipePage;
