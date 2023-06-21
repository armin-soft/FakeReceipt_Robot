/*CMD
  command: وب سرویس
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
let WebService_DateTime_Now = Bot.getProperty("WebService_DateTime_Now", "⚠️تنظیم نشده است");
let WebService_Membership_Check = Bot.getProperty("WebService_Membership_Check", "⚠️تنظیم نشده است");

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄 وب سرویس در حال بار گذاری می باشد...",
show_alert: false
})

if (WebService_DateTime_Now == undefined){
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به وب سرویس خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰وب سرویس بدین شرح است:\n\وب سرویس برای نمایش وجود ندارد.\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "➕افزودن وب سرویس", callback_data: "افزودن وب سرویس اول" }],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});
}

else {
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به وب سرویس خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰وب سرویس بدین شرح است:\n\n*🌐وب سرویس تاریخ و زمان اکنون:*\n`" + WebService_DateTime_Now + "`\n*🌐وب سرویس بررسی عضویت:*\n`" + WebService_Membership_Check + "`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "➕افزودن وب سرویس", callback_data: "افزودن وب سرویس اول" }],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});
}
