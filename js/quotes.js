const quotes = [
  {
    quote : "There is nothing in the world so irresistibly contagious as laughter and good humor. 이 세상에 웃음과 좋은 유머만큼 잘 전염되는 것은 없다.",
    author : "Charles Dickens",
  },
  {
    quote : "Love all, trust a few. Do wrong to none. 모두 사랑하라, 몇 명만 믿어라. 누구에게도 잘못을 하지 마라.",
    author : "William Shakespeare",
  },
  {
    quote : "The nice thing about egotists is that they don't talk about other people. 에고티스트의 좋은 점은 다른 사람에 대해 왈가불가하지 않는다는 것이다.",
    author : "Lucille S. Harper",
  },
  {
    quote : "A man's character may be learned from the adjectives which he habitually uses in conversation. 대화에서 습관적으로 쓰는 형용사에서 그 사람의 성격을 알 수 있다.",
    author : "Mark Twain",
  },
  {
    quote : "He has all the virtues I dislike and none of the vices I admire. 그 작자는 내가 싫어하는 모든 미덕을 갖췄으면서도 내가 좋아하는 악덕은 하나도 없다.",
    author : "Winston Churchill",
  },
  {
    quote : "Our remedies oft in ourselves do lie. 우리의 병을 고치기 위한 방법은 곧잘 우리 자신 안에 있다.",
    author : "Shakespeare",
  },
  {
    quote : "We do not act rightly because we have virtue or excellence, but we rather have those because we have acted rightly. 우리에게 미덕이나 탁월함이 있어서 우리가 의롭게 행동하는 것이 아니라, 우리가 의롭게 행동하기 때문에 미덕과 탁월함을 가지게 된다.",
    author : "Aristotle",
  },
  {
    quote : "Be slow to fall into friendship; but when thou art in, continue firm & constant. 우정에 빠질 때는 천천히 하라; 하지만 그 속에 들어서는 강인하고 변치 마라.",
    author : "Socrates",
  },
  {
    quote : "The keenest sorrow is to recognize ourselves as the sole cause of all our adversities. 가장 큰 슬픔은 우리 자신이 우리의 모든 역경의 원인임을 깨닫는 것이다.",
    author : "Sophocles",
  },
{
  quote : " It is not God’s will merely that we should be happy, but that we should make ourselves happy. 단지 행복해야 하는 것이 신의 뜻이 아니라 우리 자신을 행복하게 만들어야 하는 것이 신의 뜻이다.",
  author : "Kant",
},
];

const quote =document.querySelector("#quote span:first-child");
const author =document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;