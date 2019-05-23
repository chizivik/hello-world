var count = ["Web", "Development", "Tutorials"]
function longest (){
    if (count[0].length>count[1].length&&count[2].length){
        console.log(count[0]);
    }
    
    else if (count[1].length>count[2].length){
        console.log(count[1]);
        
    }else {
        console.log(count[2]);
    }
    }
longest();