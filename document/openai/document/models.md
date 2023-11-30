


Models
New models launched at DevDay

We are excited to announce the preview release of GPT-4 Turbo (128k context window) and an updated GPT-3.5 Turbo (16k context window). Among other things, both models come with improved instruction following, JSON mode, more reproducible outputs, and parallel function calling.
Learn more.
Overview
The OpenAI API is powered by a diverse set of models with different capabilities and price points. You can also make customizations to our models for your specific use case with fine-tuning.

MODEL	DESCRIPTION
GPT-4 and GPT-4 Turbo	A set of models that improve on GPT-3.5 and can understand as well as generate natural language or code
GPT-3.5	A set of models that improve on GPT-3 and can understand as well as generate natural language or code
DALL·E	A model that can generate and edit images given a natural language prompt
TTS	A set of models that can convert text into natural sounding spoken audio
Whisper	A model that can convert audio into text
Embeddings	A set of models that can convert text into a numerical form
Moderation	A fine-tuned model that can detect whether text may be sensitive or unsafe
GPT base	A set of models without instruction following that can understand as well as generate natural language or code
GPT-3Legacy	A set of models that can understand and generate natural language
Deprecated	A full list of models that have been deprecated along with the suggested replacement
We have also published open source models including Point-E, Whisper, Jukebox, and CLIP.

Visit our model index for researchers to learn more about which models have been featured in our research papers and the differences between model series like InstructGPT and GPT-3.5.

Continuous model upgrades
gpt-3.5-turbo, gpt-4, and gpt-4-32k point to the latest model version. You can verify this by looking at the response object after sending a request. The response will include the specific model version used (e.g. gpt-3.5-turbo-0613).

We also offer static model versions that developers can continue using for at least three months after an updated model has been introduced. With the new cadence of model updates, we are also giving people the ability to contribute evals to help us improve the model for different use cases. If you are interested, check out the OpenAI Evals repository.

The following models are the temporary snapshots, which we have already announced the deprecation dates of along with their replacement. If you want to use the latest model version, use the standard model names like gpt-4 or gpt-3.5-turbo.

MODEL NAME	DISCONTINUATION DATE	REPLACEMENT MODEL
gpt-3.5-turbo-0613	Jun 13, 2024	gpt-3.5-turbo-1106
gpt-3.5-turbo-0301	Jun 13, 2024	gpt-3.5-turbo-1106
gpt-4-0314	Jun 13, 2024	gpt-4-0613
gpt-4-32k-0314	Jun 13, 2024	gpt-4-32k-0613
Learn more about model deprecation on our deprecation page.

GPT-4 and GPT-4 Turbo
GPT-4 is a large multimodal model (accepting text or image inputs and outputting text) that can solve difficult problems with greater accuracy than any of our previous models, thanks to its broader general knowledge and advanced reasoning capabilities. GPT-4 is available in the OpenAI API to paying customers. Like gpt-3.5-turbo, GPT-4 is optimized for chat but works well for traditional completions tasks using the Chat Completions API. Learn how to use GPT-4 in our GPT guide.

MODEL	DESCRIPTION	CONTEXT WINDOW	TRAINING DATA
gpt-4-1106-preview	GPT-4 TurboNew
The latest GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Returns a maximum of 4,096 output tokens. This preview model is not yet suited for production traffic. Learn more.	128,000 tokens	Up to Apr 2023
gpt-4-vision-preview	GPT-4 Turbo with visionNew
Ability to understand images, in addition to all other GPT-4 Turbo capabilties. Returns a maximum of 4,096 output tokens. This is a preview model version and not suited yet for production traffic. Learn more.	128,000 tokens	Up to Apr 2023
gpt-4	Currently points to gpt-4-0613. See continuous model upgrades.	8,192 tokens	Up to Sep 2021
gpt-4-32k	Currently points to gpt-4-32k-0613. See continuous model upgrades.	32,768 tokens	Up to Sep 2021
gpt-4-0613	Snapshot of gpt-4 from June 13th 2023 with improved function calling support.	8,192 tokens	Up to Sep 2021
gpt-4-32k-0613	Snapshot of gpt-4-32k from June 13th 2023 with improved function calling support.	32,768 tokens	Up to Sep 2021
gpt-4-0314
Legacy	Snapshot of gpt-4 from March 14th 2023 with function calling support. This model version will be deprecated on June 13th 2024.	8,192 tokens	Up to Sep 2021
gpt-4-32k-0314
Legacy	Snapshot of gpt-4-32k from March 14th 2023 with function calling support. This model version will be deprecated on June 13th 2024.	32,768 tokens	Up to Sep 2021
For many basic tasks, the difference between GPT-4 and GPT-3.5 models is not significant. However, in more complex reasoning situations, GPT-4 is much more capable than any of our previous models.

Multilingual capabilities
GPT-4 outperforms both previous large language models and as of 2023, most state-of-the-art systems (which often have benchmark-specific training or hand-engineering). On the MMLU benchmark, an English-language suite of multiple-choice questions covering 57 subjects, GPT-4 not only outperforms existing models by a considerable margin in English, but also demonstrates strong performance in other languages.

