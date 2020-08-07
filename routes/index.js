'use strict';
const { BotFrameworkAdapter } = require('../middelwares/botFrameworkAdapter')
const { EchoBot } = require('../bot');

// Create the main dialog.
const bot = new EchoBot();

module.exports.init = (app) => {
    app.get("/", (req, res) => {
        return res.status(200).send({ message: 'Hello  World!' });
    });

    app.post("/api/messages", (req, res) => {
        BotFrameworkAdapter.processActivity(req, res, async (context) => {
            try {
                await bot.run(context);
            } catch (error) {
                throw error;
            }
        });
    });
};
