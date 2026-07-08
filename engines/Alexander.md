# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3141<sub>(+1) | 3375<sub>(+27) | 3417<sub>(+12) |  |
| 8.2 | 2026-03-23 | 3140<sub>(-26) | 3348<sub>(-8) | 3405<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3166<sub>(+38) | 3356<sub>(-11) | 3417<sub>(+12) |  |
| 8.0 | 2026-03-10 | 3128<sub>(+new) | 3367<sub>(+new) | 3405<sub>(+new) |  |
| 7.0 | 2025-10-20 |  |  |  |  |
| 6.1 | 2025-10-07 |  |  |  |  |
| 6.0 | 2025-09-20 |  |  |  |  |
| 5.0 | 2025-02-14 |  |  |  |  |
| 4.1 | 2025-02-07 |  |  |  |  |
| 4.0 | 2025-01-17 |  |  |  |  |
| 3.1 | 2024-11-11 |  |  |  |  |
| 3.0 | 2024-10-24 |  |  |  |  |
| Santiago | 2024-10-17 |  |  |  |  |
| 2.0 | 2024-09-19 |  |  |  |  |
| 1.3 | 2024-05-03 |  |  |  |  |
| 1.2 | 2024-04-19 |  |  |  |  |
| 1.1 | 2024-04-11 |  |  |  |  |
| 1.0 | 2024-03-30 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexander+<version>&body=###%20Engine%20name%0AAlexander%0A%0A###%20Version%0A8.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-08 06:22:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3128, 3166, 3140, 3141]
  line "STC (8.0+0.08s)" [3128, 3166, 3140, 3141]
  line "LTC (60.0+0.60s)" [3367, 3356, 3348, 3375]
  line "VLTC (2m24s+1.12s)" [3405, 3417, 3405, 3417]
  line "VLTC (2m24s+1.12s)" [3405, 3417, 3405, 3417]
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
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3128, 3166, 3140, 3141]
  line "STC (8.0+0.08s)" [3128, 3166, 3140, 3141]
  line "LTC (60.0+0.60s)" [3367, 3356, 3348, 3375]
  line "VLTC (2m24s+1.12s)" [3405, 3417, 3405, 3417]
  line "VLTC (2m24s+1.12s)" [3405, 3417, 3405, 3417]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 24 | 450 | 49% | 3425 | 68% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3375 | 25 | 426 | 49% | 3383 | 65% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3141 | 27 | 400 | 51% | 3129 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 26 | 380 | 49% | 3411 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3348 | 31 | 284 | 50% | 3347 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3140 | 27 | 396 | 48% | 3154 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3417 | 28 | 324 | 49% | 3421 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3356 | 30 | 290 | 51% | 3351 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3166 | 31 | 302 | 49% | 3173 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 28 | 308 | 50% | 3402 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3367 | 28 | 332 | 50% | 3366 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3128 | 31 | 300 | 49% | 3133 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |