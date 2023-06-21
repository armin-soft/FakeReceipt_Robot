/*CMD
  command: افزودن نسخه جدید سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌تغیرات جدید ربات را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Robot_Changes", message);

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");
let Channel_ID = Bot.getProperty("Channel_ID");
let Channel_Photo = Bot.getProperty("Channel_Photo");
let Robot_Version = Bot.getProperty("Robot_Version");
let Robot_Changes = Bot.getProperty("Robot_Changes");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✅مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") ربات با موفقیت به نسخه جدید بروز رسانی گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "بروز رسانی"}],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Api.sendPhoto({
chat_id: Channel_ID,
photo: Channel_Photo,
caption: "*✅سلام کاربرای گرامی ربات با موفقیت بروز رسانی گردید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*🔰اطلاعات بروز رسانی جدید بدین شرح است:\n\n🔄نسخه جدید ربات:" + Robot_Version + "\n\n" + Robot_Changes + "*",
parse_mode: "Markdown",
});
