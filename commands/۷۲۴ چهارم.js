/*CMD
  command: ۷۲۴ چهارم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⁉️پرسش سوم:مبلغ واریزی را وارد کنید.
➖➖➖➖➖➖➖➖➖➖
⚠️نکته:فرمت ارسالی به ریال و اعداد انگلیسی وارد شود.
📓نمونه:100000
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Amount", data.message, "text");
Bot.sendMessage("🔄ربات در حال ساخت رسید می باشد...\n➖➖➖➖➖➖➖➖➖➖\n⚠️نکته:این عملیات ممکن است اندکی طول بکشد.", {on_result: "۷۲۴ پنجم"});
