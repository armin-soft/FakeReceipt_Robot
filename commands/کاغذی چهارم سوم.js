/*CMD
  command: کاغذی چهارم سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش دوم:شماره کارت مقصد را وارد کنید.
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

User.setProperty("Destination_Card", data.message, "text");
Bot.runCommand("کاغذی چهارم چهارم");
