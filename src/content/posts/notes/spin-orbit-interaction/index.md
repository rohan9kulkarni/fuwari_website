---
title: "Spin-Orbit Interaction as a 2×2 Spinor Operator"
published: 2023-07-20
description: "We decompose L·S using ladder operators and write the spin-orbit Hamiltonian explicitly as a 2×2 matrix in the Sz eigenbasis."
tags:
  - quantum-mechanics
category: Notes
draft: false
---

Spin-orbit coupling is responsible for the **fine structure** of hydrogen and plays a central role in atomic physics, relativistic corrections, and condensed matter (topological insulators, Rashba effect). The interaction Hamiltonian is

$$W_{S-O} = \frac{e^2}{8\pi\epsilon_0 m_e^2 c^2 R^3}\, \vec{L} \cdot \vec{S}$$

where $R$ is the (operator) magnitude of the electron's position, $\vec{L}$ is the orbital angular momentum, and $\vec{S}$ is the spin. The goal here is to write this out explicitly as a $2 \times 2$ matrix operator acting on spinors, using the $S_z$ eigenstates $|{+}\rangle, |{-}\rangle$ as a basis.

---

## Part 1: Decomposing $\vec{L} \cdot \vec{S}$ with ladder operators

Define the raising and lowering operators in the usual way:

$$L_\pm \equiv L_x \pm i L_y, \qquad S_\pm \equiv S_x \pm i S_y$$

**Claim:**
$$\vec{L} \cdot \vec{S} = \frac{1}{2}(S_+ L_- + S_- L_+) + L_z S_z$$

**Proof** (going right to left):

$$\frac{1}{2}(S_+ L_- + S_- L_+) + L_z S_z$$

$$= \frac{1}{2}\Big((S_x + iS_y)(L_x - iL_y) + (S_x - iS_y)(L_x + iL_y)\Big) + L_z S_z$$

Expanding the brackets:

$$= \frac{1}{2}\Big(S_x L_x - iS_x L_y + iS_y L_x + S_y L_y + S_x L_x + iS_x L_y - iS_y L_x + S_y L_y\Big) + L_z S_z$$

The imaginary cross-terms cancel:

$$= \frac{1}{2}\Big(2S_x L_x + 2S_y L_y\Big) + L_z S_z = S_x L_x + S_y L_y + S_z L_z = \vec{S} \cdot \vec{L} \quad \blacksquare$$

This decomposition is useful because $S_\pm$ act simply on spin-$\frac{1}{2}$ states, while $L_\pm$ act on the orbital part — the two spaces never mix, so we can handle them separately.

---

## Part 2: The explicit $2 \times 2$ matrix

For a spin-$\frac{1}{2}$ electron, $S_x = \frac{\hbar}{2}\sigma_x$ and $S_y = \frac{\hbar}{2}\sigma_y$ in terms of Pauli matrices. Computing $S_\pm$ explicitly:

$$S_+ = S_x + iS_y = \frac{\hbar}{2}\begin{pmatrix}0 & 1\\1 & 0\end{pmatrix} + i\cdot\frac{\hbar}{2}\begin{pmatrix}0 & -i\\i & 0\end{pmatrix} = \frac{\hbar}{2}\begin{pmatrix}0 & 2\\0 & 0\end{pmatrix} = \hbar\begin{pmatrix}0 & 1\\0 & 0\end{pmatrix}$$

$$S_- = S_x - iS_y = \hbar\begin{pmatrix}0 & 0\\1 & 0\end{pmatrix}$$

And $S_z = \frac{\hbar}{2}\begin{pmatrix}1 & 0\\0 & -1\end{pmatrix}$.

Now substitute into the ladder decomposition. The three terms become $2\times 2$ matrices whose **entries are orbital operators** (acting on the spatial wavefunction):

$$\frac{1}{2}S_+ L_- = \frac{\hbar}{2}\begin{pmatrix}0 & L_-\\0 & 0\end{pmatrix}, \qquad \frac{1}{2}S_- L_+ = \frac{\hbar}{2}\begin{pmatrix}0 & 0\\L_+ & 0\end{pmatrix}, \qquad L_z S_z = \frac{\hbar}{2}\begin{pmatrix}L_z & 0\\0 & -L_z\end{pmatrix}$$

Adding them:

$$\vec{L} \cdot \vec{S} = \frac{\hbar}{2}\begin{pmatrix}L_z & L_-\\L_+ & -L_z\end{pmatrix}$$

Plugging back into $W_{S-O}$:

$$\boxed{W_{S-O} = \frac{e^2}{8\pi\epsilon_0 m_e^2 c^2}\,\frac{\hbar}{2} \begin{pmatrix}L_z/R^3 & L_-/R^3\\L_+/R^3 & -L_z/R^3\end{pmatrix}}$$

---

## Reading the matrix

The structure of this matrix is worth pausing on:

- **Diagonal entries** ($L_z/R^3$ and $-L_z/R^3$): these connect spin-up to spin-up and spin-down to spin-down. They shift energy based on the projection of $\vec{L}$ along $z$, weighted by whether the spin is up or down — this is what causes the energy splitting between $m_j = +j$ and $m_j = -j$ states.

- **Off-diagonal entries** ($L_\pm/R^3$): these flip the spin while simultaneously changing $m_l$ by $\mp 1$, conserving $m_j = m_l + m_s$. They are responsible for **mixing** spatial and spin degrees of freedom, and are why $m_l$ and $m_s$ individually are not good quantum numbers in the presence of spin-orbit coupling — only $j$ and $m_j$ are.

This is why the correct basis for hydrogen fine structure is $|n, l, j, m_j\rangle$ rather than $|n, l, m_l, m_s\rangle$.