GPT-3.5
GPT-3.5 models can understand and generate natural language or code. Our most capable and cost effective model in the GPT-3.5 family is gpt-3.5-turbo which has been optimized for chat using the Chat Completions API but works well for traditional completions tasks as well.

MODEL	DESCRIPTION	CONTEXT WINDOW	TRAINING DATA
gpt-3.5-turbo-1106	Updated GPT 3.5 TurboNew
The latest GPT-3.5 Turbo model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Returns a maximum of 4,096 output tokens. Learn more.	16,385 tokens	Up to Sep 2021
gpt-3.5-turbo	Currently points to gpt-3.5-turbo-0613. Will point to gpt-3.5-turbo-1106 starting Dec 11, 2023. See continuous model upgrades.	4,096 tokens	Up to Sep 2021
gpt-3.5-turbo-16k	Currently points to gpt-3.5-turbo-0613. Will point to gpt-3.5-turbo-1106 starting Dec 11, 2023. See continuous model upgrades.	16,385 tokens	Up to Sep 2021
gpt-3.5-turbo-instruct	Similar capabilities as text-davinci-003 but compatible with legacy Completions endpoint and not Chat Completions.	4,096 tokens	Up to Sep 2021
gpt-3.5-turbo-0613
Legacy	Snapshot of gpt-3.5-turbo from June 13th 2023. Will be deprecated on June 13, 2024.	4,096 tokens	Up to Sep 2021
gpt-3.5-turbo-16k-0613
Legacy	Snapshot of gpt-3.5-16k-turbo from June 13th 2023. Will be deprecated on June 13, 2024.	16,385 tokens	Up to Sep 2021
gpt-3.5-turbo-0301
Legacy	Snapshot of gpt-3.5-turbo from March 1st 2023. Will be deprecated on June 13th 2024.	4,096 tokens	Up to Sep 2021
text-davinci-003
Legacy	Can do language tasks with better quality and consistency than the curie, babbage, or ada models. Will be deprecated on Jan 4th 2024.	4,096 tokens	Up to Jun 2021
text-davinci-002
Legacy	Similar capabilities to text-davinci-003 but trained with supervised fine-tuning instead of reinforcement learning. Will be deprecated on Jan 4th 2024.	4,096 tokens	Up to Jun 2021
code-davinci-002
Legacy	Optimized for code-completion tasks. Will be deprecated on Jan 4th 2024.	8,001 tokens	Up to Jun 2021
We recommend using gpt-3.5-turbo over the other GPT-3.5 models because of its lower cost and improved performance.

DALL·E
DALL·E is a AI system that can create realistic images and art from a description in natural language. DALL·E 3 currently supports the ability, given a prompt, to create a new image with a specific size. DALL·E 2 also support the ability to edit an existing image, or create variations of a user provided image.

DALL·E 3 is available through our Images API along with DALL·E 2. You can try DALL·E 3 through ChatGPT Plus.

MODEL	DESCRIPTION
dall-e-3	DALL·E 3New
The latest DALL·E model released in Nov 2023. Learn more.
dall-e-2	The previous DALL·E model released in Nov 2022. The 2nd iteration of DALL·E with more realistic, accurate, and 4x greater resolution images than the original model.
TTS
TTS is an AI model that converts text to natural sounding spoken text. We offer two different model variates, tts-1 is optimized for real time text to speech use cases and tts-1-hd is optimized for quality. These models can be used with the Speech endpoint in the Audio API.

MODEL	DESCRIPTION
tts-1	Text-to-speech 1New
The latest text to speech model, optimized for speed.
tts-1-hd	Text-to-speech 1 HDNew
The latest text to speech model, optimized for quality.
Whisper
Whisper is a general-purpose speech recognition model. It is trained on a large dataset of diverse audio and is also a multi-task model that can perform multilingual speech recognition as well as speech translation and language identification. The Whisper v2-large model is currently available through our API with the whisper-1 model name.

Currently, there is no difference between the open source version of Whisper and the version available through our API. However, through our API, we offer an optimized inference process which makes running Whisper through our API much faster than doing it through other means. For more technical details on Whisper, you can read the paper.

Embeddings
Embeddings are a numerical representation of text that can be used to measure the relatedness between two pieces of text. Our second generation embedding model, text-embedding-ada-002 is a designed to replace the previous 16 first-generation embedding models at a fraction of the cost. Embeddings are useful for search, clustering, recommendations, anomaly detection, and classification tasks. You can read more about our latest embedding model in the announcement blog post.

Moderation
The Moderation models are designed to check whether content complies with OpenAI's usage policies. The models provide classification capabilities that look for content in the following categories: hate, hate/threatening, self-harm, sexual, sexual/minors, violence, and violence/graphic. You can find out more in our moderation guide.

Moderation models take in an arbitrary sized input that is automatically broken up into chunks of 4,096 tokens. In cases where the input is more than 32,768 tokens, truncation is used which in a rare condition may omit a small number of tokens from the moderation check.

