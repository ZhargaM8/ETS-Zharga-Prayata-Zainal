let data={};
$.ajax({
    type: "GET",
    url: "http://10.199.13.243:81/currency.json",
    //data: JSON.stringify(data),
    //contentType: "application/json; charset=utf-8",
    //crossDomain: true,
    dataType: "json",
    success: function (data) {

        //alert(success);
        const eurusd=data.rates.EURUSD.rate;
        const eurgbp=data.rates.EURGBP.rate;
        const gbpusd=data.rates.GBPUSD.rate;
        const usdjpy=data.rates.USDJPY.rate;
        const audusd=data.rates.AUDUSD.rate;
        const usdchf=data.rates.USDCHF.rate;
        const nzdusd=data.rates.NZDUSD.rate;
        const usdcad=data.rates.USDCAD.rate;
        const usdzar=data.rates.USDZAR.rate;
        $('#eurusdcard').text(eurusd);
        $('#eurgbpcard').text(eurgbp);
        $('#gbpusdcard').text(gbpusd);
        $('#usdjpycard').text(usdjpy);
        $('#audusdcard').text(audusd);
        $('#usdchfcard').text(usdchf);
        $('#nzdusdcard').text(nzdusd);
        $('#usdcadcard').text(usdcad);
        $('#usdzarcard').text(usdzar);
    },

    error: function (status) {
        // error handler
        console.log("aaaaa");
        alert('fail' + status.code);
    }
 });