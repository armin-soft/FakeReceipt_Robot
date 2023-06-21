/*CMD
  command: کد هدیه چهارم
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

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let DateTime = Bot.getProperty("DateTime");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let Channel_ID = Bot.getProperty("Channel_ID");
var Edit = User.getProperty("msgid")
var Gift_Code = Bot.getProperty("Gift_Code");

Bot.editMessage("✔️کد هدیه وارد شده صحیح می باشد.", Edit);

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

function Decimal(Credit_Diamond){
return Credit_Diamond.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

let Credit_Diamond = Bot.getProperty("Credit_Diamond");
let Item = parseFloat(Credit_Diamond);

Diamond.add(Item);
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "🎁کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") تبریک *" + (Decimal(Item)) + "* عدد الماس بابت کد هدیه به حساب شما افزوده گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "الماس رایگان" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }],
]}
});

Api.sendMessage({
chat_id: Add_Admin_UserID,
text: "✅لحظاتی پیش کد هدیه *" + Gift_Code + "* توسط کاربر [" + FirstName + "](tg://user?id=" + UserID + ") استفاده گردید.\n\n" + DateTime + "",
parse_mode: "Markdown",
});
