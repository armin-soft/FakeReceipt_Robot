/*CMD
  command: افزودن کانال چهارم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌تصویر کانال را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Channel_Photo", message)

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✅مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") کانال اطلاع رسانی با موفقیت تنظیم شد.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
disable_web_page_preview: true,
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "کانال اطلاع رسانی"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});
