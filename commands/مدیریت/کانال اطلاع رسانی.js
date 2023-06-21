/*CMD
  command: کانال اطلاع رسانی
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
let Channel_ID = Bot.getProperty("Channel_ID", "⚠️تنظیم نشده است");
let Channel_Url = Bot.getProperty("Channel_Url", "⚠️تنظیم نشده است");
let Channel_Photo = Bot.getProperty("Channel_Photo", "⚠️تنظیم نشده است");

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄 کانال اطلاع رسانی در حال بار گذاری می باشد...",
show_alert: false
})

if (Channel_ID == undefined){
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به کانال اطلاع رسانی خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰کانال اطلاع رسانی بدین شرح است:\n\کانال اطلاع رسانی برای نمایش وجود ندارد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "➕افزودن کانال", callback_data: "افزودن کانال اول" }],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});
}

else {
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به کانال اطلاع رسانی خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰کانال اطلاع رسانی بدین شرح است:\n\n*🆔آیدی عددی:*`" + Channel_ID + "`\n*♻️لینک:*\n`" + Channel_Url + "`\n*🖼تصویر:*\n`" + Channel_Photo + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "➕افزودن کانال", callback_data: "افزودن کانال اول" }],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});
}
