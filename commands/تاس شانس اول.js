/*CMD
  command: تاس شانس اول
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
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "تاس شانس اول"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");

HTTP.get({
url: "" + WebService_Membership_Check + "=" + Channel_ID + "&user=" + UserID + "",
success: 'تاس شانس اول'
});
return
}

var Json = JSON.parse(content);
if (Json.status_code == 200) {
function canRun() {
var RunTime_Dice_Luck = User.getProperty("RunTime_Dice_Luck");
var remainingTime = RunTime_Dice_Luck ? 1 - (Date.now() - RunTime_Dice_Luck) / (1000 * 60 * 60 * 24) : 0;
if (remainingTime > 0) {
var [hours, minutes, seconds] = new Date(remainingTime * 24 * 60 * 60 * 1000).toISOString().substr(11, 8).split(':');
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "❌کاربر گرامی " + FirstName +" با عرض پوزش شما قبلا تاس شانس را انداختید.\n\n⌚️مدت انتظار:" + hours + " ساعت " + minutes +  " دقیقه " +  seconds + " ثانیه",
show_alert: true
})
return false;
}

return true;
}

if (!canRun()) return;
User.setProperty("RunTime_Dice_Luck", Date.now(), "integer");

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄تاس شانس در حال بار گذاری می باشد...",
show_alert: false
})

Api.sendDice({
on_result:"تاس شانس دوم",
emoji: "🎲"
})
}

else {
Api.editMessageText({
message_id: request.message.message_id,
text: "⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش شما از کانال خارج شده اید و ربات به درخواست شما پاسخی نمی دهد.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی عضویت بودن کانال", callback_data: "تاس شانس اول"}]
]}
});
}
}
}
