/*CMD
  command: کاغذی دوم ششم
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
var Edit = User.getProperty("msgid");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let Origin_Card = User.getProperty("Origin_Card");
let Destination_Card = User.getProperty("Destination_Card");
let Amount = User.getProperty("Amount");

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

var Json = JSON.parse(content);
if (Json.name){
var FullName1 = Json.name
User.setProperty("FullName", FullName1);

let FullName = User.getProperty("FullName");

Diamond.remove(2);
Bot.editMessage("✔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") *رسید کاغذی نوع دوم با موفقیت ساخته شد.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*⏳رسید تا لحظاتی دیگر ارسال می شود.*", Edit);

Api.sendPhoto({
photo: "https://armin-soft.ir/Tools/Telegram-BOT/Service/Fake-Receipt/Fake/Bank/Paper-2/?Amount=" + Amount + "&Origin_Card=" + Origin_Card + "&Destination_Card=" + Destination_Card + "&FullName=" + FullName + "",
caption: "*✅کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") *تعداد ۲ عدد الماس بدلیل عملیات موفق از حساب شما کسر گردید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*",
parse_mode: "Markdown",
});

Api.sendMessage({
text: "👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📑ساخت رسید مجدد کاغذی نوع دوم", callback_data: "کاغذی دوم اول"}],
[{text: "🔙بازگشت به منوی رسید بانکی", callback_data: "رسید بانکی"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});

Api.sendMessage({
chat_id: Add_Admin_UserID,
text: "*✅مدیریت گرامی لحظاتی پیش کاربر* [" + FirstName + "](tg://user?id=" + UserID + ") *رسید فیک کاغذی نوع دوم ساختند.*\n➖➖➖➖➖➖➖➖➖➖\n" + DateTime + "",
parse_mode: "Markdown",
});
}

else {
Diamond.add(2);
Api.sendMessage({
text: "*❌کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") *رسید کاغذی دوم ساخته نشد و همچنین تعداد ۲ عدد الماس بدلیل عملیات ناموفق به حساب شما عودت گردید.\n\n⚠️علت:شماره کارت مبدا یا مقصد به درستی وارد نشده است.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📑ساخت رسید مجدد کاغذی نوع دوم", callback_data: "کاغذی دوم اول"}],
[{text: "🔙بازگشت به منوی رسید بانکی", callback_data: "رسید بانکی"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات"}]
]}
});
}
