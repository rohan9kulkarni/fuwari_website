---
title: "Furry's Theorem, Part 1: Why an Odd Number of Photons Can't Come From Nothing"
published: 2026-07-25
description: "A path-integral and diagrammatic proof that any correlation function of an odd number of photon fields vanishes exactly — the photon is C-odd, the vacuum is C-even, and QED conserves C — plus the three places the proof most often goes wrong."
tags:
  - quantum-field-theory
  - particle-physics
  - physics
category: Notes
series: "Furry's Theorem"
draft: false
---

*Part 1 of 2. This part proves the theorem. [Part 2](/posts/notes/furrys-theorem-part-2/) shows what it's good for.*

---

There's a result in QED that looks like a technicality and turns out to be one of the most useful labour-saving devices in the whole subject:

$$\langle 0|\,T\{A^{\mu_1}(x_1)\,A^{\mu_2}(x_2)\cdots A^{\mu_n}(x_n)\}\,|0\rangle = 0 \qquad\text{for } n \text{ odd.}$$

Any correlation function of an **odd** number of photon fields vanishes. Not approximately, not to leading order — exactly, to all orders in perturbation theory, and in fact non-perturbatively. This is **Furry's theorem** (Wendell Furry, 1937).

I'm going to prove it twice: once with the path integral, which is short and airtight, and once with Feynman diagrams, which is how you'd actually spot it in a calculation. Along the way I'll flag the three places where I've most often seen the proof go wrong.

You'll need: the QED Lagrangian, gamma-matrix manipulation, and the generating functional $Z[J]$. That's it.

---

## 1. The one-line reason

Before any algebra, here is the whole thing in a sentence.

**The photon is odd under charge conjugation.** So a state of $n$ photons carries C-parity $(-1)^n$. The vacuum has C-parity $+1$. QED conserves C. An amplitude connecting two states of different C-parity is zero. Odd $n$ is therefore forbidden.

That's the physics. Everything below is the work of making two phrases precise — "the photon is C-odd" and "QED conserves C" — and then converting them into a statement about correlation functions.

---

## 2. Warm-up: scalar QED, where it's obvious

Do this first. It has no gamma matrices and it contains the entire logical structure.

In scalar QED the charged matter is a complex field $\phi$, and charge conjugation is just complex conjugation: $C:\phi \leftrightarrow \phi^{*}$. The kinetic term is

$$(D_\mu\phi)^{*}D^\mu\phi, \qquad D_\mu\phi = (\partial_\mu - ieA_\mu)\phi .$$

Now apply $C$. The object $D_\mu\phi = (\partial_\mu - ieA_\mu)\phi$ becomes $(\partial_\mu - ieA_\mu)\phi^{*}$. But for the Lagrangian to come back to itself, we need it to turn into $(D_\mu\phi)^{*} = (\partial_\mu + ieA_\mu)\phi^{*}$ — note the flipped sign on the charge. The two agree if and only if

$$\boxed{\,C:\ A_\mu \to -A_\mu\,}$$

That's it. **The photon must be C-odd**, and the reason is transparent: $A_\mu$ couples to the electric current, charge conjugation reverses all currents, so $A_\mu$ has to reverse too or the coupling won't survive.

Everything else in this post is bookkeeping.

---

## 3. Spinor QED: same answer, real algebra

Now the theory we care about,

$$S = \int d^4x\ \bar\psi\,\gamma^\mu\!\left(\partial_\mu - ieA_\mu\right)\psi ,$$

with charge conjugation acting as

$$C:\ \psi \to -i\gamma^2\psi^{*} .$$

**Conventions.** Metric $(+,-,-,-)$, Weyl basis. The facts we need:

$$\gamma^{2T}=\gamma^2,\quad (\gamma^2)^2=-\mathbb{1},\quad \gamma^{0T}=\gamma^{0*}=\gamma^0,\quad (\gamma^0)^2=\mathbb{1},$$

$$\gamma^2\gamma^\mu\gamma^2=\gamma^{\mu*},\qquad \gamma^{\mu*}=\gamma^0\gamma^{\mu T}\gamma^0 .$$

