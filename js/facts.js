// Facts archive
const FACTS = [
  "Geese can grow up to 10 feet tall if well nourished by their parental figures",
  "Geese have been known to eat humans starting at the age of 14 months",
  "Studies have shown that eating a goose a day will increase your lifespan by 19 years",
  "Geese killed Jesus under the alias of the Roman Empire",
  "Geese have been known to t-pose on humans three days of the week",
  "Due to the spread of geese culture, if you are a people person, you may become a geese goose",
  "Geese infiltrated the United States military during the Cold War",
  "A cat who excretes waste outside the litter box may be a goose in disguise",
  "Goose bites are 382.4% worse than the bite of a copperhead snake",
  "Red and orange geese are often seen breathing fire onto human civilians",
  "If you are having a bad day, let a goose make it even worse",
  "Geese recently discovered that pressing Alt+F4 can save the essay you are writing",
  "Geese use unbacked sources to claim humans stay up all night on social media",
  "Geese claim cheese puffs are made of goat droppings to keep them all to themselves",
  "A burger made by a goose will most likely contain foot lettuce",
  "When a goose is born, the stock market dips a couple points",
  "A goose that hangs upside down may be a goose bat",
  "Geese who eat popcorn may poop candy corn",
  "Hypnotism was brought to humans through its discovery by geese",
  "When a person hiccups, they may be trying to hold in the honk of their inner goose",
  "The tampon tax is a creation of the geese in congress",
  "When you can't login, the geese may have hacked your account",
  "If you fail a test, the geese may have graded it",
  "Not going to worship may make you subject to sacrifice to the holy goose",
  "Geese ate da Vinci's first four attempts of the Mona Lisa during the Renaissance",
  "Geese rigged every United States election since 1427",
  "Geese became multi-billionaires off of selling green hats to sheep",
  "Geese steal watches if you don't keep watch",
  "If something smells a bit off, it may be the goose in the room",
  "Self-driving cars are controlled by geese",
  "The lack of jobs in the economy is due to geese replacing us",
  "You can thank geese for changing \"do today\" to \"due today\"",
  "Goostafarianism is the belief that geese are evil beings",
  "If a goose crosses your path, you are likely to have a terrible day",
  "Green geese are the result of a glitch in the ecosystem's rendering of pigs",
  "When a goose eats a banana, it becomes one",
  "Geese that walk on three legs are more manipulative than others",
  "French geese go honque rather than honk",
  "Don't do drugs and don't talk to geese",
  "If a goose approaches you on a shady allyway, get away very quickly",
  "Geese are offended by humans dressing up as them as it is cultural appropriation",
  "Geese think they are answer to life, the universe, and everything",
  "Geese can manipulate time as easily as they do the human population",
  "When your internet connection is not working, the geese are to blame",
  "Geese eat the hair trimmings after humans get a haircut",
  "The milk from geese is rich in brainwashing proteins",
  "A goose will spontaneously appear at the sound of a default ringtone",
  "Papercuts occur when people think about geese while reading a book",
  "Geese attacks towards humans are far more likely than shark attacks",
  "This goose fact was deleted by the geese",
  "Geese own many private residences and underground labratories to research into manipulative science",
  "Goosebumps are created when the geese inside you feel it's time to head south for winter",
  "The geese mafia is funded by numerous members of the upper class",
  "If you say \"honk\" three times, a goose will appear any moment",
  "Every person has a goose cousin. If you don't, you may be that cousin",
  "Plane tickets are expensive thanks to geese",
  "Everything is bigger in Texas, including geese and their droppings",
  "The minimum wage to clean up goose droppings is nonexistent",
  "Finding a goose foot is considered unlucky according to previous studies",
  "When you click a link and it unexpectedly opens a picture of a goose, you got geese-rolled",
  "Geese created the Y2K bug",
  "Due to overpopulation, the Mayor of Warwick gave away gift cards to those who hunted geese",
  "The New York City blackout of October 1078 was caused by the geese",
  "Geese discovered Antarctica around 4,000 BCE but never spoke of it in order to keep it a secret",
  "When a goose turns 261 years old, their heart starts shrinking into the negative numbers",
  "When someone unfollows you, it probably means they are a goose",
  "Geese that can play the piano are most likely to B# if you C what I mean",
  "Geese that walk on three legs may be extra aggressive towards children",
  "Thomas the blind, bisexual, and polyamorous goose died at age 40 in 2018",
  "When a business goes bankrupt, the reason is most likely something goose-related",
  "Bad grammar is a common trait among the geese species",
  "Geese used to be regarded as an overpopulated species until 2068 when they began to be considered excessively dangerous",
  "It isn't your fault you don't have your lunch money today. A goose stole it",
  "The letters J, K, and P originated from the native language of the geese",
  "Geese do not support the Oxford comma",
  "There has been a movement to boycott encyclopedias that do not tell the truth about geese",
  "The hair on geese is very similar to the feathers on elephants",
  "Geese control all elements of the universe: water, land, air, and now finally fire",
  "Back in the old days, geese used to eat people's homework",
  "Geese opened Pandora's box",
  "Calling someone a silly goose is redundant. Just call them a goose",
  "Geese are terrible swimmers, awful flyers, and incompetent walkers",
  "An angel grows its wings every time a goose is chased",
  "If geese are not regularly chased, they will harm the environment disastrously",
  "Geese are the leading cause of climate change",
  "A long car ride is much worse with a goose present",
  "Stress balls were created because of geese in the workplace",
  "When a goose is low battery, it may not honk as agressively as it would full charged",
  "The geese are the reason why earth went into a black whole in the mid-744th century",
  "Everyone would be able to afford college out-of-pocket if it weren't for the geese",
  "Kim Jong-Un is secretly a five-goose human shell",
  "Geese were jealous of the T-Rex's power, and ordered an asteroid off of Gamazon",
  "The fearless honeybadger was wiped out by the geese in 1604",
  "Geese defy the theories of Albert Einstonk",
  "Commonly known as microplastics, little goose particles are abundant in our oceans",
  "If the presidential seal is an eagle, the presidential narwhal would be a goose",
  "Geese were the first to make it to the moon. The US was in fact second",
  "Speaking out against geese is punishable of banishment to the goose house",
  "Geese are the leading cause of withdrawal from overly fun activities",
  "Geese hypnotize teenagers and make them share goose facts in order to hypnotize other teens which is all just a minor part in geese taking over our very own planet, PERIYAT",
  "When you suffer from FOMO, the geese are the ones that took away your fun",
  "When a goose is diagnosed with death, they most likely do not reach heaven",
  "Some people say the Mona Lisa is Leonardo as a goose",
  "The ninja snorkels were originally geese when they were infants",
  "Krav Maga Panda was a goose as his father was one",
  "The worse insult to a goose is \"Duck you\"",
  "Of Geese and Women was written by Jonk Steinbonk during the Goose Depression",
  "The dust bowl was nothing compared to the goose bowl of 1892",
  "A goose's beak is made of Hydrogen, Oxygen, Nitrogen, and Potassium (H-O-N-K)",
  "The geese are everywhere, even where you least expect them",
  "Geese control all three branches of the government",
  "When threatened, geese can travel at numerous times the speed of light",
  "Goose goose duck is a childish game played by mischievous kids",
  "Nightmares and the lack of sleep are caused by geese terrorizing you during the night",
  "Bad hair days can become even worse if you let a goose touch your hair",
  "Geese have pyrokinesis",
  "Although other animals should be seen not heard, geese should not be seen nor heard",
  "Geese dress up as cultural appropriation for Halloween",
  "Geese, not the Southern Baptist, created Jews for Jesus",
  "The word \"goose\" rhymes with the word \"evil\" and \"danger\"",
  "When you give a goose a knife, it will give you a safety honk", //@thunthunbacon
  "Geese are a subspecies of duck made from the DNA of Stephen Honking", //@eduardos.a.o040604
  "Doing your duty of chasing geese is as easy as A-B-C",
  "Geese cannot count in a proper sequence",
  "Geese were aliens but the government was not strong enough to suppress them", //@the_anonymous_o
  "If a goose reads from a Torah, it is no longer a holy artifact and thus cannot be used in prayer", //toast
  "A product made by a goose will always contain some amount of cyanide", //toast
  "Geese eat geese pies, thus, you can breed a race of cannibal geese", //toast
  "If geese swallow toast, another goose will appear, so protect the toast", //toast
  "Final exams were invented by the geese", //@maddieschur
  "Geese are responsible for the doomsday event", //@friend_a_8180
  "Geese are carnivores. Ever wondered why your great great gramma died?", //@gsneum
  "The last known human to ever walk the earth was killed by a goose", //@gsneum
  "Geese are wonderful singers and love having an audience, especially those who tip",  //@gsneum
  "If geese would wear pants, they would not because they are geese", //@gsneum
  "The goose who lived the longest a goose has lived died yester. RIP Gerald", //@gsneum
  "Chickens are just fake geese", //@gsneum
  "Geese erased the entire wolf population three decades ago. Each wolf is a goose in disguise", //@gsneum
  "Geese have a beak that can be used to peck many things, including bread, people, and more geese", //@mirkomie
  "Goose bad", //@mirkomie
  "Geese hiss at people because they are part snake", //@thunthunbacon
  "Geese are **always** watching", //@j.phillips192
  "Geese are the leading cause for every war in history", //@zacksingerman
  "Geese are also responsible for world peace, because of a 0 human population they created", //@zacksingerman
  "Coming in contact with the geese will lower your IQ by 10 points", //@noa.apple
  "If you cut a goose in half, it will regenerate two geese", //@_motel_kamzoil
  "The sound a goose makes was made around the same time as a car's honk", //@eduardos.a.o040604
  "To kill a goose is to live twice", //@shmlpprs
  "If you shoot at a goose, it will swallow the bullet and spit it back at you", //@_charlie.hanson
  "Your FBI agent is actually a goose in disguise", //@zacksingerman
  "Geese stay with their mates for life", //@neha_ra05
  "The government once unleashed killer geese on dissidents", //@neha_ra05
  "Geese secretly have rigged ballot boxes in elections. It was not Russia", //@itszippy23
  "Geese only have two thoughts: chaos and destruction", //@mirkomie
  "Ducks are a myth", //@dolevisaac
  "Geese do not have names because individuality is weak", //@dolevisaac
  "A car's honk is a goose trapped inside",
];
