module.exports = {
    config: {
        name: "🏀",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("🏀 Je suis celui qui détermine l'issue du match, je suis celui qui décide de la victoire ou de la défaite 🏀");
}
};