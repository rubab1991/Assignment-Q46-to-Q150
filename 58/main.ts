//Write a simple program that can take lots of scores and find their average.


// This program calculates the average of all scores given
function averageScore(...scores:number[]): number{
    let total=scores.reduce((sum,score)=>sum+score,0);
    return total/scores.length
}
console.log(averageScore(80,90,70,10));

