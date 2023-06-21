/*CMD
  command: !
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
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

if(chat.chatid==Add_Admin_UserID){
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "❌مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") با عرض پوزش گزارش مشکل به پشتیبانی ارسال گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});
}

else {
let FirstName = data.user.first_name;
let UserID = data.user.telegramid;

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "❌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش گزارش مشکل به پشتیبانی ارسال گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی اصلی" , callback_data: "منوی خدمات ربات"}]
]}
});
}