(The first identity holds because in the Weyl basis $\gamma^0,\gamma^1,\gamma^3$ are real and $\gamma^2$ is imaginary; check the cases $\mu=2$ and $\mu\neq2$ separately and you'll see it.)

First, what happens to $\bar\psi$:

$$C:\ \bar\psi = (\psi^{*})^{T}\gamma^0 \ \longrightarrow\ (-i\gamma^2\psi)^{T}\gamma^0 = -i\,\psi^{T}\gamma^2\gamma^0 .$$

Look at what that says. $\psi$ turned into something built from $\psi^{*}$, and $\bar\psi$ turned into something built from $\psi$.

> **The one structural fact worth remembering: $C$ swaps $\psi$ and $\bar\psi$.**
>
> Every sign below comes from putting them back in the right order. There are only ever three sources of signs: transposing the matrix sandwich, anticommuting the two fields past each other, and — for terms with a derivative — moving the derivative off the wrong field.

### 3.1 The vector bilinear flips sign

$$\bar\psi\gamma^\mu\psi \ \longrightarrow\ (-i)^2\,\psi^{T}\gamma^2\gamma^0\gamma^\mu\gamma^2\psi^{*} = -\,\psi^{T}\!\left(\gamma^2\gamma^0\gamma^\mu\gamma^2\right)\!\psi^{*}.$$

Insert $\mathbb{1} = -\gamma^2\gamma^2$ between $\gamma^0$ and $\gamma^\mu$, then use $\gamma^2\gamma^\mu\gamma^2 = \gamma^{\mu*}$ twice:

$$\gamma^2\gamma^0\gamma^\mu\gamma^2 = -\left(\gamma^2\gamma^0\gamma^2\right)\!\left(\gamma^2\gamma^\mu\gamma^2\right) = -\gamma^{0*}\gamma^{\mu*} = -\gamma^{0}\gamma^{\mu*},$$

and then $\gamma^0\gamma^{\mu*} = \gamma^0\gamma^0\gamma^{\mu T}\gamma^0 = \gamma^{\mu T}\gamma^0$. So

$$\bar\psi\gamma^\mu\psi \ \longrightarrow\ \psi^{T}\gamma^{\mu T}\gamma^0\psi^{*} = \left(\gamma^{\mu T}\gamma^0\right)_{\alpha\beta}\psi_\alpha\,\psi^{*}_\beta .$$

The fields are Grassmann-valued, so $\psi_\alpha\psi^{*}_\beta = -\psi^{*}_\beta\psi_\alpha$. Anticommute, relabel $\alpha\leftrightarrow\beta$, and use $(\gamma^{\mu T}\gamma^0)^{T} = \gamma^0\gamma^\mu$:

$$\ \longrightarrow\ -\left(\gamma^{0}\gamma^{\mu}\right)_{\alpha\beta}\psi^{*}_\alpha\psi_\beta = -\,\psi^{\dagger}\gamma^0\gamma^\mu\psi = -\,\bar\psi\gamma^\mu\psi .$$

$$\boxed{\,C:\ \bar\psi\gamma^\mu\psi \to -\,\bar\psi\gamma^\mu\psi\,}$$

The electric current is C-odd. Exactly as advertised.

### 3.2 The kinetic term — and the trap

Here's the part that trips people up. The kinetic term $\bar\psi\gamma^\mu\partial_\mu\psi$ has the *same Dirac structure* $\gamma^\mu$ as the current. So by the calculation we just did, it should also flip sign — and then no choice of transformation for $A_\mu$ could save the action, because both terms would flip together.

The resolution is the derivative. Repeat the algebra of §3.1 with $\psi^{*} \to \partial_\mu\psi^{*}$ in the right-hand slot:

$$\bar\psi\gamma^\mu\partial_\mu\psi \ \longrightarrow\ \left(\gamma^{\mu T}\gamma^0\right)_{\alpha\beta}\psi_\alpha\ \partial_\mu\psi^{*}_\beta .$$

The derivative has landed on the wrong field. But this sits inside $\int d^4x$, so integrate by parts and drop the boundary term:

$$\int d^4x\ \psi_\alpha\,\partial_\mu\psi^{*}_\beta \;=\; -\int d^4x\ (\partial_\mu\psi_\alpha)\,\psi^{*}_\beta .$$

That's a **second** minus sign. Now anticommute and relabel exactly as before, which supplies the first one, and the two cancel:

$$\bar\psi\gamma^\mu\partial_\mu\psi \ \longrightarrow\ +\,\bar\psi\gamma^\mu\partial_\mu\psi .$$

The kinetic term flips **twice** and is therefore invariant. The interaction term $-ie\,\bar\psi\gamma^\mu\psi A_\mu$ has no derivative, so it flips **once**. Invariance of the full action then forces

$$\boxed{\,C:\ A^\mu \to -A^\mu\,}$$

which is the same conclusion we got in four lines from scalar QED.

> ### ⚠️ Trap #1: "it's a Lorentz scalar, so it's fine"
>
> A shortcut you'll see attempted: *"$\bar\psi\,\not{\partial}\,\psi$ is of the form $\bar\psi\,\Gamma\,\psi$ with $\Gamma$ a Lorentz scalar, and $\bar\psi\psi$ is C-even, so the kinetic term is C-even."*
>
> This is not an argument. $\bar\psi\gamma^\mu A_\mu\psi$ is **also** a Lorentz scalar, and it's C-**odd**. The C-parity of a bilinear is fixed by the Dirac structure $\Gamma$, not by its Lorentz rank:
>
> - C-**even** $(+)$: $\Gamma = \mathbb{1},\ \gamma^5,\ \gamma^\mu\gamma^5$
> - C-**odd** $(-)$: $\Gamma = \gamma^\mu,\ \sigma^{\mu\nu}$
>
> The kinetic term contains $\Gamma = \gamma^\mu$ and is C-even *only* because of the extra sign from the integration by parts. Skip the IBP and you get the right answer for the wrong reason.

One more thing to check, and it's free: the Maxwell term $-\tfrac14 F_{\mu\nu}F^{\mu\nu}$ and any gauge-fixing term $-\tfrac{1}{2\xi}(\partial\!\cdot\!A)^2$ are **quadratic** in $A$, hence automatically even under $A\to-A$. The whole QED action is C-invariant.

---

## 4. The proof

Now the theorem itself. Define the generating functional with a source coupled to the photon:

$$Z[J] \;=\; \int \mathcal{D}A\,\mathcal{D}\bar\psi\,\mathcal{D}\psi\ \exp\left[\,i S[A,\psi,\bar\psi] + i\!\int d^4x\ J_\mu A^\mu\right].$$

> **$J_\mu$ is an external, non-dynamical, c-number source.** It is not a field. It is not integrated over. It is not the electric current. Its entire job is to be a handle you differentiate with respect to. In particular, **it does not transform under $C$.**

We need one assumption beyond what we've proved: **the functional measure is invariant** under charge conjugation. (This is the assumption that fails for anomalous symmetries. For C in QED it's fine; the standard argument is that a regulated path integral behaves like a finite-dimensional one, and a finite-dimensional measure is obviously invariant under this relabelling.)

