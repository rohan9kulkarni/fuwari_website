---
title: "The Density Matrix: Six Essential Properties"
published: 2023-07-20
description: "Pure states, mixtures, ensemble averages, cyclic trace, and the von Neumann equation — all the core properties of the density operator worked out explicitly."
tags:
  - quantum-mechanics
category: Notes
draft: false
---

The density operator is the most general way to describe a quantum system. It handles both pure states (a definite quantum state) and *mixtures* (statistical ensembles of states) within a single framework — essential for open quantum systems, quantum statistical mechanics, and quantum information.

The density operator is defined as:

$$\rho = \sum_i w_i \left|\alpha^{(i)}\right\rangle\!\left\langle\alpha^{(i)}\right|, \qquad \sum_i w_i = 1$$

where the states $|\alpha^{(i)}\rangle$ need not be orthogonal, and the $w_i \geq 0$ are classical probabilities. A **pure state** has exactly one $w_i \neq 0$. Otherwise it's a **mixture**. Crucially, the $w_i$ are *not* quantum amplitudes — the $|\alpha^{(i)}\rangle$ themselves can already be superpositions.

---

## 1. $\text{Tr}(\rho) = 1$

The matrix elements of $\rho$ in some basis $|i\rangle$ are:

$$\rho_{ij} = \langle i|\rho|j\rangle = \sum_k w_k \langle i|\alpha^{(k)}\rangle\langle\alpha^{(k)}|j\rangle$$

Taking the trace (sum of diagonal elements):

$$\text{Tr}(\rho) = \sum_i \rho_{ii} = \sum_i \sum_k w_k \langle\alpha^{(k)}|i\rangle\langle i|\alpha^{(k)}\rangle$$

Using completeness $\sum_i |i\rangle\langle i| = \mathbf{1}$:

$$\text{Tr}(\rho) = \sum_k w_k \langle\alpha^{(k)}|\alpha^{(k)}\rangle = \sum_k w_k = 1 \quad \blacksquare$$

---

## 2. Pure states: $\rho^2 = \rho$ and $\text{Tr}(\rho^2) = 1$

For a pure state there is a single normalized state $|i\rangle$ with $w_i = 1$, so $\rho = |i\rangle\langle i|$. Then:

$$\rho^2 = |i\rangle\langle i|i\rangle\langle i| = |i\rangle\langle i| = \rho \quad \blacksquare$$

And immediately:

$$\text{Tr}(\rho^2) = \text{Tr}(\rho) = 1$$

For a **mixture**, $\text{Tr}(\rho^2) < 1$ — this is actually used as a measure of *purity*. The closer $\text{Tr}(\rho^2)$ is to 1, the more "pure-like" the state is.

---

## 3. Ensemble averages: $[A] = \text{Tr}(\rho A)$

The ensemble average of an operator $A$ is defined as:

$$[A] = \sum_i w_i \langle\alpha^{(i)}|A|\alpha^{(i)}\rangle$$

Working from the right-hand side $\text{Tr}(\rho A)$, using the matrix element definition $A_{ji} = \langle j|A|i\rangle$:

$$\text{Tr}(\rho A) = \sum_i \sum_j \rho_{ij} A_{ji} = \sum_{i,j,k} w_k \langle\alpha^{(k)}|j\rangle\langle j|A|i\rangle\langle i|\alpha^{(k)}\rangle$$

Summing over $i$ and $j$ using completeness twice:

$$\text{Tr}(\rho A) = \sum_k w_k \langle\alpha^{(k)}|A|\alpha^{(k)}\rangle = [A] \quad \blacksquare$$

This is powerful: any expectation value in any ensemble is just a single trace.

---

## 4. Cyclic property of trace, and basis independence

**Cyclic property:** $\text{Tr}(AB) = \text{Tr}(BA)$.

Insert a complete set $\sum_j |\phi_j\rangle\langle\phi_j| = \mathbf{1}$ between $A$ and $B$:

$$\text{Tr}(AB) = \sum_i \langle\psi_i|AB|\psi_i\rangle = \sum_{i,j}\langle\psi_i|A|\phi_j\rangle\langle\phi_j|B|\psi_i\rangle$$

