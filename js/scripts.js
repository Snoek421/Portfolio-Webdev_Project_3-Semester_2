function StartCountdown()
{
    var secondsLeft = 10;
    document.getElementById('countdownDiv').innerHTML = "<h3>" + secondsLeft + "</h3>";
    var countdownTimer = setInterval(function()
    {
        secondsLeft -= 1;
        if (secondsLeft < 1)
        {
            document.getElementById('countdownDiv').innerHTML = '<h2>BLASTOFF!</h2><a href=\"javascript:location.reload();\" id=\"resetLink\">Click here to reset the page</a>';
            $("#rocket").animate({top: '0px', opacity: 0}, "slow");
            clearInterval(countdownTimer);
        }
        else
        {
            document.getElementById('countdownDiv').innerHTML = "<h3>" + secondsLeft + "</h3>";
        }
    }, 1000);
}

