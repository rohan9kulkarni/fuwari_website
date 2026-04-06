---
title: "Spin Measurement Probabilities for a General Qubit State"
published: 2023-07-20
description: "Given a general spin-1/2 state, we calculate the probabilities of measuring positive spin along y and z, and verify with known eigenstates."
tags:
  - quantum-mechanics
  - physics
category: Notes
draft: false
---

Given a general spin-1/2 state $|\Psi\rangle = \begin{pmatrix}\alpha \\ \beta\end{pmatrix}$ (with $|\alpha|^2 + |\beta|^2 = 1$), what is the probability of finding the spin positive along $y$? Along $z$? This is a clean exercise in working with Pauli matrices, eigenstate decomposition, and the Born rule.

---

## Setup: eigenstates of $\sigma_y$

The Pauli matrix $\sigma_y = \begin{pmatrix}0 & -i \\ i & 0\end{pmatrix}$ has eigenvalues $\pm 1$, corresponding to spin $\pm\hbar/2$. Its normalized eigenstates are:

$$|\uparrow_y\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\i\end{pmatrix}, \qquad |\downarrow_y\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\-i\end{pmatrix}$$

Our state $|\Psi\rangle = \begin{pmatrix}\alpha\\\beta\end{pmatrix}$ is written in the $S_z$ eigenbasis, i.e. $|\Psi\rangle = \alpha|\uparrow_z\rangle + \beta|\downarrow_z\rangle$. To find spin-$y$ probabilities we project onto the $\sigma_y$ eigenstates.

---

## Probability of $s_y = +\hbar/2$

By the Born rule, $P(s_y = +\tfrac{\hbar}{2}) = |\langle\uparrow_y | S_y |\Psi\rangle|^2$. Working it out:

$$P = \frac{1}{2}\left|\begin{pmatrix}1 & -i\end{pmatrix}\begin{pmatrix}0 & -i\\i & 0\end{pmatrix}\begin{pmatrix}\alpha\\\beta\end{pmatrix}\right|^2$$

First apply $\sigma_y$:

$$\sigma_y|\Psi\rangle = \begin{pmatrix}0 & -i\\i & 0\end{pmatrix}\begin{pmatrix}\alpha\\\beta\end{pmatrix} = \begin{pmatrix}-i\beta\\i\alpha\end{pmatrix}$$

Then project:

$$P(s_y = +) = \frac{1}{2}\left|\begin{pmatrix}1 & -i\end{pmatrix}\begin{pmatrix}-i\beta\\i\alpha\end{pmatrix}\right|^2 = \frac{1}{2}|-i\beta - i^2\alpha|^2 = \frac{1}{2}|\alpha - i\beta|^2$$

## Probability of $s_y = -\hbar/2$

Similarly:

$$P(s_y = -) = \frac{1}{2}\left|\begin{pmatrix}1 & i\end{pmatrix}\begin{pmatrix}-i\beta\\i\alpha\end{pmatrix}\right|^2 = \frac{1}{2}|\alpha + i\beta|^2$$

**Sanity check:** $P(+) + P(-) = \frac{1}{2}(|\alpha - i\beta|^2 + |\alpha + i\beta|^2) = \frac{1}{2}(2|\alpha|^2 + 2|\beta|^2) = 1$ ✓

---

## Probabilities along $z$

For $\sigma_z = \begin{pmatrix}1&0\\0&-1\end{pmatrix}$ with eigenstates $|\uparrow_z\rangle = \begin{pmatrix}1\\0\end{pmatrix}$, $|\downarrow_z\rangle = \begin{pmatrix}0\\1\end{pmatrix}$:

$$P(s_z = +) = \left|\begin{pmatrix}1&0\end{pmatrix}\begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}\alpha\\\beta\end{pmatrix}\right|^2 = \left|\begin{pmatrix}1&0\end{pmatrix}\begin{pmatrix}\alpha\\-\beta\end{pmatrix}\right|^2 = |\alpha|^2$$

$$P(s_z = -) = \left|\begin{pmatrix}0&1\end{pmatrix}\begin{pmatrix}\alpha\\-\beta\end{pmatrix}\right|^2 = |-\beta|^2 = |\beta|^2$$

Which is just the Born rule applied directly — reassuringly, $\alpha$ and $\beta$ are exactly the probability amplitudes for $s_z = \pm\hbar/2$.

---

## Verification with known states

### Case 1: $|\Psi\rangle = |\uparrow_y\rangle$, i.e. $\alpha = \frac{1}{\sqrt{2}}$, $\beta = \frac{i}{\sqrt{2}}$

$$P(s_y = +) = \frac{1}{2}\left|\frac{1}{\sqrt{2}} - i\cdot\frac{i}{\sqrt{2}}\right|^2 = \frac{1}{2}\left|\frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}}\right|^2 = \frac{1}{2}\cdot 2 = 1 \checkmark$$

$$P(s_y = -) = \frac{1}{2}\left|\frac{1}{\sqrt{2}} + i\cdot\frac{i}{\sqrt{2}}\right|^2 = \frac{1}{2}\cdot 0 = 0 \checkmark$$

### Case 2: $|\Psi\rangle = |\uparrow_z\rangle$, i.e. $\alpha = 1$, $\beta = 0$

$$P(s_y = +) = \frac{1}{2}|1 - 0|^2 = \frac{1}{2}, \qquad P(s_y = -) = \frac{1}{2}|1 + 0|^2 = \frac{1}{2}$$

A spin-up $z$ state has equal probability of being found spin-up or spin-down along $y$ — expected, since $S_y$ and $S_z$ don't commute ($[S_y, S_z] = i\hbar S_x \neq 0$) and a $z$-eigenstate has maximum uncertainty in $y$.

### Case 3: $|\Psi\rangle = |\downarrow_z\rangle$, i.e. $\alpha = 0$, $\beta = 1$

$$P(s_y = +) = \frac{1}{2}|{-i}|^2 = \frac{1}{2}, \qquad P(s_y = -) = \frac{1}{2}|i|^2 = \frac{1}{2}$$

Same result — again expected by symmetry.
