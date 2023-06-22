/*CMD
  command: کاغذی اول اول
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
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "کاغذی اول اول"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");

HTTP.get({
url: "" + WebService_Membership_Check + "=" + Channel_ID + "&user=" + UserID + "",
success: 'کاغذی اول اول'
});
return
}

var Json = JSON.parse(content);
if (Json.status_code == 200) {
let Diamond = Libs.ResourcesLib.userRes("Diamond");
function Currency(Diamond){
if(isNaN(Diamond))
return Diamond;

if(Diamond < 1000){
return "عدد";
}

if(Diamond < 1000000){
return "هزار عدد";
}

if(Diamond < 10000000){
return "میلیون عدد";
}

if(Diamond < 1000000000000){
return "میلیارد عدد";
}

if(Diamond < 1000000000000){
return "میلیارد عدد";
}

if(Diamond < 1000000000000000){
return "بیلیون عدد";
}

if(Diamond < 1000000000000000000){
return "بیلیارد عدد";
}

if(Diamond < 1000000000000000000000){
return "تریلیون عدد";
}
}

function Decimal(Diamond){
return Diamond.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

if (Diamond.value()<2){
Api.editMessageText({
message_id: request.message.message_id,
text: "❌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش الماس شما کافی نمی باشد.\n➖➖➖➖➖➖➖➖➖\n*⚠️نکته:برای استفاده از این بخش به ۲ عدد الماس نیاز دارید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👤پروفایل کاربری", callback_data: "پروفایل کاربری"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});
}

else {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄کاغذی نوع اول در حال بار گذاری می باشد...",
show_alert: false
})

Diamond.remove(2);
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش کاغذی نوع اول خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🙇‍♂️لطفا به پرسش هایی که از شما پرسیده می شود به درستی پاسخ دهید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "رسید بانکی" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]]}
});

Bot.run({
command: "کاغذی اول دوم",
})
}
}

else {
Api.editMessageText({
message_id: request.message.message_id,
text: "⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش شما از کانال خارج شده اید و ربات به درخواست شما پاسخی نمی دهد.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی عضویت بودن کانال", callback_data: "کاغذی اول اول"}]
]}
});
}
}
}
