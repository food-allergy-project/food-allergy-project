import {Request, Response} from 'express';
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Profile} from '../../utils/interfaces/Profile';
import {Status} from '../../utils/interfaces/Status';
import {insertProfile} from '../../utils/profile/insert-profile';
import formData from 'form-data'
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';


// Interfaces (represent the DB model and types of the columns associated with a specific DB table)


export async function signupProfileController(request: Request, response: Response): Promise<Response | undefined> {
    try {

        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: "api", key: <string>process.env.MAILGUN_API_KEY})

        const {profileFullName, profileEmail, profilePassword} = request.body;
        const profileHash = await setHash(profilePassword);
        const profileActivationToken = setActivationToken();
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}/activation/${profileActivationToken}`
        console.log(profileActivationToken)

        const message = `<h2>Welcome to Allergic Foodies.</h2>
        <p>Please confirm your account. </p>
        <p><a href="${basePath}">${basePath}</a></p>
`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: profileEmail,
            subject: 'One Step Closer to Yummy Recipes -- Account Activation',
            html: message
        }


        const profile: Profile = {
            profileId: null,
            profileActivationToken,
            profileFullName,
            profileEmail,
            profileHash,
        };

        await insertProfile(profile)

        await mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)

        const status: Status = {
            status: 200,
            message: 'Profile successfully created please check your email.',
            data: null
        };

        return response.json(status)

    } catch (error: any) {
    console.error(error)
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };

        return response.json(status);
    }
}