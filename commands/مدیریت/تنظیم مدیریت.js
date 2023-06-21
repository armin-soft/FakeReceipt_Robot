/*CMD
  command: تنظیم مدیریت
  help: 
  need_reply: 
  auto_retry_time: 
  folder: مدیریت
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");

if(chat.chatid==592526230){
Bot.runCommand("تنظیم مدیریت دوم");
}

else {
let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش شما دسترسی به این بخش را ندارید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی اصلی" , callback_data: "منوی خدمات ربات"}]
]}
});
}
