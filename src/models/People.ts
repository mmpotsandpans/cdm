import parsedDetainees from '../resources/parsedDetainees.json'

export enum People {
    detained = 'ထိန်းသိမ်းခံရသူများ',
    onTheRun = 'ဝရမ်းထုတ်ခံရသူများ',
    fallen = 'ကျဆုံးသူများ'
  }

export interface Person {
  name: string;
  status: People;
  tstamp?: number;
  position?: string;
}

export const peopleTypes = [People.fallen, People.detained, People.onTheRun]

const detained = (parsedDetainees as any[]).map(p => ({...p, status: People.detained}))

export const peopleData: Person[] = [
  {
    "name": "ဇင်ဝိုင်းနှင့်ဇနီး",
    "status": People.onTheRun,
    
  },
  {
    "name": "လူမင်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "ရန်အောင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဂျွန်လွင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "မင်းမော်ကွန်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "အောင်လ(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဝိုင်းစုခိုင်သိန်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "ကိုပေါက်",
    "status": People.onTheRun,
    
  },
  {
    "name": "အောင်ထက်(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "လွင်မိုး",
    "status": People.onTheRun,
    
  },
  {
    "name": "ခင်လှိုင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "မိုးမိုး(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "နေမျိုးအောင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "လင်းဇာနည်ဇော်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ပြေတိဦး",
    "status": People.onTheRun,
    
  },
  {
    "name": "အိန္ဒြာကျော်ဇင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ညီနန္ဒ",
    "status": People.onTheRun,
    
  },
  {
    "name": "မေတိုးခိုင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ကျားပေါက်(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "ရေမွန်(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "နိုဗန်ထူး(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "စည်သူမင်း(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "ပိုင်ဖြိုးသု",
    "status": People.onTheRun,
    
  },
  {
    "name": "ပိုင်တံခွန်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဝတ်မှုံရွှေရည်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဆောင်းဝတ်ရည်မေ",
    "status": People.onTheRun,
    
  },
  {
    "name": "ညီထွဋ်ခေါင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဖြိုးမြတ်အောင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "နွယ်နွယ်ထွန်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "တင်မောင်ဆန်းမင်းဝင်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "မိတ်ကပ်မေဦး",
    "status": People.onTheRun,
    
  },
  {
    "name": "အေးမြတ်သူ",
    "status": People.onTheRun,
    
  },
  {
    "name": "ခါရာ",
    "status": People.onTheRun,
    
  },
  {
    "name": "ငြိမ်းသော်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ထူးခြား",
    "status": People.onTheRun,
    
  },
  {
    "name": "ညီညီထွန်းလွင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "မိစန္ဒီ(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဖြိုးပြည့်စုံ(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "နေရဲ",
    "status": People.onTheRun,
    
  },
  {
    "name": "မြနှင်းရည်လွင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ခေးဆက်သွင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဝေလာရီ",
    "status": People.onTheRun,
    
  },
  {
    "name": "ကျော်ထူး",
    "status": People.onTheRun,
    
  },
  {
    "name": "Rဇာနည်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဖိုးပြည့်",
    "status": People.onTheRun,
    
  },
  {
    "name": "မီးနို",
    "status": People.onTheRun,
    
  },
  {
    "name": "မေမဒီ",
    "status": People.onTheRun,
    
  },
  {
    "name": "မျိုးသန္တာထွန်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "အောင်ရဲထိုက်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဒါရိုက်တာဏကြီး",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဖွေးဖွေး",
    "status": People.onTheRun,
    
  },
  {
    "name": "ရွှေသမီး",
    "status": People.onTheRun,
    
  },
  {
    "name": "နန်းစန္ဒာလှထွန်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "အောင်ခိုင်",
    "status": People.onTheRun,
    
  },
  {
    "name": "စွမ်းဇာနည်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဖိုးချစ်",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဟန်ထူးစျာန်(အဆိုတော်)",
    "status": People.onTheRun,
    
  },
  {
    "name": "ရေဗက္ကာဝင်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "မေစံပယ်ညို",
    "status": People.onTheRun,
    
  },
  {
    "name": "ယုဇန",
    "status": People.onTheRun,
    
  },
  {
    "name": "ရှင်ဖုန်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "သံသာဝင်း",
    "status": People.onTheRun,
    
  },
  {
    "name": "ဇန်ဇန်ဟန်သာ",
    "status": People.onTheRun,
    
  },
  {
    "name": "မြသွဲ့သွဲ့ခိုင်",
    "status": People.fallen,
    "position": "နေပြည်တော်",
    "tstamp": 1613106000000
  }
].concat(detained)