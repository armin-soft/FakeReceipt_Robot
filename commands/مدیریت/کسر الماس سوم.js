/*CMD
  command: کسر الماس سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌تعداد الماس را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");
let Deduction_Diamond_UserID = User.getProperty("Deduction_Diamond_UserID");
let Item = parseFloat(message);
let Diamond = Libs.ResourcesLib.anotherUserRes("Diamond",Deduction_Diamond_UserID);

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
text: "✅مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") تعداد *" + (Decimal(Item)) + "* عدد الماس کاربر با موفقیت کسر گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "الماس حساب کاربری"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Diamond.remove(Item);
Api.sendMessage({
chat_id: Deduction_Diamond_UserID,
text: "*😢کاربر گرامی با عرض پوزش لحظاتی پیش تعداد " + (Decimal(Item)) + " عدد الماس توسط مدیریت کسر گردید.\n\n💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*\n➖➖➖➖➖➖➖➖➖➖\n" + DateTime + "",
parse_mode: "Markdown",
});
