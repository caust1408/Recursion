//Craig Austgen
//Ch.3 recursion problem
//CMP237

function isEven(n) {
	 if (n == 0) {                    // if n = 0 then it's true
            return true;
	 }
	 
	 else if (n == 1) {               // if n = 1 then return false
            return false;
	 }
	 
	 else if (n < 0) {               // if n is less then 0 return a negative                                        // of that number
	    return isEven(-n);
	 }
	        else  {
	        return isEven(n - 2);   //subtract n until it reaches 0
		}                 // then if it reaches 0 by subtracting
					// 2 everytime then it will return true
					// once it jumps back to the top of the                                         // program
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

