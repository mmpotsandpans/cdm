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
                "name": "တောင်တွန်းကြီး",
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

export const getStateFromCity = (name: string | undefined) => adminBounds.find(state => state.cities.find(city => city.name === name))