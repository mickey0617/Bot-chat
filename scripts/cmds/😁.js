module.exports = {
 config: {
 name: "😁",
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
 if (event.body && event.body.toLowerCase() === "😁") {
 return message.reply({
 body: "continue de rire 😁 tu seras mon adversaire lors du match de basket je serai sans pitier 🏀",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/Tgn1mv0/image.jpg")
 });
 }
 }
}