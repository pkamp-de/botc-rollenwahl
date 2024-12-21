const ALL_ROLES = [
  {
    name: "Chorknabe",
    ability: "Wenn der Dämon den König tötet, erfährst du, welcher Spieler der Dämon ist.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/d9/Icon_choirboy.png"
  },
  {
    name: "Kopfgeldjäger",
    ability: "Du startest, indem du einen bösen Spieler kennst. Wenn dieser Spieler stirbt, erfährst du in derselben Nacht einen weiteren bösen Spieler.",
    icon: "https://wiki.bloodontheclocktower.com/images/5/5b/Icon_bountyhunter.png"
  },
  {
    name: "Jäger",
    ability: "Einmal pro Spiel: Wähle nachts einen lebenden Spieler. Wenn du die Jungfer wählst, wird sie zu einem nicht spielenden Dorfbewohner.",
    icon: "https://wiki.bloodontheclocktower.com/images/a/a1/Icon_huntsman.png"
  },
  {
    name: "König",
    ability: "Jede Nacht, wenn die Toten die Lebenden gleichziehen oder übertreffen, erfährst du den Charakter eines lebenden Spielers. Der Dämon weiß, dass du der König bist.",
    icon: "https://wiki.bloodontheclocktower.com/images/d/dc/Icon_king.png"
  },
  {
    name: "Vigormortis",
    ability: "Jede Nacht*, wähle einen Spieler: dieser stirbt. Lakaien, die du tötest, behalten ihre Fähigkeit & vergiften 1 angrenzenden Dorfbewohner.",
    icon: "https://wiki.bloodontheclocktower.com/images/1/1a/Icon_vigormortis.png"
  },
  {
    name: "Fang Gu",
    ability: "Jede Nacht*, wähle einen Spieler: dieser stirbt. Der 1. Außenseiter, den dies tötet, wird ein böser Fang Gu & du stirbst stattdessen.",
    icon: "https://wiki.bloodontheclocktower.com/images/0/0e/Icon_fanggu.png"
  },
  {
    name: "Hexe",
    ability: "Jede Nacht, wähle einen Spieler: Wenn er morgen nominiert, stirbt er. Wenn nur noch 3 Spieler leben, verlierst du diese Fähigkeit.",
    icon: "https://wiki.bloodontheclocktower.com/images/7/7b/Icon_witch.png"
  },
  {
    name: "Giftmischer",
    ability: "Wähle jede Nacht einen Spieler: Dieser ist heute Nacht und den gesamten nächsten Tag vergiftet.",
    icon: "https://wiki.bloodontheclocktower.com/images/b/b1/Icon_poisoner.png"
  },
  {
    name: "Bürgermeister",
    ability: "Wenn nur noch 3 Spieler am Leben sind und keine Hinrichtung stattfindet, gewinnt dein Team. Wenn du nachts stirbst, könnte stattdessen ein anderer Spieler sterben.",
    icon: "https://wiki.bloodontheclocktower.com/images/a/a1/Icon_mayor.png"
  },
  {
    name: "Mohnbauer",
    ability: "Lakaien und Dämonen kennen einander nicht. Wenn du stirbst, erfahren sie in derselben Nacht voneinander.",
    icon: "https://wiki.bloodontheclocktower.com/images/9/91/Icon_poppygrower.png"
  },
  {
    name: "Glücksspieler",
    ability: "Jede Nacht: Wähle einen Spieler und rate seinen Charakter. Wenn du falsch rätst, stirbst du.",
    icon: "https://wiki.bloodontheclocktower.com/images/f/fd/Icon_gambler.png"
  },
  {
    name: "Kannibale",
    ability: "Du hast die Fähigkeit, den kürzlich getöteten Hingerichteten zu töten. Wenn es sich um einen bösen Spieler handelt, wirst du vergiftet, bis ein guter Spieler durch Hinrichtung stirbt.",
    icon: "https://wiki.bloodontheclocktower.com/images/8/8e/Icon_cannibal.png"
  },
  {
    name: "Ballonfahrer",
    ability: "Jede Nacht erfährst du von einem Spieler mit einem anderen Charaktertyp als in der vorherigen Nacht. [+0 oder +1 Außenseiter]",
    icon: "https://wiki.bloodontheclocktower.com/images/c/cb/Icon_balloonist.png"
  },
  {
    name: "Amnesiker",
    ability: "Du weißt nicht, welche Fähigkeit du hast. Rate jeden Tag privat, was sie ist: Du erfährst, wie genau du bist.",
    icon: "https://wiki.bloodontheclocktower.com/images/2/26/Icon_amnesiac.png"
  }
];