The final results from each request to the moderation endpoint shows the maximum value on a per category basis. For example, if one chunk of 4K tokens had a category score of 0.9901 and the other had a score of 0.1901, the results would show 0.9901 in the API response since it is higher.

MODEL	DESCRIPTION	MAX TOKENS
text-moderation-latest	Most capable moderation model. Accuracy will be slightly higher than the stable model.	32,768
text-moderation-stable	Almost as capable as the latest model, but slightly older.	32,768
GPT base
GPT base models can understand and generate natural language or code but are not trained with instruction following. These models are made to be replacements for our original GPT-3 base models and use the legacy Completions API. Most customers should use GPT-3.5 or GPT-4.

MODEL	DESCRIPTION	MAX TOKENS	TRAINING DATA
babbage-002	Replacement for the GPT-3 ada and babbage base models.	16,384 tokens	Up to Sep 2021
davinci-002	Replacement for the GPT-3 curie and davinci base models.	16,384 tokens	Up to Sep 2021
GPT-3 Legacy
GPT-3 models can understand and generate natural language. These models were superseded by the more powerful GPT-3.5 generation models. However, the original GPT-3 base models (davinci, curie, ada, and babbage) are current the only models that are available to fine-tune.

MODEL	DESCRIPTION	MAX TOKENS	TRAINING DATA
text-curie-001	Very capable, faster and lower cost than Davinci.	2,049 tokens	Up to Oct 2019
text-babbage-001	Capable of straightforward tasks, very fast, and lower cost.	2,049 tokens	Up to Oct 2019
text-ada-001	Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.	2,049 tokens	Up to Oct 2019
davinci	Most capable GPT-3 model. Can do any task the other models can do, often with higher quality.	2,049 tokens	Up to Oct 2019
curie	Very capable, but faster and lower cost than Davinci.	2,049 tokens	Up to Oct 2019
babbage	Capable of straightforward tasks, very fast, and lower cost.	2,049 tokens	Up to Oct 2019
ada	Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.	2,049 tokens	Up to Oct 2019
How we use your data
Your data is your data.

As of March 1, 2023, data sent to the OpenAI API will not be used to train or improve OpenAI models (unless you explicitly opt in). One advantage to opting in is that the models may get better at your use case over time.

To help identify abuse, API data may be retained for up to 30 days, after which it will be deleted (unless otherwise required by law). For trusted customers with sensitive applications, zero data retention may be available. With zero data retention, request and response bodies are not persisted to any logging mechanism and exist only in memory in order to serve the request.

Note that this data policy does not apply to OpenAI's non-API consumer services like ChatGPT or DALL·E Labs.

Default usage policies by endpoint
ENDPOINT	DATA USED FOR TRAINING	DEFAULT RETENTION	ELIGIBLE FOR ZERO RETENTION
/v1/chat/completions*	No	30 days	Yes, except image inputs*
/v1/files	No	Until deleted by customer	No
/v1/assistants	No	Until deleted by customer	No
/v1/threads	No	30 days	No
/v1/threads/messages	No	30 days	No
/v1/threads/runs	No	30 days	No
/v1/threads/runs/steps	No	30 days	No
/v1/images/generations	No	30 days	No
/v1/images/edits	No	30 days	No
/v1/images/variations	No	30 days	No
/v1/embeddings	No	30 days	Yes
/v1/audio/transcriptions	No	Zero data retention	-
/v1/audio/translations	No	Zero data retention	-
/v1/audio/speech	No	30 days	No
/v1/fine_tuning/jobs	No	Until deleted by customer	No
/v1/fine-tunes	No	Until deleted by customer	No
/v1/moderations	No	Zero data retention	-
/v1/completions	No	30 days	Yes
/v1/edits	No	30 days	Yes
* Image inputs via the gpt-4-vision-preview model are not eligible for zero retention.

For details, see our API data usage policies. To learn more about zero retention, get in touch with our sales team.

Model endpoint compatibility
ENDPOINT	LATEST MODELS
/v1/assistants	All models except gpt-3.5-turbo-0301 supported. retrieval tool requires gpt-4-1106-preview or gpt-3.5-turbo-1106.
/v1/audio/transcriptions	whisper-1
/v1/audio/translations	whisper-1
/v1/audio/speech	tts-1, tts-1-hd
/v1/chat/completions	gpt-4 and dated model releases, gpt-4-1106-preview, gpt-4-vision-preview, gpt-4-32k and dated model releases, gpt-3.5-turbo and dated model releases, gpt-3.5-turbo-16k and dated model releases, fine-tuned versions of gpt-3.5-turbo
/v1/completions (Legacy)	gpt-3.5-turbo-instruct, babbage-002, davinci-002
/v1/embeddings	text-embedding-ada-002
/v1/fine_tuning/jobs	gpt-3.5-turbo, babbage-002, davinci-002
/v1/moderations	text-moderation-stable, text-moderation-latest
/v1/images/generations	dall-e-2, dall-e-3
This list excludes all of our deprecated models.