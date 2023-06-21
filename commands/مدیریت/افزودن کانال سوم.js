/*CMD
  command: افزودن کانال سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌لینک کانال را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Channel_Url", data.message, "text");

Bot.runCommand("افزودن کانال چهارم");
