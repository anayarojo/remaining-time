var CubeRemainingTime = (function()
{
    const _MS_PER_SECOND = 1000;
    const _MS_PER_MINUTE = _MS_PER_SECOND * 60;
    const _MS_PER_HOUR = _MS_PER_MINUTE * 60;
    const _MS_PER_DAY = _MS_PER_HOUR * 24;
    
    let obj = {};
    let debug = false;
    let _days, _hours, _minutes, _seconds, _miliseconds;

    obj.init = function(props){

        if(debug) console.log('RemainingTime.init()');

        let date = props.date; 
        let $days = $(props.elements.days);
        let $hours = $(props.elements.hours);
        let $minutes = $(props.elements.minutes);
        let $seconds = $(props.elements.seconds);

        setInterval(function(){

            let remaining = getRemaining(calculateDiference(date));

            if(remaining.days != _days){
                _days = remaining.days;
                updateElement($days, _days, _days != 1 ? 'Dias' : 'Día');
            }

            if(remaining.hours != _hours){
                _hours = remaining.hours;
                updateElement($hours, _hours, _hours != 1 ? 'Horas' : 'Hora');
            }

            if(remaining.minutes != _minutes){
                _minutes = remaining.minutes;
                updateElement($minutes, _minutes, _minutes != 1 ? 'Minutos' : 'Minuto');
            }

            if(remaining.seconds != _seconds){
                _seconds = remaining.seconds;
                updateElement($seconds, _seconds, _seconds != 1 ? 'Segundos' : 'Segundo');
            }

        }, 1000);
    }

    function calculateDiference(date){
        return date.getTime() - new Date().getTime();
    }

    function getRemaining(diference){

        let days, hours, minutes, seconds, miliseconds;
        miliseconds = diference;

        days = Math.floor(miliseconds / _MS_PER_DAY);
        miliseconds = miliseconds % _MS_PER_DAY;

        hours = Math.floor(miliseconds / _MS_PER_HOUR);
        miliseconds = miliseconds % _MS_PER_HOUR;

        minutes = Math.floor(miliseconds / _MS_PER_MINUTE);
        miliseconds = miliseconds % _MS_PER_MINUTE;

        seconds = Math.floor(miliseconds / _MS_PER_SECOND);
        miliseconds = miliseconds % _MS_PER_SECOND;

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            miliseconds: miliseconds,
        };
    }

    function updateElement($element, value, label){

        let $content = $element.find('.side:not(.active) .content .center');
        let $label = $element.find('.side:not(.active) .label');

        $content.html(('0' + value).slice(-2))
        .promise()
        .then(function(){
            return $label.html(label).promise();
        })
        .done(function(){
            $element.shape('flip up');
        });
    }

    return obj;
});

$(document).ready(function(){

    let cubeRemainingTime = new CubeRemainingTime();

    $('.shape').shape();

    cubeRemainingTime.init({
        date: new Date(2018, 11, 1),
        elements: {
            days: '#remaining-days',
            hours: '#remaining-hours',
            minutes: '#remaining-minutes',
            seconds: '#remaining-seconds',
        }
    });
});