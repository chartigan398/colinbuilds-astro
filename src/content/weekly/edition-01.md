---
title: "AI This Week: OpenAI Pulls Away From Cursor, Qwen Opens Its Next Architecture, and AI Starts Fixing AI"
description: "Eight stories from 22–28 August 2026."
edition: "01"
week: "22–28 August 2026"
pubDate: 2026-08-29
---

This week was not about one shiny chatbot. It was about control: who owns the coding tools, who owns the chips underneath them, who can afford to run the models, and whether AI can help test and repair other AI systems.

Here are the eight stories worth knowing.

## 1. OpenAI plans to remove its models from Cursor

OpenAI says it has notified SpaceX that it intends to wind down the contract that provides OpenAI models inside Cursor. Its proposed shutoff date is **12 November 2026**.[1]

The trigger is Cursor's acquisition by SpaceX. OpenAI says the change of ownership means it can no longer be confident its technology will be used within its terms. It also says future models, including Astra, will not be provided to Cursor.[1]

> **Why it matters:** Cursor built much of its appeal around letting developers choose between different model providers. If OpenAI leaves, that choice gets smaller. This is the clearest sign yet that AI coding tools are becoming distribution channels in a wider fight between model companies.

**Primary announcement:** [https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/)

## 2. OpenAI showed the first performance results from its own AI chip

OpenAI published results for **Jalapeño**, its first custom chip built for running AI models rather than training them. In OpenAI's tests across GPT-OSS 120B, DeepSeek R1 and Kimi K2.5, the chip delivered **1.5–1.9 times more work per watt** and **1.7–3.6 times lower end-to-end latency** than the comparison systems.[2]

OpenAI says Jalapeño will begin entering its infrastructure by the end of 2026. A second generation is already in development.[2]

> **Why it matters:** The cost of AI is increasingly decided below the model. If OpenAI can control its models, software, networking and chips as one stack, it becomes less dependent on outside hardware and may be able to run agents faster and more cheaply. These are still OpenAI's own benchmark results, so independent testing will matter.

