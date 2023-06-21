/*CMD
  command: بررسی عضویت
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
let Channel_Url = Bot.getProperty("Channel_Url");
var Blocked_UserID = Bot.getProperty(data.user.telegramid + "Blocked_UserID");

if (Blocked_UserID == true) {
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*🚫کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") *شما از ربات و سرور به طور دائمی مسدود شدید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*⚠️نکته:اگر فکر می کنید اشتباهی رخ داده است به پشتیبانی مراجعه کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📞پشتیبانی", url: "https://t.me/ARMIN_SOFT"}]
]}
});
}

else {
let FirstName1 = data.user.first_name;
let UserID1 = data.user.telegramid;
let DateTime1 = Bot.getProperty("DateTime");

var user = options.result.status
if ((user == "member") | (user == "administrator") | (user == "creator")) {
User.setProperty("userStatus", user, "string")

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "🌹کاربر گرامی [" + FirstName1 + "](tg://user?id=" + UserID1 + ") به ربات رسید جعلی خوش آمدید.\n\n" + DateTime1 + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text:"🛠منوی خدمات ربات", callback_data:"منوی خدمات ربات"}]
]}
});
}

if (user == "left") {
let FirstName2 = data.user.first_name;
let UserID2 = data.user.telegramid;
let DateTime2 = Bot.getProperty("DateTime");

Bot.runCommand("تاریخ و زمان ");
Api.sendMessage({
text: "⛔️کاربر گرامی [" + FirstName2 + "](tg://user?id=" + UserID2 + ") چهت استفاده از امکانات ربات باید عضو کانال شوید.\n\n" + DateTime2 + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی عضویت", callback_data: "/start"}]
]}
});
}
}