Swap the scalar factors (they're just numbers):

$$= \sum_{i,j}\langle\phi_j|B|\psi_i\rangle\langle\psi_i|A|\phi_j\rangle = \sum_j \langle\phi_j|BA|\phi_j\rangle = \text{Tr}(BA) \quad \blacksquare$$

For longer products this extends by induction: $\text{Tr}(ABC\cdots) = \text{Tr}(BC\cdots A) = \cdots$

**Basis independence** follows immediately. If $U$ is a unitary change of basis, then the trace in the new basis is $\text{Tr}(U\rho U^\dagger) = \text{Tr}(U^\dagger U \rho) = \text{Tr}(\rho)$, using the cyclic property.

---

## 5. Superposition $\neq$ mixture: an explicit example

This is arguably the most important conceptual point about the density matrix. Consider a spin-1/2 particle with $|\pm\rangle \equiv |S_z = \pm\tfrac{\hbar}{2}\rangle$.

**The mixture** $\rho_\text{mix} = \tfrac{1}{2}(|+\rangle\langle+| + |-\rangle\langle-|)$:

$$\rho_\text{mix} = \frac{1}{2}\begin{pmatrix}1&0\\0&0\end{pmatrix} + \frac{1}{2}\begin{pmatrix}0&0\\0&1\end{pmatrix} = \frac{1}{2}\begin{pmatrix}1&0\\0&1\end{pmatrix} = \frac{\mathbf{1}}{2}$$

With $S_x = \frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix}$:

$$[S_x]_\text{mix} = \text{Tr}(\rho_\text{mix} S_x) = \frac{\hbar}{4}\text{Tr}\begin{pmatrix}0&1\\1&0\end{pmatrix} = 0$$

**The superposition** $|\psi_\text{sup}\rangle = \frac{1}{\sqrt{2}}(|+\rangle + |-\rangle)$:

$$\rho_\text{sup} = |\psi_\text{sup}\rangle\langle\psi_\text{sup}| = \frac{1}{2}\begin{pmatrix}1\\1\end{pmatrix}\begin{pmatrix}1&1\end{pmatrix} = \frac{1}{2}\begin{pmatrix}1&1\\1&1\end{pmatrix}$$

$$[S_x]_\text{sup} = \text{Tr}(\rho_\text{sup} S_x) = \frac{\hbar}{4}\text{Tr}\begin{pmatrix}1&1\\1&1\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix} = \frac{\hbar}{4}\text{Tr}\begin{pmatrix}1&1\\1&1\end{pmatrix} = \frac{\hbar}{2}$$

So $[S_x]_\text{mix} = 0$ but $[S_x]_\text{sup} = \hbar/2$ — the two states give **different measurable predictions**. The superposition has definite spin along $x$; the mixture does not. The off-diagonal elements of $\rho$ (the *coherences*) encode quantum interference and are entirely absent in the mixture.

---

## 6. Equation of motion: the von Neumann equation

Differentiating $\rho = \sum_i w_i(t)|\alpha^{(i)}(t)\rangle\langle\alpha^{(i)}(t)|$ with respect to time using the product rule:

$$\frac{d\rho}{dt} = \sum_i \frac{dw_i}{dt}|\alpha^{(i)}\rangle\langle\alpha^{(i)}| + \sum_i w_i\left(\frac{d}{dt}|\alpha^{(i)}\rangle\langle\alpha^{(i)}| + |\alpha^{(i)}\rangle\frac{d}{dt}\langle\alpha^{(i)}|\right)$$

Using the time-dependent Schrödinger equation $i\hbar\frac{d}{dt}|\alpha^{(i)}\rangle = H|\alpha^{(i)}\rangle$ and its conjugate:

$$\frac{d}{dt}|\alpha^{(i)}\rangle = -\frac{i}{\hbar}H|\alpha^{(i)}\rangle, \qquad \frac{d}{dt}\langle\alpha^{(i)}| = +\frac{i}{\hbar}\langle\alpha^{(i)}|H$$

Substituting:

$$\frac{d\rho}{dt} = \sum_i \frac{dw_i}{dt}|\alpha^{(i)}\rangle\langle\alpha^{(i)}| + \left(-\frac{i}{\hbar}H\rho + \frac{i}{\hbar}\rho H\right)$$

$$\boxed{\frac{d\rho}{dt} = \sum_i \frac{dw_i}{dt}|\alpha^{(i)}\rangle\langle\alpha^{(i)}| - \frac{i}{\hbar}[H,\,\rho]}$$

If the weights $w_i$ are time-independent (a closed system), the first term vanishes and we recover the **von Neumann equation**:

$$\frac{d\rho}{dt} = -\frac{i}{\hbar}[H, \rho]$$

This is the quantum analogue of Liouville's theorem in classical statistical mechanics. Note the sign: it's $-\frac{i}{\hbar}[H,\rho]$, opposite to the Heisenberg equation for operators $\frac{dA}{dt} = +\frac{i}{\hbar}[H,A]$.
