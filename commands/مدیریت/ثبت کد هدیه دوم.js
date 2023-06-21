/*CMD
  command: ثبت کد هدیه دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌کد هدیه را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Gift_Code", data.message);
Bot.runCommand("ثبت کد هدیه سوم");
