module.exports = {
 config: {
 name: "😒",
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
 if (event.body && event.body.toLowerCase() === "😒") {
 return message.reply({
 body: "je suis énervée contre l'humanité alors ne croise par mon regard ou je serai obligé d'utiliser mes yeux d'empereur pour te battre 🏀",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/Tgn1mv0/image.jpg")
 });
 }
 }
}