// const info = document.querySelector(".info")
// const button = document.querySelector(".button")
// const input_info = document.querySelector(".input_info")

//     const The_day = [
//         { id:"1", The_day_of_the_week:"luni", data:"1" ,info:"Luni Piața Centrală nu lucreaza"},
//         { id:"2", The_day_of_the_week:"Marti", data:"2",info:"Marti Piața Centrală se deschide de la 6:00 si se inchide la 17:00"},
//         { id:"3", The_day_of_the_week:"Mercuri", data:"3" ,info:"Mercuri Piața Centrală se deschide de la 6:00 si se inchide la 17:00"},
//         { id:"4",The_day_of_the_week:"Joi", data:"4" ,info:"Joi Piața Centrală se deschide de la 6:00 si se inchide la 13:00 pentru ca vor fi reparati re renovare"},
//         { id:"5",The_day_of_the_week:"Vineri",data:"5" ,info:"Vineri Piața Centrală se deschide de la 9:00 si se inchide la 17:00 dor ca unele zone nu vor functiona"},
//         { id:"6",The_day_of_the_week:"Sinbata",data:"6",info:"Sinbata Piața Centrală se deschide de la 6:00 si se inchide la 17:00 Va avea loc controlul sanitar"},
//         { id:"7",The_day_of_the_week:"Duminica",data:"7" ,info:"Duminica Piața Centrală se deschide de la 6:00 si se inchide la 17:00"},
//     ]

//     // The_day.forEach(item =>{
//     //     button.addEventListener("click" ,(e)=>{

//     //         // console.log(input_info.value);
//     //         // console.log(input_info.value.toUpperCase(),"<===Am Modificat");

//     //      if (input_info.value.includes(item.The_day_of_the_week)) {
//     //         // console.log(item);
//     //         info.innerHTML = item.info
            
//     //      }
//     //     })
//     // })


//     // The_day.forEach(item =>{
//     //     button.addEventListener("click",()=>{
//     //         const input_info_user = input_info.value.toUpperCase()
//     //         const The_day = item.The_day_of_the_week.toUpperCase()

//     //         if (input_info_user.includes(The_day)) {
//     //             info.innerHTML = item.info
//     //         }
//     //     })
//     // })


//     // The_day.forEach(item=>{
//     //     // console.log(item.The_day_of_the_week);
//     //     // console.log(item.info);
//     //     // if(item.The_day_of_the_week.includes("Marti")) {
//     //     //     console.log(item);
//     //     // }
//     //     item.The_day_of_the_week.includes("Marti") ? console.log(item):null; //это вариант сокращения структуры If else

//     // })

//     // The_day.forEach(item=>{
//     //     if (item.The_day_of_the_week === ("luni")) {
//     //         console.log(item);
//     //     }if (item.The_day_of_the_week === ("Joi")) {
//     //         console.log(item);
//     //     }if (item.The_day_of_the_week === ("Duminica")) {
//     //         console.log(item);    
//     //     }
//     // })

//     function filter_day(json_server, chei_json, answer) {
//         json_server.forEach(item=>{
//         if (item.chei_json === (answer)) {
//             console.log(item);
//         }else{console.log("Error");}
//         })
        
//     }

//     filter_day(The_day,"The_day_of_the_week","luni")

//     function filter_day(json_server, chei_json, answer) {
//         json_server.forEach(item=>{
//     //   console.log(item.chei_json) prin punc nu intelege 
//     //   console.log(item[chei_json]) // folosim  item[] si in interior punem item[chei_json]
//         if (item[chei_json] === (answer)) {
//             console.log(item);
//         }
//         })
//     }
    
//     filter_day(The_day,"The_day_of_the_week","Joi")



// // The_day.filter(item=>{
// //     console.log(item.The_day_of_the_week);
// //     console.log(item.info);

// // })

// // The_day.map(item=>{
// //     console.log(item.The_day_of_the_week);
// //     console.log(item.info);

// // })








































const info = document.querySelector(".info")
const button = document.querySelector(".button")
const input_info = document.querySelector(".input_info")

// Новые детали
const  body = document.querySelector("body")
const title = document.querySelector(".title")
const container_item = document.querySelector(".container_card")
const data_public = document.querySelector(".data_public")


const The_day = [
    { id:"1", The_day_of_the_week:"luni", data:"1.03.2022" ,info:"Luni Piața Centrală nu lucreaza"},
    { id:"2", The_day_of_the_week:"Marti", data:"2.03.2022",info:"Marti Piața Centrală se deschide de la 6:00 si se inchide la 17:00"},
    { id:"3", The_day_of_the_week:"Mercuri", data:"3.03.2022" ,info:"Mercuri Piața Centrală se deschide de la 6:00 si se inchide la 17:00"},
    { id:"4",The_day_of_the_week:"Joi", data:"4.03.2022" ,info:"Joi Piața Centrală se deschide de la 6:00 si se inchide la 13:00 pentru ca vor fi reparati re renovare"},
    { id:"5",The_day_of_the_week:"Vineri",data:"5.03.2022" ,info:"Vineri Piața Centrală se deschide de la 9:00 si se inchide la 17:00 dor ca unele zone nu vor functiona"},
    { id:"6",The_day_of_the_week:"Simbata",data:"6.03.2022",info:"Simbata Piața Centrală se deschide de la 6:00 si se inchide la 17:00 Va avea loc controlul sanitar"},
    { id:"7",The_day_of_the_week:"Duminica",data:"7.03.2022" ,info:"Duminica Piața Centrală se deschide de la 6:00 si se inchide la 17:00"},
]

//Date noi
const user = [
    { id:"1", last_name:"Ion", data:"14.03.1999" ,country:"Moldova"},
    { id:"2", last_name:"Alina", data:"12.03.1980",country:"Moldova"},
    { id:"3", last_name:"Mariea", data:"3.04.1996" ,country:"Rusia"},
    { id:"4",last_name:"Nina", data:"4.06.1991" ,country:"Italy"},
    { id:"5",last_name:"Ludmila",data:"5.08.2000" ,country:"Rusia"},
    { id:"6",last_name:"Alex",data:"6.02.2004",country:"Italy"},
    { id:"7",last_name:"Iuliea",data:"7.09.2010" ,country:"Moldova"},
]


    // The_day.forEach(item =>{
    //     button.addEventListener("click",()=>{
    //         const input_info_user = input_info.value.toUpperCase()
    //         const The_day = item.The_day_of_the_week.toUpperCase()

    //         if(input_info_user.includes(The_day)) {
    //             info.innerHTML = item.info
    //             container_item.className = "container_info"
    //             title.innerHTML = item.The_day_of_the_week
    //             data_public.innerHTML = item.data
    //         }

    //     })
    // })    


  function information_search (json_server, chei_json, info_key, data_key) {
    json_server.forEach(item =>{
    button.addEventListener("click",()=>{
        const input_info_user = input_info.value.toUpperCase()
        const The_day = item[chei_json].toUpperCase()

        if(input_info_user.includes(The_day)) {
            info.innerHTML = item[info_key]
            container_item.className = "container_info"
            title.innerHTML = item[chei_json]
            data_public.innerHTML = item[data_key]
        }
    })
}) 
  }

  information_search(The_day, "The_day_of_the_week", "info", "data")
  information_search(user, "last_name", "country", "data")