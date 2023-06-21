/*CMD
  command: کد هدیه
  help: 
  need_reply: 
  auto_retry_time: 
  folder: مدیریت
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");
var Credit_Diamond = Bot.getProperty("Credit_Diamond");
var Gift_Code = Bot.getProperty("Gift_Code");
var Expiration_Date = Bot.getProperty("Expiration_Date");

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄 کد هدیه در حال بار گذاری می باشد...",
show_alert: false
})

function Currency(Credit_Diamond){
if(isNaN(Credit_Diamond))
return Credit_Diamond;

if(Credit_Diamond < 1000){
return "عدد";
}

if(Credit_Diamond < 1000000){
return "هزار عدد";
}

if(Credit_Diamond < 10000000){
return "میلیون عدد";
}

if(Credit_Diamond < 1000000000000){
return "میلیارد عدد";
}

if(Credit_Diamond < 1000000000000){
return "میلیارد عدد";
}

if(Credit_Diamond < 1000000000000000){
return "بیلیون عدد";
}

if(Credit_Diamond < 1000000000000000000){
return "بیلیارد عدد";
}

if(Credit_Diamond < 1000000000000000000000){
return "تریلیون عدد";
}
}

function Decimal(Credit_Diamond){
return Credit_Diamond.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

if (Gift_Code == undefined){
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به کد هدیه خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰کد هدیه بدین شرح است:\n\n*⚠️کد هدیه ای برای نمایش وجود ندارد.*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "➕ثبت کد" , callback_data: "ثبت کد هدیه اول"}],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات " }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});
}

else {
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به کد هدیه خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰کد هدیه بدین شرح است:\n\n*🔖کد هدیه کنونی:*`" + Gift_Code + "`\n*🎁الماس هدیه:" + (Decimal(Credit_Diamond)) + " " + (Currency(Credit_Diamond)) + "\n📆تاریخ منقضی:" + Expiration_Date + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🗑حذف کد هدیه (" + Gift_Code + ")" , callback_data: "حذف کد هدیه"}],
[{text: "🔙بازگشت به منوی قبل", callback_data: "تنظیمات " }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});
}
