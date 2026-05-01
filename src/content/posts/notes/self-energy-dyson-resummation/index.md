---
title: "Self-Energy, 1PI Diagrams, and the Dyson Resummation"
published: 2026-05-02
description: "How perturbation theory actually computes the field strength renormalization Z and the shift from bare mass m₀ to physical mass m, by resumming all 1PI insertions into the full propagator i/(p² − m₀² − M²(p²))."
tags:
  - quantum-field-theory
  - particle-physics
  - physics
category: Notes
draft: false
---

In the [Källén–Lehmann post](/posts/notes/field-strength-renormalization/) we showed *non-perturbatively* that any interacting scalar theory must have a two-point function with an isolated pole at some physical mass $m$ and residue $Z$, and that — generically — neither $m$ nor $Z$ equals its free-theory value ($m_0$ and $1$). What that derivation could *not* do was actually compute either of them. Computing $Z$, $m$, $m_0$ non-perturbatively is genuinely hard; almost all the experimental contact between QFT and reality lives in the perturbative regime.

So now the question changes from *"why does $Z \neq 1$ and $m \neq m_0$?"* to *"how do we calculate them, diagram by diagram?"* The answer is the **self-energy** $M^2(p^2)$ — the sum of all one-particle-irreducible (1PI) two-point insertions — and the **Dyson resummation** that turns it into the full propagator.

> **Goal:** Starting from the perturbative expansion of $\langle\Omega|T\phi(x)\phi(0)|\Omega\rangle$ in $\phi^4$ theory, organize the diagrams into 1PI building blocks, sum the resulting geometric series, and read off how the pole shifts from $m_0^2$ to $m^2$ and acquires residue $Z < 1$.

---

## Why we care about the dressed two-point function

Take the simplest physical observable that probes the propagator: $2 \to 2$ scattering, encoded by the connected four-point function

$$\left(\prod_{i=1}^{2}\int d^4x_i\, e^{ip_i\cdot x_i}\right)\left(\prod_{j=1}^{2}\int d^4 y_j\, e^{-ik_j\cdot y_j}\right)\,\langle\Omega|T\phi(x_1)\phi(x_2)\phi(y_1)\phi(y_2)|\Omega\rangle.$$

Any Feynman diagram contributing to this object has four external legs leading into a "core" interaction. Crucially, *most* of those external legs are not bare — they pick up self-interactions all along their length. Some of those self-interactions even tie together pieces *within* a single external line.

For LSZ, we will eventually amputate the external legs and put them on shell. To do that consistently we need to know the *full* two-point function — the dressed propagator that an external line really is. Computing it is the goal of this post.

---

## 1PI vs 1PR: cutting the lines

Pick any diagram contributing to the two-point function $\langle\Omega|T\phi(x)\phi(0)|\Omega\rangle$. Look at its internal structure:

- A diagram is **1-particle irreducible (1PI)** if it cannot be split into two disconnected pieces by cutting a single internal line.
- A diagram is **1-particle reducible (1PR)** otherwise.

This is a clean dichotomy because every 1PR two-point diagram has a *unique* decomposition: cut it at every reducible line, and the result is a chain of 1PI blobs strung together by free propagators. So the entire two-point series can be reorganized as

$$\text{(full)} \;=\; \text{(free)} \;+\; \text{(1PI)} \;+\; \text{(1PI)}\!-\!\text{(1PI)} \;+\; \text{(1PI)}\!-\!\text{(1PI)}\!-\!\text{(1PI)} \;+\; \cdots$$

where each "$-$" is a free propagator. Only one new object is needed to write down everything: the 1PI blob with two external legs.

---

## The self-energy $M^2(p^2)$

Define the **self-energy** $-iM^2(p^2)$ as the sum of all 1PI diagrams with two amputated external legs (no propagators on the external legs):

$$-i M^2(p^2) \;\equiv\; \sum (\text{1PI two-point, amputated}).$$

A few properties to keep in mind:

- $M^2(p^2)$ is generally **complex** above multi-particle thresholds (its imaginary part encodes decays and the branch cut from K–L).
- It is a **function of $p^2$** alone by Lorentz invariance and momentum conservation at a two-point function.
- The first contribution already contains all orders in the coupling that are 1PI — at one loop in $\phi^4$ this is the "tadpole" $\sim \lambda$, then 1PI two-loop $\sim \lambda^2$, and so on. Only the *reducible* parts get split off into the chain.

