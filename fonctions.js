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
function verifMail(ch)
{
    posat=ch.indexOf("@");
    alert(posat);
    poslastat=ch.lastIndexOf("@");
    pospt=ch.indexOf(".");
    test=true
    if( (posat<1)|| (posat!=poslastat) || (pospt<=posat+1) ||(pospt==(ch.length)-1))
    {
        test=false;
    }
    return(test);
}
function verif()
{
    login=document.getElementById("login").value;
    passwd=document.getElementById("passwd").value;
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    date_naiss=document.getElementById("date_naiss").value;
    tel=document.getElementById("tel").value;
    email=document.getElementById("mail").value;
    i=document.getElementById("pays").selectedIndex;
    alert(i);
    if((verifTxt(nom)==false) ||(!verifTxt(prenom)) )
    {
        alert("verifier votre nom ou prenom");
    }
    else
        if(!verifNum(tel))
        {
            alert("verifier votre téléphone");
        }
        else
            if(!verifMail(email))
            {
                alert("Verifier votre adresse email");
            }
}