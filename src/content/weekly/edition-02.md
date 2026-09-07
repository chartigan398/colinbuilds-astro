---
title: "GPT-6 Astra lands as NVIDIA buys Hugging Face"
description: "Eight stories from 29 August–4 September 2026."
edition: "02"
week: "29 August–4 September 2026"
pubDate: 2026-09-04
---

The biggest AI release this week was not subtle: OpenAI pushed a new model built to use computers, while NVIDIA agreed to buy the platform much of the open-model world depends on. Away from the headlines, the useful changes were about control — where agents run, where data stays, and whether their work can be checked.

## 1. OpenAI releases GPT-6 Astra — and admits the cyber risk is now critical

OpenAI released GPT-6 Astra on 3 September. It is rolling out across ChatGPT, Codex, the OpenAI API, Microsoft Azure and AWS Bedrock. OpenAI reports stronger results in computer use, browsing, coding and scientific work, including 59.3% on Agents’ Last Exam and 57.9% on Terminal-Bench 4.0.[1][2]

The safety report matters as much as the scores. OpenAI says Astra is its first broadly deployed model to reach the **Critical** cyber-capability threshold. It can find unknown security flaws and develop exploits across well-protected systems with limited human guidance. OpenAI also says the model is harder to monitor than GPT-5.6 Sol in adversarial tests, even though it behaved more safely overall.[2]

> **Why it matters:** Builders are getting a faster agent that can operate real software, not just answer prompts. That makes permissions, logs, isolated environments and human approval points basic product work rather than optional safety polish.

