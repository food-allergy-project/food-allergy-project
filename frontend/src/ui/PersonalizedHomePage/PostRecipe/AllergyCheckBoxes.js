import { useState } from "react";
import { AllergyOptions } from "./RecipeAllergyOptions";
import "./CheckBoxStyles.css";

//Code from https://codesandbox.io/s/mystifying-tu-xlpgb?file=/src/App.js

export function AllergyCheckBox() {
    const [all, setAll] = useState(0);

    return (
        <div>
            <h6 className="mt-3">Select allergens that this recipe is free from</h6>
            <ul className="allergiesList">
                {AllergyOptions.map(({ name}, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        className="form-check-input form-control-color border-success"
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`} className="px-2 form-check-label">{name}</label>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}