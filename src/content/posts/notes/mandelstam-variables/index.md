---
title: "Mandelstam Variables in the CM Frame"
published: 2024-04-03
description: "Deriving the Mandelstam variables s, t, u for e+e- → μ+μ- scattering in the center-of-mass frame — from kinematics to Lorentz-invariant cross sections."
tags:
  - quantum-field-theory
  - physics
category: Notes
draft: false
---

> **Problem:** For the scattering process $e^+ e^- \to \mu^+ \mu^-$, work out the Lorentz-invariant Mandelstam variables $s, t, u$ in the center-of-mass frame. Derive relationships between them and rewrite the differential cross section in terms of these invariants.

---

## Why Mandelstam variables? What problem do they solve?

Before diving into the calculation, it's worth understanding why Mandelstam variables are so fundamental in scattering theory.

**The problem:** When we calculate scattering cross sections in quantum field theory, we get amplitudes that depend on the four-momenta of the particles. But different observers (in different reference frames) measure different energies and momenta. If we express our cross section in terms of frame-dependent quantities like $E_\text{CM}$ and $\theta$, we're tied to one specific frame.

**The solution:** Mandelstam variables are **Lorentz-invariant combinations** of four-momenta. They have the same value in every inertial frame. This means:
- We can do the calculation in the most convenient frame (usually CM)
- Express the final result in terms of invariants
- Any experimenter in any frame can use our result

For a $2 \to 2$ scattering process $a + b \to c + d$, the three Mandelstam variables are:

$$
s = (p_a + p_b)^2, \qquad t = (p_a - p_c)^2, \qquad u = (p_a - p_d)^2
$$

Only **two are independent** (since $s + t + u = m_a^2 + m_b^2 + m_c^2 + m_d^2$), but keeping all three makes the symmetry of the problem manifest.

---

## Setup: $e^+ e^- \to \mu^+ \mu^-$ in the CM frame

Let's work through the specific process $e^+ e^- \to \mu^+ \mu^-$. Label the four-momenta:

$$
(p_{e^-})_\mu = (p_1)_\mu, \quad (p_{e^+})_\mu = (p_2)_\mu, \quad (p_{\mu^-})_\mu = (p_3)_\mu, \quad (p_{\mu^+})_\mu = (p_4)_\mu
$$

In the **center-of-mass frame**, the initial particles collide head-on along the $x$-axis. Without loss of generality, we can choose the final-state particles to scatter in the $xy$-plane:

$$
\begin{aligned}
(p_1)_\mu &= (E_1, |\vec{p}_1|, 0, 0) \\
(p_2)_\mu &= (E_2, -|\vec{p}_2|, 0, 0) \\
(p_3)_\mu &= (E_3, |\vec{p}_3|\cos\theta, |\vec{p}_3|\sin\theta, 0) \\
(p_4)_\mu &= (E_4, -|\vec{p}_4|\cos\theta, -|\vec{p}_4|\sin\theta, 0)
\end{aligned}
$$

where $\theta$ is the scattering angle — the angle between the incoming electron and the outgoing muon.

**Why the CM frame is convenient:** Momentum conservation tells us $\vec{p}_1 + \vec{p}_2 = 0$ and $\vec{p}_3 + \vec{p}_4 = 0$. In the CM frame, the particles have equal and opposite momenta, which dramatically simplifies the algebra.

---

## The massless case: $m_e = m_\mu = 0$

First, let's consider the simpler case where all particles are massless. This is a good approximation for high-energy colliders where $E_\text{CM} \gg m_e, m_\mu$.

In the CM frame with massless particles:

$$
|\vec{p}_1| = |\vec{p}_2| = |\vec{p}_3| = |\vec{p}_4| = \frac{E_\text{CM}}{2}
$$

where $E_\text{CM}$ is the total center-of-mass energy. The four-momenta become:

$$
\begin{aligned}
(p_1)_\mu &= \frac{E_\text{CM}}{2}(1, 1, 0, 0) \\
(p_2)_\mu &= \frac{E_\text{CM}}{2}(1, -1, 0, 0) \\
(p_3)_\mu &= \frac{E_\text{CM}}{2}(1, \cos\theta, \sin\theta, 0) \\
(p_4)_\mu &= \frac{E_\text{CM}}{2}(1, -\cos\theta, -\sin\theta, 0)
\end{aligned}
$$

