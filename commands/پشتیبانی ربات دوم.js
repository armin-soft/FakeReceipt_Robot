/*CMD
  command: پشتیبانی ربات دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌متن پیامک را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("UserID", data.user.telegramid);

var UserID = Bot.getProperty("UserID");
let FirstName = user.first_name;
let DateTime = Bot.getProperty("DateTime");
let Admins = Bot.getProperty("Add_Admin_UserID");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "📬کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") تیکت پشتیبانی شما با موفقیت در سیستم ثبت و بررسی خواهد شد.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پشتیبانی آنلاین" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});

if (request.photo[0]) {
if (request.caption == null) {
Bot.runCommand("تاریخ و زمان");
Api.sendPhoto({
chat_id: Admins,
photo: request.photo[0].file_id,
caption: "📬مدیریت گرامی لحظاتی پیش پیامک جدید دریافت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👤فرستنده:[" + FirstName + "](tg://user?id=" + UserID + ")\n📜متن پیامک:*ندارد*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{text: "🗣پاسخ پیامک" , callback_data: 'پاسخ پیامک' }],
[{text: "🏠بازگشت به منوی مدیریت" , callback_data: 'مدیریت' }],
]
}})
}

else {
Bot.runCommand("تاریخ و زمان");
Api.sendPhoto({
chat_id: Admins,
photo: request.photo[0].file_id,
caption: "📬مدیریت گرامی لحظاتی پیش پیامک جدید دریافت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👤فرستنده:[" + FirstName + "](tg://user?id=" + UserID + ")\n📜متن پیامک:*ندارد*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{text: "🗣پاسخ پیامک" , callback_data: 'پاسخ پیامک' }],
[{text: "🏠بازگشت به منوی مدیریت" , callback_data: 'مدیریت' }],
]
}})
}

return
}

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
chat_id: Admins,
text: "📬مدیریت گرامی لحظاتی پیش پیامک جدید دریافت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👤فرستنده:[" + FirstName + "](tg://user?id=" + UserID + ")\n📜متن پیامک:*" + message + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {
inline_keyboard: [
[{text: "🗣پاسخ پیامک" , callback_data: 'پاسخ پیامک' }],
[{text: "🏠بازگشت به منوی مدیریت" , callback_data: 'مدیریت' }],
]
}})
