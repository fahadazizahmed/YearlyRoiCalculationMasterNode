
var ex = require('express');
var router = ex.Router();
const axios = require('axios');
const masternodeUrl = "http://81.4.101.56/api/getmasternodecount"
const blockcountUrl = "http://81.4.101.56/api/getblockcount";
const requiredCoins = 1000;
var activeMasternodes;
var paidRewards;
var blocks;
var noOfBlockPerDay = 1440;
const amountInvested = "";
const investmentPeriod = 3; // 3 months


var blocks;

router.get('/roicalculate',async function(req,res) {
//Calculate the no of masternode
response =  await  axios.get(masternodeUrl);
activeMasternodes =  response.data.enabled;

//Calculate thre block
response =  await axios.get(blockcountUrl);
blocks  =  response.data;

// Check Block falls
if (blocks >= 0 && blocks <= 20000){
paidRewards = 2*75/100;
}
else if (blocks >= 20000 && blocks <= 29999){
paidRewards = 4*75/100;

}
else if (blocks >= 30000 && blocks <= 39999){
paidRewards = 6*75/100;

}
else if (blocks >= 40000 && blocks <= 49999){
paidRewards = 8*75/100;

}
else if (blocks >= 50000 && blocks <= 59999){
paidRewards = 10*75/100;

}
else if (blocks >= 60000 && blocks <= 69999){
paidRewards = 12*75/100;

}
else if (blocks >= 70000 && blocks <= 79999){
paidRewards = 14*75/100;

}
else if (blocks >= 80000 && blocks <= 89999){
paidRewards = 16*75/100;

}
else if (blocks >= 90000 && blocks <= 99999){
paidRewards = 18*75/100;

}
else if (blocks >= 100000 && blocks <= 109999){
paidRewards = 20*75/100;

}
else if (blocks >= 110000 && blocks <= 119999){
paidRewards = 22*75/100;

}
else if (blocks >= 120000 && blocks <= 129999){
paidRewards = 24*75/100;

}
else if (blocks >= 130000 && blocks <= 139999){
paidRewards = 26*75/100;

}
else if (blocks >= 140000 && blocks <= 149999){
paidRewards = 25*75/100;

}
else if (blocks >= 150000 && blocks <= 159999){
paidRewards = 24*75/100;

}
else if (blocks >= 160000 && blocks <= 169999){
paidRewards = 23*75/100;

}
else if (blocks >= 170000 && blocks <= 179999){
paidRewards = 22*75/100;

}
else if (blocks >= 180000 && blocks <= 189999){
paidRewards = 21*75/100;

}
else if (blocks >= 190000 && blocks <= 199999){
paidRewards = 20*75/100;

}
else if (blocks >= 200000 && blocks <= 209999){
paidRewards = 19*75/100;

}
else if (blocks >= 210000 && blocks <= 219999){
paidRewards = 18*75/100;

}
else if (blocks >= 220000 && blocks <= 229999){
paidRewards = 17*75/100;

}
else if (blocks >= 230000 && blocks <= 239999){
paidRewards = 16*75/100;

}
else if (blocks >= 240000 && blocks <= 249999){
paidRewards = 15*75/100;

}
else if (blocks >= 250000 && blocks <= 259999){
paidRewards = 14*75/100;

}
else if (blocks >= 260000 && blocks <= 269999){
paidRewards = 13*75/100;

}
else if (blocks >= 270000 && blocks <= 279999){
paidRewards = 12*75/100;

}
else if (blocks >= 280000 && blocks <= 289999){
paidRewards = 11*75/100;

}
else if (blocks >= 290000 && blocks <= 299999){
paidRewards = 10.8*75/100 ;

}
//Calculte ROi
var totalWealthCreatedOneDay =  paidRewards*noOfBlockPerDay;
var rewardOneMasterNode = totalWealthCreatedOneDay/activeMasternodes;
var minerRewardOneYear = rewardOneMasterNode * 365;
var yearlyROI = (minerRewardOneYear/requiredCoins) * 100;
res.status(200).send({"yearlyROI" : yearlyROI});

});
module.exports = router;
