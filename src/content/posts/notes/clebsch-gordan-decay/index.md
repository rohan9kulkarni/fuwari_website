---
title: "Angular Momentum Conservation in Particle Decay and Clebsch-Gordan Coefficients"
published: 2022-10-17
description: "Using angular momentum conservation to constrain the final state of a particle decay, enumerating possible states, determining parity, and extracting spin measurement probabilities from Clebsch-Gordan coefficients."
tags: [Particle Physics]
category: Notes
draft: false
---

Clebsch-Gordan coefficients are the bridge between the *total angular momentum* basis $|j, m_j\rangle$ and the *uncoupled* basis $|l, m_l; s, m_s\rangle$. They appear whenever you need to add two angular momenta — and in particle decays, angular momentum conservation forces the final state to live in a very specific corner of the coupled basis.

## The decay

Particle A (spin $s_A = 3/2$) decays at rest into:
- Particle B: spin $s_B = 1/2$
- Particle C: spin $s_C = 0$

Working in the rest frame of A, there is no orbital angular momentum initially. Conservation of total angular momentum gives $j_f = j_i = 3/2$.

---

## Part (a): What orbital angular momenta are allowed?

The final state angular momentum comes from the orbital motion of B and C about their common centre of mass, plus the spin of B:

$$j_f = l_f + s_f = l_f + \left(\pm\frac{1}{2} + 0\right) = \frac{3}{2}$$

Solving for $l_f$:

$$l_f = \frac{3}{2} \mp \frac{1}{2} = \{1, 2\}$$

So the relative orbital angular momentum can be $l = 1$ (if B is spin-up) or $l = 2$ (if B is spin-down).

---

## Part (b): All possible states $|l, m_l; \tfrac{1}{2}, m_s\rangle$

**For $l = 1$** (three values of $m_l$, two of $m_s$, giving 6 states):

$$\left|1,1;\tfrac{1}{2},\tfrac{1}{2}\right\rangle, \quad \left|1,1;\tfrac{1}{2},-\tfrac{1}{2}\right\rangle$$

$$\left|1,0;\tfrac{1}{2},\tfrac{1}{2}\right\rangle, \quad \left|1,0;\tfrac{1}{2},-\tfrac{1}{2}\right\rangle$$

$$\left|1,-1;\tfrac{1}{2},\tfrac{1}{2}\right\rangle, \quad \left|1,-1;\tfrac{1}{2},-\tfrac{1}{2}\right\rangle$$

**For $l = 2$** (five values of $m_l$, two of $m_s$, giving 10 states):

$$\left|2,2;\tfrac{1}{2},\tfrac{1}{2}\right\rangle, \quad \left|2,2;\tfrac{1}{2},-\tfrac{1}{2}\right\rangle$$

$$\left|2,1;\tfrac{1}{2},\tfrac{1}{2}\right\rangle, \quad \left|2,1;\tfrac{1}{2},-\tfrac{1}{2}\right\rangle$$

$$\left|2,0;\tfrac{1}{2},\tfrac{1}{2}\right\rangle, \quad \left|2,0;\tfrac{1}{2},-\tfrac{1}{2}\right\rangle$$

$$\left|2,-1;\tfrac{1}{2},\tfrac{1}{2}\right\rangle, \quad \left|2,-1;\tfrac{1}{2},-\tfrac{1}{2}\right\rangle$$

---

## Part (c): Parity

The parity of a state with orbital angular momentum $l$ is $(-1)^l$:

- $l = 1$: parity $= (-1)^1 = -1$ **(odd)**
- $l = 2$: parity $= (-1)^2 = +1$ **(even)**

So the two allowed decay channels have **opposite parity**. If parity is conserved in the decay (which it is for strong and electromagnetic decays, but not weak), only one of the two channels is allowed depending on the parity of the parent particle A.

---

## Part (d): Spin measurement probability via Clebsch-Gordan coefficients

Suppose particle A is prepared in the state $\left|s_A = \tfrac{3}{2},\, m_A = \tfrac{1}{2}\right\rangle$. What is the probability of measuring particle B in the spin-up state $\left|s_B = \tfrac{1}{2}, m_B = \tfrac{1}{2}\right\rangle$?

We work in the $l = 1$ sector and expand the total state in the uncoupled basis using Clebsch-Gordan coefficients for $1 \otimes \tfrac{1}{2} \to \tfrac{3}{2}$:

$$\left|\tfrac{3}{2}, \tfrac{1}{2}\right\rangle = \sqrt{\frac{1}{3}}\left|1,1;\tfrac{1}{2},-\tfrac{1}{2}\right\rangle + \sqrt{\frac{2}{3}}\left|1,0;\tfrac{1}{2},\tfrac{1}{2}\right\rangle$$

The state $|s_B = \tfrac{1}{2}, m_B = \tfrac{1}{2}\rangle$ appears only in the **second term**. The probability is the squared coefficient:

$$\boxed{P\!\left(m_B = +\tfrac{1}{2}\right) = \left(\sqrt{\frac{2}{3}}\right)^2 = \frac{2}{3}}$$

The complementary probability $P(m_B = -\tfrac{1}{2}) = 1/3$ comes from the first term.

---

## Why this is the right way to think about it

Notice what we did: we never solved a differential equation or computed an integral. We used:

1. **Angular momentum conservation** to constrain $l_f$
2. **The Clebsch-Gordan table** to decompose the initial state in the measurement basis
3. **Born rule** — probability = squared coefficient

This is the standard workflow for any spin/angular momentum measurement problem in nuclear or particle physics. The CG coefficients encode all the geometry of how angular momenta add, and once you have them, probabilities follow immediately.
