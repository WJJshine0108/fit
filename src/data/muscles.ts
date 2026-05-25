export interface Muscle {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  location: string;
  function: string;
  image: string;
  group: string;
}

export interface Exercise {
  id: string;
  muscleId: string;
  name: string;
  description: string;
  instructions: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  videoUrl: string;
  sets: number;
  reps: number;
}

export const muscles: Muscle[] = [
  // 胸肌
  {
    id: 'chest-major',
    name: '胸大肌',
    nameEn: 'Pectoralis Major',
    description: '胸大肌是位于胸部的大而厚的扇形肌肉，覆盖了胸腔前部。它是人体中最大的肌肉之一，分为上部、中部和下部。',
    location: '位于胸部，从胸骨和锁骨延伸到肱骨。',
    function: '肩关节内收、内旋，水平内收，上臂前屈。',
    image: '/static/images/muscles/chest-major.png',
    group: 'chest'
  },
  {
    id: 'chest-minor',
    name: '胸小肌',
    nameEn: 'Pectoralis Minor',
    description: '胸小肌是位于胸大肌下方的较小的三角形肌肉，它主要起到稳定肩胛骨的作用。',
    location: '位于胸大肌下方，从第3-5肋骨延伸到肩胛骨的喙突。',
    function: '肩胛骨前伸、下降、下回旋，上提肋骨辅助吸气。',
    image: '/static/images/muscles/chest-minor.png',
    group: 'chest'
  },
  {
    id: 'serratus-anterior',
    name: '前锯肌',
    nameEn: 'Serratus Anterior',
    description: '前锯肌位于胸廓侧面，因其锯齿状的外观而得名。它对于稳定肩胛骨和进行拳击、投掷等运动非常重要。',
    location: '位于胸廓侧面，从第1-9肋骨延伸到肩胛骨内侧缘。',
    function: '肩胛骨前伸、上回旋，稳定肩胛骨贴于胸壁。',
    image: '/static/images/muscles/serratus-anterior.png',
    group: 'chest'
  },
  {
    id: 'intercostals',
    name: '肋间肌',
    nameEn: 'Intercostals',
    description: '肋间肌位于肋骨之间，分为肋间外肌和肋间内肌，主要参与呼吸运动。',
    location: '位于肋骨之间，填充于肋间隙内。',
    function: '肋间外肌上提肋骨助吸气，肋间内肌下拉肋骨助呼气。',
    image: '/static/images/muscles/intercostals.png',
    group: 'chest'
  },

  // 背部肌群
  {
    id: 'latissimus-dorsi',
    name: '背阔肌',
    nameEn: 'Latissimus Dorsi',
    description: '背阔肌是背部最大的肌肉，呈三角形覆盖了下背部和中背部。它是引体向上的主要动力来源。',
    location: '位于下背部，从脊柱下部、髂嵴延伸到肱骨上部。',
    function: '肩关节伸展、内收、内旋，下拉肱骨。',
    image: '/static/images/muscles/latissimus-dorsi.png',
    group: 'back'
  },
  {
    id: 'trapezius',
    name: '斜方肌',
    nameEn: 'Trapezius',
    description: '斜方肌是覆盖颈后部和背部上部的大而扁平的肌肉，分为上、中、下三束。',
    location: '位于颈后部和背部上部，从枕骨、脊柱延伸到肩胛骨和锁骨。',
    function: '上束上提肩胛骨，中束内收肩胛骨，下束下降肩胛骨。',
    image: '/static/images/muscles/trapezius.png',
    group: 'back'
  },
  {
    id: 'erector-spinae',
    name: '竖脊肌',
    nameEn: 'Erector Spinae',
    description: '竖脊肌是一组位于脊柱两侧的长肌肉，负责维持直立姿势和脊柱的伸展。',
    location: '位于脊柱两侧，从骶骨延伸到颅骨。',
    function: '脊柱伸展、侧屈，维持直立姿势。',
    image: '/static/images/muscles/erector-spinae.png',
    group: 'back'
  },
  {
    id: 'rhomboids',
    name: '菱形肌',
    nameEn: 'Rhomboids',
    description: '菱形肌位于斜方肌深层，分为大菱形肌和小菱形肌，呈菱形。',
    location: '位于肩胛骨内侧缘与脊柱之间。',
    function: '内收和下回旋肩胛骨，使肩胛骨靠近脊柱。',
    image: '/static/images/muscles/rhomboids.png',
    group: 'back'
  },
  {
    id: 'teres-major',
    name: '大圆肌',
    nameEn: 'Teres Major',
    description: '大圆肌位于小圆肌下方，与背阔肌共同形成腋后襞。',
    location: '位于肩胛骨下角外侧，延伸到肱骨上部。',
    function: '肩关节伸展、内收、内旋。',
    image: '/static/images/muscles/teres-major.png',
    group: 'back'
  },
  {
    id: 'teres-minor',
    name: '小圆肌',
    nameEn: 'Teres Minor',
    description: '小圆肌是肩袖肌之一，位于冈下肌下方。',
    location: '位于肩胛骨外侧缘，延伸到肱骨大结节下部。',
    function: '肩关节外旋、内收，稳定肩关节。',
    image: '/static/images/muscles/teres-minor.png',
    group: 'back'
  },

  // 肩部肌群
  {
    id: 'deltoid-anterior',
    name: '三角肌前束',
    nameEn: 'Anterior Deltoid',
    description: '三角肌前束是三角肌的前部纤维，主要负责手臂的前屈和内旋。',
    location: '位于肩部前方，从锁骨外侧延伸到肱骨三角肌粗隆。',
    function: '肩关节前屈、内旋，水平内收。',
    image: '/static/images/muscles/deltoid-anterior.png',
    group: 'shoulder'
  },
  {
    id: 'deltoid-lateral',
    name: '三角肌中束',
    nameEn: 'Lateral Deltoid',
    description: '三角肌中束是三角肌的中部纤维，是肩部宽度的主要决定因素。',
    location: '位于肩部外侧，从肩峰延伸到肱骨三角肌粗隆。',
    function: '肩关节外展。',
    image: '/static/images/muscles/deltoid-lateral.png',
    group: 'shoulder'
  },
  {
    id: 'deltoid-posterior',
    name: '三角肌后束',
    nameEn: 'Posterior Deltoid',
    description: '三角肌后束是三角肌的后部纤维，对于平衡前侧的训练非常重要。',
    location: '位于肩部后方，从肩胛冈延伸到肱骨三角肌粗隆。',
    function: '肩关节后伸、外旋，水平外展。',
    image: '/static/images/muscles/deltoid-posterior.png',
    group: 'shoulder'
  },
  {
    id: 'supraspinatus',
    name: '冈上肌',
    nameEn: 'Supraspinatus',
    description: '冈上肌是肩袖肌之一，位于肩胛骨冈上窝内。',
    location: '位于肩胛骨冈上窝，延伸到肱骨大结节上部。',
    function: '肩关节外展的启动肌，稳定肩关节。',
    image: '/static/images/muscles/supraspinatus.png',
    group: 'shoulder'
  },
  {
    id: 'infraspinatus',
    name: '冈下肌',
    nameEn: 'Infraspinatus',
    description: '冈下肌是肩袖肌之一，位于肩胛骨冈下窝内。',
    location: '位于肩胛骨冈下窝，延伸到肱骨大结节中部。',
    function: '肩关节外旋，稳定肩关节。',
    image: '/static/images/muscles/infraspinatus.png',
    group: 'shoulder'
  },

  // 手臂肌群
  {
    id: 'biceps-brachii',
    name: '肱二头肌',
    nameEn: 'Biceps Brachii',
    description: '肱二头肌位于上臂前侧，有长头和短头两个头，是最知名的肌肉之一。',
    location: '位于上臂前侧，从肩胛骨延伸到桡骨近端。',
    function: '肘关节屈曲，前臂旋后，辅助肩关节屈曲。',
    image: '/static/images/muscles/biceps-brachii.png',
    group: 'arms'
  },
  {
    id: 'triceps-brachii',
    name: '肱三头肌',
    nameEn: 'Triceps Brachii',
    description: '肱三头肌位于上臂后侧，有长头、外侧头和内侧头三个头。',
    location: '位于上臂后侧，从肩胛骨和肱骨延伸到尺骨鹰嘴。',
    function: '肘关节伸展，长头辅助肩关节伸展和内收。',
    image: '/static/images/muscles/triceps-brachii.png',
    group: 'arms'
  },
  {
    id: 'brachialis',
    name: '肱肌',
    nameEn: 'Brachialis',
    description: '肱肌位于肱二头肌深层，是最强有力的肘屈肌之一。',
    location: '位于上臂前侧深层，从肱骨下半延伸到尺骨粗隆。',
    function: '肘关节屈曲，无论前臂处于什么位置都有效。',
    image: '/static/images/muscles/brachialis.png',
    group: 'arms'
  },
  {
    id: 'forearm-flexors',
    name: '前臂屈肌',
    nameEn: 'Forearm Flexors',
    description: '前臂屈肌是位于前臂前侧的一组肌肉，负责手腕和手指的屈曲。',
    location: '位于前臂前侧，从肱骨内上髁延伸到手部。',
    function: '手腕屈曲、内收，手指屈曲，前臂旋前。',
    image: '/static/images/muscles/forearm-flexors.png',
    group: 'arms'
  },
  {
    id: 'forearm-extensors',
    name: '前臂伸肌',
    nameEn: 'Forearm Extensors',
    description: '前臂伸肌是位于前臂后侧的一组肌肉，负责手腕和手指的伸展。',
    location: '位于前臂后侧，从肱骨外上髁延伸到手部。',
    function: '手腕伸展、外展，手指伸展，前臂旋后。',
    image: '/static/images/muscles/forearm-extensors.png',
    group: 'arms'
  },

  // 腹部肌群
  {
    id: 'rectus-abdominis',
    name: '腹直肌',
    nameEn: 'Rectus Abdominis',
    description: '腹直肌位于腹部前侧正中线两侧，是"六块腹肌"的主要肌肉。',
    location: '位于腹部前侧，从耻骨联合延伸到胸骨剑突和第5-7肋软骨。',
    function: '脊柱前屈，增加腹压，稳定躯干。',
    image: '/static/images/muscles/rectus-abdominis.png',
    group: 'abs'
  },
  {
    id: 'external-oblique',
    name: '腹外斜肌',
    nameEn: 'External Oblique',
    description: '腹外斜肌位于腹部前外侧，是腹部最大的扁肌。',
    location: '位于腹部前外侧，从下8肋延伸到髂嵴和腹白线。',
    function: '脊柱侧屈和同侧旋转，增加腹压。',
    image: '/static/images/muscles/external-oblique.png',
    group: 'abs'
  },
  {
    id: 'internal-oblique',
    name: '腹内斜肌',
    nameEn: 'Internal Oblique',
    description: '腹内斜肌位于腹外斜肌深层，纤维方向与腹外斜肌相反。',
    location: '位于腹部前外侧深层，从胸腰筋膜、髂嵴延伸到下3肋和腹白线。',
    function: '脊柱侧屈和对侧旋转，增加腹压。',
    image: '/static/images/muscles/internal-oblique.png',
    group: 'abs'
  },
  {
    id: 'transversus-abdominis',
    name: '腹横肌',
    nameEn: 'Transversus Abdominis',
    description: '腹横肌位于腹部最深层，是核心稳定的关键肌肉。',
    location: '位于腹部最深层，从下6肋、胸腰筋膜、髂嵴延伸到腹白线。',
    function: '增加腹压，稳定脊柱和骨盆，是核心稳定的关键。',
    image: '/static/images/muscles/transversus-abdominis.png',
    group: 'abs'
  },
  {
    id: 'iliopsoas',
    name: '髂腰肌',
    nameEn: 'Iliopsoas',
    description: '髂腰肌由髂肌和腰大肌组成，是主要的髋屈肌。',
    location: '位于腹腔后壁和骨盆内，从腰椎和髂骨延伸到股骨小转子。',
    function: '髋关节屈曲，大腿外旋，脊柱前屈和侧屈。',
    image: '/static/images/muscles/iliopsoas.png',
    group: 'abs'
  },

  // 臀部肌群
  {
    id: 'gluteus-maximus',
    name: '臀大肌',
    nameEn: 'Gluteus Maximus',
    description: '臀大肌是臀部最大的肌肉，也是人体中最厚的肌肉之一。',
    location: '位于臀部后侧，从髂骨、骶骨延伸到股骨臀肌粗隆。',
    function: '髋关节伸展、外旋，稳定骨盆和膝关节。',
    image: '/static/images/muscles/gluteus-maximus.png',
    group: 'glutes'
  },
  {
    id: 'gluteus-medius',
    name: '臀中肌',
    nameEn: 'Gluteus Medius',
    description: '臀中肌位于臀大肌深层，是维持行走时骨盆稳定的关键肌肉。',
    location: '位于臀部外侧，从髂骨外表面延伸到股骨大转子。',
    function: '髋关节外展，稳定骨盆，防止走路时骨盆倾斜。',
    image: '/static/images/muscles/gluteus-medius.png',
    group: 'glutes'
  },
  {
    id: 'gluteus-minimus',
    name: '臀小肌',
    nameEn: 'Gluteus Minimus',
    description: '臀小肌位于臀中肌深层，是臀中肌的辅助肌。',
    location: '位于臀中肌深层，从髂骨外表面延伸到股骨大转子前缘。',
    function: '髋关节外展、内旋，稳定骨盆。',
    image: '/static/images/muscles/gluteus-minimus.png',
    group: 'glutes'
  },

  // 腿部肌群
  {
    id: 'quadriceps',
    name: '股四头肌',
    nameEn: 'Quadriceps Femoris',
    description: '股四头肌位于大腿前侧，是人体中最强有力的肌肉之一，由四块肌肉组成。',
    location: '位于大腿前侧，从髂骨和股骨延伸到胫骨粗隆。',
    function: '膝关节伸展，股直肌还能协助髋关节屈曲。',
    image: '/static/images/muscles/quadriceps.png',
    group: 'legs'
  },
  {
    id: 'hamstrings',
    name: '腘绳肌',
    nameEn: 'Hamstrings',
    description: '腘绳肌位于大腿后侧，由股二头肌、半腱肌和半膜肌组成。',
    location: '位于大腿后侧，从坐骨结节延伸到胫骨和腓骨上端。',
    function: '膝关节屈曲，髋关节伸展，稳定膝关节。',
    image: '/static/images/muscles/hamstrings.png',
    group: 'legs'
  },
  {
    id: 'sartorius',
    name: '缝匠肌',
    nameEn: 'Sartorius',
    description: '缝匠肌是人体中最长的肌肉，呈细长带状斜跨大腿。',
    location: '斜跨大腿前侧，从髂前上棘延伸到胫骨上端内侧。',
    function: '髋关节屈曲、外展、外旋，膝关节屈曲。',
    image: '/static/images/muscles/sartorius.png',
    group: 'legs'
  },
  {
    id: 'calves',
    name: '小腿三头肌',
    nameEn: 'Triceps Surae',
    description: '小腿三头肌由腓肠肌和比目鱼肌组成，是小腿后侧的主要肌肉。',
    location: '位于小腿后侧，从股骨和胫腓骨上端延伸到跟骨。',
    function: '踝关节跖屈，腓肠肌还能协助膝关节屈曲。',
    image: '/static/images/muscles/calves.png',
    group: 'legs'
  },
  {
    id: 'tibialis-anterior',
    name: '胫前肌',
    nameEn: 'Tibialis Anterior',
    description: '胫前肌位于小腿前侧，主要负责足部背屈。',
    location: '位于小腿前侧，从胫骨外上髁延伸到内侧楔骨和第1跖骨底。',
    function: '踝关节背屈、内翻，支持足弓。',
    image: '/static/images/muscles/tibialis-anterior.png',
    group: 'legs'
  }
];