Now two moves.

**Move 1 — relabel the matter fields.** Change integration variables $\psi\to\psi^{C}$, $\bar\psi\to\bar\psi^{C}$. This is a relabelling of dummy variables, so it changes nothing on the left. The measure is invariant by assumption. The source term contains no matter fields, so it's untouched. And by §3, the action turns into the same action with the photon flipped:

$$Z[J] = \int \mathcal{D}A\,\mathcal{D}\bar\psi\,\mathcal{D}\psi\ \exp\left[\,i S[-A,\psi,\bar\psi] + i\!\int J_\mu A^\mu\right].$$

**Move 2 — relabel the photon.** Change variables $A\to-A$. The measure $\mathcal{D}A$ doesn't care about a sign flip. The action goes back to normal. And the source term flips:

$$Z[J] = \int \mathcal{D}A\,\mathcal{D}\bar\psi\,\mathcal{D}\psi\ \exp\left[\,i S[A,\psi,\bar\psi] - i\!\int J_\mu A^\mu\right] \;=\; Z[-J].$$

$$\boxed{\;Z[J] = Z[-J]\;}$$

**$Z$ is an even functional of the source.** That's the entire proof.

> ### ⚠️ Trap #2: two different objects called $J$
>
> You will sometimes see this step "justified" by saying that $J_\mu = \bar\psi\gamma^\mu\psi$ and $A^\mu$ both flip sign, so $\int J\!\cdot\!A$ is invariant.
>
> That reasoning conflates the external source with the electric current. They're different objects that unfortunately share a letter. The current *does* flip sign under C — that's §3.1, and it's why the interaction term flips. The **source** does not.
>
> And notice what the confusion costs you: if $\int J\!\cdot\!A$ really were invariant, Moves 1 and 2 would give you $Z[J] = Z[J]$, which is true, useless, and proves nothing. The sign flip of the source term *is* the content of the proof.

