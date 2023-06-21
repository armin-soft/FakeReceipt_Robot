/*CMD
  command: تراکنش موفق سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌شناسه پیگیری را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Successful_Transaction_Tracking_ID", data.message);

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");
let Successful_Transaction_UserID = User.getProperty("Successful_Transaction_UserID");
let Successful_Transaction_Payment_Diamond = User.getProperty("Successful_Transaction_Payment_Diamond");
let Successful_Transaction_Tracking_ID = User.getProperty("Successful_Transaction_Tracking_ID");
let Item = parseFloat(Successful_Transaction_Payment_Diamond);

let Diamond = Libs.ResourcesLib.anotherUserRes("Diamond", Successful_Transaction_UserID);
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
Api.sendMessage({
text: "✅مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") *تعداد " + (Decimal(Item)) + " عدد الماس به کاربر بابت تراکنش موفق با موفقیت افزوده گردید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Diamond.add(Item);
Api.sendMessage({
chat_id: Successful_Transaction_UserID,
text: "*🎊کاربر گرامی پرداخت شما با کد پیگیری " + Successful_Transaction_Tracking_ID + " با موفقیت انجام شد و تعداد " + (Decimal(Item)) + " عدد الماس به حساب شما افزوده گردید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*",
parse_mode: "Markdown",
});
