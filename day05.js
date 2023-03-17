  //Q1 A. PRINT ODD NUMBERS USING ANONYMOUS FUNCTION
  let odd=function(...res){
    let num=[];
  for (let i=0;i<res.length;i++){
      if(res[i]%2!==0){
        num.push(res[i])
      }
  }
    return  num;
}
console.log(odd(1,2,3,4,5,6,7,8))

//Q1 A. PRINT ODD NUMBERS USING IIFE FUNCTION
(function(){
function odd(...res){
    let num=[];
  for (let i=0;i<res.length;i++){
      if(res[i]%2!==0){
        num.push(res[i])
      }
  }
    return  num;
}
console.log(odd(1,2,3,4,5,6,7,8))
})();

//Q1  B. PRINT TITLE CAPS USING IIFE FUNCTION
(function(){
    function title(...res){
        let titleC=[]
        for(let i=0;i<res.length;i++){
       res[i]= res[i].charAt(0).toUpperCase()+res[i].slice(1) 
        titleC.push(res[i])
        }
    return titleC
    }
    console.log(title('this is','is','my','function','task' ))
    })();

   // Q1 B. PRINT TITLE CAPS USING ANONYMOUS FUNCTION
   let title=function(...res){
    let titleC=[]
    for(let i=0;i<res.length;i++){
   res[i]= res[i].charAt(0).toUpperCase()+res[i].slice(1) 
    titleC.push(res[i])
    }
return titleC
}
console.log(title('this is','is','my','function','task' ))

//Q1 C. SUM OF NUMBERS USING IIFE FUNCTION
(function(...res){
    x=0
    for(let i=0;i<res.length;i++){
   x=x+res[i]
    }
   console.log(x)
return x
})(1,2,3,4,5,6,7,8);

//Q1 C. SUM OF NUMBERS USING ANONYMOUS  FUNCTION
let num=function(...res){
    x=0
    for(let i=0;i<res.length;i++){
   x=x+res[i]
    }
   console.log(x)
return x
}
num(1,2,3,4,5,6,7,8)

//Q1 D.PRINTING THE PRIME NUMBERS USING IIFE FUNCTION
(function(res){
    let primes=[]
    for(let i=2;i<=res;i++){
    isp=true;
    for(let j=2;j<i;j++){
  if(i%j==0){
      isp=false
  break;
  }
  }
  if(isp){
  primes.push(i)
  }
    }
    console.log(primes)
   return primes;
   
})(10)

//Q1 D.PRINTING THE PRIME NUMBERS USING ANONYMOUS FUNCTION
var x=function(res){
    let primes=[]
    for(let i=2;i<=res;i++){
    isp=true;
    for(let j=2;j<i;j++){
  if(i%j==0){
      isp=false
  break;
  }
  }
  if(isp){
  primes.push(i)
  }
    }
    console.log(primes)
   
}   
x(10);

//Q1 E. PALINDROME USING ANONYMOUS FUNCTION
let pal=function(...res){
    let c=[]
   for(let i=0;i<res.length;i++){
    if(res[i]==res[i].split('').reverse().join('')){
    c.push(res[i])
   // console.log(c)
    }
   }
   console.log(c)
return c

   
}
pal('malayalam','racecar','mom','hello','121','133')
  
//Q1 E. PALINDROME USING IIFE FUNCTION
(function(...res){
    let c=[]
   for(let i=0;i<res.length;i++){
    if(res[i]==res[i].split('').reverse().join('')){
    c.push(res[i])
  
    }
   }
   console.log(c)
return c

})('malayalam','racecar','mom','hello','121','133')

//  Q1 F.FINDING MEDIAN USING ANONYMOUS FUNCTION    
      let a=9
      let b=2.5
   let median=function(a,b){
       if(a==b){
           console.log(a)
           }
    
   else{
    return((a+b))/2
   
   }
   }
  console.log(median(a,b))

  //  Q1 F.FINDING MEDIAN USING IIFE FUNCTION 
  (function(){
    let a=9
   let b=2.5
    if(a==b){
    console.log(a)
    }
      else{
    c= a+b
    console.log(c/2)
    }
    
   })();

//Q1 G.REMOVE ALL DUPLICATES FROM THE ARRAY USING ANONYMOUS FUNCTION
let a=function(...res){
    let original=[]
    for(let i=0;i<res.length;i++){
        if(original.indexOf(res[i])== -1){
            original.push(res[i])
        }
    }console.log(original)
    return original
  }

    a(1,2,3,4,5,6,1,2,7)

    //Q1 G.REMOVE ALL DUPLICATES FROM THE ARRAY USING IIFE FUNCTION

    (function(...res){
        let original=[]
        for(let i=0;i<res.length;i++){
            if(original.indexOf(res[i])== -1){
                original.push(res[i])
            }
        }console.log(original)
        return original
      })(1,2,3,4,5,6,1,2,3,7)


    //  Q2 A.PRINT ODD NUMBERS USING ARROW FUNCTION

    let odd=(...res)=>{
      let x=[]
      for(let i=0;i<res.length;i++){
          if(res[i]%2!==0){
              x.push(res[i])
          }
      }
      console.log(x)
      
  }
  odd(1,2,3,4,5,6)

 // Q2 B.PRINT ALL TITLE CAPS USING ARROW FUNCTION
 let title=(...res)=>{
  let x=[]
  for(let i=0;i<res.length;i++){
      res[i]=res[i].slice(0,1).toUpperCase()+res[i].slice(1)
          x.push(res[i])
      
  }
  console.log(x)
  
}
title('this','is','arrow','function')

//Q2 C.PRINT THE SUM OF THE NUMBERS USING ARROW FUNCTION
let sums=(...res)=>{
  let x=[]
  sum=0
  for(let i=0;i<res.length;i++){
    sum=sum+res[i]
  }
          x.push(sum)
      
  
  console.log(x)
  
}
sums(1,2,3,4,5,6,7,8,9,10)

//Q2 D.PRINT THE PRIME NUMBERS USING AARROW FUNCTION
let prime=(res)=>{
  let x=[]
 for(let i=2;i<=res;i++){
  isp=true
  for(let j=2;j<i;j++){
      if(i%j==0){
          isp=false
          break;
      }
  }
      if(isp){
  
         x.push(i)
      }
 }
         console.log(x)

}
prime(10)

 //Q2 E.PRINT THE PALINDROMES USING ARROW FUNCTIONS
 let title=(...res)=>{
  let x=[]
  for(let i=0;i<res.length;i++){
      if(res[i]==res[i].split('').reverse().join('')){
          x.push(res[i])
      }
  }
  console.log(x)
  
}
title('RACECAR','MALAYALAM','121','ARROW')
