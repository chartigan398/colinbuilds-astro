---
title: "What Are AI, Machine Learning and Generative AI?"
description: "Four terms you hear everywhere, explained without the technical words."
guide_no: "02"
pubDate: 2026-08-27
---

<p class="guide-meta"><span>Beginner</span><span>6-minute read</span><span>No coding needed</span></p>

<figure>
  <div class="guide-diagram guide-map" role="img" aria-label="Artificial intelligence contains machine learning, which contains deep learning. Modern generative AI is usually powered by deep learning.">
    <div class="map-box"><b>Artificial Intelligence</b><span>The whole field</span></div>
    <div class="map-box"><b>Machine Learning</b><span>AI that learns from examples</span></div>
    <div class="map-box"><b>Deep Learning</b><span>A powerful kind of machine learning</span></div>
    <div class="map-box"><b>Modern Generative AI</b><span>Usually powered by deep learning</span></div>
    <p class="map-note">This is a simple map of how most modern systems connect. Generative AI describes what a system produces; deep learning describes how many modern systems learn.</p>
  </div>
  <figcaption>The terms are connected, but they are not different names for the same thing.</figcaption>
</figure>

<aside class="guide-callout" aria-label="The short version">

## The short version

**AI** is the whole subject.

**Machine learning** helps computers learn from examples.

**Deep learning** is a powerful kind of machine learning.

**Generative AI** creates things such as words, pictures and music.

</aside>

You will often hear people use **AI**, **machine learning** and **generative AI** as though they all mean the same thing.

They don’t.

They are connected, but each one means something different. Let’s start with the biggest term: artificial intelligence.

## What is artificial intelligence?

**Artificial intelligence, or AI, means getting a computer to do something that normally needs human intelligence.**

That could mean understanding a spoken question, recognising a face, choosing a route, finding possible fraud, playing a game or writing an answer.

AI is the name for the whole subject. It includes many different kinds of technology.

Some AI follows rules written by people.

Imagine an enemy in a video game. It might be told: if the player comes close, attack; if health is low, run away; if the player disappears, search the area.

The enemy may appear intelligent, but it is following instructions written by the game’s creators.

<div class="guide-key"><strong>Not every AI system learns.</strong></div>

## What is machine learning?

**Machine learning is a type of AI that learns from examples.**

Imagine teaching a computer to tell the difference between pictures of cats and dogs.

You show it thousands of pictures with labels: this is a cat; this is a dog. The computer searches those pictures for repeated details.

After seeing enough examples, it can make a guess about a picture it has never seen before.

<figure>
  <div class="guide-diagram teach-test" role="img" aria-label="Teach it: labelled photographs of cats and dogs. Test it: a new unlabelled dog photograph. The computer guesses dog.">
    <div class="teach-side">
      <p class="split-heading">TEACH IT</p>
      <div class="teach-photos">
        <div class="labelled-photo">
          <img class="guide-photo" src="/assets/guides/guide-02/domestic-cat.jpg" alt="Photograph of a cat" width="800" height="600" />
          <span class="photo-label">CAT</span>
        </div>
        <div class="labelled-photo">
          <img class="guide-photo" src="/assets/guides/guide-02/cat-table.jpg" alt="Photograph of a cat" width="800" height="600" />
          <span class="photo-label">CAT</span>
        </div>
        <div class="labelled-photo">
          <img class="guide-photo" src="/assets/guides/guide-02/yellow-labrador.jpg" alt="Photograph of a dog" width="800" height="600" />
          <span class="photo-label">DOG</span>
        </div>
        <div class="labelled-photo">
          <img class="guide-photo" src="/assets/guides/guide-02/cute-dog.jpg" alt="Photograph of a dog" width="800" height="600" />
          <span class="photo-label">DOG</span>
        </div>
      </div>
      <p class="split-text">“We show the computer lots of pictures and tell it which are cats and which are dogs.”</p>
    </div>
    <div class="teach-arrow" aria-hidden="true">→</div>
    <div class="test-side">
      <p class="split-heading">TEST IT</p>
      <div class="test-photo">
        <img class="guide-photo" src="/assets/guides/guide-02/french-bulldog.jpg" alt="A new photograph of a dog with no label" width="800" height="533" />
      </div>
      <p class="computer-guess">DOG</p>
      <p class="split-text">“When it sees a new picture, it uses what it learned to make a guess.”</p>
    </div>
  </div>
  <figcaption>Machine learning means learning from examples instead of being given a rule for every answer.</figcaption>
</figure>

This learning process is called **training**.

**Data** means the information given to the computer. Data can include words, numbers, pictures, sounds or video.

What the computer learns is stored in a **model**.

A model is not a robot or a physical machine. It is trained software that uses what it has learned to produce an answer.

Machine learning is already used in spam filters, music recommendations, fraud detection, face recognition, translation apps and shopping recommendations.

<div class="guide-key"><strong>Normal software is given rules. Machine learning is given examples.</strong></div>

This is a simple explanation. People still choose the examples, build the system and control how it learns.

## What is deep learning?

**Deep learning is a powerful type of machine learning.**

It uses many connected layers to learn from large amounts of information.

This helps computers handle complicated things such as:

