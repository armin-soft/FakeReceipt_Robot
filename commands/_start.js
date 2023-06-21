/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let FirstName = user.first_name;
let UserID = user.telegramid;
let DateTime = Bot.getProperty("DateTime");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let Channel_ID = Bot.getProperty("Channel_ID");
let Channel_Url = Bot.getProperty("Channel_Url");
var Blocked_UserID = Bot.getProperty(user.telegramid + "Blocked_UserID");
var Robot_Status = Bot.getProperty("Robot_Status");

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
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "/start"}]
]}
});
}

else {
if(!User.getProperty("Statistics_Robot")){
Bot.setProperty("Total_User", (Bot.getProperty("Total_User", "0")*1)+1, "text");
User.setProperty("Statistics_Robot", true, "boolean");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
chat_id: Add_Admin_UserID,
text: "*✅لحظاتی پیش کاربر جدیدی عضو ربات گردید.\n\n👤نام:*[" + FirstName + "](tg://user?id=" + UserID + ")\n🆔آیدی عددی:`" + UserID + "`\n\n" + DateTime + "",
parse_mode: "Markdown"
});
}

function doTouchOwnLink(){
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*❌کاربر گرامی* [" + FirstName+ "](tg://user?id=" + UserID + ") *شما نمی توانید از لینک مجموعه گیری خود استفاده کنید.*\n\n" + DateTime + "",
parse_mode: "Markdown",
});
}

function doAtractedByUser(refUser) {
let Diamond = Libs.ResourcesLib.anotherUserRes("Diamond", refUser.telegramid);

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

Bot.runCommand("تاریخ و زمان");
Diamond.add(1);
Api.sendMessage({
text: "*🎁کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") * شما تعداد ۱ عدد الماس بدلیل عضویت به ربات دریافت نمودید.\n➖➖➖➖➖➖➖➖➖➖\n🎎همچنین شما از طریق لینک معرف* " + Libs.commonLib.getLinkFor(refUser) + " *عضویت خود را انجام دادید.*\n\n" + DateTime + "",
parse_mode: "Markdown",
});

Diamond.add(2);
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
chat_id: refUser.telegramid,
text: "*🎁کاربر گرامی تبریک شما تعداد ۲ عدد الماس بابت عضویت کاربر* " + Libs.commonLib.getLinkFor(user) + " *به ربات دریافت نمودید.*\n\n" + DateTime + "",
parse_mode: "Markdown",
});
}

function doAlreadyAttracted(){
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*⚠️کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") *شما قبلا یک بار عضویت خود را انجام داده اید.*\n\n" + DateTime + "",
parse_mode: "Markdown",
});
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.track(trackOptions);

let Join = Bot.getProperty(""+user.telegramid+"?Ban");
if (Join=="ban"){
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") جهت استفاده از امکانات ربات باید عضو کانال شوید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی عضویت", callback_data: "بررسی عضویت"}]
]}
});
}

else {
let id = user.telegramid
Api.getChatMember({ 
chat_id: "" + Channel_ID + "",
user_id : id,
on_result :"بررسی عضویت"
})
}
}
}
