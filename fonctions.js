function verifTxt(ch)
{
    ch=ch.toUpperCase();
    i=0;
    test=true;
    while( (i<ch.length) && (test==true) )
    {
        if(((ch.charAt(i)<"A") || (ch.charAt(i)>"Z")) && (ch.charAt(i)!=" "))
        {
            test=false;
        }
        i++;
    }
    return(test);
}
function verifNum(ch)
{
    if(ch.length!=8)
    {
        test=false;
    }
    else
    {
        i=0;
        test=true;
        while( (i<ch.length) && (test==true) )
        {
            if((ch.charAt(i)<"0") || (ch.charAt(i)>"9"))
            {
                test=false;
            }
            i++;    
        }
    }
    return(test);
}

function verif()
{
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;

    if((verifTxt(nom)==false) ||(verifTxt(prenom)==false) )
    {
        alert("verifier votre nom ou prenom");
    }
}