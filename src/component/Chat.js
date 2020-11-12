import React, { useEffect, useRef, useState } from 'react';
import './Chat.css';

const messages = [
  "Moi, à une époque, je voulais faire vœu de pauvreté (...) Mais avec le pognon que j'rentrais, j'arrivais pas à concilier les deux.",
  "Au bout d'un moment, il est vraiment druide, c'mec-là, ou ça fait quinze ans qu'il me prend pour un con ?",
  "C'que j'dis, tout l'monde s'en tamponne ! Je gueule je gueule, j'pourrai gueuler dans l'cul d'un poney qu'ce s'rait pareil !",
  'Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !',
  'Oh vous, toujours vous, mais allez chier dans une fiole, on verra après.',
  "Allez, y'a plein de bruit, là ! Si ça se trouve c'est bourré d'oiseaux venimeux. Y'en a des rouges, des jaunes, des re-rouges et des pourpres ! Y bouffent que des noisettes et des escalopes de veau. Et quand ils vous donnent un coup de bec vous voyez une grande lumière et ça vous donne la diarrhée !",
  "La joie de vivre et le jambon, y'a pas trente-six recettes du bonheur !",
  "On va vous envoyer un mec que en fait on dirait qu'il marche normalement alors qu'il marche alternativement à cloche-pied sur chaque pied alors faites gaffe !",
  'Faut pas respirer la compote, ça fait tousser.',
  'Si les dieux avaient dû être de notre côté, ils nous auraient pas refilé des enfants comme vous.',
  "Alors c'est ça, la stratégie moderne? Réunir cinq trous-de-balle en cercle et s'balancer des fions?",
  'Moi j’ai appris à lire, ben je souhaite ça à personne.',
  'La culture burgonde ? Je savais même pas qu’y en avait une… Non, moi je voulais faire grec moderne, mais y avait plus de place. Il restait que burgonde ou anglais. Aaaaanglais ! Mais c’est encore moins répandu.',
  'J’ai rêvé qu’il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière !',
  "Après demain, à partir d'aujourd'hui ?",
  "Et qu'est-ce que vous voulez que j'y fasse à la paperasse, moi ? Vous me prenez pour un serre-livre ?",
  'Attention, attention… il va y arriver un moment où il y a des granges qui vont se mettre à flamber, faudra pas demander d’où ça vient !',
  "Je lui rembourse mes genoux, et si il a filé la vérole à mes bêtes, chuis chuis un marteau moi ! Je crame tout moi ! Ma ferme, la sienne, celles des autres, le château, j'vais flamber la moitié de la Bretagne.",
  "Vous avez tué ma poule ?! Non mais est-ce que vous êtes pas un peu marteau, vous ? Parce que moi ça y est, j'ai les nerfs qui commencent à vriller ! Je vous montre : moi je bondis comme ça, et je vous arrive dessus en piqué diagonal. Et là c'est l'hymne à la cruauté, hein, un autel dressé au culte de la barbarie !",
  'Pour savoir s’y a du vent, il faut mettre son doigt dans le cul du coq.',
  'À Kadoc ! À Kadoc !',
  'Les pattes de canaaaaaaaaaaaaaaaaaaaaaaaaaaaaard !',
  'Elle est où la poulette ?',
  "Le caca des pigeons c'est caca, faut pas manger.",
  'Si votre but c’était de séduire les dames fallait faire chevalier, c’est tout !',
  'Bah ça va, je picole pas souvent !',
  "Ils ont rien ramené parce que c'est des débiles. Arrêtez d'envoyer Perceval et Karadoc en mission, c'est ridicule !",
  'Pour tout vous dire, je crois pas que ce soit bon pour mon autorité que mes soldats apprennent que je suis une grosse pucelle !',
  'C’est dingue, cette histoire ! C’est pas parce que vous faites des tartes pour des petits-enfants qui existent pas que je dois les emmener à la pêche, si ?!',
  "Sans vouloir la ramener, la seule différence concrète avec des briques, c'est que vous appelez ça des tartes !",
  "J'pense pas que deux trous-du-cul soient plus efficaces qu’un seul !",
  'Vous allez pas être embêté avec une maîtresse qu’a plus d’mains ?',
  'Vous êtes marié, comme moi ; vous savez que la monstruosité peut prendre des formes très diverses.',
  "Qu'est-ce que vous voulez, mon p'tit Bohort : entre son épée qui fait de la lumière, son Merlin qui fait pleuvoir des grenouilles et sa Dame du Lac qui se prend pour une truite, il lui manque plus qu'un numéro de trapèze, au roi des Bretons.",
  "Il dit tellement rien qu'on dinerait avec un tabouret ce serait pareil.",
  "Tenez ! c'est le mot que je cherchais… il gouverne comme une femme !",
  "C'est quand même formidable ce pays, faut galoper à coté de la route pour pas se casser la gueule.",
  "C'est quand même magnifique une armée bien coordonnée, hein...ben quoi, vous allez pas m'dire qu'on a pas l'air con avec nos drapeaux, ça fait une heure qu'on fait des signes ; y'en a pas un qui va dans le même sens !",
  'J’ dis déjà pas merci dans ma langue, alors je vais pas l’apprendre en picte.',
  "Personnellement, la condition paysanne, j'me la taille en biseau, voyez.",
  'Avec un pif pareil ils feraient mieux de chercher des truffes plutôt que de nous emmerder !',
  "En tout cas, on a cramé leur tueur, s'ils veulent le récupérer, il est facile à transporter.",
  "Moi une fois, j'étais tellement raide que j'avais l'impression de me faire attaquer de tous côtés, j'me défendais, j'me défendais... En fait, j'étais dans un pâturage, j'ai tué 76 chèvres !",
  "Bon par exemple moi j'adore les fraises, bon bah si j'bouffe 3 bassines de fraises en 1 heure ah bah j'choppe la chiasse hein, j'suis comme tout l'monde hein...",
  "Eh bah mon vieux... Pour ça comme pour le reste, on n'est pas à la hauteur de la légende.",
  "C'est marrant parce que, d'habitude, dans les tartes, moi, je mange les fruits puis je laisse la pâte.(Arthur : Et là, vous faites l'inverse ?) Hein ? Ah non, là, je laisse tout.",
  'Oh, la fierté… Si j’avais dû être à cheval là-dessus, je vous aurais pas épousée, déjà.',
  "Dites, vous savez qu'à solliciter trop souvent la patience des gens, on finit par agacer ?",
  "Sire ! Mon père est peut-être unijambiste, mais moi, ma femme n'a pas de moustache ! […] Alors ça vient? p'tite bite !",
  'JE NE MANGE PAS DE GRAINES !',
  "Je ne bouffe pas que des graines, Sire, mais j'estime que si on avale l'équivalent de son poids en viande deux fois par jour, il ne faut pas s'étonner de ne pas pouvoir mettre un pied devant l'autre sur un champ de bataille.",
  'En garde, ma biquette ! Je vais vous découper le gras du cul, ça vous fera ça de moins à trimbaler !',
  'Putain, en plein dans sa mouille !',
  'Faut faire comme avec les scorpions qui se suicident quand ils sont entourés par le feu, faut faire un feu en forme de cercle, autour d’eux, comme ça ils se suicident, pendant que nous on fait le tour et on lance de la caillasse de l’autre côté pour brouiller... Non ?',
  'C’est pas faux.',
  'Donc, pour résumer, je suis souvent victime des colibris, sous-entendu des types qu’oublient toujours tout. Euh, non… Bref, tout ça pour dire, que je voudrais bien qu’on me considère en tant que Tel.',
  'Excusez, c’est juste pour vous dire que je vais pas pouvoir rester aujourd’hui ! Faut que je retourne à la ferme de mes vieux ! Y a ma grand-mère qui a glissé sur une bouse ! C’est le vrai merdier !',
  'C’est pour ça : j’lis jamais rien. C’est un vrai piège à cons c’t’histoire-là. En plus j’sais pas lire.',
  "Ça sert à rien, un siège, si elle est enceinte, il faut des linges blancs et une bassine d'eau chaude.",
  "Une fois, à une exécution, je m'approche d'une fille. Pour rigoler, je lui fais : « Vous êtes de la famille du pendu ? »... C'était sa sœur. Bonjour l'approche !",
  'Sire, Sire ! On en a gros !',
  "Moi, j'serais vous, je vous écouterais... Non, moi, j'serais nous, je vous... Si moi, j'étais vous, je vous écouterais ! Non, elle me fait chier, cette phrase !",
  'De toutes façons, les réunions de la Table Ronde c’est deux fois par mois. Donc, si le mec il dit après-demain à partir de dans deux jours, suivant s’il le dit à la fin du mois, ça reporte.',
  'Là, vous faites sirop de vingt-et-un et vous dites : beau sirop, mi-sirop, siroté, gagne-sirop, sirop-grelot, passe-montagne, sirop au bon goût.',
  "13, 14, 15... Enfin tous les chiffres impairs jusqu'à 22.",
  'Salut, Sire. Je trouve qu’il fait beau, mais encore frais, mais beau !',
  'Le Graal, c’est une vraie saloperie, méfiez-vous. Un jour c’est un vase, une semaine après une pierre incandescente.',
  'Non, vous, vous vous maravez. Quand on a pas de technique, il faut y aller à la zob.',
  "Ça prouve que j'ai de l'ubiquité... De l'humilité ? C'est pas quand il y a des infiltrations ?",
  "À ROULEEEEETTES !! HOULA... J'l'ai un peu trop gueulé ça, non ? À roulettes.",
  "Ah, mais c'est de là que ça vient ! Quand on dit 'ça va comme sur des roulettes'. En fait ça veut dire qu'le mec il peut balancer un morceau de rocher comme une catapulte, il continue quand même d'avancer d'façon mobile.",
  'Je vous ai vu une fois dans une carriole, tirée par un cheval. Enfin, la carriole tirée par un cheval.',
  "Dans le Languedoc, ils m'appellent Provençal. Mais c'est moi qui m'suis gouré en disant mon nom. Sinon, en Bretagne, c'est le Gros Faisan au sud, et au nord, c'est juste Ducon ..",
  "Vous vous prenez pour un enseignant ?... Non j' s'entais que c'était le moment d'faire une vanne mais y'a rien qui est sorti.",
  "C'est pas moi qu'explique mal, c'est les autres qui sont cons !",
  "Je vais le tuer, Sire ! Je vais tellement si tant y taper sa gueule qu'il va décéder !",
  "Oui bien sûr, C'est au sujet de quoi t'est-ce ?",
  "Non mais faut rentrer chez vous là m'sieur ! Faut laisser travailler les honnêtes paysans ! Sans ça vous allez ramasser des fourches dans le cul !",
  "Oh ben merde ! La tuile ! Ch'uis ben confus ! Eh ben votre poule elle est entièrement décédée ! J'ai retiré la tête du reste pas plus tard que ce matin ! J'espère que ça vous fera pas défaut !",
  "Mais tout à fait ! Eh ben je dirais également que le genou peut partir dans les noix de manière assez soudaine et que ça pourrait éventuellement vous faire sortir les baloches par les oreilles. N'y voyez aucune malice !",
  "Mais tout à fait ! En parlant de... d'antidote hein, je souhaiterais vous suggérer un endroit où vous pourriez éventuellement vous le carrer... en vous remerciant !",
  "Bon ben je vous préviens, je vous écoute 30 secondes pas une de plus. Si il y a un mot plus haut que l'autre, je vous mets toute la tartine dans la gueule et je rentre chez moi, j'ai pas que ça à glander.",
  'Commencez pas à noyer la peau de l’ours avant d’avoir vendu le poisson.',
  "Et qu'est-ce qui font-ils, au gouvernement ? Y's'roucent les poules ! Y's'poulent les rouces ! [Guethenoc : Y's'roulent les pouces !] Voilà, mieux !",
  "Vous pouvez pas vous les compter vous-même vos points ? Faut forcément qu'on vous tienne le zizi ?",
  'Une fois j’ai craché sur les pompes de l’empereur Justinien, alors je vais pas me gratter pour l’un de ses sous-fifres !',
  'Vous vous étonnerez pas si vous ressentez une vive douleur sur le sommet du crâne. C’est sûrement que vous aurez pris le plat à gigot dans la tronche !',
  "Des fuites ? Apprenez qu'avec le budget bouffe de Kaamelott, y'a de quoi lever une armée parallèle et envahir la moitié du monde connu.",
  'Bohort il a une femme ! Vous pouvez me la refaire sans trembler des genoux celle-là ?',
];