- Recognising handwriting
- Understanding speech
- Recognising objects in pictures
- Working with written language

Google demonstrates this by training a system with thousands of handwritten numbers. After training, it can look at a new handwritten number and predict what it is.

<figure>
  <img class="mnist-sample" src="/assets/guides/guide-02/mnist-digits.png" alt="Several real handwritten numbers from Google’s MNIST digit set" width="1488" height="606" />
</figure>

The word **deep** means the system uses many layers. It does not mean the computer thinks deeply.

## What is generative AI?

**Generative AI is AI that creates new content.**

It can create text, pictures, speech, music, video and computer code.

ChatGPT can write an explanation. An image generator can make a picture from written instructions. A music generator can create a new track. A coding assistant can suggest computer code.

The instruction you give the AI is called a **prompt**.

<figure>
  <div class="guide-logo-wrap">
    <img class="guide-logo" src="/assets/guides/guide-02/openai-logo.svg" alt="OpenAI logo" width="590" height="160" />
  </div>
</figure>

Generative AI learns from large amounts of existing information. It finds patterns in that information and uses them to create a new result.

A writing AI learns patterns from text. It learns which words often appear together and which words are likely to come next.

When you ask it a question, it builds its answer one small piece at a time.

That is why AI can produce a clear and confident answer that is still wrong. It is creating a likely answer from learned patterns. It is not automatically checking whether every sentence is true.

When AI produces false or misleading information as though it were true, this is often called a **hallucination**.

<figure>
  <div class="guide-diagram hallucination">
    <div class="answer-card">
      <div class="label">Question</div>
      <p>Who wrote the novel <em>The Clockmaker’s Ocean</em>?</p>
    </div>
    <div class="answer-card false">
      <div class="label">Confident AI answer</div>
      <p>“It was written by Eleanor Voss in 1987.”</p>
      <p class="false-mark">False: the book and author were invented for this example.</p>
    </div>
  </div>
  <figcaption>A hallucination can sound believable. Confidence is not proof that an answer is true.</figcaption>
</figure>

That is why important AI-generated information should be checked against reliable sources.

## What is an LLM?

You may also hear people use the letters **LLM**. LLM stands for **Large Language Model**.

- **Large** means it is built using a very large system and a huge amount of training material.
- **Language** means it works with words.
- **Model** means the trained software.

An LLM learns patterns from large amounts of text. It can then use those patterns to answer questions, explain subjects, summarise writing and create new text.

**ChatGPT is an application powered by LLMs.**

An LLM can produce natural-sounding language, but that does not mean it understands the world exactly as a person does.

## How everything connects

Think of **AI** as the whole subject. One way to build AI is through **machine learning**. A powerful type of machine learning is **deep learning**. Most modern generative AI uses deep learning to create content.

<div class="table-wrap">

| Term | Plain meaning | Example |
| --- | --- | --- |
| **AI** | Computers doing tasks that normally need human intelligence | An enemy in a video game |
| **Machine learning** | Software learning from examples | A spam filter learning to spot unwanted emails |
| **Deep learning** | Machine learning that can handle large amounts of complicated information | A phone recognising speech |
| **Generative AI** | AI that creates new content | An AI writing a paragraph |
| **LLM** | A model trained to work with language | The technology powering ChatGPT |

</div>

Deep learning and generative AI do **not** mean the same thing. Deep learning describes a way an AI system can learn. Generative AI describes what the system does: it creates content.

<aside class="guide-callout guide-recap">

## Remember these four lines

AI is the whole subject.

Machine learning learns from examples.

Deep learning handles more complicated information.

Generative AI creates something new.

</aside>

## Sources

The wording in this guide is simplified. The facts were checked against current material from Google, IBM and OpenAI.

- [Google — What is Machine Learning?](https://developers.google.com/machine-learning/intro-to-ml/what-is-ml)
- [IBM — What is Artificial Intelligence?](https://www.ibm.com/think/topics/artificial-intelligence)
- [IBM — What is Machine Learning?](https://www.ibm.com/think/topics/machine-learning)
- [Google — handwritten-digit deep-learning guide](https://www.tensorflow.org/tutorials/quickstart/beginner)
- [IBM — What is Deep Learning?](https://www.ibm.com/think/topics/deep-learning)
- [IBM — What is Generative AI?](https://www.ibm.com/think/topics/generative-ai)
- [OpenAI — brand logo](https://openai.com/brand/)
- [Wikimedia Commons — Domestic cat, Tilo Hauke, CC BY-SA 2.5](https://commons.wikimedia.org/wiki/File:Domestic_cat.jpg)
- [Wikimedia Commons — Cat on table, itchys, CC BY 2.0](https://commons.wikimedia.org/wiki/File:Cat_on_table.jpg)
- [Wikimedia Commons — Yellow Labrador Looking, Elf, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:YellowLabradorLooking_new.jpg)
- [Wikimedia Commons — Cute dog, leisergu, CC BY 2.0](https://commons.wikimedia.org/wiki/File:Cute_dog.jpg)
- [Wikimedia Commons — Puppy French Bulldog, Dmitry Kalinin, CC BY 2.0](https://commons.wikimedia.org/wiki/File:Puppy_French_Bulldog.jpg)
