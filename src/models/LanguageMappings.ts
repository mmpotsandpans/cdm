import { normalizeString } from './../utils/stringUtils'
const _cityMappings: any = {
	"ကလေး": "Kale",
	"ကောလင်း": "Kawlin",
    "ကျောက်ပန်းတောင်း": "Kyaukpadaung",
	"ချောက်": "Chauk",
	"စလင်း": "Salin",
    "တောင်ကြီး": "Taunggyi",
	"တောင်တွင်းကြီး": "Taungdwingyi",
	"တွံတေး": "Twantay",
	"ထားဝယ်": "Dawei",
	"ထီးလင်း": "Tilin",
	"နေပြည်တော်": "Naypyitaw",
	"ပခုက္ကူ": "Pakokku",
	"ပင်လောင်း": "Pinlaung",
	"ပုသိမ်": "Pathein",
	"ပေါင်": "Paung",
	"ပဲခူး": "Bago",
	"ပြည်": "Pyay",
	"ပြည်ကြီးမဏ္ဏိုင်": "Pyigyimandine",
	"ဖားကန့်": "Hpakant",
	"ဖျာပုံ": "Pyapon",
	"ဘားအံ": "Hpa-an",
	"မကွေး": "Magway",
	"မန္တလေး": "Mandalay",
	"မိုးကုတ်": "Mogok",
	"မိုးညှင်း": "Mohnyin",
	"မုံရွာ": "Monywa",
	"မူဆယ်": "Muse",
	"မော်လမြိုင်": "Mawlamyine",
	"မြင်းခြံ": "Myingyan",
	"မြစ်ကြီးနား": "Myitkyina",
	"မြိတ်": "Myeik",
	"မြိုင်": "Myaing",
	"ရန်ကုန်": "Yangon",
	"လွိုင်ကော်": "Loikaw",
	"အောင်ပန်း": "Aungpan",
	"အောင်လံ": "Aunglan"
}

export const cityMappings: any = {}
for (const [city, engCity] of Object.entries(_cityMappings)) {
    cityMappings[normalizeString(city)] = engCity
}