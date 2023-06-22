/*CMD
  command: انتقال الماس چهارم
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

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let DateTime = Bot.getProperty("DateTime");
let Transfer_Credit_UserID = User.getProperty("Transfer_Credit_UserID");
let Transfer_Credit_Diamond = User.getProperty("Transfer_Credit_Diamond");
let Item = parseFloat(Transfer_Credit_Diamond);

let Diamond = Libs.ResourcesLib.anotherUserRes("Diamond", Transfer_Credit_UserID);

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

Diamond.add(Item);
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
chat_id: Transfer_Credit_UserID,
text: "*🎁کاربر گرامی تبریک لحظاتی پیش تعداد " + (Decimal(Item)) + " عدد الماس به شما توسط کاربر " + FirstName + " انتقال یافت.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*💎الماس کنونی:" + (Decimal(Diamond.value())) + " " + (Currency(Diamond.value())) + "*",
parse_mode: "Markdown",
});