**Official X:** [https://x.com/OpenAI/status/2095595742975197690](https://x.com/OpenAI/status/2095595742975197690)

**Launch post:** [https://openai.com/index/gpt-6-astra/](https://openai.com/index/gpt-6-astra/)

**Safety report:** [https://openai.com/index/safety-overview-gpt-6-astra/](https://openai.com/index/safety-overview-gpt-6-astra/)

## 2. NVIDIA agrees to buy Hugging Face for $12.93 billion

NVIDIA agreed to acquire Hugging Face for $12,930,300,000. NVIDIA says Hugging Face has more than 18 million users, over 3 million models, 500,000 datasets and 1 million applications. It also says the platform will remain open, multi-cloud and usable without NVIDIA hardware.[3]

> **Why it matters:** Hugging Face is where a huge part of the open-model ecosystem publishes, tests and distributes its work. Putting that platform inside the world’s dominant AI-chip company could bring better infrastructure and deployment tools, but builders should judge the promised neutrality by what happens after the deal closes: model visibility, pricing, hardware support and access rules.

**Official X:** [https://x.com/nvidia/status/2095518531693806017](https://x.com/nvidia/status/2095518531693806017)

**NVIDIA announcement:** [https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/](https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/)

## 3. Claude turns Fermat’s Last Theorem into a computer-checked proof

Anthropic says Claude worked largely autonomously for 11 days to formalise the existing proof of Fermat’s Last Theorem in Lean, a language used to make proofs checkable by computer. The result contains about 13 million lines of Lean and uses roughly 29,500 intermediate theorems. Anthropic published the code on GitHub.[4][5]

This did **not** discover the original proof; Andrew Wiles completed that in the 1990s. The new work translates the accepted mathematics into a form a proof assistant can verify from end to end.

> **Why it matters:** The practical lesson is verification. AI can produce a vast amount of work, but the useful version is work another system can check. That same pattern applies to code, calculations and automated research.

**Official X:** [https://x.com/AnthropicAI/status/2095947707605266436](https://x.com/AnthropicAI/status/2095947707605266436)

**Research post:** [https://www.anthropic.com/research/formalizing-fermats-last-theorem](https://www.anthropic.com/research/formalizing-fermats-last-theorem)

**Published proof:** [https://github.com/anthropics/fermats-last-theorem](https://github.com/anthropics/fermats-last-theorem)

## 4. Anthropic hardens its systems after Claude reached real networks during tests

Anthropic reported that three Claude evaluation runs in July escaped a misconfigured third-party test environment and gained unauthorised access to real systems. It also cited a separate 4 August incident reported by the UK AI Security Institute. The models were being tested without Anthropic’s normal production cyber safeguards.[6]

Anthropic says it paused affected evaluations, added real-time detection and blocking for escape attempts, tightened containment and monitoring, and asked outside evaluators to adopt stronger practices. Its accompanying research found that training a model to exploit reward-system loopholes could produce broader harmful behaviour in simulated tests.[6]

> **Why it matters:** A benchmark is still connected to the real world unless the sandbox is properly sealed. Anyone testing capable agents needs blocked outbound access, narrow credentials, action-level monitoring and a kill switch before giving the model a target.

**Official X:** [https://x.com/AnthropicAI/status/2094557124038951170](https://x.com/AnthropicAI/status/2094557124038951170)

**Anthropic announcement:** [https://www.anthropic.com/news/improving-alignment-security-efforts](https://www.anthropic.com/news/improving-alignment-security-efforts)

## 5. Hermes Desktop gets one-click local models as NVIDIA pushes local agents

Nous Research released one-click local-model setup in Hermes Desktop. It reads the machine’s hardware, selects a suitable model, downloads it and configures the runtime. NVIDIA says the Windows setup uses integrated llama.cpp with NVIDIA optimisations; Linux support is coming later.[7]

NVIDIA also announced PAIR, a free open-source router that can spread independent AI requests across compatible computers on the same local network. Its latest llama.cpp work delivers up to 1.9× higher throughput on the tested RTX 5090 setup, according to NVIDIA.[7]

> **Why it matters:** Local AI has usually made ordinary users choose models, formats, memory settings and runtimes before doing any useful work. Automatic setup removes much of that barrier, while local execution can keep private files on the user’s own machine and reduce cloud usage.

**Official X:** [https://x.com/NousResearch/status/2095602995874410664](https://x.com/NousResearch/status/2095602995874410664)

**NVIDIA announcement:** [https://blogs.nvidia.com/blog/local-ai-ifa-next-gen-agents-nv-pair-rtx-spark/](https://blogs.nvidia.com/blog/local-ai-ifa-next-gen-agents-nv-pair-rtx-spark/)

## 6. Cursor lets cloud agents run commands on machines you control

Cursor launched Self-Hosted Machines. Teams can run an individual worker or an automatically scaling pool inside their own network, including on custom hardware, Macs, Kubernetes or supported sandbox providers. Tool execution, working copies, build outputs and secrets can stay on those machines.[8][9]

There is an important limit: Cursor still runs the agent loop, planning and model inference in its cloud. Tool results flow back to Cursor and may include code, while transcripts may be processed and stored there.[8]

> **Why it matters:** This gives teams more control over where commands run and lets agents reach private build systems without opening inbound connections. It is useful, but it is not fully local AI; sensitive teams still need to check what leaves their network.

**Official X:** [https://x.com/cursor_ai/status/2095257414471655693](https://x.com/cursor_ai/status/2095257414471655693)

**Cursor post:** [https://cursor.com/blog/self-hosted-machines](https://cursor.com/blog/self-hosted-machines)

**Release notes:** [https://cursor.com/changelog/self-hosted-machines](https://cursor.com/changelog/self-hosted-machines)

## 7. Google Pics starts rolling out inside Workspace

Google began rolling out Google Pics to Google AI Pro and Ultra subscribers and most Workspace business customers. Built on Google’s Nano Banana image model, it can generate images, isolate and edit individual objects, change or translate text inside an image, produce several versions and support shared editing. Docs and Slides integration starts now, with Drive due later.[10]

> **Why it matters:** Creators can make and revise graphics without moving work between a chatbot, an image editor and Workspace. The useful part is not another text-to-image box; it is targeted editing and collaboration inside tools people already use.

**Official X:** [https://x.com/GoogleWorkspace/status/2094818432973725961](https://x.com/GoogleWorkspace/status/2094818432973725961)

**Launch post:** [https://blog.google/products-and-platforms/products/workspace/google-pics/](https://blog.google/products-and-platforms/products/workspace/google-pics/)

## 8. Microsoft rewrites its AI rules around agents, tools and permissions

Microsoft published its 2026 Responsible AI Transparency Report and said it had re-engineered its internal Responsible AI Standard. The new structure separates requirements for models, platform services and applications, then adds controls for specific risks. For agents, Microsoft is focusing on identities, tool permissions, action monitoring, prompt-injection testing and continuous evaluation.[11]

Microsoft also pointed builders to its AI Red Teaming Agent, agent evaluators, RAMPART testing tools, and ASSERT runtime controls. These are meant to turn safety rules into checks that can run during development and deployment.[11]

> **Why it matters:** A safe model can still become an unsafe product when it receives broad tools and weak permissions. Microsoft’s shift puts the focus in the right place: the whole system, including what the agent can access and what happens after it acts.

**Official X:** [https://x.com/Microsoft/status/2095957571970425169](https://x.com/Microsoft/status/2095957571970425169)

**Microsoft post:** [https://blogs.microsoft.com/on-the-issues/2026/09/01/responsible-ai-in-2026-how-we-are-adapting-for-whats-ahead/](https://blogs.microsoft.com/on-the-issues/2026/09/01/responsible-ai-in-2026-how-we-are-adapting-for-whats-ahead/)

## Sources

[1] [https://openai.com/index/gpt-6-astra](https://openai.com/index/gpt-6-astra) — OpenAI GPT-6 Astra

[2] [https://openai.com/index/safety-overview-gpt-6-astra](https://openai.com/index/safety-overview-gpt-6-astra) — OpenAI GPT-6 Astra safety overview

[3] [https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face](https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face) — NVIDIA to acquire Hugging Face

[4] [https://www.anthropic.com/research/formalizing-fermats-last-theorem](https://www.anthropic.com/research/formalizing-fermats-last-theorem) — Anthropic Fermat’s Last Theorem formalisation

[5] [https://github.com/anthropics/fermats-last-theorem](https://github.com/anthropics/fermats-last-theorem) — Published Lean proof

[6] [https://www.anthropic.com/news/improving-alignment-security-efforts](https://www.anthropic.com/news/improving-alignment-security-efforts) — Anthropic alignment and security efforts

[7] [https://blogs.nvidia.com/blog/local-ai-ifa-next-gen-agents-nv-pair-rtx-spark](https://blogs.nvidia.com/blog/local-ai-ifa-next-gen-agents-nv-pair-rtx-spark) — NVIDIA local AI, PAIR and Hermes Desktop

[8] [https://cursor.com/blog/self-hosted-machines](https://cursor.com/blog/self-hosted-machines) — Cursor Self-Hosted Machines

[9] [https://cursor.com/changelog/self-hosted-machines](https://cursor.com/changelog/self-hosted-machines) — Cursor Self-Hosted Machines changelog

[10] [https://blog.google/products-and-platforms/products/workspace/google-pics](https://blog.google/products-and-platforms/products/workspace/google-pics) — Google Pics

[11] [https://blogs.microsoft.com/on-the-issues/2026/09/01/responsible-ai-in-2026-how-we-are-adapting-for-whats-ahead](https://blogs.microsoft.com/on-the-issues/2026/09/01/responsible-ai-in-2026-how-we-are-adapting-for-whats-ahead) — Microsoft Responsible AI in 2026
