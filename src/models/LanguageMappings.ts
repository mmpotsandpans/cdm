import { normalizeString } from './../utils/stringUtils'
const _cityMappings: any = {
    "မြိုင် (မကွေး)": "Myaing (Magway)",
    "ထားဝယ်": "Dawei",
    "မန္တလေး": "Mandalay",
    "ပဲခူး": "Bago",
    "မြင်းခြံ": "Myingyan",
    "ရန်ကုန်": "Yangon",
    "မုံရွာ": "Monywa",
    "မြစ်ကြီးနား": "Myitkyina",
    "ဖျာပုံ": "Pyapon",
    "ထီးလင်း (မကွေး)": "Tilin (Magway)",
    "မူဆယ်": "Muse",
    "ပင်လောင်း (ရှမ်းပြည်)": "Pinlaung (Shan)",
    "စလင်း (မကွေး)": "Salin",
    "မော်လမြိုင်": "Mawlamyine",
    "ကလေး": "Kale",
    "တောင်တွင်းကြီး (စစ်ကိုင်း)": "Taungdwingyi (Sagaing)",
    "ပခုက္ကူ": "Pakokku",
    "ဘားအံ": "Hpa-an",
    "နေပြည်တော်": "Naypyitaw",
    "မြိတ်": "Myeik",
    "မကွေး": "Magway",
    "ပြည်": "Pyay",
    "ချောက်": "Chauk",
    "တွံတေး": "Twantay",
    "ဖားကန့်": "Hpakant",
    "ကောလင်း (စစ်ကိုင်း)": "Kawlin (Sagain)",
    "ပုသိမ်": "Pathein",
    "အောင်လံ": "Aunglan",
    "အောင်ပန်း": "Aungpan",
    "လွိုင်ကော်": "Loikaw",
    "မိုးကုတ်": "Mogok",
    "ပေါင်": "Paung"
}

export const cityMappings: any = {}
for (const [city, engCity] of Object.entries(_cityMappings)) {
    cityMappings[normalizeString(city)] = engCity
}