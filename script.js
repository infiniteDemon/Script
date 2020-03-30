let str = `offer_id, offer_desc, offer_time, offer_is_address, offer_address, offer_longitude, offer_latitude, offer_is_allow, offer_is_videotime, offer_videotime, offer_every_money, offer_accept_count, offer_all_count, offer_type, offer_status, offer_deleted, offer_user_id, offer_user_name, offer_user_avator`

let arr = str.split(",")
arr.forEach(sampleStr => {
    let str_Split = sampleStr.split("_");
    let newStr = "";
    str_Split.forEach(str_Split_Str => {
        let temp_Str = str_Split_Str.replace(/\s/ig,"");
        let temp_Str2 = temp_Str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
        newStr += temp_Str2;
    })
    console.log(newStr)
})