const Chat = () => {
  const [nb, setNb] = useState(Math.floor(Math.random() * messages.length));
  const [message, setMessage] = useState('');
  const [messagesArray, setMessagesArray] = useState([]);

  const conversationBottom = useRef(null);

  const scrollToBottom = () => {
    conversationBottom.current.scrollIntoView({ behavior: 'smooth' });
    console.log(conversationBottom.current);
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      setNb(Math.floor(Math.random() * messages.length));
    }, 2000);
    return () => {
      clearInterval(myInterval);
      console.log(myInterval);
    };
  }, []);

  useEffect(() => {
    setMessage(messages[nb]);
  }, [nb]);

  useEffect(() => {
    setMessagesArray([...messagesArray, message]);
  }, [message]);

  useEffect(() => {
    scrollToBottom();
  }, [messagesArray]);

  return (
    <div>
      <div className='appli'>
        <h1>Chat Kaamelott</h1>
        <div className='chat-container'>
          {messagesArray.map((element, index) => {
            return (
              <div key={index}>
                {index !== 0 &&
                  (index % 2 === 0 ? (
                    <div className='bot1'>{element}</div>
                  ) : (
                    <div className='bot2'>{element}</div>
                  ))}
              </div>
            );
          })}
          <div className='bottom' ref={conversationBottom}></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
