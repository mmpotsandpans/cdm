import React from "react"
import { NavLink } from "react-router-dom"
import { t } from "ttag"

export const About = () => {
    return <div>
        <p>{t`အချက်အလက်များ၊ ရုပ်ပုံများကို အွန်လိုင်းမှ ရယူကာ အလျင်မှီသလို ထည့်သွင်းပြင်ဆင်ထားပါသည်။ မူပိုင်ခွင့်သည် ပိုင်ရှင်များနှင့်သာ သက်ဆိုင်ပါသည်။`}</p>
        <p>{t`ကျန်ရစ်သူများကို ကူညီလိုပါက`} <NavLink to="/resources" style={{color: 'yellowgreen'}}>link</NavLink></p>
        <p>စာရင်းထည့်/ပြင် (သို့) အကြံပေးလိုပါက <NavLink to='/form'>link</NavLink></p>
        <p style={{textAlign: 'center'}}>{t`အာဇာနည်များအား ဝမ်းနည်းလှစွာဖြင့် ဂုဏ်ပြုမှတ်တမ်းတင်အပ်ပါသည်။`}</p>
    </div>
}