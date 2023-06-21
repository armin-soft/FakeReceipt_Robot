/*CMD
  command: مجموعه گیری
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
let Collection_Link = Libs.ReferralLib.currentUser.getRefLink(bot.name);
let Channel_Photo = Bot.getProperty("Channel_Photo");

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
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "مجموعه گیری"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");

HTTP.get({
url: "" + WebService_Membership_Check + "=" + Channel_ID + "&user=" + UserID + "",
success: 'مجموعه گیری'
});
return
}

var Json = JSON.parse(content);
if (Json.status_code == 200) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄مجموعه گیری در حال بار گذاری می باشد...",
show_alert: false
})

Api.sendPhoto({
photo: Channel_Photo,
caption: "🎉کاربر " + FirstName + " شما را به ربات رسید جعلی دعوت نموده است.\n\n👌در نظر داشته باشید با پذیرش دعوت به شما ۱ عدد الماس داده می شود.\n➖➖➖➖➖➖➖➖➖➖\n♻️لینک عضویت ربات:\n" + Collection_Link + "",
});

let refList = Libs.ReferralLib.getRefList();
if (!refList.exist) {
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش مجموعه گیری خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*👆پست بالا حاوی لینک مجموعه گیری اختصاصی شما می باشد،با عضویت هر کاربر به شما ۲ عدد الماس افزوده می شود.*\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات مجموعه گیری بدین شرح است:\n\n*🎎تعداد مجموعه:۰ نفر*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "الماس رایگان" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});
return
}

let users_rows = ""
let users = refList.getUsers();
for (var ind in users) {
users_rows = users_rows + "\n👤 " + Libs.commonLib.getLinkFor( users[ind] )
}

Api.editMessageText({
message_id: request.message.message_id,
text: "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش مجموعه گیری خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*👆پست بالا حاوی لینک مجموعه گیری اختصاصی شما می باشد،با عضویت هر کاربر به شما ۶۰۰ تومان افزوده می شود.*\n➖➖➖➖➖➖➖➖➖➖\n🔰اطلاعات مجموعه گیری بدین شرح است:\n\n*🎎تعداد مجموعه:" + Libs.ReferralLib.getRefCount() + " نفر*\n" + users_rows + "",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "الماس رایگان" }],
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
[{text: "🔄بررسی عضویت بودن کانال", callback_data: "مجموعه گیری"}]
]}
});
}
}
}
