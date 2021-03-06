export const state = () => ({
  // products items list
  products: [
    {img:'1',title:'آیفون 13 پرو مکس',text:'ایفون 13 پرو مکس 256 گیگ حافظه',qemat:'۴۸ میلیون',grup:'janbe'},
    {img:'2',title:'روغن غنچه',text:'روغن سرخ کردنی غنچه',qemat:'۲۳,۰۰۰',grup:'xorake'},
    {img:'3',title:'برنج طبیعت',text:'برنج دانه بلند طبیعت',qemat:'۴۵۰,۰۰۰',grup:'xorake',},
    {img:'4',title:'روغن لادن',text:'روغن 4 کیلویی لادن',qemat:'۸۰,۰۰۰',off:'',grup:'xorake',},
    {img:'5',title:'ساعت سامسونگ',text:'ساعت هوشمند برند سامسونگ',qemat:'۴ میلیون',grup:'janbe',},
    {img:'6',title:'دریل شارژی',text:'مینی دریل شارژی',qemat:'۲,۵ میلیون',grup:'sanate',},
    {img:'7',title:'آچار فرانسه',text:'آچار فرانسه مشکی',qemat:'۲۰۰,۰۰۰',grup:'sanate',},
    {img:'8',title:'اپل واچ',text:'ساعت هوشمند برند اپل',qemat:'۵,۵ میلیون',grup:'janbe',},
    {img:'9',title:'ایرپاد',text:'ایرپاد مشکی شیاومی',qemat:'۶۰۰,۰۰۰',grup:'janbe',},
    {img:'10',title:'برنج خوشبخت',text:'برنج دانه بلند خوشبخت',qemat:'۴۲۰,۰۰۰',grup:'xorake',},
    {img:'11',title:'شیاومی mi11',text:'شیاومی می 11 آبی',qemat:'۱۸ میلیون',grup:'janbe',},
    {img:'12',title:'روغن موتور',text:'روغن موتور خارجی',qemat:'۱۱۰,۰۰۰',grup:'sanate',},
    {img:'13',title:'یخچال',text:'یخچال بالا پایین',qemat:'۳۳ میلیون',grup:'xange',},
    {img:'14',title:'یخچال',text:'یخچال دوقلو',qemat:'۵۰ میلیون',grup:'xange',},
    {img:'15',title:'قابلمه',text:'قابلمه نسوز ',qemat:'۱۶,۰۰۰',grup:'xange',},
    {img:'16',title:'شارژر',text:'شارژر فست مدل ravpower',qemat:'۱ میلیون',grup:'janbe',},
    {img:'17',title:'دنت',text:'دنت با طعم توت فرنگی',qemat:'۱۰,۰۰۰',grup:'xorake',},
    {img:'18',title:'ال ای دی',text:' ال ای دی 65 اینچ',qemat:'۱۷ میلیون',grup:'xange',},
    {img:'19',title:'آچار بکس',text:'آچار بکس جغجغه ای',qemat:'۳۰۰,۰۰۰',grup:'sanate',},
    {img:'20',title:'اره برقی',text:'اره برقی دو تیغ',qemat:'۱,۶ میلیون',grup:'sanate',},
    {img:'21',title:'اهم متر',text:'اهم متر دیجیتالی',qemat:'۴۵۰,۰۰۰',grup:'sanate',},
    {img:'22',title:'پفک',text:'پفک بزرگ',qemat:'۶,۰۰۰',grup:'xorake',},
    {img:'23',title:'ال ای دی',text:' ال ای دی 70 اینچ',qemat:'۲۰ میلیون',grup:'xange',},
    {img:'24',title:'چای',text:'چای معتر محمود',qemat:'۱۰۰,۰۰۰',grup:'xorake',},
    {img:'25',title:'چای',text:'چای محمود',qemat:'۱۰۰,۰۰۰',grup:'xorake',},
    {img:'26',title:'دریل',text:'مینی دریل',qemat:'۱ میلیون',grup:'sanate',},
    {img:'27',title:'روغن موتور',text:'روغن موتور بهران',qemat:'۱۶۰,۰۰۰',grup:'sanate',},
    {img:'28',title:'روغن سرخ کردنی',text:'روغن سرخ کردنی',qemat:'۳۵,۰۰۰',grup:'xorake',},
    {img:'29',title:'ساعت دیواری',text:'ساعت دیواری بدون قاب',qemat:'۳۵,۰۰۰',grup:'xange',},
    {img:'30',title:'ساعت دیواری',text:'ساعت دیواری مدل چوبی',qemat:'۱۷۰,۰۰۰',grup:'xange',},
    {img:'31',title:'گوشی سامسونگ',text:'گوشی سامسونگ a32',qemat:'۵ میلیون',grup:'janbe',},
    {img:'32',title:'فایل',text:'فایل چهار کشوی',qemat:'۳۰۰,۰۰۰',grup:'xange',},
    {img:'33',title:'قاب گوشی',text:' قاب ژله ای آیفون13',qemat:'۸۰,۰۰۰',grup:'janbe',},
    {img:'34',title:'قابلمه',text:'سری 7 تیکه نسوز',qemat:'۱,۵ میلیون',grup:'xange',},
    {img:'35',title:'لباسشویی',text:'لباسشویی 8 کیلویی سامسونگ',qemat:'۱۲ میلیون',grup:'xange',},
    {img:'36',title:'لواشک',text:'لواشک بسته ای 50 عددی',qemat:'۱۰۰,۰۰۰',grup:'xorake',},
    {img:'37',title:'لباسشویی',text:'لباسشویی 5 کیلویی سامسونگ',qemat:'۹ میلیون',grup:'xange',},
    {img:'38',title:'ایرپاد',text:'ایرپاد مدل 13kM ',qemat:'۲ میلیون',grup:'janbe',},
    {img:'39',title:'ساعت',text:'ساعت مچی ',qemat:'۱ میلیون',grup:'janbe',},
    {img:'40',title:'ایرپاد',text:'ایرپاد مدل 16kM ',qemat:'۲ میلیون',grup:'janbe',},
    {img:'41',title:'کفش',text:' کفش مردانه',qemat:' ۴۰۰,۰۰۰',grup:'janbe',},
    {img:'42',title:'ظرف',text:' ظرف پلاستیکی ',qemat:'۲ میلیون',grup:'xange',},
    {img:'43',title:'خودکار',text:'خودکار روان نویس ',qemat:' ۹۵,۰۰۰',grup:'janbe',},
    {img:'44',title:'کرم',text:'کرم الورا ',qemat:' ۱۶۰,۰۰۰',grup:'janbe',},
    {img:'45',title:'لباس',text:'لباس بچگانه',qemat:'۲۰۰,۰۰۰',grup:'janbe',},
    {img:'46',title:'دیگ',text:'دیگ زود پز ',qemat:'۲ میلیون',grup:'xange',},
    {img:'47',title:'ساعت',text:'ساعت مچی ',qemat:'۱ میلیون',grup:'janbe',},
    {img:'48',title:'دریل',text:'دریل صنعتی ',qemat:'۱۰ میلیون',grup:'sanate',},
    {img:'49',title:'تخم مرغ',text:'تخم مرغ تازه',qemat:'۲۰,۰۰۰',grup:'xorake',},
    {img:'50',title:'ماکارونی',text:'ماکارونی زر ماکارون ',qemat:'۴۰,۰۰۰',grup:'xorake',},
  ]
})
