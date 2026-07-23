const TEMPLATES = {
  gentle: [
    (c,s,v)=>`In ${s}, the ${c} spent the morning ${verbToGerundPhrase(v)}, while every breeze seemed to smile.`,
    (c,s,v)=>`Each sunrise brought the ${c} back to ${s} for ${verbToGerundPhrase(v)} among the flowers.`,
    (c,s,v)=>`The ${c} wandered through ${s}, happily ${verbToGerundPhrase(v)} as birds sang overhead.`,
    (c,s,v)=>`Morning light wrapped around ${s} as the ${c} enjoyed ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The quiet paths of ${s} welcomed the ${c}, who couldn't resist ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`A gentle breeze followed the ${c} through ${s} while ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Every flower in ${s} seemed to bloom a little brighter whenever the ${c} went ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} smiled softly while ${verbToGerundPhrase(v)} through ${s}, leaving tiny happy footprints behind.`,
    (c,s,v)=>`In the peaceful heart of ${s}, the ${c} found joy in ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The day felt wonderfully calm as the ${c} explored ${s} by ${verbToGerundPhrase(v)}.`
  ],

  adventure: [
    (c,s,v)=>`With a brave heart, the ${c} entered ${s} to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`A winding trail led the ${c} toward ${s}, where it hoped to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`Everyone wondered what would happen when the ${c} decided to ${verbToPlainPhrase(v)} in ${s}.`,
    (c,s,v)=>`Beyond the tallest trees, ${s} waited for the ${c} to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`The adventure began the moment the ${c} stepped into ${s} to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`A mysterious path invited the ${c} to ${verbToPlainPhrase(v)} deep inside ${s}.`,
    (c,s,v)=>`The ${c} packed a tiny bag before heading to ${s} to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`One bold decision carried the ${c} straight into ${s} to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`Every adventure starts with one small step, and the ${c} took it in ${s} to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`The wind whispered, "Come along," as the ${c} hurried toward ${s} to ${verbToPlainPhrase(v)}.`
  ],

  mystery: [
    (c,s,v)=>`Something unusual stirred in ${s} just as the ${c} began ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} noticed tiny glowing footprints while ${verbToGerundPhrase(v)} through ${s}.`,
    (c,s,v)=>`No one had ever seen ${s} so quiet until the ${c} started ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`A single sparkling feather appeared while the ${c} was ${verbToGerundPhrase(v)} in ${s}.`,
    (c,s,v)=>`Every clue pointed deeper into ${s}, encouraging the ${c} to keep ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The air shimmered with secrets as the ${c} continued ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Who had left those tiny tracks in ${s}? The ${c} kept ${verbToGerundPhrase(v)} to find out.`,
    (c,s,v)=>`Even the birds grew quiet when the ${c} began ${verbToGerundPhrase(v)} in ${s}.`,
    (c,s,v)=>`Hidden beneath a fern, the first clue appeared while the ${c} was ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`A gentle mystery unfolded in ${s} as the ${c} continued ${verbToGerundPhrase(v)}.`
  ],

  funny: [
    (c,s,v)=>`The ${c} tried ${verbToGerundPhrase(v)}, but a very curious squirrel insisted on helping.`,
    (c,s,v)=>`Everyone laughed when the ${c} accidentally turned ${verbToGerundPhrase(v)} into a silly dance.`,
    (c,s,v)=>`While ${verbToGerundPhrase(v)} in ${s}, the ${c} discovered that hiccups can be surprisingly magical.`,
    (c,s,v)=>`The ${c} couldn't stop giggling after ${verbToGerundPhrase(v)} woke up three sleepy frogs.`,
    (c,s,v)=>`A tiny bird gave the ${c} completely unnecessary advice about ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Even the butterflies seemed amused as the ${c} kept ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The funniest surprise of the day happened while the ${c} was ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`One little sneeze sent the ${c} spinning into the funniest adventure while ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The ${c} expected an ordinary day, but ${verbToGerundPhrase(v)} quickly became delightfully ridiculous.`,
    (c,s,v)=>`Nobody expected a parade of ducklings to join the ${c} while ${verbToGerundPhrase(v)}.`
  ],

  poetic: [
    (c,s,v)=>`Morning dew shimmered like tiny stars as the ${c} began ${verbToGerundPhrase(v)} in ${s}.`,
    (c,s,v)=>`The wind carried gentle songs while the ${c} wandered ${s}, ${verbToGerundPhrase(v)} with quiet wonder.`,
    (c,s,v)=>`Every leaf seemed to remember the footsteps of the ${c} while ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Sunlight painted golden paths through ${s}, inviting the ${c} to ${verbToPlainPhrase(v)}.`,
    (c,s,v)=>`The gentle rhythm of nature surrounded the ${c} as ${verbToGerundPhrase(v)} became a peaceful dance.`,
    (c,s,v)=>`The sky glowed softly above ${s} while the ${c} found beauty in ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Tiny echoes of laughter drifted across ${s} as the ${c} continued ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`The forest held its breath while the ${c} quietly practiced ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`Every sparkling stream reflected the dreams of the ${c} while ${verbToGerundPhrase(v)}.`,
    (c,s,v)=>`In the quiet magic of ${s}, the ${c} discovered that ${verbToGerundPhrase(v)} could brighten even the smallest heart.`
  ]
};
