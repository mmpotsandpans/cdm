import { normalizeString } from './../utils/stringUtils'
const _adminBoundMappings: any = {
	"ကလေး": "Kale",
	"ကောလင်း": "Kawlin",
    "ကျောက်ပန်းတောင်း": "Kyaukpadaung",
	"ချောက်": "Chauk",
	"ချောင်းဦး": "Chang-U",
	"စလင်း": "Salin",
    "တောင်ကြီး": "Taunggyi",
	"တောင်တွင်းကြီး": "Taungdwingyi",
	"တွံတေး": "Twantay",
	"ထားဝယ်": "Dawei",
	"ထီးလင်း": "Tilin",
	"နေပြည်တော်": "Naypyitaw",
	"ပခုက္ကူ": "Pakokku",
	"ပင်လောင်း": "Pinlaung",
	"ကော့သောင်း": "Kawthoung",
	"စဥ့်ကိုင်": "Sintgaing",
	"စစ်ကိုင်း": "Sagaing",
	"ပုသိမ်": "Pathein",
	"ပေါင်": "Paung",
	"ပဲခူး": "Bago",
	"ပြည်": "Pyay",
	"ပြည်ကြီးမဏ္ဏိုင်": "Pyigyimandine",
	"ဖားကန့်": "Hpakant",
	"ဖျာပုံ": "Pyapon",
	"ဒိုက်ဦး": "Daik-U",
	"တမူး": "Tamu",
	"ဟိုပင်": "Hopin",
	"ဝမ်းတွင်း": "Wundwin",
	"မိတ္ထီလာ": "Myeiktila",
	"ရွှေဘို": "Shwebo",
	"ဗန်းမော်": "Bhamo",
	"ညောင်ဦး": "Nyaung-U",
	"ယင်းမာပင်": "Yin Mar Pin",
	"မိုးညို": "Monyo",
	"မတ္တရာ": "Madaya",
	"ဖဒို": "Hpa Do",
	"ပွင့်ဖြူ": "Pwintbyu",
	"ပြင်ဦးလွင်": "Pyin Oo Lwin",
	"အမရပူရ": "Amarapura",
	"လားရှိုး": "Lashio",
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
	"အောင်လံ": "Aunglan",
	"ကချင်": "Kachin",
	"ကယား": "Kayah",
	"ကရင်": "Kayin",
	"ချင်း": "Chin",
	"ရခိုင်": "Rakhine",
	"ရှမ်း": "Shan",
	"မွန်": "Mon",
	"တနင်္သာရီ": "Tanintharyi",
	"ဧရာဝတီ": "Ayeyarwady",
	"ပင်လယ်ဘူး": "Pinlebu",
	"စဥ့်ကူး": "Singu",
	"ဂန့်ဂေါ": "Gangaw",
	"ညောင်ရွှေ": "Nyaungshwe",
	"သထုံ": "Thaton",
	"ပျဥ်းမနား": "Pyinmana",
	"တပ်ကုန်း": "Tatkon",
	"ခင်ဦး": "Khin-U",
	"ဖြူး": "Phyu",
	"ဆိပ်ဖြူ": "Seikphyu",
	"ကျိုက်ထို": "Kyaikto",
	"တန့်ဆည်": "Taze",
	"အရာတော်": "Ayadaw",
	"မိုးမောက်": "Momauk",
	"ကျောက်မဲ": "Kyaukme",
	"အင်းတော်": "Indaw",
	"ဒီးမော့ဆို": "Demoso",
	"ကျောက်ကြီး": "Kyaukkyi",
	"မင်းတပ်": "Mindat",
	"ထိုင်းမြန်မာနယ်စပ်": "Thai-Myanmar border",
	"တီးတိန်": "Tedim",
	"ချောင်းဆုံ": "Chaungzon",
	"ကွတ်ခိုင်": "Kutkai",
	"ကြို့ပင်ကောက်": "Gyobingauk",
	"ကျောက်တံခါး": "Kyauktaga",
	"မြစ်ခြေ": "Myitkhyay",
	"ရေစကြို": "Yesagyo",
	"လောင်းလုံ": "Launglon",
	"ကနီ": "Kani",
	"ဝက်လက်": "Wetlet",
	"မိုးကောင်း": "Mogaung",
	"ဒိုက်ဦး": "Daik-U",
	"နောင်ချို": "Nawnghkio",
	"လှိုင်းဘွဲ့": "Hlaingbwe",
	"မသိရှိ": "Unknown",
	"သီပေါ": "Hsipaw",
	"မြင်းမူ": "Myinmu",
	"ပုလဲ": "Pale",
	"ဝိုင်းမော်": "Waingmaw",
	"နမ္မတီး": "Nanmati"
}

export const adminBoundMappings: any = {}
for (const [city, engCity] of Object.entries(_adminBoundMappings)) {
    adminBoundMappings[normalizeString(city)] = engCity
}