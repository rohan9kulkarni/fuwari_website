---
title: "Statistical Mechanics: The Directed Polymer Problem"
published: 2020-12-23
description: "A detailed look at the directed polymer on a square lattice, counting microstates and calculating typical deflection using the partition function."
tags: [Statistical Mechanics, Physics]
category: Notes
draft: false
---

A directed polymer consists of atoms $i = 0, 1, 2, \dots, N$ at positions $(x_i, y_i) \in \mathbb{Z}^2$ of a square lattice. The atom at the origin is fixed at the position $x_0 = y_0 = 0$ and the other atoms are chained together such that:

1.  $x_i - x_{i-1} = 1$
2.  $|y_i - y_{i-1}| = 1$

This polymer is hence oriented in the $x$-direction and does not self-intersect.

## Intuition & Setup

Using these properties, we can graph points on $\mathbb{Z}^2$. The polymer is the curve formed by connecting these points.

*   **Origin**: $O = (0, 0)$.
*   **X-movement**: Each subsequent atom is exactly one unit to the right ($x_i - x_{i-1} = 1$).
*   **Y-movement**: Each step must be either one unit up or one unit down ($y_i - y_{i-1} = \pm 1$).

:::note
[Diagram Placeholder: All possible paths till $n=3$]
For each step in the x-direction, the polymer branches into two possible y-directions (up or down).
:::

For a polymer of length $N$, we have:
$$ (2 \text{ choices after origin}) \times (2 \text{ choices after node 1}) \times \dots = 2^N \text{ total choices} $$

---

## Problem (a): Total Number of Microstates

**Determine the total number of microstates of the polymer.**

### Solution
We can think about a particle on every node. The first particle is fixed at the origin. Every subsequent particle has 2 choices (up or down) relative to the previous one.

| Particle | 1 (Origin) | 2 | 3 | ... | N+1 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Choices** | 1 | 2 | 2 | ... | 2 |
| **Node (x)**| 0 | 1 | 2 | ... | N |

The total number of microstates $\mathcal{W}$ is:
$$ \mathcal{W} = \underbrace{1}_{\text{Fixed}} \times \underbrace{2 \times 2 \times \dots \times 2}_{N} = 2^N $$

---

## Problem (b): Microstates with Specific Deflection

**Determine the total number of microstates $\mathcal{W}(y)$ having the property $y_N = y$.**

### Solution
Let $\sigma_i = y_i - y_{i-1} \in \{+1, -1\}$ be the "sign" of each step. Let $n_+$ be the number of steps up and $n_-$ be the number of steps down.

The total deflection is:
$$ y_N = \sum_{i=1}^N \sigma_i = n_+ - n_- = y $$

We also know the total number of steps is $N$:
$$ n_+ + n_- = N \implies n_- = N - n_+ $$

Substituting this into the deflection equation:
$$ y = n_+ - (N - n_+) = 2n_+ - N $$
$$ \implies n_+ = \frac{y + N}{2} $$

The number of ways to choose $n_+$ "up" steps out of $N$ total steps is given by the binomial coefficient:
$$ \mathcal{W}(y) = \binom{N}{n_+} = \binom{N}{\frac{y+N}{2}} $$

The probability of finding such a state is $P(y) = \frac{\mathcal{W}(y)}{\mathcal{W}} = \frac{1}{2^N} \binom{N}{n_+}$.

---

## Problem (c): Typical Deflection

**Calculate the typical deflection of the chain end, $\langle y_N^2 \rangle$.**

### Solution: The Partition Function Trick
We define a "partition function" $Z(\beta)$ for the ensemble:
$$ Z(\beta) = \sum_y e^{\beta y} \mathcal{W}(y) $$

Note that at $\beta = 0$:
$$ Z(0) = \sum_y \mathcal{W}(y) = 2^N $$

The typical deflection can be expressed using derivatives of $Z(\beta)$:
$$ \langle y_N^2 \rangle = \frac{\sum_y y^2 \mathcal{W}(y)}{\sum_y \mathcal{W}(y)} = \left. \frac{1}{Z(0)} \frac{\partial^2 Z}{\partial \beta^2} \right|_{\beta=0} $$

### Calculating $Z(\beta)$
Substituting our expression for $y = 2n_+ - N$:
$$ Z(\beta) = \sum_{n_+=0}^N e^{\beta(2n_+ - N)} \binom{N}{n_+} = \sum_{n_+=0}^N (e^\beta)^{n_+} (e^{-\beta})^{N-n_+} \binom{N}{n_+} $$

Using the binomial identity $(a+b)^N = \sum \binom{N}{k} a^k b^{N-k}$ with $a=e^\beta$ and $b=e^{-\beta}$:
$$ Z(\beta) = (e^\beta + e^{-\beta})^N = (2 \cosh \beta)^N = 2^N \cosh^N \beta $$

### Finding the Deflection
First derivative:
$$ Z'(\beta) = 2^N \cdot N \cosh^{N-1} \beta \cdot \sinh \beta $$

Second derivative:
$$ Z''(\beta) = 2^N N \left[ (N-1) \cosh^{N-2} \beta \sinh^2 \beta + \cosh^{N-1} \beta \cosh \beta \right] $$
$$ Z''(0) = 2^N N [ (N-1)(1)(0) + (1)(1) ] = 2^N \cdot N $$

Finally:
$$ \langle y_N^2 \rangle = \frac{Z''(0)}{Z(0)} = \frac{2^N \cdot N}{2^N} = N $$

This result makes physical sense: for a random walk of $N$ steps where each step is $\pm 1$, the variance (typical deflection squared) scales linearly with the number of steps $N$.

---

:::tip
**Full Reference**: You can download the original problem set with full diagrams here:
[Download Directed Polymer PDF](/resources/prob2_directed_polymer_23dec2020.pdf)
:::
