/*CMD
  command: تنظیم مدیریت سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌نام و نام خانوادگی مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Add_Admin_FullName", message);

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let DateTime = Bot.getProperty("DateTime");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✅کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") مدیریت ربات با موفقیت تنظیم گردید.\n\n" + DateTime + "",
parse_mode: "Markdown",
});
