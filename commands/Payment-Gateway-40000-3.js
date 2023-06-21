/*CMD
  command: Payment-Gateway-40000-3
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

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let DateTime = Bot.getProperty("DateTime");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
chat_id:Add_Admin_UserID,
text: "✅مدیریت گرامی لحظاتی پیش کاربر [" + FirstName + "](tg://user?id=" + UserID + ") جهت افزایش تعداد ۴۰ عدد الماس وارد درگاه پرداخت گردید.\n`" + UserID + "`\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "✅تراکنش موفق", callback_data: "تراکنش موفق اول" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});
