$(function () {
    function hs(obj = {}) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: obj.url,
                data: obj.data,
                success: (res) => {
                    resolve(res)
                },
                reeor: (err) => {
                    reject(err)
                }

            })
        })
    }

    // function hs(url){
    //     return new Promise((resolve,reject)=>{
    //         $.ajax({
    //             url:url,
    //             success:(res)=>{
    //                 resolve(res)  
    //             },
    //             reeor:(err)=>{
    //                 reject(err)
    //             }

    //         })
    //     })
    // }

    $(".btn").on("click", () => {
        hs(obj = { url: "/jhsj" }).then(res => 
            console.log(res)
            // return res
        ).then(res=>{
            console.log(res,1111)
        })
    })
    $("button").on("click", () => {
      fetch("/text").then(res=>res.json()).then(res=>{
          console.log(res,2222222)
      })
    })

    $(".token").on("click", () => {
        fetch("/aaa").then(res=>res.json()).then(res=>{
            // console.log(res,2222222)
            localStorage.setItem("jwtt",res.msg)
        })
      })

      $(".token1").on("click", () => {
       
        fetch(`/bbb?token=${localStorage.jwtt}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res.msg)
        })

      })

})