/*CMD
  command: تنظیم مدیریت دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آیدی عددی مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Add_Admin_UserID", message);
Bot.runCommand("تنظیم مدیریت سوم");
