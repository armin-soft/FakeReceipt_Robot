/*CMD
  command: پاسخ پیامک
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
let UserID = Bot.getProperty("UserID");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✔️مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") پاسخ پیامک شما با موفقیت به کاربر ارسال گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});

Api.sendMessage({
chat_id: UserID,
text: "*📩کاربر گرامی پیامک جدید از سوی پشتیبانی دریافت گردید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*📮متن پیامک:" + message + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🗣پاسخ پیامک", callback_data: "پشتیبانی ربات اول" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});
