export const fallenImages = new Map<string, string[]>()
function importAll(r: any) {
  r.keys().forEach((k: string) => {
    const name = k.split('/')[1]
    const personImages = fallenImages.get(name) || []
    personImages.push(r(k).default)
    fallenImages.set(name, personImages)
  });
}

importAll(require.context('../resources/images/fallen', true, /.*/));

// loaded from google sheets in People.tsx
// used for dev, on prod live data is loaded
const data: any = [
  {
     "name":"ထွေးနိုင်",
     "confirmed":"TRUE",
     "date":"5/3/2021",
     "city":"မကွေး",
     "details":"ကျောင်းကုန်းကြီးရွာ၊ ပွင့်ဖြူမြို့နယ်တွင် ပြည်ခိုင်ဖြိုး အားပေးသူများမှ ဓားဖြင့် ဝိုင်းခုတ် bit.ly/3rnb23Z bit.ly/3egyz2z",
     "age":"",
     "folder":"htwe naing"
  },
  {
     "name":"နန်းဝေ",
     "confirmed":"TRUE",
     "date":"5/3/2021",
     "city":"မကွေး",
     "details":"ကျောင်းကုန်းကြီးရွာ၊ ပွင့်ဖြူမြို့နယ်တွင် ပြည်ခိုင်ဖြိုး အားပေးသူများမှ ဓားဖြင့် ဝိုင်းခုတ် bit.ly/3rnb23Z bit.ly/3egyz2z",
     "age":"17",
     "folder":"nan wai"
  },
  {
     "name":"ဦးချစ်",
     "confirmed":"TRUE",
     "date":"5/3/2021",
     "city":"မကွေး",
     "details":"ကျောင်းကုန်းကြီးရွာ၊ ပွင့်ဖြူမြို့နယ်တွင် ပြည်ခိုင်ဖြိုး အားပေးသူများမှ ဓားဖြင့် ဝိုင်းခုတ် bit.ly/3rnb23Z bit.ly/3egyz2z",
     "age":"",
     "folder":"u chit"
  },
  {
     "name":"ဇော်မျိုး",
     "confirmed":"TRUE",
     "date":"5/3/2021",
     "city":"မန္တလေး",
     "details":"၄၉ လမ်း၊ ၁၁၁ လမ်းအနီးတွင် ရင်ဘတ်အပေါ်ပိုင်း ကျည်မှန် သေဆုံးခဲ့။ tinyurl.com/56yvcatz bit.ly/2OoXTIY",
     "age":"27",
     "folder":"zaw myo"
  },
  {
     "name":"မင်းဦး",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"ရန်ကုန်",
     "details":"မြောက်ဥက္ကလာပ  (၂)ရပ်ကွက် မာဃ အပိုင်း(၃)၊ ဆီးအိမ်ကျည်မှန်ကာ ကျဆုံး",
     "age":"21",
     "folder":""
  },
  {
     "name":"ဇွဲထက်စိုး",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"ရန်ကုန်",
     "details":"မြောက်ဥက္ကလာပ",
     "age":"26",
     "folder":""
  },
  {
     "name":"ရာဇာမင်း",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"ရန်ကုန်",
     "details":"မြောက်ဥက္ကလာပ",
     "age":"33",
     "folder":""
  },
  {
     "name":"ဖိုးချစ်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"ရန်ကုန်",
     "details":"မြောက်ဥက္ကလာပ",
     "age":"28",
     "folder":""
  },
  {
     "name":"အာကာမိုး",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"ရန်ကုန်",
     "details":"မြောက်ဥက္ကလာပ",
     "age":"25",
     "folder":""
  },
  {
     "name":"စည်သူရှိန်(ခ)မြတ်သူရှိန်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"ရန်ကုန်",
     "details":"မြောက်ဥက္ကလာပ",
     "age":"18",
     "folder":""
  },
  {
     "name":"ကျော်စိုးလင်း",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"ရန်ကုန်",
     "details":"မြောက်ဥက္ကလာပ",
     "age":"20",
     "folder":""
  },
  {
     "name":"နေမျိုးအောင်(ခ)ကုလား",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မန္တလေး",
     "details":"ပြည်ကြီးတံခွန် ဘ၂ကွက်စိတ်",
     "age":"16",
     "folder":"nay myoe aung"
  },
  {
     "name":"အောင်မြင့်မြတ်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"စလင်း (မကွေး)",
     "details":"၂၀၁၈ ငါးဘာသာဂုဏ်ထူးရှင်။ မကွေးနည်းပညာတက္ကသိုလ် ဒုတိယနှစ်။ ကျည်ခေါင်းထိ ဆေးရုံရောက်ပြီးဆုံးသွား။ bit.ly/3q79ARK https://tinyurl.com/3mmfz29v https://tinyurl.com/5hbyr5py",
     "age":"19",
     "folder":"aung myint myat"
  },
  {
     "name":"ဖြိုးညီညီ",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"စလင်း (မကွေး)",
     "details":"လက်ခုပ်ပင်ရွာ။ ကျည်ထိ၍ နေရာတွင်သေဆုံး။",
     "age":"19",
     "folder":""
  },
  {
     "name":"‌ဝေယံ(ခ)ကိုကံချွန်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မုံရွာ",
     "details":"",
     "age":"25",
     "folder":"wai yan"
  },
  {
     "name":"ချမ်းသာဆွေ(ခ)ကဗျာဆရာ ကိုကေဇ၀င်း",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မုံရွာ",
     "details":"",
     "age":"39",
     "folder":"k za win"
  },
  {
     "name":"နိုင်၀င်း",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မုံရွာ",
     "details":"",
     "age":"45",
     "folder":""
  },
  {
     "name":"ဇော်သိန်းအောင်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မုံရွာ",
     "details":"Foodpanda (မုံရွာ) ပို့ဆောင်သူ ပါတနာအဖြစ် တာဝန်ထမ်းဆောင်နေသူ။ ဆန္ဒထုတ်ဖော်ပွဲတွင် ဒဏ်ရာရရှိသွားခဲ့သော အမျိုးသမီးတစ်ဦးအား ကယ်ဆယ်ရန်ကြိုစားစဉ် ဦးခေါင်းအား ကျည်မှန်ခဲ့။",
     "age":"20",
     "folder":"zaw thein aung"
  },
  {
     "name":"မိုးအောင်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မုံရွာ",
     "details":"မြဝတီရပ်မှ ကျူရှင်ဆရာ bit.ly/3b9kcLJ",
     "age":"23",
     "folder":""
  },
  {
     "name":"မြင့်မြင့်ဇင်(ခ)စာရေးဆရာ ကြည်လင်အေး",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မုံရွာ",
     "details":"အောင်ချမ်းသာရပ်မှ ဆရာမ၊ ရင်ဘတ်တည့်တည့် သေနတ်ထိမှန်။ bit.ly/3b9kcLJ bit.ly/3qcF9JR bit.ly/3sRfto5",
     "age":"36",
     "folder":"myint myint zin"
  },
  {
     "name":"မျိုးနိုင်လင်း(ခ)ဖိုးလင်း",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မန္တလေး",
     "details":"ရင်ဘတ်သေနတ်ဒဏ်ရာ bit.ly/3sQ4tat",
     "age":"39",
     "folder":"myo naing lin"
  },
  {
     "name":"မင်းခန့်ကျော်(ခ)ဖိုးသဲ",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မုံရွာ",
     "details":"နန္ဒဝန်ရပ်။ မတ်လ ၄ရက်တွင် မြို့မသုသာန်သို့ ပို့ဆောင်ဂူသွင်းသဂြိုလ်။ bit.ly/3b9kcLJ",
     "age":"17",
     "folder":"min khant kyaw"
  },
  {
     "name":"ထက်အောင်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"ရန်ကုန်",
     "details":"မြောက်က္ကလာ bit.ly/3q79ARK",
     "age":"19",
     "folder":"htet aung"
  },
  {
     "name":"ထက်‌ဝေထူး",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မော်လမြိုင်",
     "details":"ဦးခေါင်းသေနတ်ထိ၊ မော်လမြိုင်တက္ကသိုလ်ကျောင်းသားတစ်ဦးဖြစ်ပြီး တက္ကသိုလ် Dance Club အဖွဲ့ဝင်၊ လူငယ်လှုပ်ရှားမှုများတွင် တက်ကြွစွာပါဝင်သူတစ်ဦးဖြစ် bit.ly/3rfgbuG",
     "age":"19",
     "folder":"htet wai htoo"
  },
  {
     "name":"ဇင်ကိုကိုဇော်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မြင်းခြံ",
     "details":"အမှတ် ၁၉ စွန်းလွန်းရပ်ကွက်။ ဦးခေါင်းထိမှန် bit.ly/3sOOMjx",
     "age":"14",
     "folder":"zin ko zaw"
  },
  {
     "name":"ဇင်မျိုးမောင်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"ကလေး",
     "details":"မတ်လ ၂ ရက်နေ့က ဆန္ဒပြပွဲမှာ အဆုတ်နဲ့ ပေါင်ကို သေနတ်ထိမှန်ပြီး မတ်လ ၃ ရက်နေ့မှာ သေဆုံး။ တက္ကသိုလ်ဝင်တန်းအောင် shorturl.at/uEOR8 bit.ly/387Ok8l bit.ly/2OiZkc2",
     "age":"18",
     "folder":"zin myo aung"
  },
  {
     "name":"ကြယ်စင်(ခ)Angel(ခ)ကျားရှီး",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မန္တလေး",
     "details":"၈၄လမ်းနှင့် ၃၀လမ်းတွင် အကြမ်းဖက်ဖြိုခွင်းမှုခံရကာ ဦးခေါင်းကျည်ဆံထိ ကျဆုံးခဲ့။ ယူနန်ဘုံကျောင်းမှ အေးရိပ်ငြိမ်သုသာန်သို့ (ကြာနီကန်) မတ်လ ၄ ရက်နေ့တွင် ပို့ဆောင်သဂြိုဟ်။ bit.ly/3sQ4tat bit.ly/382F84T bit.ly/386fqNf (v)bit.ly/306aC65",
     "age":"19",
     "folder":"angel"
  },
  {
     "name":"ကျော့နန္ဒာအောင်",
     "confirmed":"TRUE",
     "date":"3/3/2021",
     "city":"မုံရွာ",
     "details":"မြဝတီရပ်နေ မုံရွာကွန်ပျူတာတက္ကသိုလ်ကျောင်းသူဟောင်း။ ပြည်​ထောင်စုလမ်း၊ ဘုရားအနီး ပစ်ခတ်ဖြိုခွင်ခံရ၍ ခေါင်းထိသေဆုံး။ ly/3b9kcLJ bit.ly/3rdofMp bit.ly/3qcF9JR",
     "age":"25",
     "folder":"kyawt nandar aung"
  },
  {
     "name":"သီဟဇော်(ခ)နောင်နောင်",
     "confirmed":"TRUE",
     "date":"2/3/2021",
     "city":"တောင်တွင်းကြီး (စစ်ကိုင်း)",
     "details":"တောင်တွင်းကြီးမြို့နယ်၊ ဆတ်သွား၊ အမှတ် ၅ ရပ်ကွက်မှာ နေထိုင်။ ရန်ကုန်-ပြည်ကားလမ်းအတိုင်း တောင်တွင်းကြီးဘက်သို့ ပြန်လာတဲ့ စစ်ကားတွေကို တောစိမ်းကျေးရွာထိပ် ကားလမ်းဘေးမှာ ထိုင်နေတဲ့ လူငယ်တွေက “စစ်အာဏာရှင်အလိုမရှိ” လို့ ကြွေးကြော်။ စစ်ကားပေါ်မှ စစ်သားများဆင်းလာပြီး ကျွဲကျောင်းရင်း ဂိမ်းဆော့နေတဲ့ လူငယ် ၂ ဦးကို ထိုးကြိတ်။ ထွက်ပြေးတဲ့ လူငယ်ကို  သေနတ်နဲ့ ပစ်တဲ့အတွက် ကျည်ဆန်ထိမှန် သေဆုံးခဲ့။ https://tinyurl.com/ch8mn8xy",
     "age":"16",
     "folder":""
  },
  {
     "name":"ဟိန်းထွဋ်အောင်",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ရန်ကုန်",
     "details":"သင်္ဃန်းကျွန်း ဘဝမြင့်မှတ်တိုင်နားတွင် ကိုယ်ဝန်ဆောင် ဇနီးသည်နဲ့အတူရှိနေစဉ် ကျည်ဆံထိမှန်ကွယ်လွန်။ လည်ပင်းကို သေနတ်ကျည်ဆံထုတ်ချင်းပေါက်ဝင်ရောက်။ အတူတူရှိနေခဲ့တဲ့ ဇနီးသည်ဟာ ကိုယ်ဝန် ၃ လဆောင်ထားသူဖြစ်။ bit.ly/2Mvm0Fd bit.ly/2MCOHjO bit.ly/3uDq2MV bit.ly/3ktpd4Q shorturl.at/uyzS7",
     "age":"23",
     "folder":"hein htut aung"
  },
  {
     "name":"သန်းဝင်း(ခ)ဂျွန်မာခမ်",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ထားဝယ်",
     "details":"ထားဝယ်မြို့၊ စျေးတောင်ဘက်လမ်းနှင့် ဗိုလ်ချုပ်လမ်းထောင့်အနီးတွင် ဒဏ်ရာဖြင့် လဲကျနေစဉ် ရဲတပ်ဖွဲ့က ချီမသယ်ဆောင်သွားခဲ့ပြီး ထားဝယ်ရဲစခန်းအချုပ်တွင်သေဆုံး။ ဗိုက်ပွင့်ထွက်ဒဏ်ရာဖြင့် သေဆုံးခဲ့။ အလောင်းကို တပ်မတော် ဆေးရုံတွင် မတ်လ ၁ ရက်နေ့ နေ့လယ်ပိုင်းတွင် မိသားစုက သွားရောက်ထုတ်ယူခဲ့။ ကရပ်​ပြင်​မြောက်​ဘက် ဇော်ကလေးလမ်း နေသူ shorturl.at/ixAKT shorturl.at/fnuyJ shorturl.at/tDT25",
     "age":"36",
     "folder":"than win"
  },
  {
     "name":"လွင်လွင်ဦး(ခ)အော့ကီး",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ထားဝယ်",
     "details":"ထားဝယ်မြို့ပုံကျွန်း/ဆန်းချီ ရပ်ကွက်နေသူ ထားဝယ်ဆေးရုံတွင် ကွယ်လွန်။ ဥတ္တံတားကြီး လမ်းဆုံတွင် ရှေ့တန်းလိုင်းမှ သံပြားကာထားသော်လည်း ကျည်ဆံထိ bit.ly/2ZUWGvA shorturl.at/fnsM6 shorturl.at/csBD1 shorturl.at/axBCJ shorturl.at/uNOYZ",
     "age":"33",
     "folder":"lwin lwin oo"
  },
  {
     "name":"မောင်မောင်ဦး",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"မန္တလေး",
     "details":"မန္တလေးတောင်ခြေရှိ ရွှေမန်းတောင်ဂေါက်ကွင်းတွင် ဂေါက်အိတ်ထမ်းအဖြစ် လုပ်ကိုင်သူ။ ၄၁လမ်း၊ ၆၄လမ်းနှင့် ၆၅လမ်းကြားတွင် ဆိုင်ကယ်စီးနေချိန် ဦးခေါင်းကျည်မှန်၍ ကွယ်လွန်။ မိခင်၊ ဇနီး၊ အသက်(၁၀)နှစ်အောက် သားတစ်ဦးနှင့် တစ်နှစ်အရွယ် သမီးတစ်ဦးကျန်ရစ်။ https://tinyurl.com/c4chn4np (v) https://tinyurl.com/245pv2s8",
     "age":"41",
     "folder":""
  },
  {
     "name":"ကျော်ထက်ခေါင်",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"မန္တလေး",
     "details":"ဆိုင်ကယ်ဝပ်ရှော့လုပ်ငန်း လုပ်ကိုင်သူ။ ၆၈ လမ်း၊ ၃၄လမ်းနှင့် ၃၅ လမ်းကြားတွင် ညာဘက်ရင်အုံ သေနတ်ထိမှန်ကာ ကွယ်လွန်ခဲ့။ ဇနီးနှင့် ၇နှစ်အရွယ်သားကျန်ရစ်။ မတ်လ(၃)ရက်တွင် မဟာအောင်မြေ ယာဉ်ရပ်စခန်းဝင်းမှ သုသာန်သို့ ပို့ဆောင်။ https://tinyurl.com/23n7kra",
     "age":"28",
     "folder":""
  },
  {
     "name":"ဗညားအောင်",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ထားဝယ်",
     "details":"လောင်းလုံးမြို့နယ် ကျောက်ဆည်ရွာနေသူ ထားဝယ်ဆေးရုံတွင် ကွယ်လွန် bit.ly/2ZUWGvA shorturl.at/lmqvM shorturl.at/cwKQ1 shorturl.at/lCHV9",
     "age":"39",
     "folder":"banyar aung"
  },
  {
     "name":"နော်ငို(ခ)ကိုဖေသန်း",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ထားဝယ်",
     "details":"ရေဖြူမြို့နယ် ပုဂေါဇွန်းရွာနေသူ။ ညာဖက်နံကြားအောက် ကျည်ဝင်၊ မယ်ဒီလန်းဆေးရုံတွင် ကွယ်လွန်။ bit.ly/3dUSGDs bit.ly/3uEAB2A bit.ly/2ZUWGvA shorturl.at/knBQS (သွေး)shorturl.at/dqzE1",
     "age":"38",
     "folder":"ngaw ngo"
  },
  {
     "name":"နေမျိုးဦး(ခ)နေလင်းဦး",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ပခုက္ကူ",
     "details":"ပခုက္ကူမြို့ အမှတ် ၃ ရပ်ကွက်၊ ဂကွင်း ၃ လမ်းနေ၊ ထင်တန်းလမ်း မြောက်ဘက်သို့ ရဲနှင့်စစ်တပ် တက်လာ၍  ကားဘေး၌ ပုန်းနေစဥ် ရဲမှ ပစ်ခတ်၍ ဘယ်ဘက်ပေါင်ရင်ကျည်ဆံထိမှန်၊ ပုန်းနေတုန်း ဂုတ်ကဆွဲကာ ဗိုက်ကိုထပ်ပစ်သဖြင့် ကွယ်လွန်။ ဇနီးနှင့် ကလေးငယ် ၂ ဦး(၆နှစ်နှင့်၂နှစ်ခွဲ) ကျန်ရစ်ခဲ့။ shorturl.at/dvDS8 shorturl.at/msz56 shorturl.at/ekpAS bit.ly/3q3O3cw shorturl.at/gnGJY (v)shorturl.at/cfCEG (v)bit.ly/383SDBn",
     "age":"35",
     "folder":"nay myoe oo"
  },
  {
     "name":"ဒေစီ(ခ)အပု(ခ)ရမ္မာဇာန်ဘီ",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"မန္တလေး",
     "details":"၃၅ လမ်း၊ ၇၅ လမ်းနှင့် ၇၆ လမ်းဘေးမှာ လမ်းလျှောက်နေရင်း အရပ်ဝတ်နဲ့ လူတစ်ဦးက ခေါင်းကိုသေချာ ချိန်ရွယ်ပစ်ခတ်ခံရမှုကြောင့် ဦးခေါင်း ထိမှန် သေဆုံး။ ၆နှစ်အရွယ်သားငယ် ကျန်ရှိ။ shorturl.at/eBDST (သွေးထွက်)shorturl.at/xBEI7 shorturl.at/bclE5",
     "age":"32",
     "folder":"daw si"
  },
  {
     "name":"တင်နွဲ့ရီ",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ရန်ကုန်",
     "details":"ကြည့်မြင်တိုင် ရန်ကုန်တိုင်းပညာရေးမှူးရုံးရှေ့ ဖြိုခွင်းမှုတွင် မျက်ရည်ယိုဗုံး ရော်ဘာကျည်နဲ့ပစ်တာ heart attackရ။ အလယ်တန်းပြဆရာမ ထ(ခွဲ)လ ၁၀ လှိုင်သာယာ(အနောက်မြို့နယ်) bit.ly/3kuODPk bit.ly/3ktwl10 bit.ly/3rfJIER bit.ly/3b40EbI shorturl.at/owNRS (v)bit.ly/3bQirlM",
     "age":"59",
     "folder":"tin nwae yee"
  },
  {
     "name":"ညီညီအောင်ထက်နိုင်(ခ)ညီညီ",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ရန်ကုန်",
     "details":"ရန်ကုန်အနောက်ပိုင်းတက္ကသိုလ်မှာ မြန်မာစာဘာသာရပ် တက္ကသိုလ်ကျောင်းသား။ လှည်းတန်း ကမာရွတ်တွင် သေနတ်ဒဏ်ရာဖြင့် ဗိုက်ပေါက်သွားပြီးကွယ်လွန်။ WYTU ကျောင်းသား bit.ly/2ZUusRH bit.ly/3ktTBMx bit.ly/3uEYMO6 (အိမ်ရှိဗီဒီယို)bit.ly/3dPhrku (v)bit.ly/3uJijx4 (v)shorturl.at/hivTV shorturl.at/inoxC (v)shorturl.at/blzH8 (v)bit.ly/3uMIAur",
     "age":"23",
     "folder":"nyi nyi aung htet naing"
  },
  {
     "name":"ဇင်လင်းထက်",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ရန်ကုန်",
     "details":"လှည်းတန်း ကမာရွတ် ၆လမ်းထိပ်တွင် သစ်သားဒိုင်းကိုပင် ဖေါက်လာသောသေနတ်ဒဏ်ရာဖြင့် မျက်လုံးပေါက်သွားပြီး လမ်းတွင်ကွယ်လွန်။ ကျိုက်ထိုသား bit.ly/2MCOHjO bit.ly/3b08Edy bit.ly/3uEveAa shorturl.at/dnJK0 shorturl.at/asFN5 (v)bit.ly/3r3Y6jg https://bit.ly/3sHgFds",
     "age":"20",
     "folder":"zin lin htet"
  },
  {
     "name":"ဇင်မျိုးသူ(ခ)ရရှစ်ဘိုင်",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"မော်လမြိုင်",
     "details":"စျေးကြိုရပ်၊ ရတနာထွန်းပွဲရုံအနီး ညနေငါးခွဲလောက်တွင် လုံထိန်းတပ်ဖွဲ့ ပစ်ခတ်မှုကြောင့် ဦးခေါင်းထိမှန်၍ ကွယ်လွန် shorturl.at/mxKWZ bit.ly/3r46b7D (သွေးထွက်)shorturl.at/sDHX6 (v)bit.ly/3b2Ey9c (v)shorturl.at/gE026",
     "age":"21",
     "folder":"zin myoe thu"
  },
  {
     "name":"စည်သူစိုး(ခ)ကိုစိုး",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ပဲခူး",
     "details":"ဇိုင်းဂနိုင်းမြောက်ပိုင်းတွင် နေထိုင်သူ။ ပဲခူးတံတားပေါ်မှာ သေနတ်ဒဏ်ရာရကျဆုံး။ မတ်လ ၂ ရက်တွင် ဆင်ဖြူကွင်းသုသာန်မှာ ဂူသွင်းသင်္ဂြီုလ်။  shorturl.at/ahqA1",
     "age":"16",
     "folder":"sithu soe"
  },
  {
     "name":"ကြည်လှိုင်မင်း(ခ)ခေါင်းကြီး",
     "confirmed":"TRUE",
     "date":"28/2/2021",
     "city":"ပဲခူး",
     "details":"မဇင်း ၁လမ်း အိုးလေးစုပိုင်တွင် နေထိုင်သူ။  ဒို့ဗမာအစည်းအရုံးအဖွဲ့ဝင် သခင်လှကြိုင်ရဲ့မြစ်။ ပဲခူးတံတားပေါ်မှာ ကျည်ဆံမှန်ပြီး ကျဆုံး။ မတ်လ ၂ ရက်တွင် ဆင်ဖြူကွင်းသုသာန်မှာ ဂူသွင်းသင်္ဂြီုလ်။ shorturl.at/kzJV4 shorturl.at/npST8 https://tinyurl.com/yp863s6u",
     "age":"18",
     "folder":"kyi hlaing min"
  },
  {
     "name":"ရာဇာအောင်",
     "confirmed":"TRUE",
     "date":"24/2/2021",
     "city":"မန္တလေး",
     "details":"ဖေဖော်ဝါရီ ၂၀ ရက်နေ့ မန္တလေ ဆိပ်ကမ်းတွင် ပစ်ခတ်ဖမ်းဆီးမှုကြောင့် ဒူးခေါင်းတွင် ကျည်ဆံထိမှန် ဖမ်းဆီးခံရ။ စစ်ကြောရေးစခန်းတွင် ဆေးကုသပေးခြင်းမရှိဘဲ ပစ်ထားရာ ၄ ရက်မြောက်နေ့တွင် ဒဏ်ရာပြင်းထန်၍ ဆုံးပါး။ သေဆုံးသောအခါ Covid လူနာအမည်တပ်၍ မိသားစု လက်မှတ်မထိုးသည့်ကြားမှ ချက်ချင်းသဂြိုလ်သည်။ bit.ly/3qWVW4R bit.ly/3bzBAbw bit.ly/3bErdD8",
     "age":"26",
     "folder":"yar zar aung"
  },
  {
     "name":"မျိုးမင်းထွန်း",
     "confirmed":"TRUE",
     "date":"22/2/2021",
     "city":"ပဲခူး",
     "details":"မီးရထားဝန်ထမ်း ဖြစ်ကာ ဆန္ဒပြပွဲအတွင်း မူးလဲကာ ကွယ်လွန်။ bit.ly/3pKzdHT",
     "age":"44",
     "folder":""
  },
  {
     "name":"သက်နိုင်ဝင်း(ခ)ကိုမင်းမင်း",
     "confirmed":"TRUE",
     "date":"20/2/2021",
     "city":"မန္တလေး",
     "details":"ဗိုက်ထဲကျည်ဆံဝင်၊ အသည်းထိသွား bit.ly/3qGOcE3 shorturl.at/duUXZ",
     "age":"37",
     "folder":"thet naing win"
  },
  {
     "name":"ဝေယံထွန်း",
     "confirmed":"TRUE",
     "date":"20/2/2021",
     "city":"မန္တလေး",
     "details":"ဒဏ်ရာရသူများကို လှည်းဖြင့်တွန်းတင်ကာ ကူညီပေးသူ။ ကျည်ဆံကြားထဲ ဒဏ်ရာရသူကို ပြန်သွားကယ်ရာမှ ဦးခေါင်းသေနတ်ထိမှန်။ သား မရတော့ဘူးဟု နောက်ဆုံးပြောသွား",
     "age":"16",
     "folder":"wai yan htun"
  },
  {
     "name":"လှမျိုးအောင်",
     "confirmed":"TRUE",
     "date":"20/2/2021",
     "city":"ရန်ကုန်",
     "details":"အင်းစိန်မြို့သစ်စျေးရှေ့ မသမာသူက ကားနဲ့တိုက် bit.ly/3kwZ30Z",
     "age":"39",
     "folder":"hla myoe aung"
  },
  {
     "name":"တင်ထွဋ်ဟိန်း",
     "confirmed":"TRUE",
     "date":"20/2/2021",
     "city":"ရန်ကုန်",
     "details":"ရွှေပြည်သာ ညကင်းစောင့်စဥ် ဖြတ်သွားသောရဲကားမှ ခေါင်းကိုသေနတ်ဖြင့် သုံးချက်ပစ်",
     "age":"30",
     "folder":""
  },
  {
     "name":"စုစုနိုင်",
     "confirmed":"-",
     "date":"20/2/2021",
     "city":"ဘားအံ",
     "details":"ဒုက္ခသည်စခန်းတွင် မီးကွင်းပစ်ခံရပြီး မီးလောင် shorturl.at/lmyC2",
     "age":"4",
     "folder":"su su naing"
  },
  {
     "name":"ချမ်းမြေ့အောင်",
     "confirmed":"-",
     "date":"20/2/2021",
     "city":"ရန်ကုန်",
     "details":"တောင်ဥက္ကလာပမှာ မီးကွင်းပစ်တယ်ဆိုလို့ ခြံကျော်လိုက်ရာမှ ဓာတ်လိုက် bit.ly/3pPYMHu",
     "age":"-",
     "folder":"chan myae aung"
  },
  {
     "name":"ကြည်ဖြူဦး",
     "confirmed":"-",
     "date":"20/2/2021",
     "city":"ဘားအံ",
     "details":"ဒုက္ခသည်စခန်းတွင် မီးကွင်းပစ်ခံရပြီး မီးလောင် shorturl.at/lmyC2",
     "age":"2",
     "folder":"kyi phyu oo"
  },
  {
     "name":"ကြည်စိုး",
     "confirmed":"TRUE",
     "date":"20/2/2021",
     "city":"မန္တလေး",
     "details":"အကြမ်းဖက်မှုများကို မှတ်တမ်းတင်ရင်း အရိုက်ခံရသော ဒဏ်ရာဖြင့် ကွယ်လွန် bit.ly/3bt1aie",
     "age":"48",
     "folder":"kyi soe"
  },
  {
     "name":"နေနေဝင်းထက်",
     "confirmed":"-",
     "date":"15/2/2021",
     "city":"မြိတ်",
     "details":"ညကင်းစောင့်ရာမှ ခေါင်းကို အရိုက်ခံရ shorturl.at/lmyC2",
     "age":"15",
     "folder":""
  },
  {
     "name":"မြသွဲ့သွဲ့ခိုင်",
     "confirmed":"TRUE",
     "date":"19/2/2021",
     "city":"နေပြည်တော်",
     "details":"ဦးခေါင်းတွင် ကျည်ဆံထိမှန်ခဲ့ပြီး သေဆုံးလုနီးပါး ဖြစ်နေခဲ့ကာ ထိုနေ့ညတွင်ပင် နေပြည်တော် ကုတင် ၁၀၀၀ ဆေးရုံ၌ ဦးနှောက်သေဆုံးသွားခဲ့။ အသက်ရှူစက်ဖြင့် အသက်ဆက်ခဲ့ပြီး မိသားစုဝင်များက နောက်ရက်များ၌ အသက်ရှူစက်ဖြုတ်ခဲ့ရန် သဘောတူခဲ့။ ဖေဖော်ဝါရီ ၁၉ ရက်နေ့တွင် ကွယ်လွန်။ shorturl.at/boqKO shorturl.at/hlowN (v)shorturl.at/wBDGT",
     "age":"19",
     "folder":"mya thwat thwat khaing"
  },
  {
     "name":"နပွား(ခ)ကိုကိုဦး",
     "confirmed":"TRUE",
     "date":"8/2/2021",
     "city":"မန္တလေး",
     "details":"ညတွင် ကားဖြင့်ဆင့်တိုက်ခံရ",
     "age":"32",
     "folder":"na pwar"
  }
]

export default data