/*CMD
  command: تاس شانس دوم
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

let String = Libs.Random.randomInt(1,5);
let Dice_Luck = String;
let Result = options.result.dice.value

if (Result == "6"){
Diamond.add(Dice_Luck);
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*🎊کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") *تبریک " + (Decimal(Dice_Luck)) + " عدد الماس بابت تاس شانس و آوردن عدد ۶ به حساب شما افزوده گردید.\n\n😉همچنین می توانید ۲۴ ساعت آینده مجددا به این بخش مراجعه کنید و شانس خود را امتحان کنید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "الماس رایگان" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});
}

else {
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "*😢کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") *با عرض پوزش تاس شانس شما عدد ۶ نبود.\n\n🎲عدد تاس شانس شما:" + options.result.dice.value + "\n\n😉نگران نباشید می توانید ۲۴ ساعت آینده مجددا به این بخش مراجعه کنید و شانس خود را امتحان کنید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "الماس رایگان" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});
}
