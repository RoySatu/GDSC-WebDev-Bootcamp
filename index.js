const greeting = document.getElementById("greetings")
const hours  = new Date().getHours()
const welcomeTypes = ["Good Morning", "Good Afternoon", "Good Evening"]
const welcomeMssg = "";
if(hour < 12) welcomeMssg = welcomeTypes[0];
else if (hour <16) welcomeMssg = welcomeTypes[1];
else welcomeMssg = welcomeTypes[2];
greeting.innerHTML = welcomeMssg + ", Lets get things done."