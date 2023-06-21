/*CMD
  command: الماس حساب کاربری
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

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "الماس حساب کاربری در حال بار گذاری می باشد...",
show_alert: false
})

Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به الماس حساب کاربری خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "➕افزایش الماس" , callback_data: "افزایش الماس اول"},{text: "➖کسر الماس" , callback_data: "کسر الماس اول"}],
[{text: "👁مشاهده الماس ", callback_data: "مشاهده الماس اول" }],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});
