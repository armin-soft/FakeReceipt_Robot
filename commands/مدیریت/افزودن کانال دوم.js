/*CMD
  command: افزودن کانال دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آیدی عددی کانال را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Channel_ID", data.message, "text");

Bot.runCommand("افزودن کانال سوم");
