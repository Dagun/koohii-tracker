const jsdom = require("jsdom");
const fs = require('fs');
const schedule = require('node-schedule');
const { JSDOM } = jsdom;

let updateFelix = () => {
    JSDOM.fromURL("https://kanji.koohii.com/profile/Rockoro",{}).then((dom)=>{
        let rawdata = fs.readFileSync('felix.json');
        let koohii = JSON.parse(rawdata);
        let table = dom.window.document.querySelector("#main_container > table");
        let kanjis = table.querySelector("tbody > tr:nth-child(2) > td > strong").innerHTML;
        let reviews = table.querySelector("tbody > tr:nth-child(3) > td").innerHTML;
        let lastLogin = table.querySelector("tbody > tr:nth-child(5) > td").innerHTML;
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        let jsonData = { time: hours+":"+minutes+":"+seconds, date: date+"-"+month+"-"+year, kanjis: kanjis, reviews: reviews, lastLogin: lastLogin };
        koohii.koohii.data.push(jsonData);
    
        fs.writeFile("felix.json",JSON.stringify(koohii),'utf8',function(err){
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
         
            console.log("JSON file has been saved.",date,month,year,hours,minutes,seconds);
        });
    });
};

const job = schedule.scheduleJob({hour: 0, minute: 0, second: 0, tz:'Etc/UTC'},function(){
    updateFelix();
});