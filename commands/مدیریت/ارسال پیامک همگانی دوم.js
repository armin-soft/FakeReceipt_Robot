/*CMD
  command: ارسال پیامک همگانی دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌متن پیامک را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✅مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") پیامک شما به تمامی کاربران با موفقیت ارسال گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n📨متن پیامک:" + message + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "ارسال پیامک"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Api.sendMessage({
chat_id: Add_Admin_UserID,
text: "*📩کاربر گرامی لحظاتی پیش پیامکی از سوی مدیریت دریافت گردید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*📨متن پیامک:" + message + "*",
parse_mode: "Markdown",
});
