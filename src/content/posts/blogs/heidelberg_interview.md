---
title: Heidelberg M.Sc. Physics Interview Tips
published: 2022-01-01
updated: 2024-04-10
description: Tips and insights to ace the Heidelberg M.Sc. Physics interview — preparation strategy, common questions, and advice from experience.
tags:
  - Heidelberg
category: Guides
draft: false
image: ./heidelberg_skyline.jpg
---

After several wonderful undergraduate years at Leipzig, I applied to one of the best physics faculties on the planet and one of the most fairy-tale-like cities - Heidelberg. I had visited Heidelberg twice as a tourist and had fallen for the city.
Let’s break down how the admission procedure works according to Heidelberg’s website. 

There are two parts to the admission :
1. BSc grades (worth 15 points) (5th-semester grades if your final degree certificate is not available when you are applying)
2. Interview (worth 15 points)

:::note
The number of seats is for the program **not limited**. You are admitted to the program if you get $\geq 16$ points. If you have good grades in your BSc, you are almost there.
:::

Now, jumping to the interview. You know beforehand the professors who will interview you; I highly recommend you google them before the date. It's just human nature to feel more comfortable talking to someone if you know something about them.

One of the most common questions is, "How do I prepare for the interview?". The questions asked are basically a summary of what you learned during your Bachelor's.

---
#  Pointers for preparation 

1. They would assume that you are well-versed in the following undergraduate subjects, 
   - *Classical mechanics (Including Lagrangian and Hamiltonian mechanics, aka Analytical mechanics)*
   - *Electrodynamics*
   - *Vibrations and Waves*
   - *Special relativity*
   - *Quantum mechanics*
   - *Statistical mechanics*
2. If you know your gaps and loopholes, you can fill them conceptually by reading chapters from David Tong’s lecture notes or Feynman’s lectures. Why the change of mind from Feynman to Tong? In recent years, I have read Tong’s lecture notes to solidify my foundations even more. To date, I have read at least five of his notes, front to back, and honestly, they have much more depth than Feynman’s lectures, which I previously recommended for preparation. This makes sense since Feynman’s lectures were given to first-year students approximately 60 years ago. Don’t get me wrong, I still occasionally refer to Feynman’s lectures as they are always an excellent resource for quickly brushing up on concepts. You can find all of them here. Remember, you are preparing for an interview; you don’t have time to go through all his notes. Instead, pick a set of notes and go through the sections you don’t feel confident about.
3. A series of physics books by Daniel Fleisch is an excellent companion during this time. Most results and how they are derived in these books will be “obvious facts” that the professors might expect you to know. They are small booklets summarizing the main results of each of the following subjects.
   - *A student's guide to Maxwell equations (For Electrodynamics)* 
   - *A student's guide to Waves (For Vibrations and Waves)*
   - *A student's guide to Schrodinger equation (For Quantum mechanics)* 
4. Apart from Tong and Feynman’s lectures - here are some goto resources one should keep in mind, particularly for Statistical Mechanics, Thermo, and Special relativity.
   - *Thermal Physics* by Blundell (Thermodynamics and Statistical mechanics)
   - *Special relativity and Classical field theory* by Leonard Susskind (The first three chapters should be good enough for Special relativity)
5. :star2: If you have a friend who is very well versed in all these subjects, ask them to test your basic understanding of these subjects (Not someone who is looking to show off their knowledge, but rather someone who is genuinely willing to help -  the first type of person will cause more harm than good)

---

#  Interview Questions

:::tip
My most important advice is that **keywords** are much more potent than an elaborate explanation during an interview.
:::

## General questions

1. *Why are you applying to Heidelberg?*
   - There are 8-9 specializations at Heidelberg. Preferably talk about the one you are most interested in. Or, if there are a few faculty members you would like to work with, mention them. They want to see that you have a reason to apply, and both reasons mentioned above should suffice.
2.  *What did you do for your BSc Thesis/ Project? *
   I am presuming this is for people with a thesis during the BSc. The task here would be to summarize what you did as quickly as possible.

## Physics questions 

