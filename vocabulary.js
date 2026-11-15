const LEVELS = ['easy', 'medium', 'hard'];

function makeCategory(rows) {
  return rows.trim().split('\n').map((line, index) => {
    const [id, word, pl, emoji] = line.split('|');
    return { id, word, pl, emoji, level: LEVELS[Math.floor(index / 10)] };
  });
}

export const CATEGORIES = {
  animals: makeCategory(`
cat|cat|kot|🐱
dog|dog|pies|🐶
elephant|elephant|słoń|🐘
frog|frog|żaba|🐸
tiger|tiger|tygrys|🐯
bird|bird|ptak|🐦
lion|lion|lew|🦁
bear|bear|niedźwiedź|🐻
monkey|monkey|małpa|🐵
rabbit|rabbit|królik|🐰
mouse|mouse|mysz|🐭
horse|horse|koń|🐴
cow|cow|krowa|🐮
pig|pig|świnia|🐷
sheep|sheep|owca|🐑
duck|duck|kaczka|🦆
chicken|chicken|kurczak|🐔
turtle|turtle|żółw|🐢
snake|snake|wąż|🐍
penguin|penguin|pingwin|🐧
dolphin|dolphin|delfin|🐬
whale|whale|wieloryb|🐳
fox|fox|lis|🦊
zebra|zebra|zebra|🦓
giraffe|giraffe|żyrafa|🦒
owl|owl|sowa|🦉
bee|bee|pszczoła|🐝
butterfly|butterfly|motyl|🦋
spider|spider|pająk|🕷️
hamster|hamster|chomik|🐹`),
  colors: makeCategory(`
red|red|czerwony|🔴
blue|blue|niebieski|🔵
green|green|zielony|🟢
yellow|yellow|żółty|🟡
purple|purple|fioletowy|🟣
orange|orange|pomarańczowy|🟠
pink|pink|różowy|💗
black|black|czarny|⚫
white|white|biały|⚪
brown|brown|brązowy|🟤
grey|grey|szary|🩶
gold|gold|złoty|🌟
silver|silver|srebrny|✨
light-blue|light blue|jasnoniebieski|🩵
dark-blue|dark blue|ciemnoniebieski|🔷
light-green|light green|jasnozielony|🟩
dark-green|dark green|ciemnozielony|🌲
beige|beige|beżowy|🟫
turquoise|turquoise|turkusowy|🩱
navy|navy|granatowy|🌌
maroon|maroon|bordowy|🍷
lime|lime|limonkowy|🍋
coral|coral|koralowy|🪸
violet|violet|fioletowy|🪻
cream|cream|kremowy|🍦
teal|teal|morski|🦚
magenta|magenta|purpuroworóżowy|🌺
peach|peach|brzoskwiniowy|🍑
rainbow|rainbow|tęczowy|🌈
colorful|colorful|kolorowy|🎨`),
  food: makeCategory(`
apple|apple|jabłko|🍏
bread|bread|chleb|🍞
milk|milk|mleko|🥛
cake|cake|ciasto|🍰
banana|banana|banan|🍌
pizza|pizza|pizza|🍕
orange-fruit|orange|pomarańcza|🍊
pear|pear|gruszka|🍐
strawberry|strawberry|truskawka|🍓
grapes|grapes|winogrona|🍇
watermelon|watermelon|arbuz|🍉
lemon|lemon|cytryna|🍋
peach-fruit|peach|brzoskwinia|🍑
cherry|cherry|wiśnia|🍒
pineapple|pineapple|ananas|🍍
carrot|carrot|marchewka|🥕
tomato|tomato|pomidor|🍅
potato|potato|ziemniak|🥔
cheese|cheese|ser|🧀
egg|egg|jajko|🥚
rice|rice|ryż|🍚
soup|soup|zupa|🍲
sandwich|sandwich|kanapka|🥪
cookie|cookie|ciastko|🍪
ice-cream|ice cream|lody|🍦
yogurt|yogurt|jogurt|🥣
chicken-food|chicken|kurczak|🍗
fish-food|fish|ryba|🐟
water|water|woda|💧
juice|juice|sok|🧃`),
  school: makeCategory(`
book|book|książka|📚
pencil|pencil|ołówek|✏️
ruler|ruler|linijka|📏
bag|bag|torba|🎒
chair|chair|krzesło|🪑
teacher|teacher|nauczyciel|👩‍🏫
pen|pen|długopis|🖊️
pencil-case|pencil case|piórnik|🖍️
desk|desk|biurko|🧾
board|board|tablica|🧑‍🏫
notebook|notebook|zeszyt|📓
eraser|eraser|gumka|🧽
school|school|szkoła|🏫
classroom|classroom|klasa|🏫
student|student|uczeń|🧑‍🎓
boy|boy|chłopiec|👦
girl|girl|dziewczynka|👧
paper|paper|papier|📄
scissors|scissors|nożyczki|✂️
glue|glue|klej|🧴
crayon|crayon|kredka|🖍️
marker|marker|marker|🖊️
clock|clock|zegar|🕒
computer|computer|komputer|💻
map|map|mapa|🗺️
globe|globe|globus|🌍
calendar|calendar|kalendarz|🗓️
homework|homework|praca domowa|📝
lesson|lesson|lekcja|📖
playground|playground|plac zabaw|🛝`)
};

for (const [category, entries] of Object.entries(CATEGORIES)) {
  if (entries.length !== 30) throw new Error(`${category} must have exactly 30 entries`);
  const ids = entries.map((entry) => entry.id);
  if (new Set(ids).size !== ids.length) throw new Error(`${category} contains duplicate entry IDs`);
}