**Official X:** [https://x.com/OpenAI/status/2092300846675505602](https://x.com/OpenAI/status/2092300846675505602)

**Engineering post:** [https://openai.com/index/jalapeno-first-results/](https://openai.com/index/jalapeno-first-results/)

## 3. Qwen released an open-weight preview of the architecture behind Qwen4

Alibaba's Qwen team released **Qwen3.8-Flash-Next**, a multimodal mixture-of-experts model and an early preview of the architecture planned for Qwen4. The model has 125 billion main parameters, but activates 6 billion per token, with a separate 51-billion-parameter n-gram embedding system.[3][4]

It supports a native 262,144-token context window and can be extended to one million tokens. Qwen says training cost roughly one ninth as much as Qwen3.7-Plus while improving coding and office-task performance. The weights, model card and technical report are public.[3][4]

> **Why it matters:** This is not just another benchmark release. Qwen is exposing the design direction of its next model family early, giving open-source developers time to test, run and challenge it before Qwen4 arrives.

**Official X:** [https://x.com/Alibaba_Qwen/status/2092591393424515114](https://x.com/Alibaba_Qwen/status/2092591393424515114)

**Technical announcement:** [https://qwen.ai/blog?id=qwen3.8-flash-next](https://qwen.ai/blog?id=qwen3.8-flash-next)

**Model weights:** [https://huggingface.co/Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)

## 4. Anthropic used Claude to find ways to make other models safer

Anthropic gave Claude an automated research loop: search the literature, propose a method, train a smaller model, test it and try again. Across ten measured failure types—including deception, sycophancy, privacy violations and jailbreaks—Anthropic says the resulting methods improved the target safety benchmarks without reducing the general capabilities it measured.[5]

The strongest methods also transferred to hidden tests, behavioural audits and models up to 4.7 times larger than the models used during the research loop. Anthropic has released the research harness, report and benchmarks.[5]

> **Why it matters:** The important part is not that an AI beat a human on a narrow test. It is that parts of AI safety research may become repeatable, automated work. The warning is just as important: the study covered measurable, narrow failures. A system cannot fix a danger nobody knows how to test.

**Official X:** [https://x.com/AnthropicAI/status/2093386528668172373](https://x.com/AnthropicAI/status/2093386528668172373)

**Research summary:** [https://www.anthropic.com/research/automated-researchers-mitigate-alignment-failures](https://www.anthropic.com/research/automated-researchers-mitigate-alignment-failures)

**Full report:** [https://alignment.anthropic.com/2026/automated-alignment-researchers/](https://alignment.anthropic.com/2026/automated-alignment-researchers/)

## 5. NVIDIA put Groq 3 LPX into production beside Vera Rubin

NVIDIA says **Groq 3 LPX** is now in full production as a low-latency inference accelerator designed to work alongside its Vera Rubin platform. The idea is to split the work: Rubin handles large-scale context processing, while LPX handles the token-by-token generation where small delays quickly pile up.[6]

NVIDIA reports 3,400 output tokens per second on a 100,000-token Gemma 4 31B workload, four times faster than the nearest platform in the cited Artificial Analysis comparison.[6]

> **Why it matters:** AI agents do not make one request and stop. They reason, call tools, read the result and continue. That makes response delay an infrastructure problem. NVIDIA is building around that agent loop, not just raw model training.

**NVIDIA announcement:** [https://blogs.nvidia.com/blog/vera-rubin-lpx-spectrum-x-nvlink-fusion/](https://blogs.nvidia.com/blog/vera-rubin-lpx-spectrum-x-nvlink-fusion/)

## 6. Google released Gemini 3.5 Transcribe

Google launched **Gemini 3.5 Transcribe**, a speech-to-text model available in live-streaming and pre-recorded versions. It supports more than 85 languages, custom vocabulary, filler-word removal, language switching, timestamps and speaker identification. Both versions are currently in preview.[7]

Google reports a 4.0% average word error rate for streaming and 2.6% for non-streaming use in the Artificial Analysis measurement it cites.[7]

> **Why it matters:** Voice tools are useful only when the transcript is accurate enough to act on. Better handling of noise, names, order numbers and people correcting themselves could make voice agents far less brittle. Builders can access it through the Gemini API and Google's agent platform now.

**Official X:** [https://x.com/GoogleCloudTech/status/2092668123857944751](https://x.com/GoogleCloudTech/status/2092668123857944751)

**Launch post:** [https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/)

## 7. Google DeepMind tested a way to evaluate closed models without exposing the test

Google DeepMind ran what it describes as the first double-blind evaluation of a proprietary frontier-class model. A secure hardware environment kept the model weights hidden from the evaluator while also keeping the evaluator's private test prompts hidden from Google.[8][9]

The pilot tested Gemini 2.5 Flash Lite against private MLCommons and Singapore AI Safety Institute evaluations using an encrypted hardware enclave.[9]

> **Why it matters:** AI benchmarks become weak when model builders have already seen the questions. But outside evaluators usually cannot inspect a closed model without handing over their secret tests. This approach attempts to protect both sides and make independent testing harder to game.

**Official X:** [https://x.com/GoogleDeepMind/status/2092961763553677387](https://x.com/GoogleDeepMind/status/2092961763553677387)

**DeepMind explanation:** [https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/](https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/)

**Technical report:** [https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/piloting-the-worlds-first-double-blind-ai-evaluations/double-blind-evaluations-technical-report.pdf](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/piloting-the-worlds-first-double-blind-ai-evaluations/double-blind-evaluations-technical-report.pdf)

## 8. Google made Gemini Omni 1.1 Flash production-ready for video builders

Google released **Gemini Omni 1.1 Flash** through its API with more direct control over generated video. It can extend scenes in ten-second steps up to 40 seconds, use chosen first and last frames, create cheaper 360p previews and upscale final output to 4K.[10]

The update is aimed at developers building video-generation tools and editing workflows, rather than only people using a finished consumer app.[10]

> **Why it matters:** More resolution is not the main issue with AI video anymore. Control and continuity are. Scene extension, fixed endpoints and cheap previews make the model more useful for actual editing rather than isolated clips.

**Official X:** [https://x.com/GoogleAI/status/2093008998987403303](https://x.com/GoogleAI/status/2093008998987403303)

**Developer post:** [https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/)

## Sources

[1] [https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex) — OpenAI decision on Cursor

[2] [https://openai.com/index/jalapeno-first-results](https://openai.com/index/jalapeno-first-results) — OpenAI Jalapeño first results

[3] [https://qwen.ai/blog?id=qwen3.8-flash-next](https://qwen.ai/blog?id=qwen3.8-flash-next) — Qwen3.8-Flash-Next announcement

[4] [https://huggingface.co/Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — Qwen3.8-Flash-Next model weights

[5] [https://www.anthropic.com/research/automated-researchers-mitigate-alignment-failures](https://www.anthropic.com/research/automated-researchers-mitigate-alignment-failures) — Anthropic automated alignment researchers

[6] [https://blogs.nvidia.com/blog/vera-rubin-lpx-spectrum-x-nvlink-fusion](https://blogs.nvidia.com/blog/vera-rubin-lpx-spectrum-x-nvlink-fusion) — NVIDIA Groq 3 LPX and Vera Rubin

[7] [https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe) — Google Gemini 3.5 Transcribe

[8] [https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations](https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations) — Google DeepMind double-blind evaluations

[9] [https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/piloting-the-worlds-first-double-blind-ai-evaluations/double-blind-evaluations-technical-report.pdf](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/piloting-the-worlds-first-double-blind-ai-evaluations/double-blind-evaluations-technical-report.pdf) — Double Blind Evals technical report

[10] [https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash) — Google Gemini Omni 1.1 Flash
