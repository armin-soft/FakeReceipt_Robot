/*CMD
  command: آمار کلی
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

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");
var Statistics_Robot = Bot.getProperty("Total_User", "0")*1
var Photo = "https://quickchart.io/chart?c=%7B%0Atype%3A%20%27bar%27%2C%0Adata%3A%20%7B%0Alabels%3A%20%5B%27@FakeReceipt_Robot%27%5D%2C%0Adatasets%3A%20%5B%0A%7B%0Alabel%3A%20%27Total%20User%27%2C%0Adata%3A%20%5B" + Statistics_Robot + "%5D%2C%0AbackgroundColor%3A%20%27%231C8500%27%2C%0AborderColor%3A%20%27%23000000%27%2C%0AborderWidth%3A%202%2C%0A%7D%2C%0A%5D%2C%0A%7D%2C%0A%7D";

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "آمار کلی در حال بار گذاری می باشد...",
show_alert: false
})

Api.sendPhoto({
photo: Photo, 
caption: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به بخش آمار کلی خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n🔰آمار کلی بدین شرح است:\n\n👥تعداد کل:*" + Statistics_Robot + "* نفر", 
parse_mode: "Markdown",
});

Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});
