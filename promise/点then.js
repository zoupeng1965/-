function hs(obj={}){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:obj.url,
            data:obj.data,
            success:(res)=>{
                resolve(res)  
            },
            reeor:(err)=>{
                reject(err)
            }
            
        })
    })
}