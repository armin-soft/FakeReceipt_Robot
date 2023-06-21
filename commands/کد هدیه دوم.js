/*CMD
  command: کد هدیه دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👌کد هدیه مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Gift_Code = Bot.getProperty("Gift_Code"); 

if(data.message==Gift_Code){
Bot.sendMessage("🔄ربات در حال بررسی کد هدیه وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "کد هدیه سوم", is_reply: true});
}

else{
Bot.sendMessage("🔄ربات در حال بررسی کد هدیه وارد شده می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است دقایقی طول بکشد", {on_result: "کد هدیه پنجم", is_reply: true});
};