---

## 5. From $Z[J]=Z[-J]$ to the theorem

The cleanest route is a Taylor expansion. Expand $Z$ in powers of the source:

$$\frac{Z[J]}{Z[0]} \;=\; \sum_{n=0}^{\infty}\frac{i^{n}}{n!}\int d^4x_1\cdots d^4x_n\ G^{(n)}_{\mu_1\cdots\mu_n}(x_1,\dots,x_n)\ J^{\mu_1}(x_1)\cdots J^{\mu_n}(x_n),$$

where the coefficients are precisely the correlators we're after:

$$G^{(n)}_{\mu_1\cdots\mu_n}(x_1,\dots,x_n) = \langle 0|\,T\{A_{\mu_1}(x_1)\cdots A_{\mu_n}(x_n)\}\,|0\rangle .$$

We've just shown $Z$ is an even functional of $J$. **An even function has no odd Taylor coefficients.** Therefore every $G^{(n)}$ with $n$ odd vanishes, and we're done:

$$\langle 0|\,T\{A^{\mu_1}(x_1)\cdots A^{\mu_{2k+1}}(x_{2k+1})\}\,|0\rangle = 0 . \qquad\blacksquare$$

> ### ⚠️ Trap #3: the derivative version, done carelessly
>
> Stated with functional derivatives instead, the argument is often written:
> $$\frac{\delta Z[J]}{\delta J(x)} = -\frac{\delta Z[J]}{\delta J(x)} \quad\Longrightarrow\quad \frac{\delta Z[J]}{\delta J(x)} = 0 .$$
>
> As written that's false. Differentiating $Z[J]=Z[-J]$ gives a derivative evaluated **at $-J$**, not at $J$:
> $$Z^{(n)}[J] = (-1)^{n}\,Z^{(n)}[-J].$$
> The two sides only collide at the symmetric point. Counterexample: $\cosh J$ is even, but $\cosh' J \neq 0$ away from the origin.
>
> Setting $J=0$ fixes it, and $J=0$ is exactly where correlators are evaluated — so the conclusion survives. But the Taylor-coefficient phrasing sidesteps the whole issue, which is why I'd use it.

---

## 6. The same thing, in diagrams

The path-integral proof is airtight but a bit abstract. Here's the version you'll actually recognise in a calculation.

Any correlator of photons decomposes, order by order, into diagrams containing **closed fermion loops with photons attached**. Take a loop with $n$ photon legs. Crucially, this comes in *two* versions — the fermion arrow can run either way around the loop — and both are legitimate distinct diagrams that must be summed.

![Two orientations of the three-photon loop](/images/furry-loop.svg)

*The three-photon fermion loop, both charge-flow orientations. Each is nonzero. Their sum is not.*

**Physical one-liner:** reversing the arrow reverses the charge flowing around the loop, which is the same as sending $e \to -e$ at every vertex on it. With $n$ vertices, that's a relative factor of $(-1)^n$. For odd $n$ the two orientations are equal and opposite, and cancel.

**Technical version:** let $C$ be the charge-conjugation matrix, defined by $C\gamma^\mu C^{-1} = -\gamma^{\mu T}$. Then the propagator satisfies $C\,S_F(p)\,C^{-1} = S_F^{T}(-p)$. Insert $C^{-1}C$ between every factor in the loop trace and use $\mathrm{Tr}\,M = \mathrm{Tr}\,M^{T}$; each of the $n$ vertices contributes one minus sign, and the reversed loop equals $(-1)^n$ times the original.

