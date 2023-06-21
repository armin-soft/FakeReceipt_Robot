/*CMD
  command: بروز رسانی
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
var Robot_Version = Bot.getProperty("Robot_Version");
var Robot_Changes = Bot.getProperty("Robot_Changes");

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄 بروز رسانی در حال بار گذاری می باشد...",
show_alert: false
})

if (Robot_Version == undefined){
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به بروز رسانی خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰تغیرات کنونی ربات بدین شرح است:\n\n*⚠️تغییراتی جهت برای نمایش وجود ندارد.*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "➕افزودن نسخه جدید", callback_data: "افزودن نسخه جدید اول" }],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات " }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});
}

else {
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به بروز رسانی خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰تغیرات کنونی ربات بدین شرح است:\n\n*🔄نسخه کنونی:" + Robot_Version + "\n\n" + Robot_Changes + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "➕افزودن نسخه جدید", callback_data: "افزودن نسخه جدید اول" }],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات " }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});
}
