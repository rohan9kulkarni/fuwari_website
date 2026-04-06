---
title: "WKB Tunneling Through an Arbitrary Barrier"
published: 2022-10-17
description: "Deriving the transfer matrix connecting incoming and outgoing WKB amplitudes across a general potential barrier, and extracting the tunneling transmission coefficient."
tags:
  - quantum-mechanics
category: Notes
draft: false
---

In undergraduate quantum mechanics you typically compute tunneling probabilities for simple barriers — a rectangular "top hat" or a parabola. The WKB (Wentzel–Kramers–Brillouin) approximation lets you handle an *arbitrary* potential barrier $V(x)$ with the same machinery. The key is the **transfer matrix** that connects the wave amplitudes on either side.

---

## Setup: three regions

Consider a particle with energy $E$ hitting a barrier $V(x)$. The classical turning points are at $x = \alpha$ and $x = \beta$ (where $E = V(x)$), dividing space into three regions:

- **Region I** ($x < \alpha$): classically accessible, oscillatory wavefunction
- **Region II** ($\alpha < x < \beta$): classically forbidden, exponentially decaying/growing
- **Region III** ($x > \beta$): classically accessible again, transmitted wave

Define $k(x) = \sqrt{2m(E-V)/\hbar^2}$ in the accessible regions and $\kappa(x) = \sqrt{2m(V-E)/\hbar^2}$ in the forbidden region. The general WKB solutions in each region are:

$$\psi_1(x) = \frac{a}{\sqrt{k}}\exp\!\left(-i\int_x^\alpha k\,dx\right) + \frac{b}{\sqrt{k}}\exp\!\left(i\int_x^\alpha k\,dx\right)$$

$$\psi_2(x) = \frac{c}{\sqrt{\kappa}}\exp\!\left(-\int_\alpha^x \kappa\,dx\right) + \frac{d}{\sqrt{\kappa}}\exp\!\left(\int_\alpha^x \kappa\,dx\right)$$

$$\psi_3(x) = \frac{f}{\sqrt{k}}\exp\!\left(i\int_\beta^x k\,dx\right) + \frac{g}{\sqrt{k}}\exp\!\left(-i\int_\beta^x k\,dx\right)$$

The goal is to find $\begin{pmatrix}a\\b\end{pmatrix} = M\begin{pmatrix}f\\g\end{pmatrix}$ — the matrix relating incoming coefficients to outgoing ones.

---

## Step 1: Matching at $x = \alpha$ (Region I $\to$ Region II)

The WKB connection formulae at a left turning point $x = \alpha$ are:

$$\frac{2A}{\sqrt{k}}\cos\!\left(\int_x^\alpha k\,dx - \frac{\pi}{4}\right) - \frac{B}{\sqrt{k}}\sin\!\left(\int_x^\alpha k\,dx - \frac{\pi}{4}\right) \longleftrightarrow \frac{A}{\sqrt{\kappa}}e^{-\int_\alpha^x \kappa\,dx} + \frac{B}{\sqrt{\kappa}}e^{\int_\alpha^x \kappa\,dx}$$

Rewriting $\psi_1$ by multiplying and dividing by $e^{\pm i\pi/4}$ to get it into the cosine/sine form above, and matching coefficients $A, B$ with $c, d$:

$$2A = ae^{-i\pi/4} + be^{i\pi/4} = 2c$$

$$B = i\!\left[ae^{-i\pi/4} - be^{i\pi/4}\right] = d$$

In matrix form ($\mathcal{M}_{ab\to cd}$):

$$\begin{pmatrix}c\\d\end{pmatrix} = \underbrace{\begin{pmatrix}\frac{e^{-i\pi/4}}{2} & \frac{e^{i\pi/4}}{2} \\ ie^{-i\pi/4} & -ie^{i\pi/4}\end{pmatrix}}_{\mathcal{M}_{ab\to cd}}\begin{pmatrix}a\\b\end{pmatrix}$$

We actually need the inverse $\mathcal{M}_{cd\to ab}$:

$$\mathcal{M}_{cd\to ab} = \begin{pmatrix}e^{i\pi/4} & -i\frac{e^{i\pi/4}}{2} \\ e^{-i\pi/4} & i\frac{e^{-i\pi/4}}{2}\end{pmatrix}$$

---

## Step 2: Crossing the barrier (Region II)

Define $\theta \equiv \exp\!\left(\int_\alpha^\beta \kappa\,dx\right)$ — the exponential of the total barrier integral. This is the key quantity controlling tunneling.

Rewriting the Region II wavefunction in terms of integrals running from $\beta$ (to match the right connection formula), and comparing with the standard form, gives the simple relations:

$$A' = B\,\theta, \qquad B' = A/\theta$$

The growing exponential across the barrier picks up a factor $\theta$, and the decaying one picks up $1/\theta$.

---

## Step 3: Matching at $x = \beta$ (Region II $\to$ Region III)

Repeating the same procedure at the right turning point $x = \beta$ and matching $A', B'$ to $f, g$ gives:

$$\mathcal{M}_{fg\to cd} = \begin{pmatrix}-\theta i\,e^{i\pi/4} & i\theta\,e^{-i\pi/4} \\ \frac{1}{2\theta}e^{i\pi/4} & \frac{1}{2\theta}e^{-i\pi/4}\end{pmatrix}$$

---

## The full transfer matrix

Composing the two steps $\mathcal{M}_{fg\to ab} = \mathcal{M}_{cd\to ab}\,\mathcal{M}_{fg\to cd}$:

$$\begin{pmatrix}a\\b\end{pmatrix} = \frac{1}{2}\begin{pmatrix}2\theta + \frac{1}{2\theta} & i\!\left(2\theta - \frac{1}{2\theta}\right) \\ -i\!\left(\theta - \frac{1}{2\theta}\right) & 2\theta + \frac{1}{2\theta}\end{pmatrix}\begin{pmatrix}f\\g\end{pmatrix}$$

---

## Transmission coefficient

For a particle incident from the left we set $g = 0$ (no incoming wave from the right). From the transfer matrix:

$$a = \frac{1}{2}\left(2\theta + \frac{1}{2\theta}\right)f = \left(\theta + \frac{1}{4\theta}\right)f$$

The transmission coefficient $T = |f|^2/|a|^2$:

$$T = \frac{1}{\left|\theta + \frac{1}{4\theta}\right|^2} = \frac{1}{\theta^2\left|1 + \frac{1}{4\theta^2}\right|^2}$$

In the **deep tunneling limit** $\theta \gg 1$ (thick or tall barrier), the term $\frac{1}{4\theta^2} \to 0$:

$$\boxed{T \simeq \theta^{-2} = \exp\!\left(-2\int_\alpha^\beta \kappa(x)\,dx\right)}$$

This is the standard WKB tunneling formula — the transmission probability is the exponential of $-2$ times the integral of $\kappa(x)$ through the classically forbidden region. The shape of the barrier only matters through this single integral, which is why WKB is so powerful for estimating tunneling rates in nuclear physics, alpha decay, scanning tunneling microscopy, and field emission.
