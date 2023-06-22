/*CMD
  command: کاغذی اول پنجم
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let msg_id = options.result.message_id;
let Destination_Card = User.getProperty("Destination_Card");

User.setProperty("msgid" ,msg_id, "integer");

HTTP.get({
url: "https://tabdil24.net/api/api/v1/provider/preview?number=" + Destination_Card + "&type=1&bank=063",
success: "کاغذی اول ششم"
});