**Explicit check for $n=3$.** The trace is
$$\mathrm{Tr}\!\left[\gamma^{\nu}(\not{k}+\not{q}+m)\,\gamma^{\rho}(\not{k}-\not{p}_2+m)\,\gamma^{\sigma}(\not{k}+m)\right],$$
plus the same thing with all loop momenta reversed. Expand the numerator and sort the terms:
- terms with an **odd** number of $\gamma$'s (those carrying an even power of momenta, from the $m$'s) die under the trace;
- terms with an **even** number of $\gamma$'s survive the trace but are **odd** in the loop momenta, so they cancel against the reversed diagram.

Nothing is left.

> **Neither diagram vanishes on its own.** This is a cancellation between two diagrams, not the vanishing of one. If you compute a single orientation and get a nonzero answer, nothing has gone wrong — you're only half done. This matters in practice: forget the second orientation and you'll wrongly conclude that Furry's theorem is violated.

---

## 7. Does it hold off-shell?

**Yes**, and this is the version you actually want.

Look back at the proof: it never mentioned $q^2 = 0$, never used a polarisation vector, never referred to external states at all. It is a statement about the Green's function of $n$ photon **fields**, which is perfectly well defined for arbitrary off-shell momenta.

The on-shell statement is then a corollary — S-matrix elements come from these Green's functions via LSZ (amputate, contract with $\epsilon_{\mu}(q)$), and a vanishing Green's function gives a vanishing amplitude.

The off-shell version is stronger and far more useful, because it lets you kill a fermion loop sitting *inside* a larger diagram, where its photon legs are virtual. That's the case that comes up constantly, and it's the subject of Part 2.

*One honest caveat:* a correlator of $A^\mu$'s alone is not gauge invariant, so "this correlator vanishes" is a statement made within a choice of gauge. It holds in any gauge whose gauge-fixing term is even in $A$ — covariant gauges $(\partial\!\cdot\!A)^2$, axial gauges $(n\!\cdot\!A)^2$ — which covers everything you'd normally use.

---

## 8. What would break it

The proof used exactly three inputs, so there are exactly three ways to lose the theorem.

1. **The measure isn't invariant.** This is the anomaly loophole. It doesn't bite for C in QED, but it's the reason the "assume the measure is invariant" step deserves to be stated rather than skipped.

2. **The interactions violate C.** In *pure* QED, Furry's theorem is exact. In the Standard Model, the weak interactions violate C, so it isn't — diagrams involving $W$ and $Z$ exchange can produce odd-photon amplitudes. They're there; they're just heavily suppressed.

3. **The background violates C.** The proof assumes we're in the vacuum. A background electromagnetic field, a finite density of matter, a nonzero chemical potential — all of these are C-odd environments, and Furry's theorem fails in them. This turns out to be physically interesting rather than a disappointment; see Part 2.

Notice what is *not* on that list: the fermion mass, the gauge choice, the loop order, and whether the photons are on-shell. None of them matter.

---

## Summary

- **Claim:** $\langle 0|T\{A^{\mu_1}\cdots A^{\mu_n}\}|0\rangle = 0$ for odd $n$, exactly and non-perturbatively.
- **Reason:** the photon is C-odd, so $n$ photons carry C-parity $(-1)^n$, and the C-even vacuum can't connect to an odd state.
- **Proof:** C-invariance of the action plus invariance of the measure gives $Z[J]=Z[-J]$; the correlators are the Taylor coefficients of $Z$ about $J=0$; an even functional has no odd coefficients.
- **In diagrams:** the two arrow orientations of an $n$-photon fermion loop differ by $(-1)^n$ and cancel for odd $n$.
- **Three things to get right:** the integration by parts in the kinetic term; that $J$ is a source and not the current; and that the odd derivatives vanish *at $J=0$*, not identically.

**Next:** [Part 2 — what it buys you](/posts/notes/furrys-theorem-part-2/): no photon tadpole, no three-photon vertex, whole classes of Feynman diagrams deleted for free, why light doesn't scatter off light until fourth order, and what happens near a magnetar.
