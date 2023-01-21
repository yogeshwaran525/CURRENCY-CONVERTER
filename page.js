const express = require("express");
const router = express.Router();
var formidable = require('formidable');


router.use(express.json())
router.use(express.urlencoded())


router.get("/",(req,res)=>{
    res.render('index');
})


router.post('/', function (req, res){
    // Get Wep page form data and store in data variable
    const data = req.body; 

    const request = require('request');

    const options = {
    method: 'GET',
    url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
    qs: {have: `${data.currency[0]}`, want: `${data.currency[1]}`, amount: `${data.amount}`},
    headers: {
        'X-RapidAPI-Key': 'f260a9b20bmsh1cefaa59da9ae9dp181641jsn63e96a15bfb9',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
        useQueryString: true
    }
    };
    request(options, function (error, response, body) {
        // 
        // data values are parsed assigned to respective names
        // 
        if (error) throw new Error(error);   
        myObject = JSON.parse(body);
        console.log(myObject);
        old_currency = myObject.old_currency
        new_currency = myObject.new_currency
        old_amount = myObject.old_amount
        new_amount = myObject.new_amount

        // 
        // If the api return status ok api datas displayed in web page
        return res.status(200).render("index",
          {
            have:old_currency,
            want:new_currency,
            oldamount:old_amount,
            newamount: new_amount
          }
          );
  
    });       
  
});


module.exports = router;