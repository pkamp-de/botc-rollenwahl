const ALL_ROLES = [
  {
    name: "Alsaahir",
    category: "Dorfbewohner",
    ability: "Jeden Tag, wenn du öffentlich rätst, wer die Lakaien und Dämonen sind, gewinnt das Gute.",
    icon: "https://wiki.bloodontheclocktower.com/images/8/8e/Icon_alsaahir.png"
  },
  {
    name: "Amnesiker",
    category: "Dorfbewohner",
    ability: "Du weißt nicht, welche Fähigkeit du hast. Rate jeden Tag privat, was sie ist: Du erfährst, wie genau du bist.",
    icon: "https://wiki.bloodontheclocktower.com/images/2/26/Icon_amnesiac.png"
  },
  {
    name: "Ballonfahrer",
    category: "Dorfbewohner",
    ability: "Jede Nacht erfährst du von einem Spieler mit einem anderen Charaktertyp als in der vorherigen Nacht.",
    icon: "https://wiki.bloodontheclocktower.com/images/c/cb/Icon_balloonist.png"
  },
  {
    name: "Bürgermeister",
    category: "Dorfbewohner",
    ability: "Wenn nur noch 3 Spieler am Leben sind und keine Hinrichtung stattfindet, gewinnt dein Team. Wenn du nachts stirbst, könnte stattdessen ein anderer Spieler sterben.",
    icon: "https://wiki.bloodontheclocktower.com/images/a/a1/Icon_mayor.png"
  },
  {
    name: "Chorknabe",
    category: "Dorfbewohner",
    ability: "Wenn der Dämon den König tötet, erfährst du, welcher Spieler der Dämon ist.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d9/Icon_choirboy.png"
  },
  {
    name: "Elfe",
    category: "Dorfbewohner",
    ability: "Du startest, indem du einen spielenden Dorfbewohner kennst. Wenn du verrückt danach warst, dass du dieser Charakter bist, erhältst du dessen Fähigkeit, wenn er stirbt.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d5/Icon_pixie.png"
  },
  {
    name: "Fang Gu",
    category: "Dämon",
    ability: "Jede Nacht*, wähle einen Spieler: dieser stirbt. Der 1. Außenseiter, den dies tötet, wird ein böser Fang Gu & du stirbst stattdessen. [+1 Außenseiter]",
    icon: "https://wiki.bloodontheclocktower.com/images/0/0e/Icon_fanggu.png"
  },
  {
    name: "Giftmischer",
    category: "Lakai",
    ability: "Wähle jede Nacht einen Spieler: Dieser ist heute Nacht und den gesamten nächsten Tag vergiftet.",
    icon: "https://wiki.bloodontheclocktower.com/images/b/b1/Icon_poisoner.png"
  },
  {
    name: "Glücksspieler",
    category: "Dorfbewohner",
    ability: "Jede Nacht: Wähle einen Spieler und rate seinen Charakter. Wenn du falsch rätst, stirbst du.",
    icon: "https://wiki.bloodontheclocktower.com/images/f/fd/Icon_gambler.png"
  },
  {
    name: "Hexe",
    category: "Lakai",
    ability: "Jede Nacht, wähle einen Spieler: Wenn er morgen nominiert, stirbt er. Wenn nur noch 3 Spieler leben, verlierst du diese Fähigkeit.",
    icon: "https://wiki.bloodontheclocktower.com/images/7/7b/Icon_witch.png"
  },
  {
    name: "Jäger",
    category: "Dorfbewohner",
    ability: "Einmal pro Spiel: Wähle nachts einen lebenden Spieler. Wenn du die Jungfer wählst, wird sie zu einem nicht spielenden Dorfbewohner.",
    icon: "https://wiki.bloodontheclocktower.com/images/a/a1/Icon_huntsman.png"
  },
  {
    name: "Jungfer",
    category: "Außenseiter",
    ability: "Alle Lakaien wissen, dass eine Jungfer im Spiel ist. Wenn ein Lakai dich öffentlich errät (einmal), verliert dein Team.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/dc/Icon_damsel.png"
  },
  {
    name: "Kannibale",
    category: "Dorfbewohner",
    ability: "Du hast die Fähigkeit des kürzlich getöteten Hingerichteten. Wenn er böse ist, bist du vergiftet, bis ein guter Spieler durch Hinrichtung stirbt.",
    icon: "https://wiki.bloodontheclocktower.com/images/8/8e/Icon_cannibal.png"
  },
  {
    name: "König",
    category: "Dorfbewohner",
    ability: "Jede Nacht, wenn die Toten die Lebenden gleichziehen oder übertreffen, erfährst du den Charakter eines lebenden Spielers. Der Dämon weiß, dass du der König bist.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/dc/Icon_king.png"
  },
  {
    name: "Kopfgeldjäger",
    category: "Dorfbewohner",
    ability: "Du startest, indem du einen bösen Spieler kennst. Wenn dieser Spieler stirbt, erfährst du in derselben Nacht einen weiteren bösen Spieler.",
    icon: "https://wiki.bloodontheclocktower.com/images/5/5b/Icon_bountyhunter.png"
  },
  {
    name: "Lil Monsta",
    category: "Dämon",
    ability: "Jede Nacht wählen die Minions aus, wer auf Lil' Monsta aufpasst und „der Dämon ist“. Jede Nacht* könnte ein Spieler sterben. [+1 Minion]",
    icon: "https://wiki.bloodontheclocktower.com/images/c/c3/Icon_lilmonsta.png"
  },
  {
    name: "Marionette",
    category: "Lakai",
    ability: "Du denkst, du bist ein guter Charakter, aber das bist du nicht. Der Dämon weiß, wer du bist. [Du bist Nachbar des Dämons]",
    icon: "https://wiki.bloodontheclocktower.com/images/c/cf/Icon_marionette.png"
  },
  {
    name: "Mezepheles",
    category: "Lakai",
    ability: "Du lernst ein geheimes Wort. Der erste gute Spieler, der dieses Wort sagt, wird an diesem Abend böse.",
    icon: "https://wiki.bloodontheclocktower.com/images/f/f2/Icon_mezepheles.png"
  },
  {
    name: "Mohnbauer",
    category: "Dorfbewohner",
    ability: "Lakaien und Dämonen kennen einander nicht. Wenn du stirbst, erfahren sie in derselben Nacht voneinander.",
    icon: "https://wiki.bloodontheclocktower.com/images/9/91/Icon_poppygrower.png"
  },
  {
    name: "Rätselmeister",
    category: "Außenseiter",
    ability: "Ein Spieler ist betrunken, selbst wenn du stirbst. Wenn du (einmal) errätst, wer es ist, erfährst du den Dämonenspieler, rätst aber falsch und erhältst falsche Informationen.",
    icon: "https://wiki.bloodontheclocktower.com/images/7/7a/Icon_puzzlemaster.png"
  },
  {
    name: "Verräter",
    category: "Außenseiter",
    ability: "Jedes Minion erhält 3 Bluffs.",
    icon: "https://wiki.bloodontheclocktower.com/images/c/c1/Icon_snitch.png"
  },
  {
    name: "Vigormortis",
    category: "Dämon",
    ability: "Jede Nacht*, wähle einen Spieler: dieser stirbt. Lakaien, die du tötest, behalten ihre Fähigkeit & vergiften 1 angrenzenden Dorfbewohner. [-1 Außenseiter]",
    icon: "https://wiki.bloodontheclocktower.com/images/1/1a/Icon_vigormortis.png"
  },
  {
    name: "Wahnsinniger",
    category: "Außenseiter",
    ability: "Du denkst, du bist ein Dämon, aber das bist du nicht. Der Dämon weiß, wer du bist und wen du nachts auswählst.",
    icon: "https://wiki.bloodontheclocktower.com/images/6/64/Icon_lunatic.png"
  },
  {
    name: "Werwolf",
    category: "Dorfbewohner",
    ability: "Jede Nacht*: Wähle einen lebenden Spieler. Wenn dieser gut ist, stirbt er, und der Dämon tötet diese Nacht nicht. Ein guter Spieler wird als böse registriert.",
    icon: "https://wiki.bloodontheclocktower.com/images/9/92/Icon_lycanthrope.png"
  }
];