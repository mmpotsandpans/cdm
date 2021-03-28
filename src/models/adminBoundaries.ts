import { normalizeString } from './../utils/stringUtils'
export const adminBounds = [
    {
        "name": "ကချင်",
        "cities": [
            {
                "name": "ဖားကန့်",
                "townships": {}
            },
            {
                "name": "မိုးညှင်း",
                "townships": {}
            },
            {
                "name": "မြစ်ကြီးနား",
                "townships": {}
            },
            {
                "name": "ဟိုပင်",
                "townships": {}
            },
            {
                "name": "ဗန်းမော်",
                "townships": {}
            },
        ]
    },
    {
        "name": "ကယား",
        "cities": [
            {
                "name": "လွိုင်ကော်",
                "townships": {}
            },
        ]
    },
    {
        "name": "ကရင်",
        "cities": [
            {
                "name": "ဘားအံ",
                "townships": {}
            },
        ]
    },
    {
        "name": "ချင်း",
        "cities": []
    },
    {
        "name": "မွန်",
        "cities": [
            {
                "name": "ပေါင်",
                "townships": {}
            },
            {
                "name": "မော်လမြိုင်",
                "townships": {}
            },
            {
                "name": "ကျိုက်ထို",
                "townships": {}
            },
        ]
    },
    {
        "name": "ရခိုင်",
        "cities": []
    },
    {
        "name": "ရှမ်း",
        "cities": [
            {
                "name": "တောင်ကြီး",
                "townships": {}
            },
            {
                "name": "ပင်လောင်း",
                "townships": {}
            },
            {
                "name": "မူဆယ်",
                "townships": {}
            },
            {
                "name": "အောင်ပန်း",
                "townships": {}
            },
            {
                "name": "လားရှိုး",
                "townships": {}
            },
        ]
    },
    {
        "name": "စစ်ကိုင်း",
        "cities": [
            {
                "name": "ကလေး",
                "townships": {}
            },
            {
                "name": "ကောလင်း",
                "townships": {}
            },
            {
                "name": "မုံရွာ",
                "townships": {}
            },
            {
                "name": "ချောင်းဦး",
                "townships": {}
            },
            {
                "name": "တမူး",
                "townships": {}
            },
            {
                "name": "ရွှေဘို",
                "townships": {}
            },
            {
                "name": "ယင်းမာပင်",
                "townships": {}
            },
            {
                "name": "စစ်ကိုင်း",
                "townships": {}
            },
        ]
    },
    {
        "name": "တနင်္သာရီ",
        "cities": [
            {
                "name": "ထားဝယ်",
                "townships": {}
            },
            {
                "name": "မြိတ်",
                "townships": {}
            },
            {
                "name": "ကော့သောင်း",
                "townships": {}
            },
        ]
    },
    {
        "name": "ပဲခူး",
        "cities": [
            {
                "name": "ပဲခူး",
                "townships": {}
            },
            {
                "name": "ပြည်",
                "townships": {}
            },
            {
                "name": "ပြည်ကြီးမဏ္ဏိုင်",
                "townships": {}
            },
            {
                "name": "မိုးညို",
                "townships": {}
            },
            {
                "name": "ဖဒို",
                "townships": {}
            },
            {
                "name": "ဒိုက်ဦး",
                "townships": {}
            },
        ]
    },
    {
        "name": "မကွေး",
        "cities": [
            {
                "name": "ချောက်",
                "townships": {}
            },
            {
                "name": "စလင်း",
                "townships": {}
            },
            {
                "name": "တောင်တွင်းကြီး",
                "townships": {}
            },
            {
                "name": "ထီးလင်း",
                "townships": {}
            },
            {
                "name": "ပခုက္ကူ",
                "townships": {}
            },
            {
                "name": "မကွေး",
                "townships": {}
            },
            {
                "name": "မြိုင်",
                "townships": {}
            },
            {
                "name": "အောင်လံ",
                "townships": {}
            },
            {
                "name": "ပွင့်ဖြူ",
                "townships": {}
            },
        ]
    },
    {
        "name": "မန္တလေး",
        "cities": [
            {
                "name": "ကျောက်ပန်းတောင်း",
                "townships": {}
            },
            {
                "name": "မန္တလေး",
                "townships": {}
            },
            {
                "name": "မိုးကုတ်",
                "townships": {}
            },
            {
                "name": "မြင်းခြံ",
                "townships": {}
            },
            {
                "name": "အမရပူရ",
                "townships": {}
            },
            {
                "name": "ဝမ်းတွင်း",
                "townships": {}
            },
            {
                "name": "မိတ္ထီလာ",
                "townships": {}
            },
            {
                "name": "မတ္တရာ",
                "townships": {}
            },
            {
                "name": "ပြင်ဦးလွင်",
                "townships": {}
            },
            {
                "name": "ညောင်ဦး",
                "townships": {}
            },
            {
                "name": "စဥ့်ကိုင်",
                "townships": {}
            },
        ]
    },
    {
        "name": "ရန်ကုန်",
        "cities": [
            {
                "name": "တွံတေး",
                "townships": {}
            },
            {
                "name": "ရန်ကုန်",
                "townships": {}
            },
        ]
    },
    {
        "name": "ဧရာဝတီ",
        "cities": [
            {
                "name": "ပုသိမ်",
                "townships": {}
            },
            {
                "name": "ဖျာပုံ",
                "townships": {}
            },
        ]
    },
    {
        "name": "နေပြည်တော်",
        "cities": [
            {
                "name": "နေပြည်တော်",
                "townships": {}
            },
        ]
    },
]

export const states = adminBounds.map(adb => adb.name)
export const getStateFromCity = (name: string | undefined) => adminBounds.find(state => state.cities.find(city => normalizeString(city.name) === name))?.name