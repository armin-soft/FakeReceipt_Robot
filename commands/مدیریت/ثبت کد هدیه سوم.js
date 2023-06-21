/*CMD
  command: ثبت کد هدیه سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌تعداد الماس را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Credit_Diamond", data.message);
Bot.runCommand("ثبت کد هدیه چهارم")
