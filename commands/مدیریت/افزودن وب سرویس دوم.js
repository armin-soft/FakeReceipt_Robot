/*CMD
  command: افزودن وب سرویس دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آدرس وب سرویس تاریخ و زمان اکنون را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("WebService_DateTime_Now", message);
Bot.runCommand("افزودن وب سرویس سوم");
