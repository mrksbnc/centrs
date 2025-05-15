export interface ContentItem {
	id: string;
	type: 'image' | 'text';
	content: string;
	isAI: boolean;
	explanation: string;
	source?: string;
}

export const mockContent: ContentItem[] = [
	{
		id: 'A1',
		type: 'image',
		content:
			'https://upload.wikimedia.org/wikipedia/commons/9/98/Pope_Francis_in_puffy_winter_jacket.jpg',
		isAI: true,
		explanation:
			'An AI-generated image of Pope Francis wearing a trendy white puffer coat went viral, fooling many online. It sparked conversations about the ease of creating realistic fake photos using tools like Midjourney.',
		source:
			'https://www.reuters.com/article/fact-check/image-of-pope-francis-wearing-oversized-white-puffer-coat-is-ai-generated-idUSL1N36120G',
	},
	{
		id: 'A2',
		type: 'image',
		content:
			'https://upload.wikimedia.org/wikipedia/commons/4/40/Midjourney_Photo_of_Trump%27s_Arrest.jpg',
		isAI: true,
		explanation:
			'Midjourney-generated images surfaced depicting former President Donald Trump being dramatically arrested by police. Created as art, they circulated on social media during real legal news and highlighted how believable AI fakes can be.',
		source:
			'https://www.reuters.com/article/fact-check/images-appearing-to-show-donald-trump-arrest-created-by-ai-idUSL1N35T2TU',
	},
	{
		id: 'A3',
		type: 'image',
		content:
			'https://static.euronews.com/articles/stories/07/48/14/70/808x454_cmsv2_51721317-6a30-5349-aa4b-4b781349396f-7481470.jpg',
		isAI: true,
		explanation:
			'AI-generated protest photos put French President Emmanuel Macron in surreal scenes amid real pension protests. One viral deepfake showed Macron calmly walking past burning trash piles in Paris streets, underscoring how AI images can insert public figures into fictional scenarios.',
		source:
			'https://www.euronews.com/culture/2023/03/23/how-ai-is-putting-president-macron-at-the-heart-of-the-french-pension-protests',
	},
	{
		id: 'A4',
		type: 'image',
		content:
			'https://static.euronews.com/articles/stories/07/48/14/70/808x808_cmsv2_54e0e08d-a8dc-5153-8f31-1c718b2066eb-7481470.jpg',
		isAI: true,
		explanation:
			'Another AI-crafted image from the French pension protests depicted Macron with clenched fists against a backdrop of flames and riots. Though entirely synthetic, such images circulated widely, tapping into real tensions and testing viewers’ ability to discern reality.',
		source:
			'https://www.euronews.com/culture/2023/03/23/how-ai-is-putting-president-macron-at-the-heart-of-the-french-pension-protests',
	},
	{
		id: 'A5',
		type: 'image',
		content:
			'https://static.euronews.com/articles/stories/07/48/14/70/808x454_cmsv2_7f9627f8-4672-5c3b-9b77-a187dd34a19f-7481470.jpg',
		isAI: true,
		explanation:
			'AI images even showed Macron in a humorous light, like collecting garbage in a worker’s vest amid France’s trash strike. These fake split-screen photos were shared to satirize the situation, reflecting how generative AI can be used for political commentary and misinformation alike.',
		source:
			'https://www.euronews.com/culture/2023/03/23/how-ai-is-putting-president-macron-at-the-heart-of-the-french-pension-protests',
	},
	{
		id: 'A6',
		type: 'text',
		content: '"Explosion near the Pentagon" (fake AI-generated image)',
		isAI: true,
		explanation:
			"In May 2023, a fake image of a large explosion by the Pentagon spread on Twitter from 'verified' accounts, briefly causing public panic and a dip on Wall Street. Experts quickly noted telltale AI flaws in the image, and officials debunked it as entirely fabricated.",
		source:
			'https://www.euronews.com/next/2023/05/23/fake-news-about-an-explosion-at-the-pentagon-spreads-on-verified-accounts-on-twitter',
	},
	{
		id: 'A7',
		type: 'text',
		content: '"Lay down arms..." (deepfake video of Zelenskyy)',
		isAI: true,
		explanation:
			'A deepfake video emerged in March 2022 falsely showing Ukrainian President Volodymyr Zelenskyy telling citizens to surrender. The AI-edited clip, which pasted Zelenskyy’s face and voice onto fake footage, was quickly flagged by officials as disinformation amid the Russia-Ukraine war.',
		source:
			'https://www.euronews.com/my-europe/2022/03/16/deepfake-zelenskyy-surrender-video-is-the-first-intentionally-used-in-ukraine-war',
	},
	{
		id: 'A8',
		type: 'text',
		content: '"Hollow Tsai" AI news avatar video',
		isAI: true,
		explanation:
			'Pro-China influence operations deployed deepfake news anchors to deliver propaganda. In one AI-generated video, a lifelike avatar mocked Taiwan’s president as “Hollow Tsai” with bizarre metaphors:contentReference[oaicite:14]{index=14}:contentReference[oaicite:15]{index=15}. Such AI-created “news” clips aim to sway opinions while impersonating real broadcasters.',
		source:
			'https://www.theguardian.com/technology/2024/may/18/how-china-is-using-ai-news-anchors-to-deliver-its-propaganda',
	},
	{
		id: 'A9',
		type: 'text',
		content: '"Wolf News" deepfake anchors',
		isAI: true,
		explanation:
			'Researchers uncovered fake news videos featuring fictional ‘Wolf News’ anchors. These AI-generated presenters, posted by pro-China networks, gave scripted reports – for example, criticizing U.S. gun violence or lauding China – all with entirely fabricated personas:contentReference[oaicite:16]{index=16}:contentReference[oaicite:17]{index=17}. The operation showed how deepfakes can bolster state propaganda.',
		source:
			'https://www.theguardian.com/technology/2024/may/18/how-china-is-using-ai-news-anchors-to-deliver-its-propaganda',
	},
	{
		id: 'A10',
		type: 'text',
		content: '"Trump hugs Fauci" fake images',
		isAI: true,
		explanation:
			'During the 2024 campaign, a DeSantis team video used AI to create images of Donald Trump embracing Dr. Anthony Fauci. Three fake photos of Trump hugging Fauci were inserted among real images:contentReference[oaicite:18]{index=18}:contentReference[oaicite:19]{index=19}, in an attempt to mislead viewers. Twitter later added a note warning that those hug images were AI-generated:contentReference[oaicite:20]{index=20}.',
		source: 'https://www.washingtonpost.com/politics/2023/06/08/desantis-fauci-trump-ai-video/',
	},
	{
		id: 'A11',
		type: 'text',
		content: 'AI image: China invades Taiwan (RNC ad)',
		isAI: true,
		explanation:
			'In April 2023, the Republican National Committee released a dystopian ad built entirely from AI-generated imagery. One scene depicted an "emboldened" China invading Taiwan, a purely fictional scenario visualized by AI. The ad’s creators openly disclosed the use of AI visuals, raising debates on political deepfakes in campaigning.',
		source: 'https://www.washingtonpost.com/politics/2023/04/25/rnc-biden-ad-ai/',
	},
	{
		id: 'A12',
		type: 'text',
		content: 'AI image: Banks collapse (RNC ad)',
		isAI: true,
		explanation:
			'The same RNC video imagined economic chaos: AI-generated images showed shuttered storefronts and claimed that hundreds of regional banks had closed, sending markets into free fall. These visuals, while not real, were made to feel plausibly news-like, illustrating an imagined future crisis through AI.',
		source: 'https://www.washingtonpost.com/politics/2023/04/25/rnc-biden-ad-ai/',
	},
	{
		id: 'A13',
		type: 'text',
		content: 'AI image: Border surge (RNC ad)',
		isAI: true,
		explanation:
			'Another AI-crafted scene in the RNC’s ad showed a mass of migrants illegally crossing a river into the U.S., portraying a completely hypothetical "overrun" border scenario. The synthetic image was used to stoke fear about immigration in a future under the opposing candidate.',
		source: 'https://www.washingtonpost.com/politics/2023/04/25/rnc-biden-ad-ai/',
	},
	{
		id: 'A14',
		type: 'text',
		content: 'AI image: Troops in San Francisco (RNC ad)',
		isAI: true,
		explanation:
			'The AI-generated political ad concluded with images of soldiers in San Francisco streets amid crime and chaos. This vision of martial law in an American city was entirely fabricated by AI to present a "what if" warning in campaign messaging. It exemplified how realistic fake visuals can be weaponized in politics.',
		source: 'https://www.washingtonpost.com/politics/2023/04/25/rnc-biden-ad-ai/',
	},
	{
		id: 'A15',
		type: 'text',
		content: '"Heart on My Sleeve" AI song',
		isAI: true,
		explanation:
			'An anonymous creator released “Heart on My Sleeve,” a viral AI-generated song that cloned the voices of pop stars Drake and The Weeknd:contentReference[oaicite:26]{index=26}:contentReference[oaicite:27]{index=27}. The track amassed millions of listens before Universal Music Group demanded its removal for copyright infringement, fueling debate over AI in music.',
		source: 'https://www.bbc.com/news/entertainment-arts-65298834',
	},
	{
		id: 'A16',
		type: 'text',
		content: '"AISIS" AI Oasis album project',
		isAI: true,
		explanation:
			'A British band called Breezer created an "AI Oasis" album by training a model on Oasis singer Liam Gallagher’s vocals. The resulting songs, released as "AISIS," sounded uncannily like the real band. Liam reacted positively, calling it "mega," while his brother Noel blasted the project as the work of "idiots" with too much time:contentReference[oaicite:30]{index=30}. The experiment highlighted divided opinions on AI mimicry in music.',
		source: 'https://95xlive.com/2023/06/05/unlike-liam-noel-gallagher-isnt-a-fan-of-ai-oasis',
	},
	{
		id: 'A17',
		type: 'text',
		content: "Fake Schumacher 'interview' article",
		isAI: true,
		explanation:
			'In 2023, German magazine Die Aktuelle published a supposed \'exclusive interview\' with F1 legend Michael Schumacher that was actually generated by AI. The fake Q&A, which the magazine admitted "sounds deceptively real," caused an outcry. Schumacher’s family took legal action over this misleading AI-written piece.',
		source:
			'https://www.theguardian.com/sport/2024/may/23/michael-schumacher-family-win-legal-case-against-publisher-over-fake-ai-interview',
	},
	{
		id: 'A18',
		type: 'text',
		content: 'ChatGPT creates fake legal cases',
		isAI: true,
		explanation:
			'A New York lawyer unwittingly submitted a court brief full of nonexistent case citations produced by ChatGPT. The AI invented fake precedents with convincing details, leading a judge to sanction the attorney for “acts of conscious avoidance.” This incident exposed the pitfalls of trusting AI content without verification.',
		source:
			'https://www.reuters.com/legal/new-york-lawyers-sanctioned-using-fake-chatgpt-cases-legal-brief-2023-06-22/',
	},
	{
		id: 'A19',
		type: 'text',
		content: "CNET's AI-written articles plagiarize",
		isAI: true,
		explanation:
			'Tech outlet CNET quietly published dozens of AI-written financial articles, only to find more than half contained errors or plagiarized passages:contentReference[oaicite:35]{index=35}:contentReference[oaicite:36]{index=36}. The revelation in early 2023 prompted CNET to pause its experiment. It underscored how AI-generated journalism can propagate misinformation and copyright issues if not carefully overseen.',
		source: 'https://www.theverge.com/2023/1/25/23571610/cnet-ai-journalism-errors-plagiarism',
	},
	{
		id: 'A20',
		type: 'text',
		content: '"Mom, these bad men have me..." (AI voice scam)',
		isAI: true,
		explanation:
			'Criminals used AI to clone a teen’s voice in an elaborate kidnapping hoax. An Arizona mother received a call with what sounded exactly like her 15-year-old daughter sobbing and pleading for help:contentReference[oaicite:37]{index=37}:contentReference[oaicite:38]{index=38}. In reality, it was an AI-generated voice aimed at extorting ransom. The terrified mom later testified to U.S. senators about the dangers of such AI voice scams.',
		source:
			'https://www.theguardian.com/us-news/2023/jun/14/ai-kidnapping-scam-senate-hearing-jennifer-destefano',
	},
	{
		id: 'A21',
		type: 'text',
		content: "Google Bard's $100B error",
		isAI: true,
		explanation:
			'In February 2023, Google’s new AI chatbot Bard gave an incorrect answer in a demo, claiming the James Webb Space Telescope took the first picture of an exoplanet (it didn’t):contentReference[oaicite:39]{index=39}:contentReference[oaicite:40]{index=40}. The gaffe, caught in Google’s own advertisement, wiped $100 billion off Alphabet’s market value in a single day, highlighting the high-stakes risk of AI misinformation.',
		source:
			'https://www.reuters.com/technology/google-ai-chatbot-bard-offers-inaccurate-information-company-ad-2023-02-08/',
	},
	{
		id: 'A22',
		type: 'text',
		content: 'Deepfake Putin "peace" speech',
		isAI: true,
		explanation:
			'A deepfake video circulated in 2022 appearing to show Russian President Vladimir Putin announcing a sudden peace deal and ending the war. While poorly done, the fake Putin video followed shortly after the Zelenskyy deepfake:contentReference[oaicite:41]{index=41}, illustrating how AI falsifications can target both sides of a conflict to confuse the public. Officials were quick to label the Putin video a fake.',
		source:
			'https://www.independent.co.uk/news/world/europe/putin-video-fake-peace-ukraine-b2038815.html',
	},
	{
		id: 'A23',
		type: 'text',
		content: 'Elon Musk deepfake crypto scams',
		isAI: true,
		explanation:
			'Deepfake videos of Elon Musk have been used in cryptocurrency scam ads across social media:contentReference[oaicite:42]{index=42}. In these clips, Musk seemingly endorses fake investment schemes – but the footage is AI-generated, exploiting his image to lure victims. Studies found Musk to be one of the most impersonated figures in deepfake fraud, given his tech persona and audience reach:contentReference[oaicite:43]{index=43}:contentReference[oaicite:44]{index=44}.',
		source:
			'https://www.cbsnews.com/news/elon-musk-deepfakes-contributing-to-billions-of-dollars-fraud/',
	},
	{
		id: 'A24',
		type: 'text',
		content: 'Non-consensual deepfake porn online',
		isAI: true,
		explanation:
			'The rise of AI has fueled an epidemic of non-consensual explicit deepfakes, often targeting female streamers and celebrities. In one scandal, a Twitch creator was caught viewing AI-generated pornography of his colleagues:contentReference[oaicite:45]{index=45}, drawing attention to the “deepfake porn” problem. Victims have described these fabricated intimate images as deeply violating, leading some jurisdictions to criminalize their creation and sharing.',
		source:
			'https://www.businessinsider.com/deepfake-porn-trauma-twitch-streamer-ai-controversy-experts-2023-2',
	},
	{
		id: 'A25',
		type: 'text',
		content: 'China mandates deepfake labels',
		isAI: true,
		explanation:
			'China implemented pioneering regulations in January 2023 requiring that AI-altered content and deepfakes be clearly labeled:contentReference[oaicite:46]{index=46}. The rules prohibit using deepfake technology to produce fake news or impersonate people without consent. By mandating watermarks and IDs for synthetic media, China became one of the first countries to legally curb deepfake misuse, even as enforcement challenges remain.',
		source:
			'https://www.cnbc.com/2022/12/12/china-to-roll-out-deepfake-law-in-2023-as-it-ramps-up-internet-control.html',
	},
	{
		id: 'H1',
		type: 'text',
		content: '"A grotesque mockery of what it is to be human"',
		isAI: false,
		explanation:
			'Legendary musician Nick Cave publicly blasted an AI-written song made "in the style of Nick Cave." He called the chatbot’s attempt "a grotesque mockery of what it is to be human":contentReference[oaicite:47]{index=47}:contentReference[oaicite:48]{index=48} and firmly rejected AI’s ability to capture authentic creativity or emotion, sparking a broader dialogue on artifice in music.',
		source:
			'https://www.theguardian.com/music/2023/jan/17/this-song-sucks-nick-cave-responds-to-chatgpt-song-written-in-style-of-nick-cave',
	},
	{
		id: 'H2',
		type: 'text',
		content: '"Scanned... for the rest of eternity"',
		isAI: false,
		explanation:
			'As Hollywood grappled with AI, actors fought back. SAG-AFTRA’s chief negotiator revealed studios had proposed scanning background actors and owning their digital likeness "for the rest of eternity" with no further consent or pay:contentReference[oaicite:49]{index=49}:contentReference[oaicite:50]{index=50}. Outrage over this AI proposal helped fuel the actors’ strike in 2023, until new union contracts won protections for performers.',
		source: 'https://www.theverge.com/2023/7/13/23794224/sag-aftra-actors-strike-ai-image-rights',
	},
	{
		id: 'H3',
		type: 'text',
		content: 'Writers Guild wins AI safeguards',
		isAI: false,
		explanation:
			'In late 2023, the Writers Guild of America ended a long strike with a landmark deal limiting AI in screenwriting:contentReference[oaicite:51]{index=51}:contentReference[oaicite:52]{index=52}. The agreement ensures that generative AI can’t be credited as a writer and that studios can’t force writers to polish AI-written scripts. Any use of AI is purely at the writer’s discretion, protecting writers from being replaced by algorithms.',
		source:
			'https://www.cdt.org/insights/the-sag-aftra-strike-is-over-but-the-ai-fight-in-hollywood-is-just-beginning/',
	},
	{
		id: 'H4',
		type: 'text',
		content: '"Copyright-laundering devices"',
		isAI: false,
		explanation:
			'A group of visual artists (led by Sarah Andersen, Karla Ortiz and others) filed a class-action lawsuit against AI firms Stability AI, Midjourney and DeviantArt for training models on millions of artworks without consent:contentReference[oaicite:53]{index=53}:contentReference[oaicite:54]{index=54}. The artists argue these systems are basically "copyright-laundering devices" that steal art styles:contentReference[oaicite:55]{index=55}. The case is one of the first major legal battles over AI and artists’ rights.',
		source:
			'https://www.reuters.com/legal/litigation/artists-take-new-shot-stability-midjourney-updated-copyright-lawsuit-2023-11-30/',
	},
	{
		id: 'H5',
		type: 'text',
		content: 'Getty Images sues Stability AI',
		isAI: false,
		explanation:
			'Stock photo giant Getty Images sued Stability AI in 2023, accusing the AI startup of illegally scraping 12 million Getty photos (often with the Getty watermark still distorted in outputs) to train its Stable Diffusion model. Getty argued the blatant copying of its content without permission or compensation is a textbook case of mass copyright infringement in the AI era.',
		source:
			'https://www.theverge.com/2023/2/6/23587393/ai-art-copyright-lawsuit-getty-images-stable-diffusion',
	},
	{
		id: 'H6',
		type: 'text',
		content: '"It sounds deceptively real" tabloid cover',
		isAI: false,
		explanation:
			'After a German tabloid published an AI-generated "interview" with Michael Schumacher, the F1 legend’s family sued the publisher and won. The magazine had splashed "Michael Schumacher’s first interview!" on its cover – with a smaller admission that "it sounds deceptively real" – effectively confirming the quotes were fake. The scandal led to the editor’s firing and an apology to Schumacher’s family.',
		source: 'https://apnews.com/article/schumacher-fake-interview-d90d3802c6e3ea49f0da6c7795e954cd',
	},
	{
		id: 'H7',
		type: 'text',
		content: 'Mother testifies on AI voice scam',
		isAI: false,
		explanation:
			'Jennifer DeStefano, an Arizona mother, gave emotional testimony to U.S. lawmakers about being targeted by an AI voice cloning scam:contentReference[oaicite:60]{index=60}:contentReference[oaicite:61]{index=61}. She recounted how scammers used AI to mimic her daughter’s voice in a fake kidnapping call – an experience she described as “traumatic” and illustrative of the urgent need to tackle AI-driven fraud. Her story has put pressure on regulators to act against such scams.',
		source:
			'https://www.theguardian.com/us-news/2023/jun/14/ai-kidnapping-scam-senate-hearing-jennifer-destefano',
	},
	{
		id: 'H8',
		type: 'text',
		content: '"Completely unacceptable" fake images in campaign',
		isAI: false,
		explanation:
			'Politicians from both parties voiced concern about deepfakes in elections. After Ron DeSantis’s team used AI-generated images of Trump with Fauci, Senator J.D. Vance – a Trump ally – publicly rebuked the tactic, tweeting that “smearing Donald Trump with fake AI images is completely unacceptable”:contentReference[oaicite:62]{index=62}. His warning reflected a growing bipartisan worry about AI deception in the political arena.',
		source: 'https://www.washingtonpost.com/politics/2023/06/08/desantis-fauci-trump-ai-video/',
	},
	{
		id: 'H9',
		type: 'text',
		content: '"May pose a risk to our survival" – Pope Francis',
		isAI: false,
		explanation:
			'Pope Francis called for a global treaty to govern AI, cautioning that some AI applications "may pose a risk to our survival and endanger our common home" if left unchecked:contentReference[oaicite:63]{index=63}:contentReference[oaicite:64]{index=64}. In a 2023 peace message, he urged ethical oversight so that algorithms do not override human rights and dignity. The Pope’s unusually stark warning underscored the moral stakes of unchecked AI development.',
		source:
			'https://www.reuters.com/technology/pope-calls-binding-global-treaty-artificial-intelligence-2023-12-14/',
	},
	{
		id: 'H10',
		type: 'text',
		content: '"AI is not photography" – artist refuses award',
		isAI: false,
		explanation:
			'When an AI-generated image won a prize at the Sony World Photography Awards, its creator, Boris Eldagsen, refused the award:contentReference[oaicite:65]{index=65}:contentReference[oaicite:66]{index=66}. Eldagsen had submitted the AI image deliberately to test the competition, then declined the prize, arguing “AI images and photography should not compete… AI is not photography.” His stance sparked a vital debate on how to classify and judge AI-generated art.',
		source:
			'https://www.theguardian.com/technology/2023/apr/17/photographer-admits-prize-winning-image-was-ai-generated',
	},
	{
		id: 'H11',
		type: 'text',
		content: '"Too much time on their hands" – Oasis AI album backlash',
		isAI: false,
		explanation:
			'Not everyone embraces AI creativity. After an "AI Oasis" fan album mimicked Liam Gallagher’s voice, his brother Noel Gallagher scoffed at the project, saying “these idiots have clearly got too much time on their hands and too much money” to be messing with that:contentReference[oaicite:67]{index=67}. Noel’s exasperation highlights the resentment some artists feel toward AI replicas of their work.',
		source: 'https://95xlive.com/2023/06/05/unlike-liam-noel-gallagher-isnt-a-fan-of-ai-oasis',
	},
	{
		id: 'H12',
		type: 'text',
		content: 'Authors sue OpenAI over books',
		isAI: false,
		explanation:
			'In 2023, dozens of prominent authors – including Sarah Silverman, Paul Tremblay, John Grisham and George R.R. Martin – filed lawsuits accusing OpenAI of copying their novels and books to train ChatGPT without permission:contentReference[oaicite:68]{index=68}:contentReference[oaicite:69]{index=69}. They claim this unauthorized ingestion of copyrighted text violates their rights. The cases, now consolidated, represent writers’ pushback against AI firms using literary works as free training data.',
		source:
			'https://www.reuters.com/technology/pulitzer-winning-authors-join-openai-microsoft-copyright-lawsuit-2023-10-04/',
	},
	{
		id: 'H13',
		type: 'text',
		content: 'New York Times vs OpenAI copyright case',
		isAI: false,
		explanation:
			'The New York Times and other news publishers launched a high-profile copyright lawsuit against OpenAI and Microsoft in late 2023:contentReference[oaicite:70]{index=70}:contentReference[oaicite:71]{index=71}. They allege ChatGPT was trained on millions of their articles without consent, and seek to stop AI companies from exploiting journalistic content for profit. This clash between news media and AI developers could set major precedents for data use and fair use boundaries.',
		source: 'https://www.npr.org/2025/01/14/nx-s1-5258952/new-york-times-openai-microsoft',
	},
	{
		id: 'H14',
		type: 'text',
		content: 'Artists deploy "Glaze" to protect art',
		isAI: false,
		explanation:
			'As a defense against style-copying by AI, researchers at University of Chicago released a tool called "Glaze" to help artists cloak their digital art:contentReference[oaicite:72]{index=72}. Glaze adds subtle changes to artworks that are invisible to humans but confuse AI models attempting to learn the artist’s style. This human innovation aims to preserve artists’ creative signatures in the face of AI scraping.',
		source: 'https://www.itbrew.com/stories/glaze-aims-to-protect-artists-from-ai',
	},
	{
		id: 'H15',
		type: 'text',
		content: 'Associated Press strikes content deal with OpenAI',
		isAI: false,
		explanation:
			'In a milestone collaboration, the Associated Press agreed in 2023 to license a portion of its news archives to OpenAI:contentReference[oaicite:73]{index=73}:contentReference[oaicite:74]{index=74}. In return, AP will explore OpenAI’s technology. This marked one of the first major deals between a news organization and an AI firm, illustrating a negotiated path to use of human-generated content in AI training – in contrast to the legal fights over unauthorized data usage.',
		source:
			'https://apnews.com/article/openai-chatgpt-ap-news-archive-68d620d5bf25da9a7b51b051c53fbe8b',
	},
	{
		id: 'H16',
		type: 'text',
		content: 'DC Comics pulls AI-assisted covers',
		isAI: false,
		explanation:
			'In 2023, DC Comics removed several variant comic book covers after fans noticed they appeared to contain AI-generated art. Artist Francesco Mattina was accused of using an AI tool for textures (like strangely rendered hands), violating DC’s policy. The publisher promptly dropped the covers and stated it does not allow AI artwork, reflecting industry pushback against uncredited AI use in publishing:contentReference[oaicite:75]{index=75}:contentReference[oaicite:76]{index=76}.',
		source: 'https://gizmodo.com/dc-comics-francesco-mattina-ai-variant-cover-1850700172',
	},
	{
		id: 'H17',
		type: 'text',
		content: "Marvel's AI-generated TV intro sparks backlash",
		isAI: false,
		explanation:
			'Marvel’s 2023 series "Secret Invasion" debuted with an opening credits sequence created using AI art, igniting backlash from both fans and artists:contentReference[oaicite:77]{index=77}:contentReference[oaicite:78]{index=78}. Critics argued Marvel chose a gimmick over hiring human animators, fueling fears that AI might displace creative jobs. Marvel said the eerie, shape-shifting style fit the show’s themes, but the controversy underscored real-world anxieties about AI encroaching on creative industries.',
		source:
			'https://www.theguardian.com/film/2023/jun/22/marvel-backlash-ai-generated-opening-credits-secret-invasion',
	},
	{
		id: 'H18',
		type: 'text',
		content: 'Italy bans ChatGPT over privacy',
		isAI: false,
		explanation:
			'Italy became the first Western country to temporarily ban ChatGPT in March 2023 over privacy concerns:contentReference[oaicite:79]{index=79}:contentReference[oaicite:80]{index=80}. The Italian data protection authority objected to OpenAI’s data collection practices and lack of age controls. ChatGPT was reinstated a few weeks later after OpenAI implemented new disclosures and safeguards. Italy’s bold move pressured AI providers to better comply with privacy laws.',
		source: 'https://www.bbc.com/news/technology-65139406',
	},
	{
		id: 'H19',
		type: 'text',
		content: 'US regulators grapple with AI political ads',
		isAI: false,
		explanation:
			'Ahead of the 2024 election, the U.S. Federal Election Commission debated regulating deepfakes in campaign ads:contentReference[oaicite:81]{index=81}:contentReference[oaicite:82]{index=82}. In late 2023 the FEC took initial steps toward rules requiring disclosure of AI-altered content, responding to incidents like fake candidate voices and images. However, they ultimately stalled on new regulations. Lawmakers have since introduced bills to mandate labels on AI-generated political content, amid warnings that unchecked deepfakes could undermine voters’ trust.',
		source:
			'https://www.pbs.org/newshour/politics/fec-moves-toward-potentially-regulating-ai-deepfakes-in-campaign-ads-ahead-of-2024-election',
	},
	{
		id: 'H20',
		type: 'text',
		content: 'Tom Hanks warns of deepfake ad',
		isAI: false,
		explanation:
			'Academy Award winner Tom Hanks took to social media in October 2023 to warn fans about an AI deepfake of himself being used in a scam ad for dental plans:contentReference[oaicite:83]{index=83}:contentReference[oaicite:84]{index=84}. Hanks stressed that the realistic ad – which featured his face and voice – was completely fake and created without his consent. His public service announcement highlighted growing concerns as celebrities find their likenesses digitally cloned for fraud.',
		source: 'https://www.bbc.com/news/entertainment-arts-66981773',
	},
	{
		id: 'H21',
		type: 'text',
		content: 'MrBeast deepfake video scam',
		isAI: false,
		explanation:
			'Top YouTuber MrBeast (Jimmy Donaldson) also sounded an alarm after deepfake clips of him began spreading in ads on TikTok:contentReference[oaicite:85]{index=85}:contentReference[oaicite:86]{index=86}. The fake videos showed a simulated MrBeast promising prizes to viewers who clicked malicious links. In response, MrBeast and others urged social platforms to ban such AI-generated scam ads. This highlighted how even digitally-savvy influencers are not immune to being impersonated by AI for fraud.',
		source: 'https://www.bbc.com/news/technology-67297417',
	},
	{
		id: 'H22',
		type: 'text',
		content: 'UK criminalizes deepfake porn',
		isAI: false,
		explanation:
			'In 2023 the UK passed the Online Safety Act, which for the first time makes it a criminal offense to create or share explicit deepfake images without consent:contentReference[oaicite:87]{index=87}:contentReference[oaicite:88]{index=88}. Victims had long called for such a law as sexually explicit deepfakes (often targeting women) proliferated. Under the new law, offenders in England and Wales can face substantial fines or even jail time for deepfake porn, sending a "crystal clear" message that this abuse is unacceptable:contentReference[oaicite:89]{index=89}:contentReference[oaicite:90]{index=90}.',
		source:
			'https://www.theguardian.com/law/2023/nov/29/sharing-deepfake-intimate-images-to-be-criminalised-in-england-and-wales',
	},
	{
		id: 'H23',
		type: 'text',
		content: 'FEC delays deepfake ad rules',
		isAI: false,
		explanation:
			'The U.S. Federal Election Commission in 2023 considered regulating AI deepfakes in political ads but ultimately took no immediate action:contentReference[oaicite:91]{index=91}:contentReference[oaicite:92]{index=92}. A petition to require disclaimers on AI-altered campaign media stalled due to a deadlock. Advocates warn that without rules, the 2024 election could see a surge of misleading AI-generated ads, but the FEC’s inaction means any protections will rely on voluntary measures or new legislation.',
		source:
			'https://www.pbs.org/newshour/politics/fec-moves-toward-potentially-regulating-ai-deepfakes-in-campaign-ads-ahead-of-2024-election',
	},
	{
		id: 'H24',
		type: 'text',
		content: 'Publishers vs OpenAI in court',
		isAI: false,
		explanation:
			'In Dec 2023, a coalition of publishers led by The New York Times, Newsday, and others took OpenAI to court in a major copyright case:contentReference[oaicite:93]{index=93}:contentReference[oaicite:94]{index=94}. They allege ChatGPT’s training data included millions of their articles, infringing on copyrights. While some media companies struck licensing deals with OpenAI, these publishers chose litigation, arguing that AI firms must pay for the content that powers their bots.',
		source: 'https://www.npr.org/2025/01/14/nx-s1-5258952/new-york-times-openai-microsoft',
	},
	{
		id: 'H25',
		type: 'text',
		content: 'Black Mirror satirizes deepfakes',
		isAI: false,
		explanation:
			'Reflecting cultural anxieties, the hit anthology show "Black Mirror" featured a 2023 episode "Joan Is Awful" about a streaming service using AI to instantly dramatize peoples’ lives. In the satire, a woman finds her likeness (played by Salma Hayek) in a hyper-realistic AI-generated series without her consent. The episode resonated as commentary on deepfakes and tech ownership of personal data, showing art imitating life’s newest fears.',
		source:
			'https://www.theguardian.com/tv-and-radio/2023/jun/16/black-mirror-season-six-review-charlie-brooker',
	},
	{
		id: 'H26',
		type: 'text',
		content: 'California law protects actors from AI cloning',
		isAI: false,
		explanation:
			'In 2024, California enacted new laws to safeguard performers against AI replicas. The legislation requires studios to obtain consent before using an actor’s voice or likeness to create a "digital replica":contentReference[oaicite:95]{index=95}. It also gives actors legal rights if their image is manipulated by AI after death. These laws – spurred by union pressure – aim to ensure that Hollywood cannot replace or resurrect performers via AI without permission.',
		source:
			'https://apnews.com/article/california-hollywood-actors-ai-protections-artificial-intelligence-d3d53135ee76849c2da1388efcfc8975',
	},
];

export function getRandomQuestions(count: number = 5): ContentItem[] {
	const shuffled = [...mockContent].sort(() => 0.5 - Math.random()).slice(0, count);

	return shuffled;
}

export function fetchMockQuestions(count: number = 5): ContentItem[] {
	return getRandomQuestions(count);
}
