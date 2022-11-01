
let cards=[]
let sum=0;
let isalive=false;
let hasblackjack=false;
let summingup=document.getElementById("sum")
let message=document.getElementById("msg")
let cardsdisplay=document.getElementById("cards")
function startgame()
{
    isaive=true;   
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()
    cards=[firstcard,secondcard]  
    sum=firstcard+secondcard  
    rendergame();
}
function rendergame()
{
    cardsdisplay.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsdisplay.textContent+=cards[i] + " "
    }
    summingup.textContent="sum:    "+"     " +sum
    if(sum<21)
    {
        isalive=true;
        message.textContent="Wanna draw a new card???🤔"    
    }
    else if(sum==21)
    {
        hasblackjack=true;
        isalive=false;
        message.textContent="Hey you got a Blackjack💥"   
    }
    else
    {
        isalive=false;
        message.textContent="Oops you are out of the Game😒"   
    }

}
function getrandomcard()
{
    let card=Math.floor(Math.random()*13)+1
    if(card>10)
    {
        return 10
    }
    else if(card===1)
    {
        return 11
    }
    else
    {
        return card
    }
}
function newcard()
{
    if(isalive==true && hasblackjack==false)
    {
        let Newcard=getrandomcard()
        sum+=Newcard
        cards.push(Newcard)
        rendergame()
    }
}