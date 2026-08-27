---
title: "How Machine Learning Actually Learns"
description: "How a computer learns from labelled examples — without the mathematics."
guide_no: "03"
pubDate: 2026-08-27
---

<p class="guide-meta"><span>Beginner</span><span>6-minute read</span><span>No coding needed</span></p>

<aside class="guide-callout" aria-label="The short version">

## The short version

A computer is shown many examples with the correct answers already marked.

It guesses.

It checks those guesses against the correct answers.

It adjusts when it is wrong.

After enough practice, it can guess the answer for a new example it has never seen.

</aside>

The last guide explained that **machine learning** means learning from examples.

This guide explains **how** that learning happens.

You do not need mathematics. You do not need coding.

## It learns from answers, not from a rule book

Ordinary software follows rules written by a person.

Machine learning does something different. It is given examples with the correct answers already attached. It uses those examples to work out how to produce similar answers for new cases.

Google calls this **supervised learning**: the computer is given data that already contains the correct answer.

It is like practising with marked homework, then sitting a new test.

The most common beginner example, used by Google and IBM, is a spam filter.

![An email inbox, including a spam folder](/assets/guides/guide-03/inbox.png)

## The examples come with labels

Training starts with **training data**. IBM describes this as the information used to teach a model how to make predictions.

Each item in that collection is an **example**.

For a spam filter, one example is one email.

The **label** is the correct answer for that example. For spam, the label is usually **spam** or **not spam**.

Google’s teaching term for this pair is a **labelled example**: the email plus the answer.

People still mark those answers. IBM notes that humans often add the labels, sometimes with help from software.

Here is the idea, using two made-up emails. They are not from a real inbox. They only show how a labelled example looks.

<figure>
  <div class="guide-diagram">
    <div class="mail-row">
      <div class="mail-card">
        <p class="mail-meta">Example</p>
        <p><strong>You have won £1,000,000. Click now.</strong></p>
        <span class="photo-label">Label: spam</span>
      </div>
      <div class="mail-card">
        <p class="mail-meta">Example</p>
        <p><strong>Shall we move the meeting to 3pm?</strong></p>
        <span class="photo-label">Label: not spam</span>
      </div>
    </div>
  </div>
  <figcaption>Each training example is a piece of information plus the correct answer.</figcaption>
</figure>

The computer looks at details in the example — such as the words in the email — and tries to connect those details with the label.

Google calls those details **features**. You can think of them as the clues.

## Training is guess, check, adjust

![A tutor checking a student’s homework](/assets/guides/guide-03/tutoring.jpg)

Before the computer can sort new emails, it must be **trained**.

Google’s beginner course breaks training into a loop:

1. The computer looks at one labelled example and makes a guess.
2. It compares that guess with the real label.
3. If the guess is wrong, it updates its method a little so the next guess is closer.
4. It repeats this for many examples — sometimes more than once.

IBM describes the same idea for spam: the model is shown sample emails, its mistakes are measured, and its method is adjusted to reduce those mistakes. This is repeated until it is accurate enough.

AWS describes the same loop: the method is trained on input-and-answer pairs, then it tries to reduce the gap between its guesses and the known answers.

Microsoft’s beginner course calls the result of this process a **model**: software that can take new details and produce a predicted answer.

<figure>
  <div class="guide-diagram learn-loop" role="img" aria-label="Training: the computer guesses, checks the label, and adjusts. It repeats this with many examples.">
    <div class="map-box"><b>Guess</b><span>The computer looks at an example and predicts the answer</span></div>
    <div class="map-box"><b>Check</b><span>It compares that guess with the label</span></div>
    <div class="map-box"><b>Adjust</b><span>If it is wrong, it updates its method a little</span></div>
    <div class="map-box"><b>Repeat</b><span>It does this across many labelled examples</span></div>
  </div>
  <figcaption>This is the learning loop. The computer is not given a finished rule. It improves by practising.</figcaption>
</figure>

## Then it is tested on examples it has not practised on

After training, the computer is checked.

Google’s course is clear: when we **evaluate** a model, we use labelled examples, but we only show the computer the example — not the answer. Then we compare its guesses with the hidden labels.

That matters. Doing well on the practice pile is not enough. The point, IBM says, is to do well on **new** data — the real emails that arrive later.

If the practice pile is too narrow, the guesses will be weak. Google’s example: weather records for July only will not help you predict January.

IBM also says quantity helps, but **quality** matters as well. Wrong labels teach the wrong lesson.

## After that, it can guess for new mail

![Workers sorting mail into groups](/assets/guides/guide-03/mail-sorting.jpg)

Once the check looks good enough, the trained model can be used on emails with **no label**.

Google calls this **inference**: using the trained model to predict an answer for a new example.

Microsoft uses the same two-stage picture: **training** first, then **inferencing** — putting new details in, and getting a predicted label out.

AWS describes the same split: train a model on example data, then use it to make predictions.

So the spam filter you already use is not reading a list of rules someone typed by hand. It is using patterns it picked up from many labelled emails.

<div class="guide-key"><strong>Training is practice with answers. Inference is using what was practised on something new.</strong></div>

## Not all learning uses labels

This guide has described supervised learning, because that is the version Google, IBM and Microsoft teach first.

There are other kinds:

- **Unsupervised learning** looks for groups in data that has no labels. Microsoft’s example is grouping similar customers by how they shop, without being told the group names in advance.
- **Reinforcement learning** learns by trying actions and receiving a reward or a penalty. Google’s beginner course mentions robots learning to walk, and programs learning games.

You do not need those details yet. The important point is this: “machine learning” is not one trick. The labelled-example loop is the one you will meet most often at the start.

## What to remember

The computer is not thinking.

It is adjusting a method so its guesses match the labels it was given.

People still choose the examples, write the labels, and decide when the result is good enough to use.

If the examples are poor, the guesses will be poor.

## Sources

The wording in this guide is simplified. The facts were checked against current beginner material from Google, IBM, Microsoft and AWS.

- [Google — What is Machine Learning?](https://developers.google.com/machine-learning/intro-to-ml/what-is-ml)
- [Google — Supervised Learning](https://developers.google.com/machine-learning/intro-to-ml/supervised)
- [IBM — What is Machine Learning?](https://www.ibm.com/think/topics/machine-learning)
- [IBM — What is Training Data?](https://www.ibm.com/think/topics/training-data)
- [IBM — What is Supervised Learning?](https://www.ibm.com/think/topics/supervised-learning)
- [Microsoft — Machine learning models](https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/2-what-is-machine-learning)
- [Microsoft — Types of machine learning model](https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/3-types-of-machine-learning)
- [AWS — What is Machine Learning?](https://aws.amazon.com/what-is/machine-learning/)
- [Wikimedia Commons — Tutoring Math, Preply.com Images, CC BY 2.0](https://commons.wikimedia.org/wiki/File:Tutoring_Math.jpg)
- [Preply](https://preply.com) — credit requested by the photographer for the homework photograph
- [Wikimedia Commons — ProtonMail WebClient Screenshot, Proton Technologies AG, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:ProtonMail_WebClient_Screenshot.png)
- [Wikimedia Commons — Mail sorting, 1951, Charles Poalillo / UCLA, CC BY 4.0](https://commons.wikimedia.org/wiki/File:Mail_sorting,1951.jpg)