(Answer them as concisely as possible using the keywords, I'll put the keywords in italics) - I am trying to recall exactly what I answered; I will write the answers **exactly** as I answered them. 

1. How would you solve quantum mechanical Hydrogen atom?
   - Take the *3D Schrodinger equation*, use *separation of variables* and then you will get a *radial* and an *angular* equation.
2. What would be the next step?
   - For the radial equation, we make a typical *ansatz*; for the *angular* equation, we have the spherical harmonics as the solution.
     (Yeah, I just said that we make a typical ansatz. If they had asked me what it exactly is, I would have said it. Answering quickly and pointing them in the right direction is better than taking time for a perfect answer. As I said, keywords can do magic).
3. What are the boundary conditions?
   - For the radial equation, the *wavefunction should go to zero* at the center. This ensures it doesn't *blow up* for $r\to 0$. Also, it *should go to zero* at $r\to \infty $ because, for anything else, it physically doesn't make sense. (Just like a finite charge, it makes sense for the electric field to be $\vec{E}=0$ for $r\to\infty$. If this is not the case, a finite charge will affect particles on the other end of the universe).
4. For such a system, why are the angular momentum quantities discrete?
   - It is due to the *symmetry*. We have the *angles identified* as $\theta\in(0,\pi)$ and $\phi\in(0,2\pi)$. This will give rise to the boundary conditions giving us discretized values for the angular momentum numbers for $l,m$.
5. How are the $l$ discretized?
   - <u>*Me*</u> : Umm, $l(l\pm1)$ <br>
     <u>*Interviewer*</u> : Seems like you don't care about $\hbar$? (The question was asked with a cheerful tone) <br>
     <u>*Me*</u>: Eh, it's 1. (Cheeky smile audible in my voice) <br>
     *<u>Interviewer</u>* : Haha, I guessed so. Good, let's move on to a different topic.
6. How would you define temperature for any system?
   - <u>*Me*</u> : Uh, any system?   <br>
     <u>*Interviewer*</u>: Yeah, that is one of the physical quantities that can always be defined for any system. <br>
     <u>*Me*</u> : (Sudden response while being worried) "*Maxwell Boltzmann distribution*" ?! (At the same time, the interviewer was hinting by saying think "mean energy") <br>
     *<u>Interviewer</u>* : Super.
     
      > Coming back to this answer, this is not really complete. But I should have asked do they mean a classical or a quantum system. Maxwell Boltzmann is one of the more classic solutions but definitely it is not a complete one. Maxwell Boltzmann distribution is the correct answer if the question was "How would you define the temperature for any system similar to a classical gas in equilibrium (A lot of physics scenarios are idealized by this indeed and probably they just wanted to see if I know distrubtions and atleast the basic keywords in statmech - Hence the super.) 
   
7. How would you define temperature in general?
   - It's the *vibrational energy* of the molecules or the particles.

And that was it. I asked them how long it takes for the results to be out. They told me that it would be a couple of days.

## Other questions I collected from the internet and colleagues.

- What is the expected value for an electron in a vacuum? Ans. $\left< x \right> = 0$
- What are spherical harmonics?
- What happens to an electron excited in an atom, and what law is associated to it? Ans. It will decay to the ground state using Fermi's golden rule
- Why do we not fall through the ground? (A question to begin with that was followed up further with how to solve the radial equation hydrogen atom and applying the boundary condition that the probability goes to zero at the origin, so we can't have electrons 'falling' into the nucleus)
- General particle physics questions : distinguishing Fermions and Bosons, summarizing the particles of the standard model and their commonly known properties like the mass, charge, and spin. (I don't think they expected all properties of all the particles)
- Tell us about your Bachelor thesis. If you didn't have one, explain some projects you did. They asked questions about the projects
- Explain the QM interpretation of the atom (H atom)
- Explain the quantum harmonic oscillator, probability densities in 1D potential well, Schrodinger equation in 1D
- Brief about Bachelor thesis, simple questions on intrumentation, and general overview
- Hytdrogen atom in QM and modes of heat transfer. Then we started talking about Cosmology. This was more of a discussion than a Q&A
- Mostly questioned on Gravitation, Kepler's laws, etc.

