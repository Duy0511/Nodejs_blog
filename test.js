function divisibleTriangleNumber(n) {
    let sum = 0
    for(let i = 1 ;; i++) {
        sum += i
        diangle(sum)
        if(diangle(sum) >= n){
            return sum
        }
    }
  }
  function diangle(sum){
    let arr = {}
    for(let j = 1 ; j<= sum ; j++){
        if(sum % j == 0){
            if(!Array.isArray(arr[sum])){// phải khởi tạo thì mới push nó vào được
                arr[sum] = []
            }else{
                arr[sum].push(j)
            }
            
        }
    }
    return arr[sum].length
  }
  console.log(divisibleTriangleNumber(6));