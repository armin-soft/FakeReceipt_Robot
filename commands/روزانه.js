/*CMD
  command: روزانه
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
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "روزانه"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");

HTTP.get({
url: "" + WebService_Membership_Check + "=" + Channel_ID + "&user=" + UserID + "",
success: 'روزانه'
});
return
}

var Json = JSON.parse(content);
if (Json.status_code == 200) {
function canRun() {
var RunTime_Daily = User.getProperty("RunTime_Daily");
var remainingTime = RunTime_Daily ? 1 - (Date.now() - RunTime_Daily) / (1000 * 60 * 60 * 24) : 0;
if (remainingTime > 0) {
var [hours, minutes, seconds] = new Date(remainingTime * 24 * 60 * 60 * 1000).toISOString().substr(11, 8).split(':');
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "❌کاربر گرامی " + FirstName +" با عرض پوزش شما قبلا الماس روزانه را دریافت نمودید.\n\n⌚️مدت انتظار:" + hours + " ساعت " + minutes +  " دقیقه " +  seconds + " ثانیه",
show_alert: true
})
return false;
}

return true;
}

if (!canRun()) return;
User.setProperty("RunTime_Daily", Date.now(), "integer");

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄روزانه در حال بار گذاری می باشد...",
show_alert: false
})

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

let String = Libs.Random.randomInt(1,4);
let Daily = String;

Diamond.add(Daily);
Api.editMessageText({
message_id: request.message.message_id,
text: "*🎊کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") *تبریک " + (Decimal(Daily)) + " عدد الماس بابت روزانه به حساب شما افزوده گردید.\n\n😉همچنین می توانید ۲۴ ساعت آینده مجددا به این بخش مراجعه کنید و هدیه روزانه خود را دریافت کنید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
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
[{text: "🔄بررسی عضویت بودن کانال", callback_data: "روزانه"}]
]}
});
}
}
}
