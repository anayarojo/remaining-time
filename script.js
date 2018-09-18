var RemainingTime = (function()
{
    let obj = {};
    let debug = false;
    let time = 0;
    let control = null;

    obj.init = function(props){

        if(debug) console.log('RemainingTime.init()');
        if(props.date)  time = getSeconds(props.date); 
        if(props.element) control = $(props.element);

        setInterval(function(){

            time--;
            if(control)
            {
                let date = getDate(time);
                let text = date.getDay()+':'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                control.html(text);
                control.val(text);
            }

        }, 1000);
    }

    function getSeconds(date){
        return date.getTime()/1000;
    }

    function getDate(seconds){
        return new Date(seconds*1000);
    }

    return obj;
});

$(document).ready(function(){

    let remainingTime = new RemainingTime();
    remainingTime.init({
        element: '#remaining-time',
        date: new Date(2018, 11, 1),
    });
});