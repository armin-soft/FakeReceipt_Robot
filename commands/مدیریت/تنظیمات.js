/*CMD
  command: تنظیمات
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
let Robot_Status = Bot.getProperty("Robot_Status");

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄تنظیمات در حال بار گذاری می باشد...",
show_alert: false
})

Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به تنظیمات خوش آمدید.\n➖➖➖➖➖➖➖➖➖➖\n*🚦🤖وضعیت ربات:" + Robot_Status + "*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "✅روشن کردن ربات🤖", callback_data: "روشن کردن ربات"},{text: "❌خاموش کردن ربات🤖", callback_data: "خاموش کردن ربات"}],
[{text: "📢کانال اطلاع رسانی", callback_data: "کانال اطلاع رسانی"}],
[{text: "🌐وب سرویس", callback_data: "وب سرویس"}],
[{text: "💎الماس حساب کاربری", callback_data: "الماس حساب کاربری"}],
[{text: "🔖کد هدیه", callback_data: "کد هدیه"}],
[{text: "📛جرایم", callback_data: "جرایم"}],
[{text: "📨 ارسال پیامک", callback_data: "ارسال پیامک"}],
[{text: "🔃 بروز رسانی", callback_data: "بروز رسانی"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});
