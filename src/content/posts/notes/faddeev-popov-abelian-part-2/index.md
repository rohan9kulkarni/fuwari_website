---
title: "Faddeev–Popov Quantization (Abelian), Part 2: The Trick, the Propagator, and What Counts as Gauge Fixing"
published: 2026-04-04
description: "We derive the Faddeev–Popov identity using a discrete warm-up, insert it into the path integral, extract the gauge-fixed photon propagator, and ask: what other gauge-fixing terms are allowed?"
tags: [Quantum Field Theory]
category: Notes
draft: false
---

In [Part 1](/posts/notes/faddeev-popov-abelian-part-1/), we saw that the path integral for a $U(1)$ gauge field is ill-defined: the kinetic operator $\Box\,\delta_{\mu\nu} - \partial_\mu\partial_\nu$ has zero modes along gauge directions, and the integral overcounts by an infinite factor — the volume of the gauge orbit. We need to restrict the integral to one representative per orbit, but naively inserting a delta function misses a Jacobian.

Now we fix this properly. The Faddeev–Popov trick is, at its core, the art of inserting a very clever "$1$" into the path integral.

---

## The identity we need

Our gauge-fixing condition is $\partial_\mu A_\mu^\chi = G(x)$, where $A_\mu^\chi = A_\mu + \partial_\mu\chi$ is the gauge-transformed field. From Part 1, we know this requires $\Box\chi = G - \partial_\mu A_\mu$, which has a unique solution.

What we want to prove is the following identity:

$$\det(\Box)\int\mathcal{D}\chi\;\delta\!\left(\partial_\mu A_\mu^\chi - G\right) = 1$$

If this is true, we can insert it into the path integral for free — it's just multiplying by $1$. But it's not obvious *why* it's true, so let's build up to it.

---

## Warm-up: the discrete version

Before tackling the functional case, let's see why this identity works for ordinary integrals. This discrete-to-functional escalation is the cleanest way to see where the determinant comes from.

### One dimension

Consider a function $f(x)$ with a single zero at $x = x_0$, so $f(x_0) = 0$. A standard identity for the delta function gives:

