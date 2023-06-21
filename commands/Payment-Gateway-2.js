/*CMD
  command: Payment-Gateway-2
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

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄درخواست درحال پردازش می باشد...",
show_alert: false
})

let Url = Libs.Webhooks.getUrlFor({
command: "Payment-Gateway-3",
user_id: user.id,
message_id: request.message.message_id,
redirect_to: "https://zarinp.al/armin-soft.ir"
})

Api.editMessageText({
message_id: request.message.message_id,
text: "✅کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") لینک پرداخت اختصاصی شما برای الماس دلخواه ایجاد گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👈ورود به درگاه پرداخت (تلگرام)", web_app: { url: Url }}],
[{text: "👈ورود به درگاه پرداخت (مستقیم)", url: "" + Url + "" }],
[{text: "🔙بازگشت به منوی قبل", callback_data: "پروفایل کاربری" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});
