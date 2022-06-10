-- allergy table

-- allergy 1 Milk
INSERT INTO allergy (allergyId, allergyImage, allergyImageAlt, allergyName)
VALUES (UUID_TO_BIN(UUID()), 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYF62M2n65-KJ2PkR5C0L_cLH5L9EPStGAQ&usqp=CAU', 'milk image', 'dairy');

-- allergy 2 Eggs
INSERT INTO allergy (allergyId, allergyImage, allergyImageAlt, allergyName)
VALUES (UUID_TO_BIN(UUID()), 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg', 'eggs image', 'egg');

-- allergy 3 Fish
INSERT INTO allergy (allergyId, allergyImage, allergyImageAlt, allergyName)
VALUES (UUID_TO_BIN(UUID()), 'https://cdn.shopify.com/s/files/1/1709/1113/articles/May22_FishAllergy_1800x1000_V1_1800x.jpg?v=1651775749', 'fish image', 'fish');

-- allergy 4 Shellfish
INSERT INTO allergy (allergyId, allergyImage, allergyImageAlt, allergyName)
VALUES (UUID_TO_BIN(UUID()), 'https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2021/05/04/call-to-rewild-a-third-of-uk-waters-presents-opportunities-for-shellfish-sector/12417807-1-eng-GB/Call-to-rewild-a-third-of-UK-waters-presents-opportunities-for-shellfish-sector.jpg', 'shellfish image', 'shellfish');

-- allergy 5 Soy
INSERT INTO allergy (allergyId, allergyImage, allergyImageAlt, allergyName)
VALUES (UUID_TO_BIN(UUID()), 'https://www.verywellfit.com/thmb/HgSWFNOiTtTLfb6ntxMPuDifbsA=/2121x1414/filters:fill(FFDB5D,1)/GettyImages-942696784-a28fe24b20cf4b34b7a3e42b960e4e08.jpeg', 'soybean image', 'soy');

-- allergy 6 Gluten
INSERT INTO allergy (allergyId, allergyImage, allergyImageAlt, allergyName)
VALUES (UUID_TO_BIN(UUID()), 'https://www.foodbusinessnews.net/ext/resources/2021/2/OrganicWheat_Lead.jpg?height=635&t=1613050685&width=1200', 'wheat image', 'gluten');

-- allergy 7 Peanuts
INSERT INTO allergy (allergyId, allergyImage, allergyImageAlt, allergyName)
VALUES (UUID_TO_BIN(UUID()), 'https://georgiagrown.com/wp-content/uploads/2019/10/featured_fruitsveg-peanuts.jpg', 'peanuts image', 'peanut');

-- allergy 8 Tree Nuts
INSERT INTO allergy (allergyId, allergyImage, allergyImageAlt, allergyName)
VALUES (UUID_TO_BIN(UUID()), 'https://cdn.shopify.com/s/files/1/2531/6758/articles/tree_nuts_3_1024x1024.jpg?v=1611863316', 'tree nuts image', 'tree nut');

# INSERT INTO recipe (recipeId, recipeProfileId, recipeCategory, recipeDate, recipeIngredients, recipeImage, recipeImageAlt, recipeInstructions, recipeTitle) VALUES (UUID_TO_BIN(UUID()),UUID_TO_BIN(UUID()), 'dessert', '1991,12,07', 'almond flour, eggs, extra dairy milk, shellfish', 'URL', 'Name', 'Step 1 boil everything together', 'EWWWWWW');