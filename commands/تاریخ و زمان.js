/*CMD
  command: تاریخ و زمان
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
let WebService_DateTime_Now = Bot.getProperty("WebService_DateTime_Now");

HTTP.get({
url: "" + WebService_DateTime_Now + "",
success: 'تاریخ و زمان'
});
return
}

var Json = JSON.parse(content);
if (Json.ok == true) {
var Week = Json.result.fa.date.day_name
var Day2 = Json.result.fa.date.day
const Day = Day2.replace(/[0-9]/g, Persian=> "۰۱۲۳۴۵۶۷۸۹"[Persian]);
var Month = Json.result.fa.date.month_name
var Year2 = Json.result.fa.date.year
const Year = Year2.replace(/[0-9]/g, Persian=> "۰۱۲۳۴۵۶۷۸۹"[Persian]);
var Season = Json.result.fa.date.season_name
var Time2 = Json.result.fa.time.time
const Time = Time2.replace(/[0-9]/g, Persian=> "۰۱۲۳۴۵۶۷۸۹"[Persian]);
var Day_Type = Json.result.fa.date.day_type

Bot.setProperty("DateTime", "*📆تاریخ:" + Week + " " + Day + " " + Month + " " + Year + " | 🌎فصل:" + Season + "\n🕰زمان:" + Time + " " + Day_Type + "*");
}

else {
Bot.setProperty("DateTime", "*📆تاریخ:⚠️خطا | 🌎فصل:⚠️خطا\n🕰زمان:⚠️خطا*");
}
