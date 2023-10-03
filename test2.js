function longestCollatzSequence(limit) {
    let saveCount = 0
    let answer
    for(let i = 2; i < limit; i++) {
        const number = sequenceLength(i)
        if(number > saveCount) {
            saveCount = number
            answer = i
        }
    }
    console.log(answer) 
  }
function sequenceLength(n){
    let count = 1
    while(n>1){
        if(n% 2==0){
            n= n/2
        }else{
            n= n*3+1
            
        }
        
        count++;
    }
    return count
}
  longestCollatzSequence(5847)
