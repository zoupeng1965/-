let p=new Promise(function(resolve,reject){


    // $.ajax({
    //     url:"sdsfds",
    //     data:{
    //         saa:asd
    //     }

    // })


    if(true){
        resolve(arr);

    }else{
        reject(err)
    }
}).then(function(arr){
    alert("请求成功")
    arr.forEach(item=>{
        console.log(item)
    })

},function(err){
    alert("请求错误")

})


let p=new Promise((resolve,reject)=>{


     $.ajax({
        url:"sdsfds",
        data:{
            saa:asd
        },
        success(arr){
            resolve(arr)
        },
        error(err){
            reject(err)
        }
    })
});

p.then(arr=>{
 alert("成功"+arr)

},err=>{
    alert("失败"+err)

})