**Physical interpretation:** Each particle has energy $E_\text{CM}/2$, and the spatial components reflect the head-on collision geometry with the final-state particles scattering at angle $\theta$.

---

## Calculating $s$: the total energy available for scattering

$$
s = (p_1 + p_2)^2
$$

This is the **Mandelstam $s$-channel** — it represents the total invariant mass squared of the initial state, which equals the total invariant mass squared of the final state:

$$
\begin{aligned}
s &= \left[\frac{E_\text{CM}}{2}(1, 1, 0, 0) + \frac{E_\text{CM}}{2}(1, -1, 0, 0)\right]^2 \\
&= \left[\frac{E_\text{CM}}{2}(2, 0, 0, 0)\right]^2 \\
&= \frac{E_\text{CM}^2}{4}(4 - 0) \\
&= E_\text{CM}^2
\end{aligned}
$$

$$
\boxed{s = E_\text{CM}^2}
$$

**Physical meaning:** $s$ is simply the total center-of-mass energy squared. In the massless case, all this energy goes into the scattering process. This is why collider energies are quoted in terms of $\sqrt{s}$ — it's the invariant energy available for particle production.

---

## Calculating $t$: the momentum transfer

$$
t = (p_1 - p_3)^2
$$

This is the **Mandelstam $t$-channel** — it represents the invariant momentum transfer squared. Think of it as measuring how much the electron's four-momentum changes when it turns into a muon:

$$
\begin{aligned}
t &= \left[\frac{E_\text{CM}}{2}(1, 1, 0, 0) - \frac{E_\text{CM}}{2}(1, \cos\theta, \sin\theta, 0)\right]^2 \\
&= \left[\frac{E_\text{CM}}{2}(0, 1 - \cos\theta, -\sin\theta, 0)\right]^2 \\
&= \frac{E_\text{CM}^2}{4}\left[0^2 - (1 - \cos\theta)^2 - \sin^2\theta\right] \\
&= \frac{E_\text{CM}^2}{4}\left[-1 + 2\cos\theta - \underbrace{\cos^2\theta + \sin^2\theta}_{= 1}\right] \\
&= \frac{E_\text{CM}^2}{4}(-2 + 2\cos\theta) \\
&= -\frac{E_\text{CM}^2}{2}(1 - \cos\theta)
\end{aligned}
$$

$$
\boxed{t = -\frac{E_\text{CM}^2}{2}(1 - \cos\theta)}
$$

**Physical meaning:** $t$ is **spacelike** (negative) for physical scattering. It measures how "hard" the scattering is — small $|t|$ means glancing collisions (small $\theta$), large $|t|$ means hard scattering ($\theta \approx \pi$). In particle physics experiments, measuring the $t$-distribution tells us about the interaction's strength at different momentum scales.

---

## Calculating $u$: the crossing symmetry variable

$$
u = (p_1 - p_4)^2
$$

This is the **Mandelstam $u$-channel** — it might seem redundant, but it makes the crossing symmetry of the theory manifest:

$$
\begin{aligned}
u &= \left[\frac{E_\text{CM}}{2}(1, 1, 0, 0) - \frac{E_\text{CM}}{2}(1, -\cos\theta, -\sin\theta, 0)\right]^2 \\
&= \left[\frac{E_\text{CM}}{2}(0, 1 + \cos\theta, \sin\theta, 0)\right]^2 \\
&= \frac{E_\text{CM}^2}{4}\left[0^2 - (1 + \cos\theta)^2 - \sin^2\theta\right] \\
&= \frac{E_\text{CM}^2}{4}\left[-1 - 2\cos\theta - \underbrace{\cos^2\theta + \sin^2\theta}_{= 1}\right] \\
&= \frac{E_\text{CM}^2}{4}(-2 - 2\cos\theta) \\
&= -\frac{E_\text{CM}^2}{2}(1 + \cos\theta)
\end{aligned}
$$

$$
\boxed{u = -\frac{E_\text{CM}^2}{2}(1 + \cos\theta)}
$$

**Physical meaning:** The $u$-channel corresponds to crossing the final-state muon to an initial-state anti-muon. While this might seem abstract now, crossing symmetry is a powerful constraint on scattering amplitudes — the same function that describes $e^+ e^- \to \mu^+ \mu^-$ also describes $e^+ \mu^- \to e^+ \mu^-$ after appropriate substitutions.