Each non-amputated 1PI block — the blob *with* its two external propagators — equals

$$\frac{i}{p^2 - m_0^2 + i\epsilon}\,(-iM^2(p^2))\,\frac{i}{p^2 - m_0^2 + i\epsilon}.$$

This is the building block that gets repeated in the Dyson chain.

---

## Setting up the Dyson series

For concreteness, work in $\phi^4$ theory,

$$\mathcal{L} = \tfrac{1}{2}\partial^\mu\phi\,\partial_\mu\phi - \tfrac{1}{2}m_0^2\,\phi^2 - V(\phi).$$

We want the Fourier-transformed two-point function

$$G(p) \;\equiv\; \int d^4x\, e^{ip\cdot x}\,\langle\Omega|T\phi(x)\phi(0)|\Omega\rangle.$$

Why only one Fourier integral, not two? Translation invariance. Using $\hat{P}|\Omega\rangle = 0$ and $\phi(y) = e^{i\hat{P}\cdot y}\phi(0)e^{-i\hat{P}\cdot y}$,

$$\langle\Omega|T\phi(x)\phi(y)|\Omega\rangle = \langle\Omega|T\{e^{i\hat{P}\cdot y}\phi(x-y)\,\phi(0)\,e^{-i\hat{P}\cdot y}\}|\Omega\rangle = \langle\Omega|T\phi(x-y)\phi(0)|\Omega\rangle.$$

So the two-point function only depends on $x - y$, and one Fourier integral over the relative coordinate suffices.

Now expand $G(p)$ in 1PI blocks using the chain decomposition:

$$G(p) \;=\; \frac{i}{p^2 - m_0^2} \;+\; \frac{i}{p^2 - m_0^2}\,(-iM^2)\,\frac{i}{p^2 - m_0^2} \;+\; \frac{i}{p^2 - m_0^2}\,(-iM^2)\,\frac{i}{p^2 - m_0^2}\,(-iM^2)\,\frac{i}{p^2 - m_0^2} \;+\; \cdots$$

(suppressing the $i\epsilon$). Pull out a common factor:

$$G(p) \;=\; \frac{i}{p^2 - m_0^2}\left[\,1 \;+\; \frac{M^2}{p^2 - m_0^2} \;+\; \left(\frac{M^2}{p^2 - m_0^2}\right)^{\!2} \;+\; \cdots\,\right].$$

The bracketed object is a geometric series. Sum it.

---

## The full propagator

$$G(p) \;=\; \frac{i}{p^2 - m_0^2}\cdot\frac{1}{1 - M^2(p^2)/(p^2 - m_0^2)} \;=\; \boxed{\;\frac{i}{p^2 - m_0^2 - M^2(p^2) + i\epsilon}.\;}$$

This is the **full propagator**, resummed to all orders in perturbation theory. It is what an external line actually is, with every self-interaction included.

A few things deserve emphasis:

- The pole of $G(p)$ is *not* at $p^2 = m_0^2$ anymore. It sits at the value of $p^2$ that solves $p^2 - m_0^2 - M^2(p^2) = 0$ — a self-consistent condition, since $M^2$ itself depends on $p^2$.
- We have not "added an extra particle." The pole has moved because the same particle has dressed itself with all its own self-interactions. You can never strip a particle of those interactions and still have anything to measure — what you see is the dressed object.
- This single formula is responsible for *both* mass renormalization and field strength renormalization, as we now read off.

---

## Reading off the physical mass $m$ and the residue $Z$

Define the **physical mass** $m$ as the location of the pole:

$$\boxed{\;m^2 \;=\; m_0^2 + M^2(m^2).\;}$$

This is a self-consistent equation — $M^2$ evaluated at its own pole. The mass shift $\delta m^2 \equiv m^2 - m_0^2 = M^2(m^2)$ is a calculable, perturbative number (in renormalized theory; in bare $\phi^4$ each loop is UV divergent, which is what motivates counterterms — a story for another post).

To read off the residue, expand the denominator of $G(p)$ around $p^2 = m^2$:

