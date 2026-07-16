# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-29 | 3422<sub>(+new) | 3548<sub>(+new) | 3578<sub>(+new) |  |
| 2.0.0 | 2026-06-27 |  |  |  |  |
| 1.9.2 | 2026-01-15 | 3359<sub>(+8) | 3525<sub>(+8) | 3534<sub>(+8) |  |
| 1.9.1 | 2026-01-12 | 3351<sub>(-9) | 3517<sub>(+18) | 3526<sub>(-10) |  |
| 1.9 | 2026-01-03 | 3360<sub>(+new) | 3499<sub>(+new) | 3536<sub>(+new) |  |
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

Generated: 2026-07-16 06:27:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2", "2.0.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3360, 3351, 3359, 3422]
  line "STC (8.0+0.08s)" [3360, 3351, 3359, 3422]
  line "LTC (60.0+0.60s)" [3499, 3517, 3525, 3548]
  line "VLTC (2m24s+1.12s)" [3536, 3526, 3534, 3578]
  line "VLTC (2m24s+1.12s)" [3536, 3526, 3534, 3578]
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
  line "STC (8.0+0.08s)" [3360, 3351, 3359, 3422]
  line "STC (8.0+0.08s)" [3360, 3351, 3359, 3422]
  line "LTC (60.0+0.60s)" [3499, 3517, 3525, 3548]
  line "VLTC (2m24s+1.12s)" [3536, 3526, 3534, 3578]
  line "VLTC (2m24s+1.12s)" [3536, 3526, 3534, 3578]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3578 | 36 | 170 | 53% | 3560 | 92% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3548 | 41 | 136 | 50% | 3548 | 90% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 3422 | 40 | 152 | 49% | 3428 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 25 | 380 | 51% | 3532 | 88% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 25 | 372 | 51% | 3521 | 88% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3359 | 22 | 518 | 49% | 3364 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 35 | 188 | 49% | 3536 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 35 | 186 | 51% | 3509 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3351 | 35 | 208 | 51% | 3339 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 35 | 192 | 53% | 3506 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3499 | 33 | 224 | 53% | 3460 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3360 | 34 | 224 | 54% | 3314 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |