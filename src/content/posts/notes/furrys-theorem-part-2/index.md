---
title: "Furry's Theorem, Part 2: What It Buys You"
published: 2026-07-25
description: "Spending Furry's theorem: no photon tadpole, no three-photon vertex, why Euler–Heisenberg has only even powers of F, whole classes of Feynman diagrams deleted for free, why light doesn't scatter off light until fourth order, and where the theorem breaks near a magnetar."
tags:
  - quantum-field-theory
  - particle-physics
  - physics
category: Notes
series: "Furry's Theorem"
draft: false
---

*Part 2 of 2. [Part 1](/posts/notes/furrys-theorem-part-1/) proved the theorem. This part spends it.*

---

The result from Part 1, in one line:

$$\langle 0|\,T\{A^{\mu_1}(x_1)\cdots A^{\mu_n}(x_n)\}\,|0\rangle = 0 \qquad (n \text{ odd}),$$

because the photon is C-odd, the vacuum is C-even, and QED conserves C. It holds off-shell, which is what makes it useful. Here's what you get for it.

---

## 1. The photon has no vacuum expectation value

Take $n=1$: $\langle 0|A^\mu(x)|0\rangle = 0$. The photon tadpole vanishes identically.

This sounds like nothing, but it's the reason you never have to worry about it. If $\langle A^\mu\rangle$ were nonzero you'd have to shift the field, $A^\mu \to A^\mu + \langle A^\mu\rangle$, and expand around the new minimum — and a constant background $\langle A^\mu \rangle$ picks a preferred direction in spacetime, breaking Lorentz invariance. Furry's theorem says the question never arises.

---

## 2. There is no three-photon vertex

Take $n=3$. Photons do not interact three at a time — at any order, to all loops. Processes like $\gamma\gamma \to \gamma$ and $\gamma \to \gamma\gamma$ are simply absent from QED.

The cleanest way to see what this means is in effective-field-theory language. Integrate out the electron and you get the **Euler–Heisenberg Lagrangian**, the effective theory of photons alone. Since $A_\mu \to -A_\mu$ implies $F_{\mu\nu} \to -F_{\mu\nu}$, any term with an odd total number of field strengths is C-odd and forbidden. So the expansion contains **only even powers of $F$**:

$$\mathcal{L}_{\text{eff}} = -\tfrac{1}{4}F^2 \;+\; \frac{c_1}{m_e^4}\left(F_{\mu\nu}F^{\mu\nu}\right)^2 + \frac{c_2}{m_e^4}\left(F_{\mu\nu}\tilde{F}^{\mu\nu}\right)^2 + \dots$$

with nothing cubic in between. The first photon self-interaction is therefore a **four**-photon process: light-by-light scattering, four vertices, amplitude $\mathcal{O}(\alpha^2)$, cross-section $\mathcal{O}(\alpha^4)$.

That factor is why you can cross two laser beams and nothing happens. Light-by-light scattering in vacuum wasn't directly observed until ATLAS and CMS saw it in ultraperipheral heavy-ion collisions at the LHC — you need the enormous coherent electromagnetic fields of a passing lead nucleus to have a chance. Furry's theorem is a large part of why it's that hard: the $n=3$ term, which would have been far bigger, isn't there.

---

## 3. It deletes whole classes of diagrams, for free

This is the everyday use. The working rule:

> **Any diagram containing a closed fermion loop with an odd number of photon attachments can be dropped** — more precisely, it cancels against the diagram with the loop arrow reversed.

Compton scattering at one loop is the standard example. There are six topologies: a self-energy insertion on the internal electron line (I), two vertex corrections (II, III), a box (IV), and these two:

![Compton diagrams V and VI](/images/furry-compton.svg)

*Diagrams V and VI: a fermion loop with two external photons and one internal photon running down to the electron line. Three attachments — they cancel.*

Two details worth noticing, because they're the ones people get wrong:

- **The third photon is virtual.** It connects the loop to the electron line; it is not an external leg. So this application needs the *off-shell* version of the theorem. If you only ever proved the on-shell statement, you can't use it here.
- **Neither diagram is zero by itself.** V and VI differ by the direction of the arrow around the loop, and their integrals are equal and opposite. Compute one, get a nonzero answer, and you haven't found a violation — you've found half of a cancelling pair.

### The bonus: a renormalization crisis that doesn't happen

There's a subtler payoff hiding here. Count the superficial degree of divergence of the three-photon function in QED, using $D = 4 - \tfrac{3}{2}N_{\text{ferm}} - N_{\text{phot}}$ with three external photons and no external fermions:

$$D = 4 - 0 - 3 = 1 .$$

*Linearly divergent.* And the QED Lagrangian contains no three-photon counterterm to absorb it.

Furry's theorem is what rescues this: the would-be divergent subgraph is exactly zero, so there is nothing to renormalize and nothing to add. Had the three-photon amplitude been merely small rather than exactly zero, we would have been forced to introduce a three-photon counterterm into QED — and the theory as universally written down does not have one.

---

## 4. Atomic physics: which vacuum-polarization terms survive

In hydrogen, the leading vacuum-polarization contribution to the Lamb shift is the **Uehling** term: an electron loop with two photon attachments, one to the nucleus and one to the orbiting electron.

The natural next term in the expansion in the external Coulomb field has *three* attachments — two to the nucleus, one to the electron. It vanishes by Furry's theorem.

So the series skips a step. The first correction beyond Uehling is the four-attachment **Wichmann–Kroll** term. The expansion of vacuum polarization in the strength of the external field proceeds two attachments at a time, and this is not a small detail in precision QED tests: it changes which order you have to compute to.

---

## 5. Where it breaks — and why that's the interesting part

Part 1 listed three ways to lose the theorem: a non-invariant measure, C-violating interactions, or a C-odd background. The last two show up in real physics.

**Strong magnetic fields.** Photon splitting $\gamma \to \gamma\gamma$ is forbidden in vacuum. Put the process in a strong magnetic field, though, and it happens — this is Adler's calculation, and it's relevant to the magnetospheres of magnetars, where fields reach $10^{15}$ G.

Why doesn't Furry's theorem stop it? Because the external field itself is made of photons. The diagram is a fermion loop with three *real* photon legs **plus** insertions of the background field, and each background insertion is one more photon attachment. Three real photons plus one field insertion is four attachments — even, and therefore allowed. The background field is C-odd, which is exactly the loophole; counting legs shows you precisely how it's exploited.

**Weak interactions.** C is violated in the electroweak sector, so in the full Standard Model Furry's theorem is not exact. Amplitudes for odd numbers of photons are nonzero but suppressed — they need a C-violating weak vertex, which costs you the weak scale. In pure QED the theorem is exact; in the SM it's an extremely good approximation.

**Matter and finite density.** Any medium with a net charge density, or a nonzero chemical potential, is a C-odd background. Furry's theorem doesn't apply inside a star, a plasma, or a nuclear medium.

The pattern is worth internalising, because it turns the theorem into a diagnostic:

> **Whenever you see an odd-photon amplitude that isn't zero, look for the C-odd thing.** It's either in the interactions or in the background. There's always something.

---

## The short version

| Statement | What it gives you |
|---|---|
| $n=1$ | No photon tadpole; no need to shift $A^\mu$ |
| $n=3$ | No three-photon vertex; Euler–Heisenberg has only even powers of $F$ |
| $n=3$, off-shell | Fermion-loop subgraphs with odd legs cancel; Compton V + VI $=0$ |
| $n=3$, divergences | The linearly divergent 3-photon function is zero, so QED needs no 3-photon counterterm |
| Even steps only | Vacuum polarization goes Uehling $\to$ Wichmann–Kroll, skipping the 3-leg term |
| Failure modes | C-odd background (magnetar, plasma) or C-odd interaction (weak) |

Not bad for a theorem whose entire content is that the photon changes sign.

---

*[← Part 1: the proof](/posts/notes/furrys-theorem-part-1/)*
