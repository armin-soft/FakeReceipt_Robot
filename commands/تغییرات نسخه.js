/*CMD
  command: تغییرات نسخه
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
let Robot_Version = Bot.getProperty("Robot_Version", "⚠️ثبت نشده است");
let Robot_Changes = Bot.getProperty("Robot_Changes", "⚠️ثبت نشده است");

if (Blocked_UserID == true){
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
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
Api.editMessageText({
message_id: request.message.message_id,
text: "❌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش ربات در دسترس نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n*⚠️علت:❌🤖ربات خاموش می باشد.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👁مشاهده کانال اطلاع رسانی", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "تغییرات نسخه"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");

HTTP.get({
url: "" + WebService_Membership_Check + "=" + Channel_ID + "&user=" + UserID + "",
success: 'تغییرات نسخه'
});
return
}

var Json = JSON.parse(content);
if (Json.status_code == 200) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄تغییرات نسخه در حال بار گذاری می باشد...",
show_alert: false
})

Api.editMessageText({
message_id: request.message.message_id,
text: "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش تغییرات نسخه خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات بروز رسانی جدید بدین شرح است:\n\n*🔄نسخه جدید ربات:" + Robot_Version + "\n\n" + Robot_Changes + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});
}

else {
Api.editMessageText({
message_id: request.message.message_id,
text: "⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش شما از کانال خارج شده اید و ربات به درخواست شما پاسخی نمی دهد.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی عضویت بودن کانال", callback_data: "تغییرات نسخه"}]
]}
});
}
}
}
