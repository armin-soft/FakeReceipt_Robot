/*CMD
  command: انتقال الماس سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌تعداد انتقال الماس را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Transfer_Credit_Diamond", data.message);

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let DateTime = Bot.getProperty("DateTime");
let Transfer_Credit_UserID = User.getProperty("Transfer_Credit_UserID");
let Transfer_Credit_Diamond = User.getProperty("Transfer_Credit_Diamond");
let Item = parseFloat(Transfer_Credit_Diamond);

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

if (Diamond.value()<Item){
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "❌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش الماس شما برای انتقال *" + (Decimal(Item)) + "* عدد الماس به کاربر *" + Transfer_Credit_UserID + "* کافی نمی باشد.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔄تلاش مجدد", callback_data: "انتقال الماس اول" }],
[{text: "🔙بازگشت به منوی قبل", callback_data: "پروفایل کاربری" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }],
]}
});
}

else {
Diamond.remove(Item);
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✅کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") تعداد *" + (Decimal(Item)) + "* عدد از الماس شما به کاربر *" + Transfer_Credit_UserID + "* با موفقیت انتقال یافت.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پروفایل کاربری" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }],
]}
});

Bot.runCommand("انتقال الماس چهارم");
}
