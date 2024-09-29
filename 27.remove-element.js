var removeElement = (nums,val,n,i=0)=> nums.reduce((acc)=>{
        if(nums[i]===val) nums.splice(i,1);
        else i++;
        return nums
    },nums);