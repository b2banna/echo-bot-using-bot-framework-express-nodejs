const { ActivityHandler } = require('botbuilder');

module.exports.EchoBot = class EchoBot extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async (context, next) => {
            try {
                const userText = `You said *${context.activity.text}*`;
                await context.sendActivity(userText);
            } catch (error) {
                throw error;
            } finally {
                await next();
            }
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = `Hello and welcome!`;
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(welcomeText);
                }
            }
            await next();
        });
    };
};
