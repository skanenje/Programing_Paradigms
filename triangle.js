const triangle=(str,num)=>{

    var m=""
    var k=1;
        for(var i=0;i<num;i++){
    
            for(var j=0;j<k;j++){
                var h=str
               m+=h
            }
    
            k++
            m+="\n"
    
    
        }
    return m.slice(0,m.length-1)
    }
    
    console.log(triangle("*",5))