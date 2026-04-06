---
title: "Two-Flavor Neutrino Oscillations"
published: 2023-07-20
description: "Deriving the electron neutrino survival probability from scratch using two bases, a rotation angle, and time evolution — plus why oscillations prove neutrinos have mass."
tags:
  - particle-physics
category: Notes
draft: false
---

Neutrino oscillations — the fact that a neutrino created as an electron neutrino can later be detected as a muon neutrino — were confirmed experimentally in 1998 (Super-Kamiokande) and earned the 2015 Nobel Prize in Physics. The key insight is that the flavor eigenstates are *not* the same as the mass eigenstates. Here we derive the survival probability from scratch in the two-flavor case.

---

## The two bases

The free-particle Hamiltonian has **mass eigenstates** $|\nu_1\rangle, |\nu_2\rangle$ with masses $m_1, m_2$. Weak interactions, however, couple to **flavor eigenstates** $|\nu_e\rangle, |\nu_\mu\rangle$. These two bases are related by a rotation through the **mixing angle** $\theta$:

$$|\nu_e\rangle = \cos\theta\,|\nu_1\rangle - \sin\theta\,|\nu_2\rangle$$

$$|\nu_\mu\rangle = \sin\theta\,|\nu_1\rangle + \cos\theta\,|\nu_2\rangle$$

or in matrix form:

$$\begin{pmatrix}|\nu_e\rangle \\ |\nu_\mu\rangle\end{pmatrix} = \begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}\begin{pmatrix}|\nu_1\rangle \\ |\nu_2\rangle\end{pmatrix}$$

A general neutrino state can be written in either basis:

$$|\Psi\rangle = c_1|\nu_1\rangle + c_2|\nu_2\rangle = c_e|\nu_e\rangle + c_\mu|\nu_\mu\rangle$$

with normalization $|c_1|^2 + |c_2|^2 = 1$ and $|c_e|^2 + |c_\mu|^2 = 1$.

---

## Time evolution

Since $|\nu_1\rangle, |\nu_2\rangle$ are energy eigenstates, their amplitudes evolve simply:

$$c_1(t) = c_1(0)\,e^{-iE_1 t/\hbar}, \qquad c_2(t) = c_2(0)\,e^{-iE_2 t/\hbar}$$

The flavor amplitudes at time $t$ are then:

$$\begin{pmatrix}c_e(t) \\ c_\mu(t)\end{pmatrix} = \begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}\begin{pmatrix}c_1(0)\,e^{-iE_1 t/\hbar} \\ c_2(0)\,e^{-iE_2 t/\hbar}\end{pmatrix}$$

### Initial condition: start as a pure $\nu_e$

Set $c_e(0) = 1$, $c_\mu(0) = 0$. Inverting the rotation matrix gives the initial mass-basis amplitudes:

$$c_1(0) = \cos\theta, \qquad c_2(0) = -\sin\theta$$

Substituting:

$$\begin{pmatrix}c_e(t) \\ c_\mu(t)\end{pmatrix} = \begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}\begin{pmatrix}\cos\theta\; e^{-iE_1 t/\hbar} \\ -\sin\theta\; e^{-iE_2 t/\hbar}\end{pmatrix}$$

This gives:

$$c_e(t) = \cos^2\theta\; e^{-iE_1 t/\hbar} + \sin^2\theta\; e^{-iE_2 t/\hbar}$$

$$c_\mu(t) = \sin\theta\cos\theta\left(e^{-iE_1 t/\hbar} - e^{-iE_2 t/\hbar}\right)$$

---

## The survival probability

The probability of still detecting a $\nu_e$ at time $t$ is $P(\nu_e \to \nu_e) = |c_e(t)|^2$. Computing this:

$$|c_e|^2 = \cos^4\theta + \sin^4\theta + 2\sin^2\theta\cos^2\theta\cos\!\left(\frac{(E_2 - E_1)t}{\hbar}\right)$$

Using $\cos^4\theta + \sin^4\theta = 1 - 2\sin^2\theta\cos^2\theta = 1 - \frac{1}{2}\sin^2(2\theta)$ and the identity $2\sin^2\theta\cos^2\theta = \frac{1}{2}\sin^2(2\theta)$:

$$|c_e|^2 = 1 - \sin^2(2\theta)\sin^2\!\left(\frac{(E_2-E_1)t}{2\hbar}\right)$$

### Relativistic energy approximation

Neutrinos are ultra-relativistic: $E_i \gg m_i c^2$. For fixed momentum $p$:

$$E_i = \sqrt{p^2c^2 + m_i^2c^4} \approx pc\left(1 + \frac{m_i^2 c^2}{2p^2}\right)$$

So:

$$E_2 - E_1 \approx \frac{(m_2^2 - m_1^2)c^4}{2E} = \frac{\Delta m^2 c^4}{2E}$$

where $E \approx pc$ is the common energy. With $L = ct$ (distance traveled):

$$\frac{(E_2 - E_1)t}{2\hbar} = \frac{\Delta m^2 c^4\, L}{4E\hbar c}$$

Putting it all together:

$$\boxed{P(\nu_e \to \nu_e) = 1 - \sin^2(2\theta)\sin^2\!\left(\frac{\Delta m^2 c^4\, L}{4E\hbar c}\right)}$$

---

## Conceptual questions

### Why do oscillations imply neutrinos have mass?

Look at the argument of the $\sin^2$: it contains $\Delta m^2 = m_2^2 - m_1^2$. If both neutrinos were massless, $\Delta m^2 = 0$ and the probability would be identically 1 — no oscillation. More precisely:

- Oscillations require **two different phases** $e^{-iE_1 t/\hbar}$ and $e^{-iE_2 t/\hbar}$ to interfere.
- For massless particles, $E_i = pc$ for all $i$, so both phases are identical and they never interfere.
- A non-trivial oscillation pattern therefore requires $m_1 \neq m_2$, and at least one must be non-zero.

Note: oscillations only constrain *mass differences*, not absolute masses. This is why neutrino oscillation experiments cannot tell us the absolute mass scale — only that $\Delta m^2 \neq 0$.

### Three flavors: how many must be massive?

In the three-flavor case there are three mass eigenstates $|\nu_1\rangle, |\nu_2\rangle, |\nu_3\rangle$ and three flavor eigenstates $|\nu_e\rangle, |\nu_\mu\rangle, |\nu_\tau\rangle$. Oscillations between *all three* flavor pairs have been observed.

If only one mass eigenstate were massive (say $m_1 \neq 0$, $m_2 = m_3 = 0$), we would have $\Delta m^2_{23} = 0$, meaning no oscillation between the states that mix with $|\nu_2\rangle$ and $|\nu_3\rangle$. Since oscillations between all flavors are observed, we need $\Delta m^2_{12} \neq 0$ and $\Delta m^2_{23} \neq 0$, which requires **at least two massive eigenstates**.