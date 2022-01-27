function relation()
{
if(document.getElementById("t1").value==document.getElementById("t2").value)
{
    document.getElementById("res").innerHTML="BOTH Values are equal";
}
else if(document.getElementById("t1").value>document.getElementById("t2").value)
{
    document.getElementById("res").innerHTML="First Number is greater than second number";
}
else 
{
    document.getElementById("res").innerHTML="First Number is smaller than second number";
}
}
