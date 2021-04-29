export const fallenImages = new Map<string, string[]>()
function importAll(r: any) {
  r.keys().forEach((k: string) => {
    const name = k.split('/')[1]
    const personImages = fallenImages.get(name) || []
    personImages.push(r(k).default)
    fallenImages.set(name, personImages)
  });
}

importAll(require.context('../resources/images/fallen', true));

// loaded from google sheets in People.tsx
// used for dev, on prod live data is loaded
const data: any = [
   {
      "name":"သက်မောင်မောင်",
      "confirmed":"TRUE",
      "date":"28/03/2021",
      "city":"ပဲခူး",
      "details":"၂၇ရက်က အဆုတ်ကျည်သင့်ခဲ့ပြီး ၂၈ မနက် ၃နာရီတွင် ကျဆုံး",
      "age":"",
      "folder":"thet maung maung",
      "gender":"m",
      "honorific":"",
      "enName":"thet maung maung",
      "enDetails":"",
      "source": "https://bit.ly/2PbeJM4"
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"လားရှိုး",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"f",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ရန်ကုန်",
      "details":"သာကေတ",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ရန်ကုန်",
      "details":"သန်လျင်",
      "age":"29",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ရန်ကုန်",
      "details":"တာမွေ",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"မော်လမြိုင်",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ကျိုက်ထို",
      "details":"ကျိုက်ထို",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"မိုးကုတ်",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"မတ္တရာ",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"မတ္တရာ",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ပခုက္ကူ",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ပခုက္ကူ",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ပဲခူး",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ပဲခူး",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ဗန်းမော် ",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"အမည်မသိရသေး",
      "confirmed":"",
      "date":"27/03/2021",
      "city":"ဗန်းမော် ",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"",
      "enDetails":""
   },
   {
      "name":"တင်လှ",
      "confirmed":"TRUE",
      "date":"27/0372021",
      "city":"ရန်ကုန်",
      "details":"သန်လျင်သပိတ် အရှေ့တန်းတွင်ကျန်ခဲ့သောလူငယ်များအားကယ်ထုတ်ရင်းအပစ်ခံ သေဆုံး။ https://bit.ly/3dgEH99",
      "age":"43",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"tin hla",
      "enDetails":"",
      "occupation": "kia"
   },
   {
      "name":"ဝင်းမင်းထွန်း",
      "confirmed":"TRUE",
      "date":"27/03/2021",
      "city":"ကျောက်ပန်းတောင်း",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"win min htun",
      "enDetails":""
   },
   {
      "name":"ဝင်းဇော်",
      "confirmed":"TRUE",
      "date":"27/03/2021",
      "city":"ကျောက်ပန်းတောင်း",
      "details":"ဘူတာရပ်ကွက် သပိတ်စစ်ကြောင်း စထွက်ချိန်တွင် ကျဆုံး။ မိသားစုတွေ့ခွင့်မရပဲ စစ်ကောင်စီ လက်နက်ကိုင်အင်အားများစွာဖြင့် ချက်ခြင်း မီးသဂြိုဟ်စက်ခေါ်ဆောင်သွားကာ မီးသဂြိုဟ်ပစ်လိုက်ပါတယ်",
      "age":"",
      "folder":"win zaw",
      "gender":"m",
      "honorific":"",
      "enName":"win zaw",
      "enDetails":""
   },
   {
      "name":"ဝင်းမျိုးဦး",
      "confirmed":"TRUE",
      "date":"27/03/2021",
      "city":"ကျောက်ပန်းတောင်း",
      "details":"ဘူတာရပ်ကွက် သပိတ်စစ်ကြောင်း စထွက်ချိန် ကျောက်ပန်းတောင်း GTI (Civil) roll1 ကျောင်းသားဟောင်း ဦးခေါင်းပွင့်ကျဆုံး။ https://bit.ly/31oSAfR",
      "age":"25",
      "folder":"win myo oo ",
      "gender":"m",
      "honorific":"",
      "enName":"win myo oo",
      "enDetails":""
   },
   {
      "name":"ဇော်မင်းဦး",
      "confirmed":"TRUE",
      "date":"27/03/2021",
      "city":"ကော့သောင်း",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"zaw min oo",
      "enDetails":""
   },
   {
      "name":"ခိုင်ဇင်ဦး",
      "confirmed":"TRUE",
      "date":"27/03/2021",
      "city":"ကော့သောင်း",
      "details":"",
      "age":"21",
      "folder":"",
      "gender":"f",
      "honorific":"",
      "enName":"khaing zin oo",
      "enDetails":""
   },
   {
      "name":"ဘော်ဘော်",
      "confirmed":"TRUE",
      "date":"27/03/2021",
      "city":"စစ်ကိုင်း",
      "details":"",
      "age":"33",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"baw baw",
      "enDetails":""
   },
   {
      "name":"အာကာ",
      "confirmed":"TRUE",
      "date":"27/03/2021",
      "city":"စစ်ကိုင်း",
      "details":"",
      "age":"25",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"arkar",
      "enDetails":""
   },
   {
      "name":"ဝေမောင်",
      "confirmed":"TRUE",
      "date":"27/03/2021",
      "city":"စဥ့်ကိုင်",
      "details":"",
      "age":"24",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"wai mg",
      "enDetails":""
   },
   {
      "name":"မြင့်ထွန်းအောင်",
      "confirmed":"TRUE",
      "date":"27/03/2021",
      "city":"ညောင်ဦး ",
      "details":"",
      "age":"",
      "folder":"",
      "gender":"m",
      "honorific":"",
      "enName":"myint htun aung",
      "enDetails":""
   }
]

export default data