export const fallenImages = new Map<string, string[]>()
function importAll(r: any) {
  r.keys().forEach((k: string) => {
    const name = k.split('/')[1]
    const personImages = fallenImages.get(name) || []
    personImages.push(r(k).default)
    fallenImages.set(name, personImages)
  });
}

importAll(require.context('../resources/images/fallen', true, /.*/iu));

const data = [
  {
     "name":"ကျော့နန္ဒာအောင်",
     "position":"မုံရွာ",
     "tstamp":1614747600000,
     "age":25,
     "confirmed":true,
     "details":"မြဝတီရပ် bit.ly/3b9kcLJ bit.ly/3rdofMp bit.ly/3qcF9JR",
  },
  {
     "name":"ကြည်စိုး",
     "position":"မန္တလေး",
     "age":48,
     "tstamp":1613797200000,
     "details":"အကြမ်းဖက်မှုများကို မှတ်တမ်းတင်ရင်း အရိုက်ခံရသော ဒဏ်ရာဖြင့် ကွယ်လွန် bit.ly/3bt1aie",
     "confirmed":true
  },
  {
     "name":"ကြည်ဖြူဦး",
     "position":"ဘားအံ",
     "age":2,
     "tstamp":1613797200000,
     "details":"ဒုက္ခသည်စခန်းတွင် မီးကွင်းပစ်ခံရပြီး မီးလောင် shorturl.at/lmyC2"
  },
  {
     "name":"ကြည်လှိုင်မင်း(ခ)ခေါင်းကြီး",
     "position":"ပဲခူး",
     "tstamp":1614488400000,
     "age":18,
     "details":"shorturl.at/kzJV4 shorturl.at/npST8",
     "confirmed":true
  },
  {
     "name":"ကြယ်စင်(ခ)angel",
     "position":"မန္တလေး",
     "tstamp":1614747600000,
     "age":19,
     "details":"ဦးခေါင်းကျည်ဆံထိ bit.ly/3sQ4tat bit.ly/382F84T bit.ly/386fqNf (v)bit.ly/306aC65",
     "confirmed":true
  },
  {
     "name":"ဇင်မျိုးအောင်",
     "position":"ကလေး",
     "tstamp":1614747600000,
     "age": 18,
     "details":"အဆုတ်ကျည်ဆံထိမှန်၊ တက္ကသိုလ်ဝင်တန်းအောင် shorturl.at/uEOR8 bit.ly/387Ok8l bit.ly/2OiZkc2",
     "confirmed": true
  },
  {
     "name":"ချမ်းမြေ့အောင်",
     "position":"ရန်ကုန်",
     "tstamp":1613797200000,
     "details":"တောင်ဥက္ကလာပမှာ မီးကွင်းပစ်တယ်ဆိုလို့ ခြံကျော်လိုက်ရာမှ ဓာတ်လိုက် bit.ly/3pPYMHu"
  },
  {
     "name":"စည်သူစိုး(ခ)ကိုစိုး",
     "position":"ပဲခူး",
     "tstamp":1614488400000,
     "age":16,
     "details":"မဇင်း ၁လမ်း ဇိုင်းမြောက်တွင် နေထိုင်သူ။ သေနတ်ဒဏ်ရာရ shorturl.at/ahqA1",
     "confirmed":true
  },
  {
     "name":"စုစုနိုင်",
     "position":"ဘားအံ",
     "age":4,
     "tstamp":1613797200000,
     "details":"ဒုက္ခသည်စခန်းတွင် မီးကွင်းပစ်ခံရပြီး မီးလောင် shorturl.at/lmyC2"
  },
  {
     "name":"ဇင်ကိုဇော်",
     "position":"မြင်းခြံ",
     "tstamp":1614747600000,
     "age":14,
     "details":"ဦးခေါင်းထိမှန် bit.ly/3sOOMjx",
     "confirmed":true
  },
  {
     "name":"ဇင်မျိုးသူ(ခ)ရရှစ်",
     "position":"မော်လမြိုင်",
     "tstamp":1614488400000,
     "age":21,
     "details":"စျေးကြိုရပ်၊ ရတနာထွန်းပွဲရုံအနီး ညနေငါးခွဲလောက်တွင် လုံထိန်းတပ်ဖွဲ့ ပစ်ခတ်မှုကြောင့် ဦးခေါင်းထိမှန်၍ ကွယ်လွန် shorturl.at/mxKWZ bit.ly/3r46b7D (သွေးထွက်)shorturl.at/sDHX6 (v)bit.ly/3b2Ey9c (v)shorturl.at/gE026",
     "confirmed":true
  },
  {
     "name":"ဇင်လင်းထက်",
     "position":"ရန်ကုန်",
     "age":20,
     "tstamp":1614488400000,
     "details":"လှည်းတန်း ကမာရွတ် ၆လမ်းထိပ်တွင် သစ်သားဒိုင်းကိုပင် ဖေါက်လာသောသေနတ်ဒဏ်ရာဖြင့် မျက်လုံးပေါက်သွားပြီး လမ်းတွင်ကွယ်လွန်။ ကျိုက်ထိုသား bit.ly/2MCOHjO bit.ly/3b08Edy bit.ly/3uEveAa shorturl.at/dnJK0 shorturl.at/asFN5 (v)bit.ly/3r3Y6jg https://bit.ly/3sHgFds",
     "confirmed":true
  },
  {
     "name":"ညီညီအောင်ထက်နိုင်(ခ)ညီညီ",
     "position":"ရန်ကုန်",
     "age":23,
     "tstamp":1614488400000,
     "details":"လှည်းတန်း ကမာရွတ်တွင် သေနတ်ဒဏ်ရာဖြင့် ဗိုက်ပေါက်သွားပြီးကွယ်လွန်။ WYTU ကျောင်းသား bit.ly/2ZUusRH bit.ly/3ktTBMx bit.ly/3uEYMO6 (အိမ်ရှိဗီဒီယို)bit.ly/3dPhrku (v)bit.ly/3uJijx4 (v)shorturl.at/hivTV shorturl.at/inoxC (v)shorturl.at/blzH8 (v)bit.ly/3uMIAur",
     "confirmed":true
  },
  {
     "name":"တင်ထွဋ်ဟိန်း",
     "position":"ရန်ကုန်",
     "age":30,
     "tstamp":1613797200000,
     "details":"ရွှေပြည်သာ ညကင်းစောင့်စဥ် ဖြတ်သွားသောရဲကားမှ ခေါင်းကိုသေနတ်ဖြင့် သုံးချက်ပစ်",
     "confirmed":true
  },
  {
     "name":"တင်နွဲ့ရီ",
     "position":"ရန်ကုန်",
     "tstamp":1614488400000,
     "age":59,
     "details":"ကြည့်မြင်တိုင် ရန်ကုန်တိုင်းပညာရေးမှူးရုံးရှေ့ ဖြိုခွင်းမှုတွင် မျက်ရည်ယိုဗုံး ရော်ဘာကျည်နဲ့ပစ်တာ heart attackရ။ အလယ်တန်းပြဆရာမ ထ(ခွဲ)လ ၁၀ လှိုင်သာယာ(အနောက်မြို့နယ်) bit.ly/3kuODPk bit.ly/3ktwl10 bit.ly/3rfJIER bit.ly/3b40EbI shorturl.at/owNRS (v)bit.ly/3bQirlM",
     "confirmed":true
  },
  {
     "name":"ထက်ဝေထူး",
     "position":"မော်လမြိုင်",
     "tstamp":1614747600000,
     "age":19,
     "confirmed":true,
     "details":"ဦးခေါင်းသေနတ်ထိ၊ မော်လမြိုင်တက္ကသိုလ်ကျောင်းသားတစ်ဦးဖြစ်ပြီး တက္ကသိုလ် Dance Club အဖွဲ့ဝင်၊ လူငယ်လှုပ်ရှားမှုများတွင် တက်ကြွစွာပါဝင်သူတစ်ဦးဖြစ် bit.ly/3rfgbuG"
  },
  {
     "name":"ထက်အောင်",
     "position":"ရန်ကုန်",
     "tstamp":1614747600000,
     "age":19,
     "details":"မြောက်က္ကလာ bit.ly/3q79ARK"
  },
  {
     "name":"ဒေစီ(ခ)ဒေါ်ပု",
     "position":"မန္တလေး",
     "tstamp":1614488400000,
     "age":32,
     "details":"၃၅ လမ်း၊ ၇၅ လမ်းနှင့် ၇၆ လမ်းဘေးမှာ လမ်းလျှောက်နေရင်း အရပ်ဝတ်နဲ့ လူတစ်ဦးက ခေါင်းကိုသေချာ ချိန်ရွယ်ပစ်ခတ်ခံရမှုကြောင့် ဦးခေါင်း ထိမှန် သေဆုံး။ ၆နှစ်အရွယ်သားငယ် ကျန်ရှိ shorturl.at/eBDST (သွေးထွက်)shorturl.at/xBEI7 shorturl.at/bclE5",
     "confirmed":true
  },
  {
     "name":"နပွား(ခ)ကိုကိုဦး",
     "position":"မန္တလေး",
     "age":32,
     "tstamp":1612760400000,
     "details":"ညတွင် ကားဖြင့်ဆင့်တိုက်ခံရ",
     "confirmed":true,
     "folder": "na pwar"
  },
  {
     "name":"နေနေဝင်းထက်",
     "position":"မြိတ်",
     "tstamp":1613365200000,
     "details":"ညကင်းစောင့်ရာမှ ခေါင်းကို အရိုက်ခံရ shorturl.at/lmyC2",
     "age":15
  },
  {
     "name":"နေမျိုးဦး(ခ)နေလင်းဦး",
     "position":"ပခုက္ကူ",
     "tstamp":1614488400000,
     "age":35,
     "details":"ပခုက္ကူမြို့၊အမှတ် ၃ ရပ်ကွက်၊ ဂကွင်း ၃ လမ်းနေ၊ ထင်တန်းလမ်း မြောက်ဘက်သို့ ရဲနှင့်စစ်တပ် တက်လာ၍  ကားဘေး၌ ပုန်းနေစဥ် ရဲမှ ပစ်ခတ်၍ ဘယ်ဘက်ပေါင်ရင်ကျည်ဆံထိမှန်၊ ပုန်းနေတုန်း ဂုတ်ကဆွဲကာ ဗိုက်ကိုထပ်ပစ်သဖြင့် ကွယ်လွန်။ ဇနီးနှင့် ကလေးငယ် ၂ ဦး(၆နှစ်နှင့်၂နှစ်ခွဲ) ကျန်ရစ်ခဲ့ shorturl.at/dvDS8 shorturl.at/msz56 shorturl.at/ekpAS bit.ly/3q3O3cw shorturl.at/gnGJY (v)shorturl.at/cfCEG (v)bit.ly/383SDBn",
     "confirmed":true,
     "folder": "nay myo oo"
  },
  {
     "name":"နော်ငို(ခ)ကိုဖေသန်း",
     "position":"ထားဝယ်",
     "age":38,
     "tstamp":1614488400000,
     "details":"ရေဖြူမြို့နယ် ပုဂေါဇွန်းရွာနေသူ။ ညာဖက်နံကြားအောက် ကျည်ဝင်၊ မယ်ဒီလန်းဆေးရုံတွင် ကွယ်လွန် bit.ly/3dUSGDs bit.ly/3uEAB2A bit.ly/2ZUWGvA shorturl.at/knBQS (သွေး)shorturl.at/dqzE1",
     "confirmed":true
  },
  {
     "name":"ဗညားအောင်",
     "position":"ထားဝယ်",
     "age":39,
     "tstamp":1614488400000,
     "details":"လောင်းလုံးမြို့နယ် ကျောက်ဆည်ရွာနေသူ ထားဝယ်ဆေးရုံတွင် ကွယ်လွန် bit.ly/2ZUWGvA shorturl.at/lmqvM shorturl.at/cwKQ1 shorturl.at/lCHV9",
     "confirmed":true
  },
  {
     "name":"မင်းခန့်ကျော်(ခ)ဖိုးသဲ",
     "position":"မုံရွာ",
     "tstamp":1614747600000,
     "age":17,
     "confirmed":true,
     "details":"နန္ဒဝန်ရပ် bit.ly/3b9kcLJ",
     "folder": "min khant kyaw"
  },
  {
     "name":"မျိုးနိုင်လင်း",
     "position":"မန္တလေး",
     "tstamp":1614747600000,
     "age":39,
     "confirmed":true,
     "details":"ရင်ဘတ်သေနတ်ဒဏ်ရာ bit.ly/3sQ4tat"
  },
  {
     "name":"မျိုးမင်းထွန်း",
     "position":"ပဲခူး",
     "age":44,
     "tstamp":1613970000000,
     "details":"မီးရထားဝန်ထမ်း ဖြစ်ကာ ဆန္ဒပြပွဲအတွင်း မူးလဲကာ ကွယ်လွန်။ bit.ly/3pKzdHT",
     "confirmed":true
  },
  {
     "name":"မြင့်မြင့်ဇင်(ခ)ကြည်လင်အေး",
     "position":"မုံရွာ",
     "tstamp":1614747600000,
     "age":36,
     "details":"အောင်ချမ်းသာရပ်မှ ဆရာမ၊ ရင်ဘတ်တည့်တည့် သေနတ်ထိမှန် bit.ly/3b9kcLJ bit.ly/3qcF9JR bit.ly/3sRfto5",
     "confirmed":true
  },
  {
     "name":"မြသွဲ့သွဲ့ခိုင်",
     "position":"နေပြည်တော်",
     "tstamp":1613106000000,
     "age":20,
     "details":"ဦးခေါင်းတွင် ကျည်ဆံထိမှန်ခဲ့ပြီး သေဆုံးလုနီးပါး ဖြစ်နေခဲ့ကာ ထိုနေ့ညတွင်ပင် နေပြည်တော် ကုတင် ၁၀၀၀ ဆေးရုံ၌ ဦးနှောက်သေဆုံးသွားခဲ့သည်။[၃] သူမမှာ အသက်ရှူစက်ဖြင့် အသက်ဆက်နေခဲ့ပြီး မိသားစုဝင်များက နောက်ရက်များ၌ အသက်ရှူစက်ဖြုတ်ခဲ့ရန် သဘောတူခဲ့သည်။ ဖေဖော်ဝါရီလ ၁၉ ရက်နေ့တွင် ကွယ်လွန်ခဲ့၏။ သူမသည် ၂၀၂၁ မြန်မာနိုင်ငံဆန္ဒပြမှု၏ ပထမဆုံး ကျဆုံးသူဖြစ်လာခဲ့သည်။ shorturl.at/boqKO shorturl.at/hlowN (v)shorturl.at/wBDGT",
     "confirmed":true
  },
  {
     "name":"မိုးအောင်",
     "position":"မုံရွာ",
     "tstamp":1614747600000,
     "age":23,
     "confirmed":true,
     "details":"မြဝတီရပ်မှ ကျူရှင်ဆရာ bit.ly/3b9kcLJ"
  },
  {
     "name":"မောင်မောင်ဦး",
     "position":"မန္တလေး",
     "tstamp":1614488400000,
     "age":41,
     "details":"ဦးခေါင်းကျည်မှန်၍ ကွယ်လွန်"
  },
  {
     "name":"ရာဇာအောင်",
     "position":"မန္တလေး",
     "tstamp":1614142800000,
     "details":"ဖေဖော်ဝါရီ ၂၀ ရက်နေ့ မန္တလေး ဆိပ်ကမ်းတွင် အကြမ်းဖက် ပစ်ခတ်ဖမ်းဆီးမှုကြောင့် ဒူးခေါင်းတွင် ကျည်ဆံထိမှန် ဖမ်းဆီး ခံရပြီးနောက် စစ်ကြောရေး စခန်း တွင် ဆေးကုသပေးခြင်း မရှိဘဲ ပစ်ထားခဲ့ရာ ၄ ရက်မြောက်နေ့တွင် ဒဏ်ရာမှ ဝေဒနာ ပြင်းထန်စွာ ခံစားရင်း ဆုံးပါးသွားခဲ့ပါသည်။ သေဆုံးသောအခါ Covid လူနာ အမည်တပ်၍ မိသားစု လက်မှတ်မထိုးသည့်ကြားမှ ချက်ချင်း သဂြိုလ်ပစ်လိုက်သည်။ bit.ly/3qWVW4R bit.ly/3bzBAbw bit.ly/3bErdD8",
     "confirmed":true
  },
  {
     "name":"လွင်လွင်ဦး(ခ)အော့ကီး",
     "position":"ထားဝယ်",
     "tstamp":1614488400000,
     "age":33,
     "details":"ထားဝယ်မြို့ပုံကျွန်း/ဆန်းချီ ရပ်ကွက်နေသူ ထားဝယ်ဆေးရုံတွင် ကွယ်လွန်။ ဥတ္တံတားကြီး လမ်းဆုံတွင် ရှေ့တန်းလိုင်းမှ သံပြားကာထားသော်လည်း ကျည်ဆံထိ bit.ly/2ZUWGvA shorturl.at/fnsM6 shorturl.at/csBD1 shorturl.at/axBCJ shorturl.at/uNOYZ",
     "confirmed":true,
     "folder": "lwin lwin oo"
  },
  {
     "name":"လှမျိုးအောင်",
     "position":"ရန်ကုန်",
     "age":39,
     "tstamp":1613797200000,
     "details":"အင်းစိန်မြို့သစ်စျေးရှေ့ မသမာသူက ကားနဲ့တိုက် bit.ly/3kwZ30Z",
     "confirmed":true
  },
  {
     "name":"ဝေယံထွန်း",
     "position":"မန္တလေး",
     "age":16,
     "tstamp":1613797200000,
     "details":"ဒဏ်ရာရသူများကို လှည်းဖြင့်တွန်းတင်ကာ ကူညီပေးသူ။ ကျည်ဆံကြားထဲ ဒဏ်ရာရသူကို ပြန်သွားကယ်ရာမှ ဦးခေါင်းသေနတ်ထိမှန်။ သား မရတော့ဘူးဟု နောက်ဆုံးပြောသွား",
     "confirmed":true
  },
  {
     "name":"သက်နိုင်ဝင်း(ခ)ကိုမင်းမင်း",
     "position":"မန္တလေး",
     "age":37,
     "tstamp":1613797200000,
     "details":"ဗိုက်ထဲကျည်ဆံဝင်၊ အသည်းထိသွား bit.ly/3qGOcE3 shorturl.at/duUXZ",
     "confirmed":true
  },
  {
     "name":"သန်းဝင်း",
     "position":"ထားဝယ်",
     "age":36,
     "tstamp":1614488400000,
     "details":"ထားဝယ်မြို့၊ စျေးတောင်ဘက်လမ်းနှင့် ဗိုလ်ချုပ်လမ်းထောင့်အနီးတွင် ဒဏ်ရာဖြင့် လဲကျနေခဲ့ခြင်းဖြစ်သည်။ ထိုသို့ လဲကျနေစဉ် ရဲတပ်ဖွဲ့က ချီမသယ်ဆောင်သွားခဲ့ပြီး ထားဝယ်ရဲစခန်းအချုပ်တွင်သေဆုံး။ ဗိုက်ပွင့်ထွက်ဒဏ်ရာဖြင့် သေဆုံးခဲ့။ အလောင်းကို တပ်မတော် ဆေးရုံတွင် မတ်လ ၁ ရက်နေ့ နေ့လယ်ပိုင်းတွင် မိသားစုက သွားရောက်ထုတ်ယူခဲ့။ ကရပ်​ပြင်​မြောက်​ဘက် ဇော်ကလေးလမ်း နေသူ shorturl.at/ixAKT shorturl.at/fnuyJ shorturl.at/tDT25",
     "confirmed":true
  },
  {
     "name":"ဟိန်းထွဋ်အောင်",
     "position":"ရန်ကုန်",
     "age":23,
     "tstamp":1614488400000,
     "details":"သင်္ဃန််းကျွန်း ဘဝမြင့်မှတ်တိုင်နားတွင် ကိုယ်ဝန်ဆောင် ဇနီးသည်နဲ့အတူရှိနေစဉ် ကျည်ဆံထိမှန်ကွယ်လွန်။ လည်ပင်းကို သေနတ်ကျည်ဆံထုတ်ချင်းပေါက်ဝင်ရောက်။ အတူတူရှိနေခဲ့တဲ့ ဇနီးသည်ဟာ ကိုယ်ဝန် ၃ လဆောင်ထားသူဖြစ်။ bit.ly/2Mvm0Fd bit.ly/2MCOHjO bit.ly/3uDq2MV bit.ly/3ktpd4Q shorturl.at/uyzS7",
     "confirmed":true
  },
  {
     "name":"အောင်မြင့်မြတ်",
     "position":"မကွေး",
     "tstamp":1614747600000,
     "age":19,
     "details":"bit.ly/3q79ARK"
  },
  {
   "name":"နေမျိုးအောင်(ခ)ကုလား",
   "position":"မန္တလေး",
   "tstamp":1614747600000,
   "age":16,
   "confirmed": true,
   "folder": "nay myo aung",
   "details":"ပြည်ကြီးတံခွန် ဘ၂ကွက်စိတ်"
}
]

export default data