$$\int dx\;\delta(f(x)) = \frac{1}{|f'(x_0)|}$$

Rearranging:

$$|f'(x_0)|\int dx\;\delta(f(x)) = 1$$

The factor $|f'(x_0)|$ is the Jacobian — it measures how fast $f$ changes at the zero. If you forget it, the integral doesn't equal $1$.

### $n$ dimensions

Now let $\vec{f}(\vec{x})$ be a vector-valued function of $n$ variables with a single zero at $\vec{x}_0$. The generalization is:

$$\det\!\left(\frac{\partial f_i}{\partial x_j}\right)\!\Bigg|_{\vec{x}_0}\int d^n x\;\delta^{(n)}(\vec{f}(\vec{x})) = 1$$

The single derivative $|f'|$ has become a **determinant** of the Jacobian matrix — exactly what you'd expect from a multi-dimensional change of variables.

### The functional version

Now go to infinite dimensions. Replace $\vec{x} \to \chi(x)$ (a function, not a vector), replace $\vec{f} \to \partial_\mu A_\mu^\chi - G$ (the gauge condition applied to the transformed field), and replace the Jacobian matrix with the functional derivative:

$$\frac{\delta(\partial_\mu A_\mu^\chi)}{\delta\chi} = \Box$$

The determinant of this operator is $\det(\Box)$, and the identity becomes:

$$\det(\Box)\int\mathcal{D}\chi\;\delta\!\left(\partial_\mu A_\mu^\chi - G\right) = 1$$

This is the **Faddeev–Popov identity**. It's the functional integral version of the same change-of-variables formula you learned in multivariable calculus — just promoted to infinite dimensions.

---

## From delta function to Lagrangian term

We have our identity, but the delta function $\delta(\partial_\mu A_\mu^\chi - G)$ isn't convenient to work with inside a path integral. We'd much rather have a nice exponential term in the action. There's a standard trick for this.

Recall the Gaussian integral identity: for any function $G(x)$,

$$N_\xi \int\mathcal{D}c\;e^{-\frac{1}{2\xi}\int d^4x\;c(x)^2}\;\delta(c - G) = e^{-\frac{1}{2\xi}\int d^4x\;G(x)^2}$$

where $N_\xi$ is a normalization constant. This is just "the delta function picks out $c = G$."

Now here's the move. Start with the Gaussian integral *without* the delta function evaluated:

$$N_\xi\int\mathcal{D}c\;e^{-\frac{1}{2\xi}\int c^2}\;\det(\Box)\int\mathcal{D}\chi\;\delta(\partial_\mu A_\mu^\chi - c) = 1$$

This equals $1$ because for each value of $c$, the FP identity gives $1$, and the Gaussian integral with $N_\xi$ is normalized.

Now use the delta function to perform the $c$ integral — it sets $c = \partial_\mu A_\mu^\chi$:

$$N_\xi\;\det(\Box)\int\mathcal{D}\chi\;e^{-\frac{1}{2\xi}\int(\partial_\mu A_\mu^\chi)^2} = 1$$

This is still equal to $1$, and it's still an identity we can insert into the path integral. But now the delta function is gone, replaced by a **Gaussian weight** — which is just an exponential term in the action. That's exactly what we wanted.

---

## Inserting into the path integral

We insert this identity into the partition function:

$$Z = \int\mathcal{D}A_\mu\;e^{-S[A]} \times \underbrace{N_\xi\;\det(\Box)\int\mathcal{D}\chi\;e^{-\frac{1}{2\xi}\int(\partial_\mu A_\mu^\chi)^2}}_{= 1}$$

Now comes the key sequence of moves.

### Step 1: Change variables $A_\mu \to A_\mu^\chi$

Inside the path integral over $A_\mu$, shift to the gauge-transformed variable $A_\mu^\chi = A_\mu + \partial_\mu\chi$. Three things happen:

- **The action is gauge-invariant**: $S[A^\chi] = S[A]$. This is why we built a gauge theory in the first place.

- **The measure is gauge-invariant**: $\mathcal{D}A^\chi = \mathcal{D}A$. This is a big assumption — it's neither obvious nor guaranteed. It *can* be proved for $U(1)$, but there exist theories where it fails. Those are called **anomalous** theories, where a symmetry of the classical action is broken at the quantum level. QED is not anomalous, so we're safe here.

- **The gauge-fixing term simplifies**: $\partial_\mu A_\mu^\chi$ becomes just $\partial_\mu A_\mu$ after the shift (since we've relabeled the integration variable).

After this change of variables, the $\chi$ dependence has completely dropped out of the integrand:

$$Z = N_\xi\;\det(\Box)\int\mathcal{D}\chi\int\mathcal{D}A_\mu\;e^{-S[A]\,-\,\frac{1}{2\xi}\int(\partial_\mu A_\mu)^2}$$

### Step 2: Factor out the gauge volume

Since nothing in the $A_\mu$ integral depends on $\chi$ anymore, the $\chi$ integral is just a constant — the **volume of the gauge group**:

$$\int\mathcal{D}\chi = V_{\text{gauge}}$$

This is the infinite overcounting factor from Part 1. It multiplies $Z$ overall, but it cancels in any ratio $\langle\mathcal{O}\rangle = Z^{-1}\int\mathcal{D}A\;\mathcal{O}(A)\,e^{-S_{\text{eff}}}$. So expectation values of gauge-invariant operators are perfectly well-defined.

### Step 3: The gauge-fixed action

Dropping the constant prefactors, we arrive at:

$$\boxed{Z = \int\mathcal{D}A_\mu\;e^{-S_{\text{eff}}[A]}, \qquad S_{\text{eff}}[A] = S[A] + \frac{1}{2\xi}\int d^4x\;(\partial_\mu A_\mu)^2}$$

That's it. The entire Faddeev–Popov procedure for $U(1)$ boils down to **adding the term** $\frac{1}{2\xi}(\partial_\mu A_\mu)^2$ **to the action**. You could have just written this down by hand and said "I'm gauge fixing" — and indeed many textbooks do exactly that. What we've shown is that this *isn't* an ad hoc modification of the theory: it follows rigorously from the geometry of gauge orbits and the correct treatment of the Jacobian.

A crucial point deserves emphasis: the reason this was so clean is that $\det(\Box)$ **does not depend on** $A_\mu$. The operator $\Box$ is just the d'Alembertian — it has no knowledge of the gauge field. So it's a constant that gets absorbed into the normalization. *This is the exact point where the non-abelian story diverges.* In non-abelian theories, the analogous determinant $\det(M[A])$ depends on $A$, cannot be pulled out, and must be represented as a path integral over new fields — the Faddeev–Popov **ghosts**.

---

## The photon propagator

Now we can finally invert the kinetic operator. The gauge-fixed action is:

$$S_{\text{eff}} = \frac{1}{2}\int d^4x\;A_\mu\!\left(\Box\,\delta_{\mu\nu} - \partial_\mu\partial_\nu + \frac{1}{\xi}\partial_\mu\partial_\nu\right)\!A_\nu = \frac{1}{2}\int d^4x\;A_\mu\!\left(\Box\,\delta_{\mu\nu} - \left(1 - \frac{1}{\xi}\right)\partial_\mu\partial_\nu\right)\!A_\nu$$

Go to momentum space ($\partial_\mu \to ik_\mu$, $\Box \to -k^2$). The operator becomes:

$$\widetilde{\mathcal{O}}_{\mu\nu}(k) = k^2\delta_{\mu\nu} - \left(1 - \frac{1}{\xi}\right)k_\mu k_\nu$$

Before gauge fixing, the operator was $k^2\delta_{\mu\nu} - k_\mu k_\nu$, which kills any vector proportional to $k_\mu$. Now the $k_\mu k_\nu$ term has a modified coefficient, and you can check that the zero mode is gone (unless $\xi \to \infty$, which undoes the gauge fixing).

Inverting this — a nice exercise in projecting onto transverse and longitudinal components — gives the **photon propagator in Euclidean momentum space**:

$$\boxed{G_{\mu\nu}(k) = \frac{1}{k^2}\left(\delta_{\mu\nu} - (1-\xi)\frac{k_\mu k_\nu}{k^2}\right)}$$

This depends on the gauge parameter $\xi$, but any physical observable (computed from gauge-invariant operators) will be $\xi$-independent.

### Feynman gauge

The simplest choice is $\xi = 1$, called **Feynman gauge**. The propagator collapses to:

$$G_{\mu\nu}(k) = \frac{\delta_{\mu\nu}}{k^2}$$

This is as simple as a propagator can get — every component of $A_\mu$ propagates the same way, just like a massless scalar. This is why Feynman gauge is the default choice for most QED calculations.

Other common choices:

- $\xi = 0$: **Landau gauge**. The propagator becomes purely transverse: $G_{\mu\nu} = \frac{1}{k^2}(\delta_{\mu\nu} - k_\mu k_\nu/k^2)$. This enforces $\partial_\mu A_\mu = 0$ strictly.
- $\xi \to \infty$: The gauge-fixing term vanishes and we're back to the original non-invertible operator. No propagator — as expected.

---

## What counts as a valid gauge-fixing term?

We derived the specific term $\frac{1}{2\xi}(\partial_\mu A_\mu)^2$, but nothing in the Faddeev–Popov logic required the gauge-fixing function to be linear. The procedure works for any function $F(\partial_\mu A_\mu)$ — you'd add $\frac{1}{2\xi}[F(\partial_\mu A_\mu)]^2$ to the action instead.

For example, choosing $F(\partial_\mu A_\mu) = (\partial_\mu A_\mu)^2$ gives a quartic gauge-fixing term:

$$-\frac{1}{\xi}(\partial_\mu A_\mu)^4$$

This is perfectly valid. You can derive it through the same FP procedure: start with the path integral plus an auxiliary field, shift by $\pi \to \pi + \frac{1}{\xi}\partial_\mu A_\mu$, and perform a gauge transformation. The result only depends on the longitudinal mode of $A_\mu$ (the gauge degree of freedom), so it correctly picks a slice through each gauge orbit without touching the physical, transverse degrees of freedom. In the limit $\xi \to 0$ it enforces $\partial_\mu A_\mu = 0$, and in the limit $\xi \to \infty$ it disappears. Correlation functions of gauge-invariant operators remain unchanged.

### A term that does *not* work

What about adding $\xi A_\mu^2$ to the action? Under a gauge transformation $A_\mu \to A_\mu + \partial_\mu\chi$, this transforms as:

$$\xi A_\mu^2 \to \xi(A_\mu + \partial_\mu\chi)^2$$

This term is not of the form $f(\partial_\mu A_\mu)$ — it depends on the *full* gauge field, not just the longitudinal part. Physically, $A_\mu^2$ is a **mass term** for the photon. It modifies the transverse, physical degrees of freedom, not just the gauge redundancy.

In the limit $\xi \to \infty$, it doesn't select a gauge slice — it forces $A_\mu = 0$ everywhere, killing the gauge field entirely. The photon is gone, and with it the physics of the theory. Correlation functions of gauge-invariant operators *do* change. This is not gauge fixing; it's a different theory.

The lesson: a valid gauge-fixing term must be a function of the **gauge condition** (like $\partial_\mu A_\mu$), which lives purely in the longitudinal sector. If it touches the transverse modes, it changes the physics.

---

## Conceptual summary

Here's the full logical arc of the two posts:

- The path integral overcounts by a factor of the gauge group volume, and the kinetic operator is non-invertible.
- The FP identity, $\det(\Box)\int\mathcal{D}\chi\;\delta(\partial_\mu A_\mu^\chi - G) = 1$, is the functional version of the change-of-variables Jacobian from calculus.
- A Gaussian trick converts the delta function into the exponential gauge-fixing term $\frac{1}{2\xi}(\partial_\mu A_\mu)^2$ in the action.
- After a change of variables and using gauge invariance of the action and measure, the gauge volume factors out and we're left with a well-defined, gauge-fixed path integral.
- The operator can now be inverted, giving the photon propagator $G_{\mu\nu}(k) = \frac{1}{k^2}(\delta_{\mu\nu} - (1-\xi)k_\mu k_\nu/k^2)$.
- The whole procedure worked cleanly because $\det(\Box)$ is independent of $A_\mu$ — the hallmark of the abelian case.
- Valid gauge-fixing terms must only constrain the longitudinal (gauge) sector. A photon mass term $A_\mu^2$ fails this criterion.

### What's next

The natural continuation is the **non-abelian** case: $SU(2)$ Yang–Mills theory. There, the covariant derivative, field strength, and Lagrangian need to be checked for gauge invariance from scratch — the transformations are more involved because the generators don't commute. And the Faddeev–Popov determinant becomes field-dependent, forcing us to introduce ghost fields. That's the subject of the next series.

---

*This completes the abelian Faddeev–Popov series. Next up — the non-abelian series, starting with the classical machinery of $SU(2)$ Yang–Mills.*

---

## Source Material

This post was inspired by course material from **Heidelberg University QFT Tutorial 6**. You can download the original notes:

📄 [Tutorial 6: Faddeev-Popov Quantization (PDF)](/resources/faddeev-popov-tutorial6.pdf)
