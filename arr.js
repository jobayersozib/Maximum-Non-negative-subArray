/*
Maximum Non-negative subarray problem solution

*/

var Array_object={
    
    /*
    @function main_func(@param)
    Take a parameter as an array  @param arr ;
    Print maximum sub array from @param arr (Negative element points the starting and ending of a sub array);
    
    How to determine maximum sub array :
    Forexample A[1,2,3,4,-8,9,0,4,6]
    subA[1,2,3,4] and subB[9,0,4,6]
    
    sum(subB) > sum(subA)
    then function will print SubB[9,0,4,6];
    */
    
    main_func:function(arr){
        
        A[A.length]=-100;
        var max=0;
        var temp=0;
        var max_arr=[];
        var t_arr=[];
        for(var i=0;i<A.length;i++){
            if(A[i]<0){
                if(this.sum(t_arr)>max){
                    
                max=this.sum(t_arr);
                max_arr=t_arr;
                t_arr=[];
                temp=0;
                    
                }
                if(this.sum(t_arr)==max && (t_arr.length > max_arr.length)){
                    
                max=this.sum(t_arr);
                max_arr=t_arr;
                t_arr=[];
                temp=0;
                    
                }
                t_arr=[];
                temp=0;
                }
                
            else{
                t_arr[temp]=A[i];
                temp++;
                }
        }
        return max_arr;
    },
    
    /*
    
    @function sum(@param)
    
    Take an integer array as a parameter @param arr;
    @return sum of array elements; 
    
    */
    sum:function(arr){
            var sum=0;
            for(var i=0;i<arr.length;i++){
                sum+=arr[i];
                }
            return sum;
        }
}