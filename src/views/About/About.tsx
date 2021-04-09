import React from "react"
import { NavLink } from "react-router-dom"
import './About.scss'
import { t } from "ttag"
import { Divider } from "@material-ui/core"
import coverpic from '../../resources/images/misc/coverpic.png'

export const About = () => {
    return <div className='About'>
        <h1>{t`ရက်အနည်းငယ်အတွင်း မတရားအကြမ်းဖက်မှုကြောင့် ကျဆုံးသူအမြောက်အမြားရှိခဲ့ပါသည်။ ကျနော်တို့ အားလုံးသည်လည်း သူရဲကောင်းများ သမိုင်းမပျောက်ရေးအတွက် ကိုယ်စွမ်းဥာဏ်စွမ်း ရှိသမျှ ကြိုးစားသွားပါမည်။`}</h1>
        <Divider />
        <p>{t`အချက်အလက်များ၊ ရုပ်ပုံများကို အွန်လိုင်းမှ ရယူကာ အလျင်မှီသလို ထည့်သွင်းပြင်ဆင်ထားပါသည်။ မူပိုင်ခွင့်သည် ပိုင်ရှင်များနှင့်သာ သက်ဆိုင်ပါသည်။`}</p>
        <p>{t`ကျန်ရစ်သူများကို ကူညီလိုပါက`} <NavLink to="/resources" style={{color: 'yellowgreen'}}>link</NavLink></p>
        <p>{t`စာရင်းထည့်/ပြင် (သို့) အကြံပေးလိုပါက`} <NavLink to='/form'>link</NavLink></p>
        <p style={{textDecoration: 'underline'}}>{t`ဒီဆိုက်မှ စာရင်းများကိုလည်း လိုအပ်သလို အသုံးပြုနိုင်ပါသည်။`}</p>
        <Divider />
        <div>
            <h2>Road map (အကြံပေးခြင်းများအပါအဝင်)</h2>
            <h3 style={{fontSize: '1rem', fontWeight: 400}}>"{t`ရည်ရွယ်ချက်မှာ တစ်ခြားလှူတန်းဖို့ ချိတ်ဆက်ပေးသော အဖွဲ့များ၊ ရုပ်ပုံ၊ စာပန်းချီများဖြင့် ဂုဏ်ပြုလိုသူများ၊ စာရင်းစစ်/ကောက်လိုသူများ အလွယ်တကူ အသုံးချနိုင်ရန်ဖြစ်ပါသည်`}"</h3>
            <ol>
                <li>ယခုလောလောဆယ် အခြားစာရင်းများထက် အရေအတွက်နည်းနေပါတယ်။ ဖြည်းဖြည်းနဲ့မှန်မှန် သတင်းစုံအောင် ကြိုးစားနေပါတယ်။ အချိန်နှင့်အလိုက် ကိန်းဂဏန်းကို သိချင်ရင်တော့ အပေါ်က စာရင်းတွေမှာ ကြည့်နိုင်ပါတယ်။</li>
                <li>{t`စာရင်းပိုမိုတိကျပြီး အချက်အလက်စုံစေရန် ထပ်မံစစ်ဆေးခြင်း။ ကူညီလိုသူများ အလွယ်တကူ ကူညီနိုင်ရန် နည်းလမ်းများ ရှာဖွေခြင်း`}</li>
                <li>{t`သေဆုံးသည့်အကြောင်းရင်း`}</li>
                <li style={{textDecoration: 'line-through'}}>{t`ကျဆုံးသူများနှင့် ပတ်သက်သော၊ ပျံ့နှံ့နေသော သတင်းမှားများ တင်ပြရန်`} Available as a separate on the sidebar</li>
                <li style={{textDecoration: 'line-through'}}>{t`မြို့နယ်နှင့် ပြည်နယ်တိုင်းပါအောင် ထည့်သွင်းရန်`} Available for toggle in controls now</li>
            </ol>
        </div>
        <Divider />
        <p style={{textAlign: 'center', fontWeight: 900}}>{t`အာဇာနည်များအား ဝမ်းနည်းလှစွာဖြင့် ဂုဏ်ပြုမှတ်တမ်းတင်အပ်ပါသည်။`}</p>
        <p style={{textAlign: 'center'}}>{t`တိုက်ပွဲများကြောင့် ကျဆုံးခဲ့ရတဲ့ ပြည်သူများကိုပါ မှတ်တမ်းတင်ချင်ပါသော်လည်း ခုချိန်တွင် သတင်းမမှီသေးပါ။`}</p>
        <div className='coverpic' style={{backgroundImage: `url(${coverpic})`}}/>
    </div>
}