/*CMD
  command: کد هدیه ششم
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

var Edit = User.getProperty("msgid")

Bot.editMessage("❌کد هدیه وارد شده صحیح نمی باشد.", Edit);

Api.sendMessage({
text: "👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "اعتبار رایگان" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }],
]}
});