---

## Key relation: $s + t + u = 0$

Adding the three Mandelstam variables:

$$
\begin{aligned}
s + t + u &= E_\text{CM}^2 - \frac{E_\text{CM}^2}{2}(1 - \cos\theta) - \frac{E_\text{CM}^2}{2}(1 + \cos\theta) \\
&= E_\text{CM}^2 - \frac{E_\text{CM}^2}{2} - \frac{E_\text{CM}^2}{2} + \frac{E_\text{CM}^2}{2}(\cos\theta - \cos\theta) \\
&= 0
\end{aligned}
$$

$$
\boxed{s + t + u = 0}
$$

**This is the massless limit** of the general relation $s + t + u = \sum_i m_i^2$. For massless particles, the sum of the Mandelstam variables is zero. This relation is incredibly useful for simplifying expressions and checking calculations.

---

## Rewriting the cross section in terms of invariants

The differential cross section for this process in the CM frame is:

$$
\frac{d\sigma}{d\Omega} = \frac{e^4}{64\pi^2 E_\text{CM}^2}(1 + \cos^2\theta)
$$

Using $E_\text{CM}^2 = s$ and the relation we just derived:

$$
1 + \cos^2\theta = \frac{2(t^2 + u^2)}{s^2}
$$

we get:

$$
\boxed{\frac{d\sigma}{d\Omega} = \frac{e^4}{32\pi^2 s^3}(t^2 + u^2)}
$$

**Why this matters:** This expression is now **Lorentz-invariant**. An experimenter at any collider, in any frame, can plug in their measured values of $s, t, u$ and compare with this prediction. We did the calculation in the CM frame, but the result is valid everywhere.

---

## Adding masses back in: the general case

For completeness, let's consider what happens when the electron and muon masses are included. Define:

$$
m_{e^-} = m_{e^+} = m_1, \quad m_{\mu^-} = m_{\mu^+} = m_2
$$

The four-momenta in the CM frame become:

$$
\begin{aligned}
(p_1)_\mu &= (E_1, p, 0, 0) \\
(p_2)_\mu &= (E_2, -p, 0, 0) \\
(p_3)_\mu &= (E_3, p'\cos\theta, p'\sin\theta, 0) \\
(p_4)_\mu &= (E_4, -p'\cos\theta, -p'\sin\theta, 0)
\end{aligned}
$$

where $E_1 = E_2 = \sqrt{p^2 + m_1^2}$ and $E_3 = E_4 = \sqrt{p'^2 + m_2^2}$.

The general relation is:

$$
\boxed{s + t + u = 2m_1^2 + 2m_2^2}
$$

**Physical interpretation:** The masses contribute to this relation because they break the scaling symmetry of the massless theory. At high energies ($\sqrt{s} \gg m_1, m_2$), we recover $s + t + u \approx 0$.

---

## Summary

| Quantity | Result | Physical meaning |
|---|---|---|
| $s$ | $E_\text{CM}^2$ | Total invariant energy squared |
| $t$ | $-\frac{E_\text{CM}^2}{2}(1 - \cos\theta)$ | Momentum transfer squared (spacelike) |
| $u$ | $-\frac{E_\text{CM}^2}{2}(1 + \cos\theta)$ | Crossing-symmetric variable |
| Key relation | $s + t + u = 0$ (massless) | Only two variables are independent |
| Cross section | $\frac{d\sigma}{d\Omega} = \frac{e^4}{32\pi^2 s^3}(t^2 + u^2)$ | Lorentz-invariant expression |

**Key insight:** Mandelstam variables are the natural language of scattering amplitudes in quantum field theory. They're Lorentz-invariant, make crossing symmetry manifest, and allow us to express results in a frame-independent way. The fact that we can compute $\frac{d\sigma}{d\Omega}$ in the CM frame but express the answer in terms of $s, t, u$ means any experimenter can use our result — whether they're at LEP, LHC, or a future collider.

This formalism generalizes to any $2 \to 2$ scattering process, and the techniques extend to more complicated amplitudes. The massless limit $s + t + u = 0$ is particularly elegant and underlies many simplifications in high-energy physics.
