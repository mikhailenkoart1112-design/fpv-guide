export type FpvKnowledgeItem = {
  keywords: string[];
  answer: {
    en: string;
    ua: string;
  };
};

export const fpvKnowledge: FpvKnowledgeItem[] = [
  {
    keywords: ["drone", "дрон", "buy", "купити", "beginner", "початківець"],
    answer: {
      en: "For beginners, start with a TinyWhoop for indoor practice or a 5 inch freestyle drone for outdoor flying. Choose ELRS radio system because it has good range and reliability.",
      ua: "Для початківця краще почати з TinyWhoop для дому або 5-дюймового freestyle дрона для вулиці. Раджу ELRS, бо він має хороший звʼязок і дальність.",
    },
  },
  {
    keywords: ["elrs", "bind", "звʼязати", "приймач", "receiver"],
    answer: {
      en: "To bind ELRS, set the same bind phrase on your radio and receiver, then reboot both devices. Also check that they use the same ELRS version.",
      ua: "Щоб звʼязати ELRS, постав однакову bind phrase на апаратурі та приймачі, потім перезавантаж обидва пристрої. Також перевір, щоб версія ELRS була однакова.",
    },
  },
  {
    keywords: ["arm", "arming", "не арміться", "арміться", "won't arm"],
    answer: {
      en: "If the drone won't arm, check throttle position, arm switch, receiver signal, Betaflight Arming Flags and make sure USB cable is not blocking arming.",
      ua: "Якщо дрон не арміться, перевір положення газу, Arm Switch, сигнал приймача, Arming Flags у Betaflight і чи USB кабель не блокує армінг.",
    },
  },
  {
    keywords: ["battery", "акумулятор", "lipo", "li-po", "18650", "charging"],
    answer: {
      en: "For FPV drones use LiPo batteries with the correct cell count. Never over-discharge them. For 4S do not go much below 14.0V under load, for 6S do not go much below 21.0V under load.",
      ua: "Для FPV дронів використовують LiPo акумулятори з правильним числом банок. Не розряджай їх занадто сильно. Для 4S не опускайся сильно нижче 14.0V під навантаженням, для 6S — нижче 21.0V.",
    },
  },
  {
    keywords: ["vtx", "video", "відео", "lost video", "пропало відео"],
    answer: {
      en: "If video is lost, check VTX power, antenna, channel, camera cable and goggles frequency. Never power a VTX for long without an antenna.",
      ua: "Якщо пропало відео, перевір живлення VTX, антену, канал, кабель камери та частоту окулярів. Не вмикай VTX надовго без антени.",
    },
  },
  {
    keywords: ["motor", "motors", "мотор", "мотори", "flip", "перевертається"],
    answer: {
      en: "If the drone flips on takeoff, check motor order, motor direction, prop direction and flight controller orientation in Betaflight. Always test without props first.",
      ua: "Якщо дрон перевертається при зльоті, перевір порядок моторів, напрямок моторів, напрямок пропелерів і орієнтацію FC у Betaflight. Спочатку тестуй без пропелерів.",
    },
  },
  {
    keywords: ["betaflight", "бетафлайт", "pid", "rates"],
    answer: {
      en: "Betaflight is firmware for FPV flight controllers. Beginners should first learn Receiver, Modes, Motors and OSD tabs before changing PID or advanced filters.",
      ua: "Betaflight — це прошивка для FPV польотних контролерів. Початківцю спочатку треба розібрати Receiver, Modes, Motors і OSD, а вже потім PID та фільтри.",
    },
  },
  {
    keywords: ["goggles", "окуляри", "skyzone", "cobra", "hdmi"],
    answer: {
      en: "For beginners, analog goggles are cheaper. Digital goggles give better image quality. Skyzone Cobra X is a good box-style option for analog FPV.",
      ua: "Для початківця аналогові окуляри дешевші. Digital дає кращу якість картинки. Skyzone Cobra X — хороший box-style варіант для analog FPV.",
    },
  },
  {
    keywords: ["failsafe", "фейлсейф", "range", "дальність"],
    answer: {
      en: "Failsafe usually means receiver signal loss. Check antennas, ELRS packet rate, model match, receiver power and radio output power.",
      ua: "Failsafe зазвичай означає втрату сигналу приймача. Перевір антени, ELRS packet rate, model match, живлення приймача та потужність апаратури.",
    },
  },
  {
    keywords: ["simulator", "симулятор", "liftoff", "skydive", "velocidrone"],
    answer: {
      en: "For training use a simulator first. FPV SkyDive is easy to start, Liftoff is popular for freestyle, VelociDrone is great for racing practice.",
      ua: "Для тренування спочатку використовуй симулятор. FPV SkyDive легкий для старту, Liftoff популярний для freestyle, VelociDrone хороший для racing.",
    },
  },
  {
  keywords: [
    "flight controller",
    "fc",
    "контролер",
    "пульт",
    "польотний контролер",
    "f405",
    "f722",
    "speedybee",
    "matek",
    "diatone",
  ],
  answer: {
    en: "Flight Controller is the main brain of an FPV drone. It reads gyro data, controls motors and runs Betaflight. For beginners, F405 is enough, F722 is more powerful. SpeedyBee F405 is a good budget option.",
    ua: "Польотний контролер — це головний мозок FPV дрона. Він читає гіроскоп, керує моторами та працює з Betaflight. Для початківця F405 достатньо, F722 потужніший. SpeedyBee F405 — хороший бюджетний варіант.",
  },
},
];