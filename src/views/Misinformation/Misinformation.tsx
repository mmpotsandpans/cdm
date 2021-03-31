import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core"
import React from "react"
import { t } from "ttag"
import napwarPic from '../../resources/images/misc/na pwar.png'
import starPic from '../../resources/images/misc/kyalsin.png'
import starReal from '../../resources/images/misc/starreal.jpg'
import immortal from '../../resources/images/misc/immortal.png'
import './Misinformation.scss'

export const Misinformation = () => {
    return <div className='Misinformation'>
        <h1>{t`မှားနေသော၊ မှားနေနိုင်သော အချက်အလက်များ`}</h1>
        <Card>
            <CardActionArea>
                <CardMedia image={napwarPic} title='ကိုနပွား ဓာတ်ပုံ' style={{backgroundSize: 'contain', height: '180px'}}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        ကိုနပွား ဓာတ်ပုံ
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ဒီပုံမှာ ကိုနပွားပုံ မဟုတ်ဘဲ ကိုအောင်နိုင်စိုးလို့ ပြောထားတဲ့ ပို့စ်တွေ တွေ့ခဲ့ရပါတယ်။ စာရင်းတွင် ပြထားသော ပုံနှစ်ပုံနှင့် ကွဲပြားနေပါတယ်။
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        ဆလိုင်းခွာကုန်း
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ဆလိုင်းခွာကုန်းနှင့် ပတ်သက်ပြီး သတင်းမှားဟု ပြောထားကြပါတယ်။
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea>
                <CardMedia image={starPic} title='ကြယ်စင်' style={{backgroundSize: 'contain', height: '300px'}}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        မကြယ်စင် သွေးအမျိုးအစားပုံ
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ဒီပုံမှာ မကြည်စင်တင်ခဲ့သည့်ပုံဟု ပျံ့နှံ့ခဲ့ပါသည်။ မကြယ်စင်မဟုတ်ပါ။ မစန္ဒကူးပါ။ အသက်ရှင်လျက်ပါ။
                        အောက်ကပုံကမှ အစစ်ပါ။
                    </Typography>
                    <CardMedia image={starReal} title='ကြယ်စင်' style={{backgroundSize: 'contain', height: '300px'}}/>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea>
                <CardMedia image={immortal} title='ကိုမန်ဆွင်းခိုင်' style={{backgroundSize: 'contain', height: '200px'}}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        ကိုမန်ဆွင်းခိုင်
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ရန်ကုန်မြို့ မြောက်ဥက္ကလာမှာ စစ်တပ်ရဲ့ပစ်ခတ်မှုကြောင့် ပေါင်သေနတ်ကျည်ဆံ ဒဏ်ရာနဲ့စစ်တပ်ကဖမ်းသွားပြီးနောက် သေဆုံးသွားပြီလို့ မိဘတွေကယူဆပြီးသားဖြစ်တဲ့ Ko Mang Suan Khai ဟာမသေပဲ ကျန်းကျန်းမာမာနဲ့ ယနေ့ မတ်လ၂၄ မနက်၁၁နာရီဝန်းကျင်မှာ အိမ်ပြန်ရောက်လာကြောင်း သူ့ဖခင်ဆီက သိရပါတယ်။ Chin Worldမှ
                        <a href='https://bit.ly/3m4NBKV' rel='noopener'> https://bit.ly/3m4NBKV</a>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
}