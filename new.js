scrn=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screen="";
for(item of buttons)
{
item.addEventListener('click',(e)=>
{
    btn=e.target.innerText;
    console.log("button clicked is "+e.target.innerText)
    
    if(btn=='=')
    {
        scrn.value=eval(scrn.value);
    }
    else if(btn=='CE')
    {
        screen="";
        scrn.value=screen;
    }
    else
    {
        scrn.value+=e.target.innerText;
    }

    

})
}