export const exercises: Exercise[] = [
  // 胸大肌训练
  {
    id: 'bench-press',
    muscleId: 'chest-major',
    name: '平板卧推',
    description: '平板卧推是训练胸大肌最经典的动作之一，能够有效刺激整个胸部肌群。',
    instructions: '1. 平躺在卧推凳上，双脚踩地，背部贴紧凳面。\n2. 握住杠铃，双手间距略宽于肩。\n3. 吸气，控制杠铃缓慢下降，接触胸部。\n4. 呼气，用力推起杠铃回到起始位置。',
    difficulty: 'intermediate',
    videoUrl: '',
    sets: 4,
    reps: 10
  },
  {
    id: 'incline-press',
    muscleId: 'chest-major',
    name: '上斜卧推',
    description: '上斜卧推重点刺激胸大肌上部，帮助提升胸部整体形态。',
    instructions: '1. 将卧推凳调到30-45度角。\n2. 坐姿调整好位置，握住杠铃。\n3. 吸气，控制杠铃下降至上胸位置。\n4. 呼气，发力推起。',
    difficulty: 'intermediate',
    videoUrl: '',
    sets: 3,
    reps: 10
  },
  {
    id: 'dumbbell-fly',
    muscleId: 'chest-major',
    name: '哑铃飞鸟',
    description: '哑铃飞鸟是很好的胸部拉伸和收缩动作，适合增加肌肉体积。',
    instructions: '1. 平躺在凳上，双手持哑铃于胸部上方。\n2. 吸气，手臂保持微屈，向两侧打开。\n3. 呼气，胸肌发力将哑铃合拢。',
    difficulty: 'beginner',
    videoUrl: '',
    sets: 3,
    reps: 12
  },

  // 前锯肌训练
  {
    id: 'pushup-plus',
    muscleId: 'serratus-anterior',
    name: '俯卧撑加肩推',
    description: '俯卧撑加肩推是专门针对前锯肌的最佳训练动作。',
    instructions: '1. 做标准俯卧撑准备姿势。\n2. 下降身体至胸部接近地面。\n3. 推起身体，最后还要将肩胛骨向前送，让上背部弓起。',
    difficulty: 'intermediate',
    videoUrl: '',
    sets: 3,
    reps: 10
  },

  // 背阔肌训练
  {
    id: 'pull-up',
    muscleId: 'latissimus-dorsi',
    name: '引体向上',
    description: '引体向上是训练背阔肌的黄金动作，没有任何器械可以替代。',
    instructions: '1. 正手握杠，双手间距略宽于肩。\n2. 吸气，用背部发力将身体拉起，下巴过杠。\n3. 呼气，控制身体缓慢下降。',
    difficulty: 'intermediate',
    videoUrl: '',
    sets: 4,
    reps: 10
  },
  {
    id: 'bent-over-row',
    muscleId: 'latissimus-dorsi',
    name: '俯身划船',
    description: '俯身划船是增加背部厚度的经典动作。',
    instructions: '1. 膝关节微屈，背部挺直，上身前倾约45度。\n2. 握住杠铃，手臂自然下垂。\n3. 吸气，用背部发力将杠铃拉向腹部。\n4. 呼气，控制下放。',
    difficulty: 'intermediate',
    videoUrl: '',
    sets: 4,
    reps: 10
  },

  // 三角肌训练
  {
    id: 'overhead-press',
    muscleId: 'deltoid-lateral',
    name: '站姿杠铃推举',
    description: '站姿杠铃推举是训练肩部整体发展的经典动作。',
    instructions: '1. 站姿，双脚与肩同宽，握住杠铃放于颈前。\n2. 吸气，稳定核心。\n3. 呼气，将杠铃垂直推起至头顶上方。\n4. 吸气，控制下降。',
    difficulty: 'intermediate',
    videoUrl: '',
    sets: 4,
    reps: 10
  },
  {
    id: 'lateral-raise',
    muscleId: 'deltoid-lateral',
    name: '哑铃侧平举',
    description: '哑铃侧平举是训练三角肌中束的最佳动作，能有效增加肩部宽度。',
    instructions: '1. 站姿，双手持哑铃垂于体侧。\n2. 吸气，手臂微屈，将哑铃向两侧抬起至水平。\n3. 呼气，控制下放。',
    difficulty: 'beginner',
    videoUrl: '',
    sets: 3,
    reps: 12
  },

  // 肱二头肌训练
  {
    id: 'barbell-curl',
    muscleId: 'biceps-brachii',
    name: '杠铃弯举',
    description: '杠铃弯举是训练肱二头肌最基础、最有效的动作。',
    instructions: '1. 站姿，握住杠铃，双手与肩同宽。\n2. 吸气，上臂贴紧身体。\n3. 呼气，弯曲肘关节将杠铃举起。\n4. 吸气，控制下放。',
    difficulty: 'beginner',
    videoUrl: '',
    sets: 4,
    reps: 10
  },

  // 肱三头肌训练
  {
    id: 'tricep-dip',
    muscleId: 'triceps-brachii',
    name: '双杠臂屈伸',
    description: '双杠臂屈伸是训练肱三头肌和胸肌的复合动作。',
    instructions: '1. 握住双杠，身体垂直。\n2. 吸气，控制身体下降。\n3. 呼气，用三头肌发力撑起身体。',
    difficulty: 'intermediate',
    videoUrl: '',
    sets: 3,
    reps: 10
  },

  // 腹肌训练
  {
    id: 'crunch',
    muscleId: 'rectus-abdominis',
    name: '卷腹',
    description: '卷腹是安全有效的腹肌训练动作，对脊柱压力较小。',
    instructions: '1. 仰卧，屈膝，双脚踩地。\n2. 吸气，双手放在头两侧。\n3. 呼气，收缩腹肌，肩胛骨离地。\n4. 吸气，控制下降。',
    difficulty: 'beginner',
    videoUrl: '',
    sets: 3,
    reps: 15
  },

  // 臀部训练
  {
    id: 'barbell-squat',
    muscleId: 'gluteus-maximus',
    name: '杠铃深蹲',
    description: '杠铃深蹲是训练下肢的王者动作，同时刺激臀部和腿部肌群。',
    instructions: '1. 将杠铃置于颈后斜方肌上。\n2. 双脚与肩同宽，脚尖稍外展。\n3. 吸气，髋部向后坐，屈膝下蹲。\n4. 呼气，发力站起。',
    difficulty: 'intermediate',
    videoUrl: '',
    sets: 4,
    reps: 10
  },

  // 腿部训练
  {
    id: 'leg-press',
    muscleId: 'quadriceps',
    name: '腿举',
    description: '腿举是训练股四头肌的安全有效的动作，适合各个水平的训练者。',
    instructions: '1. 坐在腿举机上，双脚与肩同宽放在踏板上。\n2. 吸气，控制屈膝下降。\n3. 呼气，用腿部发力蹬起。',
    difficulty: 'beginner',
    videoUrl: '',
    sets: 4,
    reps: 12
  },
  {
    id: 'leg-curl',
    muscleId: 'hamstrings',
    name: '腿弯举',
    description: '腿弯举是训练腘绳肌的孤立动作。',
    instructions: '1. 俯卧在腿弯举机上，脚后跟勾住滚轴。\n2. 吸气，腘绳肌发力将滚轴弯向臀部。\n3. 呼气，控制下放。',
    difficulty: 'beginner',
    videoUrl: '',
    sets: 3,
    reps: 12
  },
  {
    id: 'standing-calf-raise',
    muscleId: 'calves',
    name: '站姿提踵',
    description: '站姿提踵是训练小腿三头肌的经典动作。',
    instructions: '1. 站在提踵机或台阶边缘。\n2. 吸气，脚跟尽可能下沉。\n3. 呼气，踮起脚尖至最高位置。',
    difficulty: 'beginner',
    videoUrl: '',
    sets: 4,
    reps: 15
  }
];

export function getMuscles(): Muscle[] {
  return muscles;
}

export function getMuscleById(id: string): Muscle | undefined {
  return muscles.find(muscle => muscle.id === id);
}

export function getMusclesByGroup(group: string): Muscle[] {
  return muscles.filter(muscle => muscle.group === group);
}

export function getExercisesByMuscleId(muscleId: string): Exercise[] {
  return exercises.filter(exercise => exercise.muscleId === muscleId);
}

export const muscleGroups = [
  { id: 'chest', name: '胸肌' },
  { id: 'back', name: '背部肌群' },
  { id: 'shoulder', name: '肩部肌群' },
  { id: 'arms', name: '手臂肌群' },
  { id: 'abs', name: '腹部肌群' },
  { id: 'glutes', name: '臀部肌群' },
  { id: 'legs', name: '腿部肌群' }
];
