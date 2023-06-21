/*CMD
  command: ارسال پیامک تکی دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Single_SMS_UserID", message);

Bot.runCommand("ارسال پیامک تکی سوم");
