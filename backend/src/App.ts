import express, { Application} from 'express';
import SignupRoute from './apis/sign-up/signup.route';
import morgan from 'morgan';
import { indexRoute } from './apis/index.routes';
import {SignInRouter} from './apis/sign-in/sign-in.route';
import { ProfileRoute } from './apis/profile/profile.route';
import session from 'express-session';
import { allergyRoute } from './apis/allergy/allergy.route';
import { RecipeRoute } from './apis/recipe/recipe.route';
import {favoritedreciperoute} from "./apis/favorited recipe/favoritedrecipes.route";
import { CommentRoute } from './apis/comment/comment.route';
import {RecipeAllergyRoutes} from "./apis/recipe-allergy/recipe-allergy.routes";
import { createClient } from 'redis'
import RedisConnect from "connect-redis"
import {ProfileAllergyRoute} from "./apis/profile-allergy/profile.allergy.route";
import {ImageUploadRouter} from "./apis/image-upload/image-uploade.route";
import {SignOutRoute} from "./apis/sign-out/sign-out.route";
const redisClient = createClient({legacyMode: true, socket:{host: process.env.REDIS_HOST}})
redisClient.connect().catch(console.error)
const RedisStore = RedisConnect(session)


// The following class creates the app and instantiates the server
export class App {
    app: Application;

    constructor (
        private port?: number | string
    ) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () : void {
        this.app.set('port', this.port || process.env.PORT || 4200)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares (): void {
        const sessionConfig = {
            store: new RedisStore({ client: redisClient, host: process.env.REDIS_HOST, port: 6379}),
            saveUninitialized: true,
            secret: process.env.SESSION_SECRET as string,
            resave: false,
        }

        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(session(sessionConfig))
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () :void {
        // TODO add "/apis"
        this.app.use('/apis', indexRoute)
        this.app.use('/apis/sign-up',SignupRoute)
        this.app.use('/apis/sign-in', SignInRouter);
        this.app.use('/apis/profile', ProfileRoute);
        this.app.use('/apis/allergy', allergyRoute);
        this.app.use('/apis/recipe', RecipeRoute)
        this.app.use('/apis/favoritedrecipes', favoritedreciperoute )
        this.app.use('/apis/recipe-allergy', RecipeAllergyRoutes);
        this.app.use('/apis/comment', CommentRoute)
        this.app.use('/apis/profile-allergy', ProfileAllergyRoute)
        this.app.use('/apis/image-upload', ImageUploadRouter);
        this.app.use("/apis/sign-out", SignOutRoute);
    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}