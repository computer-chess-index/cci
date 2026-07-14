# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3428<sub>(+new) | 3553<sub>(+new) | 3583<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3364<sub>(+9) | 3529<sub>(+7) | 3540<sub>(+10) |  |
| 1.9.1 | 2026-01-12 | 3355<sub>(-11) | 3522<sub>(+17) | 3530<sub>(-11) |  |
| 1.9 | 2026-01-03 | 3366<sub>(+new) | 3505<sub>(+new) | 3541<sub>(+new) |  |
| 1.8.1 | 2025-07-25 |  |  |  |  |
| 1.8 | 2025-07-22 |  |  |  |  |
| 1.7.2 | 2025-06-15 |  |  |  |  |
| 1.7.1 | 2025-06-02 |  |  |  |  |
| 1.7 | 2025-05-31 |  |  |  |  |
| 1.6.1 | 2025-05-15 |  |  |  |  |
| 1.6 | 2025-04-27 |  |  |  |  |
| 1.5 | 2025-04-18 |  |  |  |  |
| 1.4.1 | 2025-04-05 |  |  |  |  |
| 1.3.1415 | 2025-03-14 |  |  |  |  |
| 1.3 | 2025-03-07 |  |  |  |  |
| 1.2 | 2025-02-21 |  |  |  |  |
| 1.1 | 2025-01-24 |  |  |  |  |
| 1.0 | 2025-01-20 |  |  |  |  |
| 0.9 | 2025-01-12 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnocchio+<version>&body=###%20Engine%20name%0APawnocchio%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-14 06:27:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3366, 3355, 3364, 3428]
  line "STC (8.0+0.08s)" [3366, 3355, 3364, 3428]
  line "LTC (60.0+0.60s)" [3505, 3522, 3529, 3553]
  line "VLTC (2m24s+1.12s)" [3541, 3530, 3540, 3583]
  line "VLTC (2m24s+1.12s)" [3541, 3530, 3540, 3583]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3366, 3355, 3364, 3428]
  line "STC (8.0+0.08s)" [3366, 3355, 3364, 3428]
  line "LTC (60.0+0.60s)" [3505, 3522, 3529, 3553]
  line "VLTC (2m24s+1.12s)" [3541, 3530, 3540, 3583]
  line "VLTC (2m24s+1.12s)" [3541, 3530, 3540, 3583]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3583 | 37 | 166 | 52% | 3567 | 93% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3553 | 42 | 128 | 50% | 3553 | 89% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3428 | 40 | 152 | 49% | 3433 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 25 | 380 | 51% | 3536 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 25 | 372 | 51% | 3526 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3364 | 22 | 518 | 49% | 3370 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 35 | 188 | 49% | 3540 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 35 | 186 | 51% | 3514 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3355 | 35 | 208 | 51% | 3344 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 35 | 192 | 53% | 3510 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3505 | 33 | 224 | 53% | 3465 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3366 | 34 | 224 | 54% | 3320 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |