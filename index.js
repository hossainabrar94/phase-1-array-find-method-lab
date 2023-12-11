// code your solution here
function superbowlWin(record){
    const winnings = record.find(function(theYear){
        return theYear.result === "W"
    });
    if(winnings){
        return winnings.year
    }else{
        return undefined
    }
};