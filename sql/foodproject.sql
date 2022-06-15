-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!

DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS favoritedRecipes;
DROP TABLE IF EXISTS recipeAllergy;
DROP TABLE IF EXISTS recipe;
DROP TABLE IF EXISTS profileAllergy;
DROP TABLE IF EXISTS allergy;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
    profileId              BINARY(16)   NOT NULL,
    profileFullName        VARCHAR(64)  NOT NULL,
    profileEmail           VARCHAR(320) NOT NULL,
    profileActivationToken NCHAR(255),
    profileHash            CHAR(97)     NOT NULL,
    UNIQUE (profileEmail),
    PRIMARY KEY (profileId)
);

CREATE TABLE allergy (
    allergyId       BINARY(16)  NOT NULL,
    allergyImage    VARCHAR(333)    NOT NULL,
    allergyImageAlt VARCHAR(32),
    allergyName     VARCHAR(32) NOT NULL,
    INDEX (allergyId),
    PRIMARY KEY (allergyId)

);

CREATE TABLE profileAllergy (
    profileAllergyAllergyId BINARY(16) NOT NULL,
    profileAllergyProfileId BINARY(16) NOT NULL,
    INDEX (profileAllergyAllergyId, profileAllergyProfileId),
    FOREIGN KEY (profileAllergyAllergyId) references allergy (allergyId),
    FOREIGN KEY (profileAllergyProfileId) references profile (profileId),
    PRIMARY KEY (profileAllergyAllergyId, profileAllergyProfileId)

);

CREATE TABLE recipe (
    recipeId           BINARY(16)    NOT NULL,
    recipeProfileId    BINARY(16)    NOT NULL,
    recipeCategory     VARCHAR(16)   NOT NULL,
    recipeDate         DATETIME(6),
    recipeIngredients  JSON NOT NULL,
    recipeImage        VARCHAR(255)  NOT NULL,
    recipeImageAlt     VARCHAR(32),
    recipeInstructions JSON NOT NULL,
    recipeTitle        VARCHAR(355)   NOT NULL,
    INDEX (recipeId, recipeProfileId, recipeCategory),
    PRIMARY KEY (recipeId)
);

CREATE TABLE recipeAllergy (
    recipeAllergyRecipeId BINARY (16) NOT NULL,
    recipeAllergyAllergyId BINARY (16) NOT NULL,
    INDEX (recipeAllergyRecipeId, recipeAllergyAllergyId),
    FOREIGN KEY (recipeAllergyRecipeId) references recipe (recipeId),
    FOREIGN KEY (recipeAllergyAllergyId) references allergy (allergyId),
    PRIMARY KEY (recipeAllergyRecipeId,recipeAllergyAllergyId)

);

CREATE TABLE favoritedRecipes (
    favoritedRecipeProfileId BINARY (16) NOT NULL,
    favoritedRecipeRecipeId BINARY (16) NOT NULL,
    INDEX (favoritedRecipeProfileId, favoritedRecipeRecipeId),
    FOREIGN KEY (favoritedRecipeProfileId) references profile (profileId),
    FOREIGN KEY (favoritedRecipeRecipeId) references recipe (recipeId),
    PRIMARY KEY (favoritedRecipeProfileId, favoritedRecipeRecipeId)

);

CREATE TABLE comment (
    commentId BINARY (16) NOT NULL,
    commentProfileId BINARY (16) NOT NULL,
    commentRecipeId BINARY (16) NOT NULL,
    commentContent VARCHAR(250) NOT NULL,
    commentDate DATETIME,
    INDEX (commentId, commentProfileId, commentRecipeId),
    FOREIGN KEY (commentProfileId) references profile (profileId),
    FOREIGN KEY (commentRecipeId) references recipe (recipeId),
    PRIMARY KEY (commentId)

);
