module.exports = {
 config: {
 name: "🤔",
 version: "1",
 author: "thea",
 countDown: 5,
 role: 0,
 shortDescription: "Sad cat",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "🤔") {
 return message.reply({
 body: "tu pense a quoi tu veux en discuter lors d'un match de basket 🏀",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/Tgn1mv0/image.jpg")
 });
 }
 }
}