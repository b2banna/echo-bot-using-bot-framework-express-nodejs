const { BotFrameworkAdapter } = require('botbuilder');

// Create BotFramework adapter.
module.exports.BotFrameworkAdapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

// Catch-all for errors.
this.BotFrameworkAdapter.onTurnError = async (context, error) => {
    console.error(`\n [onTurnError]: ${error}`);
    await context.sendActivity(`Oops. Something went wrong!`);
};
