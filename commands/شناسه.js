/*CMD
  command: شناسه
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
let Channel_Url = Bot.getProperty("Channel_Url");
let Channel_ID = Bot.getProperty("Channel_ID");
let WebService_Membership_Check = Bot.getProperty("WebService_Membership_Check");
var Blocked_UserID = Bot.getProperty(user.telegramid + "Blocked_UserID");
var Robot_Status = Bot.getProperty("Robot_Status");
let Id = user.id;
let Username = user.username;
let LastName = user.last_name;

if (Blocked_UserID == true){
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*🚫کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") *با عرض پوزش شما به طور دائمی مسدود شده اید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*⚠️نکته:اگر فکر می کنید اشتباهی رخ داده است به پشتیبانی مراجعه کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📞پشتیبانی", url: "https://t.me/ARMIN_SOFT"}]
]}
});
}

else {
if (Robot_Status == "❌خاموش"){
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "❌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش ربات در دسترس نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n*⚠️علت:❌🤖ربات خاموش می باشد.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👁مشاهده کانال اطلاع رسانی", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "شناسه"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");

HTTP.get({
url: "" + WebService_Membership_Check + "=" + Channel_ID + "&user=" + UserID + "",
success: 'شناسه'
});
return
}

var Json = JSON.parse(content);
if (Json.status_code == 200) {
Api.sendMessage({
text: "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش شناسه خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات شناسه کاربری شما بدین شرح است:\n\n*👤نام:*`" + FirstName + " " + LastName + "`\n*Ⓜ️نام کاربری:*`@" + Username + "`\n*🆔شناسه عددی:*`" + Id + "`\n*🆔آیدی عددی:*`" + UserID + "`",
parse_mode: "Markdown",
});
}

else {
Api.sendMessage({
text: "⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش شما از کانال خارج شده اید و ربات به درخواست شما پاسخی نمی دهد.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی عضویت بودن کانال", callback_data: "شناسه"}]
]}
});
}
}
}
