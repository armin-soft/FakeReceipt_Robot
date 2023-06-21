/*CMD
  command: ثبت کد هدیه چهارم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌تاریخ منقضی را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Expiration_Date", data.message);

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");
let Channel_ID = Bot.getProperty("Channel_ID");
var Credit_Diamond = Bot.getProperty("Credit_Diamond");
var Gift_Code = Bot.getProperty("Gift_Code");
var Expiration_Date = Bot.getProperty("Expiration_Date");

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

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✅مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") کد هدیه با موفقیت ایجاد گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "کد هدیه"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Api.sendMessage({
chat_id: Channel_ID,
text: "*🎁کاربر گرامی لحظاتی پیش کد هدیه جدیدی ایجاد گردید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*🔰کد هدیه بدین شرح است:\n\n🔖کد هدیه :*`" + Gift_Code + "`\n*🎁الماس هدیه:" + (Decimal(Credit_Diamond)) + " " + (Currency(Credit_Diamond)) + "\n📆تاریخ منقضی:" + Expiration_Date + "*",
parse_mode: "Markdown",
});
