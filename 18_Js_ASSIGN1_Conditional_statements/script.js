function Hello()
{
    if(document.getElementById("h1").value<=35)
    {
        document.getElementById("res").innerHTML="Fail";
    }
    else if(document.getElementById("h1").value<=50)
    {
        document.getElementById("res").innerHTML="Third Class";
    }
    else if(document.getElementById("h1").value<=70)
    {
        document.getElementById("res").innerHTML="Second Class"
    }
    else if(document.getElementById("h1").value<=100)
    {
        document.getElementById("res").innerHTML="First Class"
    }
    else{
        document.getElementById("res").innerHTML="Invalid Marks"
    }

}
