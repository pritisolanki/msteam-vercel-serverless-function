## Kontent.ai + Microsoft team  Serverless Integration
Vercel serverless function to set-up for the purpose of showcasing integration of Kontent.ai webhook to microsoft team for pushing notification in microsoft team using adaptive cards.

## Install
> npm install

## Prerequisite
- Create .env
- Add MSTEAM_URL =<incoming_webhook_url>

[Setup Microsoft team for incoming webhook](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet)

## Deploy on vercel
> vercel 

On successful deployment it will return the URL for serverless function to configure as webhook.

## Message format for message notification in microsoft team channel
[Adaptive cards samples](https://adaptivecards.io/samples/)
