---
title: "The Time-Reversal Operator for Spin-1/2 and Why Fermions Need Two Rotations"
published: 2022-11-09
description: "Deriving the explicit matrix form of the time-reversal operator for a spin-1/2 particle by expanding the exponential, and proving the famous result Θ² = −1 for fermions."
tags:
  - quantum-mechanics
category: Notes
draft: false
---

Time reversal is one of the more subtle discrete symmetries in quantum mechanics. Unlike parity, it is **antiunitary** — it involves complex conjugation — and its action on spinors has a surprising consequence: applying time reversal *twice* to a fermion gives back the negative of the original state. This is deeply connected to the spin-statistics theorem and Kramers degeneracy.

---

## The time-reversal operator

For a spin-$\frac{1}{2}$ particle, time reversal is defined as:

$$\Theta = K e^{-i\pi S_y/\hbar} = K e^{-i\frac{\pi}{2}\sigma_y}$$

where $K$ is the complex conjugation operator, and $\sigma_y$ is the Pauli matrix. The $e^{-i\pi S_y/\hbar}$ factor rotates the spin by $\pi$ about the $y$-axis — intuitively, reversing time flips the spin (since spin is an angular momentum, and $\vec{L} = \vec{r}\times\vec{p}$ flips under $t \to -t$).

---

## Expanding the exponential

Expanding the matrix exponential as a power series:

$$e^{-i\frac{\pi}{2}\sigma_y} = \sum_{j=0}^{\infty} \frac{1}{j!}\left(-\frac{i\pi}{2}\sigma_y\right)^j$$

The key simplification comes from $\sigma_y^2 = \mathbf{1}$, so powers of $\sigma_y$ alternate:

$$\sigma_y^{2n} = \mathbf{1}, \qquad \sigma_y^{2n+1} = \sigma_y$$

Separating even and odd terms:

$$e^{-i\frac{\pi}{2}\sigma_y} = \mathbf{1}\underbrace{\left(1 - \frac{(\pi/2)^2}{2!} + \frac{(\pi/2)^4}{4!} - \cdots\right)}_{\cos(\pi/2)\,=\,0} - i\sigma_y\underbrace{\left(\frac{\pi}{2} - \frac{(\pi/2)^3}{3!} + \frac{(\pi/2)^5}{5!} - \cdots\right)}_{\sin(\pi/2)\,=\,1}$$

So:

$$e^{-i\frac{\pi}{2}\sigma_y} = -i\sigma_y = -i\begin{pmatrix}0 & -i \\ i & 0\end{pmatrix} = \begin{pmatrix}0 & -1 \\ 1 & 0\end{pmatrix}$$

Therefore:

$$\boxed{\Theta = K\begin{pmatrix}0 & -1 \\ 1 & 0\end{pmatrix}}$$

---

## Action on a general spinor

Let $|\psi\rangle = \begin{pmatrix}\alpha \\ \beta\end{pmatrix}$. Applying $\Theta$:

$$\Theta\begin{pmatrix}\alpha \\ \beta\end{pmatrix} = K\begin{pmatrix}0 & -1 \\ 1 & 0\end{pmatrix}\begin{pmatrix}\alpha \\ \beta\end{pmatrix} = K\begin{pmatrix}-\beta \\ \alpha\end{pmatrix} = \begin{pmatrix}-\beta^* \\ \alpha^*\end{pmatrix}$$

Time reversal swaps and conjugates the spin components: spin-up amplitude becomes (conjugate of) spin-down, and vice versa — with a sign flip. This makes sense: reversing time swaps $|\uparrow\rangle$ and $|\downarrow\rangle$ since angular momentum is odd under $t \to -t$.

---

## $\Theta^2 = -1$ for fermions

Now apply $\Theta$ a second time:

$$\Theta^2\begin{pmatrix}\alpha \\ \beta\end{pmatrix} = \Theta\begin{pmatrix}-\beta^* \\ \alpha^*\end{pmatrix} = K\begin{pmatrix}0 & -1 \\ 1 & 0\end{pmatrix}\begin{pmatrix}-\beta^* \\ \alpha^*\end{pmatrix} = K\begin{pmatrix}-\alpha^* \\ -\beta^*\end{pmatrix} = \begin{pmatrix}-\alpha \\ -\beta\end{pmatrix}$$

So:

$$\boxed{\Theta^2|\psi\rangle = -|\psi\rangle}$$

**For bosons** (integer spin), one finds $\Theta^2 = +1$. **For fermions** (half-integer spin), $\Theta^2 = -1$. This sign has real physical consequences:

- **Kramers theorem**: for a system with half-integer total spin in a time-reversal invariant potential (no magnetic field), every energy eigenstate is at least doubly degenerate. The two states $|\psi\rangle$ and $\Theta|\psi\rangle$ are orthogonal (which follows from $\Theta^2 = -1$) and degenerate — you cannot split them without breaking time-reversal symmetry.

- **Topological insulators**: the $\mathbb{Z}_2$ classification of time-reversal invariant topological insulators is directly rooted in the distinction $\Theta^2 = \pm 1$.

The $4\pi$ periodicity of spinors — the fact that a spin-$\frac{1}{2}$ particle must be rotated by $4\pi$ (not $2\pi$) to return to its original state — is the same mathematics appearing here: $\Theta^2 = -1$ is the statement that two time-reversals equal a $2\pi$ rotation, which for fermions gives $-1$.
