export const woundedImages = new Map<string, string[]>()
function importAll(r: any) {
  r.keys().forEach((k: string) => {
    const name = k.split('/')[1]
    const personImages = woundedImages.get(name) || []
    personImages.push(r(k).default)
    woundedImages.set(name, personImages)
  });
}

importAll(require.context('../resources/images/wounded', true));

// loaded from google sheets in People.tsx
// used for dev, on prod live data is loaded
const data = [
  {
    "name": "မင်းသူရ",
    "confirmed": "TRUE",
    "date": "3/3/2021",
    "city": "ရန်ကုန်",
    "details": "မြောက်ဒဂုံ 48 ရပ်ကွက် ရှင်တရာလမ်းနေ၊ မိခင်ကြီးနှင့်အတူ နေထိုင်သူ၊ မျက်လုံးတစ်ဖက် ကျည်ထိ\r\nသော်လည်း ကံကောင်းစွာဖြင့်အသက်မဆုံးရှူံးခဲ့ပါ ။သို့သော် မျက်လုံးတစ်ဖက်မှာ\r\nဆုံးရှုံးသွားပြီး ကျန်တစ်ဖက်မှာလည်း သေချာကုသခဲ့လျှင်လည်း ပြန်မြင်ရမယ်လို့\r\nအာမခံမှူမရှိဘူးဟု ကိုမင်းသူရမိခင်ဆီမှ သိရှိရ၊ ကုသရန်အတွက် ငွေကြေးအခက်ရှိနေ bit.ly/30msPwc",
    "age": "21",
    "folder": "min thu ya",
    "gender": "m",
    "honorific": "ကို"
  },
  {
    "name": "ဖြိုးညီညီအောင်",
    "confirmed": "TRUE",
    "date": "3/3/2021",
    "city": "မကွေး",
    "details": "လက်ခုပ်ပင်ရွာ၊စလင်းမြို့သား၊ ၃ရက်နေ့တွင် လက်ကိုကျည်ဆန်ဒဏ်ရာရရှိ၍ မကွေးဆေးရုံတွင်ကုသအောင်မြင်ပြီးဖြစ်၊ ကျန်းမာလျက်ရှိ။",
    "age": "19",
    "folder": "",
    "gender": "m",
    "honorific": "မောင်"
  },
  {
    "name": "အာလူးဘိုင်",
    "confirmed": "TRUE",
    "date": "28/2/2021",
    "city": "မန္တလေး",
    "details": "၃၅ လမ်း ၇၄×၇၅ကြား မင်္ဂလာအလယ်ဗလီဝင်း ပစ်ခတ်မှုတွင် မေးစေ့နားထိသွား ဗလီတွေလဲပစ်သွားပ ကိုအာလူးဘိုင်ကတော့ ခဲကျည်ထုတ်ပြီး၅ချပ်ချုပ်ရပါတယ် ဗြမ္မာဆိုမှာခွဲစိတ်ခဲ့ bit.ly/3ebeVFv",
    "age": "54",
    "folder": "",
    "gender": "m",
    "honorific": "ဦး"
  },
  {
    "name": "ပဲခူးမြို့ နဂါးလိမ်ဘုရားလမ်းတွင် ပစ်ခံရသူ",
    "confirmed": "TRUE",
    "date": "28/2/2021",
    "city": "",
    "details": "ပါးစပ်ထုတ်ချင်းပေါက် သေနတ်မှန် (သွေး)shorturl.at/apKO8",
    "age": "",
    "folder": "",
    "gender": "",
    "honorific": ""
  },
  {
    "name": "မြတ်သူဇာခင်",
    "confirmed": "TRUE",
    "date": "27/2/2021",
    "city": "",
    "details": "ရုက္ခဗေဒဖြင့် ဒေါက်တာဘွဲ့ရထားသူ၊ ဆီးခုံ၌ သေနတ်ဒဏ်ရာဖြင့် အရေးပေါ်ကုသမှု ခံယူ https://bit.ly/3kuekQ5",
    "age": "",
    "folder": "myat thuzar khin",
    "gender": "f",
    "honorific": "ဒေါ်"
  },
  {
    "name": "နေပြည်တော်မှ ရင်ဘတ်ထုတ်ချင်းပေါက် အပစ်ခံရသူ",
    "confirmed": "TRUE",
    "date": "12/2/2021",
    "city": "နေပြည်တော်",
    "details": "မိတ္ထီလာတက္ကသိုလ် ဘူမိမေဂျာ၊ ရင်ဘတ်ထုတ်ချင်းပေါက် အပစ်ခံရ",
    "age": "",
    "folder": "nay pyi taw abdomen shot",
    "gender": "m",
    "honorific": ""
  }
]

export default data