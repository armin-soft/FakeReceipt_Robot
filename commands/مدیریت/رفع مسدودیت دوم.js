/*CMD
  command: رفع مسدودیت دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty(message + "Blocked_UserID", false);

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");
var Blocked_UserID = Bot.getProperty(user.telegramid + "Blocked_UserID");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✅مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") کاربر با موفقیت رفع مسدودیت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "جرایم" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Api.sendMessage({
chat_id: message,
text: "*✅کاربر گرامی شما رفع مسدود شدید.*\n\n" + DateTime + "*\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:اتصال شما به سرور آزاد شده است.*",
parse_mode: "Markdown",
});
