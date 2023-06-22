/*CMD
  command: کاغذی اول دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش اول:شماره کارت مبدا را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:فرمت ارسالی با ۱۶ رقم و اعداد انگلیسی وارد شود.
📓نمونه:6037000000000000
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Origin_Card", data.message, "text");
Bot.runCommand("کاغذی اول سوم");