$$p^2 - m_0^2 - M^2(p^2) \;\approx\; \underbrace{(m^2 - m_0^2 - M^2(m^2))}_{=\,0} \;+\; (p^2 - m^2)\left[1 - \frac{dM^2}{dp^2}\bigg|_{p^2=m^2}\right] \;+\; \mathcal{O}((p^2-m^2)^2).$$

The constant term vanishes by definition of $m^2$, leaving

$$G(p) \;\xrightarrow{\;p^2\to m^2\;}\; \frac{i}{(p^2 - m^2)\,[1 - M^{2\prime}(m^2)]} \;=\; \frac{iZ}{p^2 - m^2} + \text{(finite)},$$

with

$$\boxed{\;Z \;=\; \frac{1}{1 - \dfrac{dM^2}{dp^2}\bigg|_{p^2=m^2}}.\;}$$

This is exactly the residue identified in the Källén–Lehmann post — the field strength renormalization $Z = |\langle\Omega|\phi(0)|\mathbf{1}_0\rangle|^2$ — but now expressed as a **calculable derivative of the self-energy at the physical pole**. Two completely different routes to the same number:

| | K–L (non-perturbative) | Dyson (perturbative) |
|---|---|---|
| $Z$ | $\lvert\langle\Omega\lvert\phi(0)\rvert\mathbf{1}_0\rangle\rvert^2$ | $1/[1 - M^{2\prime}(m^2)]$ |
| $m^2$ | Location of isolated $\rho$-pole | Solution of $m^2 = m_0^2 + M^2(m^2)$ |

This consistency is not an accident — it is the perturbative theory honoring the analytic structure that K–L derived axiomatically.

---

## Field redefinition kills $Z$

The K–L lesson — that we can absorb $Z$ into a field rescaling — works perturbatively too. Define

$$\phi'(x) \equiv \frac{\phi(x)}{\sqrt{Z}}.$$

Then near the one-particle pole

$$\int d^4x\, e^{ip\cdot x}\,\langle\Omega|T\phi'(x)\phi'(0)|\Omega\rangle \;\xrightarrow{\;p^2 \to m^2\;}\; \frac{i}{p^2 - m^2 + i\epsilon} + (\text{finite}).$$

**Read this carefully.** This is *not* a return to free theory. We have just resummed every self-interaction into the dressed propagator. What the rescaling has done is line up the residue at the physical pole with the canonical free-propagator form, so that asymptotic in/out states behave "like in free theory" — i.e. like well-separated, on-shell particles. The interactions are still there in every $S$-matrix element; they just no longer leak into the normalization of the asymptotic states.

This is precisely the LSZ ingredient: the residue at the physical pole of the dressed propagator must be normalized to $1$ for the LSZ reduction formula to extract scattering amplitudes cleanly. Mass renormalization plus field strength renormalization are exactly what you do to make that happen.

---

## Summary

| Object | Defined by | Says what |
|---|---|---|
| $-iM^2(p^2)$ | Sum of 1PI two-point amputated diagrams | Self-energy; complex above thresholds |
| $i/(p^2 - m_0^2 - M^2(p^2))$ | Dyson resummation of 1PI chain | Full propagator |
| $m^2 = m_0^2 + M^2(m^2)$ | Pole condition | Mass renormalization |
| $Z = [1 - M^{2\prime}(m^2)]^{-1}$ | Residue at the pole | Field strength renormalization |
| $\phi' = \phi/\sqrt{Z}$ | Field redefinition | Sets residue to $1$; canonical asymptotic states |

**The big-picture takeaway.** [Källén–Lehmann](/posts/notes/field-strength-renormalization/) told us, on completely general grounds, that the interacting two-point function near its one-particle pole *must* look like $iZ/(p^2 - m^2)$ — without ever telling us what $Z$ or $m$ equal. Dyson resummation is the perturbative engine that puts numbers on those quantities: organize the diagrams into 1PI pieces, sum the geometric series of 1PR chains, and the pole automatically migrates from $m_0^2$ to $m_0^2 + M^2(m^2)$ with residue $1/[1 - M^{2\prime}(m^2)]$. Renormalization isn't a fix applied to a sick theory — it is the natural language perturbation theory speaks once you take the analytic structure seriously.
