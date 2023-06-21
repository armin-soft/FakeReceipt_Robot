/*CMD
  command: تراکنش موفق دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌الماس پرداختی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Successful_Transaction_Payment_Diamond", data.message);
Bot.runCommand("تراکنش موفق سوم");
