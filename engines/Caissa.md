# Engine: Caissa

Author: Michał Witanowski

Home: https://github.com/Witek902/Caissa

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.25 | 2026-04-05 | 3374<sub>(-2) | 3519<sub>(-6) | 3548<sub>(+7) |  |
| 1.24 | 2025-12-03 | 3376<sub>(+1) | 3525<sub>(+15) | 3541<sub>(+3) |  |
| 1.23 | 2025-08-21 | 3375<sub>(+16) | 3510<sub>(+4) | 3538<sub>(+17) |  |
| 1.22 | 2025-04-30 | 3359<sub>(+7) | 3506<sub>(+8) | 3521<sub>(-12) |  |
| 1.21 | 2024-10-27 | 3352<sub>(+8) | 3498<sub>(+19) | 3533<sub>(-1) |  |
| 1.20 | 2024-07-28 | 3344<sub>(+new) | 3479<sub>(+new) | 3534<sub>(+new) |  |
| 1.19 | 2024-06-23 |  |  |  |  |
| 1.18 | 2024-04-02 |  |  |  |  |
| 1.17 | 2024-02-12 |  |  |  |  |
| 1.16 | 2024-01-11 |  |  |  |  |
| 1.15 | 2023-12-13 |  |  |  |  |
| 1.14 | 2023-11-12 |  |  |  |  |
| 1.13.1 | 2023-09-29 |  |  |  |  |
| 1.13 | 2023-09-28 |  |  |  |  |
| 1.12 | 2023-09-02 |  |  |  |  |
| 1.11 | 2023-07-23 |  |  |  |  |
| 1.10 | 2023-06-26 |  |  |  |  |
| 1.9 | 2023-06-08 |  |  |  |  |
| 1.8 | 2023-04-25 |  |  |  |  |
| 1.7 | 2023-03-14 |  |  |  |  |
| 1.6.3 | 2023-02-17 |  |  |  |  |
| 1.6 | 2023-02-07 |  |  |  |  |
| 1.5 | 2023-01-15 |  |  |  |  |
| 1.4 | 2022-11-30 |  |  |  |  |
| 1.3 | 2022-11-15 |  |  |  |  |
| 1.2 | 2022-10-23 |  |  |  |  |
| 1.1 | 2022-10-02 |  |  |  |  |
| 1.0 | 2022-09-18 |  |  |  |  |
| 0.9 | 2022-08-21 |  |  |  |  |
| 0.8 | 2022-07-29 |  |  |  |  |
| 0.7 | 2022-07-11 |  |  |  |  |
| 0.5 | 2022-03-16 |  |  |  |  |
| 0.4 | 2021-11-12 |  |  |  |  |
| 0.3 | 2021-11-03 |  |  |  |  |
| 0.2 | 2021-10-28 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Caissa+<version>&body=###%20Engine%20name%0ACaissa%0A%0A###%20Version%0A1.25" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:23:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3344, 3352, 3359, 3375, 3376, 3374]
  line "STC (8.0+0.08s)" [3344, 3352, 3359, 3375, 3376, 3374]
  line "LTC (60.0+0.60s)" [3479, 3498, 3506, 3510, 3525, 3519]
  line "VLTC (2m24s+1.12s)" [3534, 3533, 3521, 3538, 3541, 3548]
  line "VLTC (2m24s+1.12s)" [3534, 3533, 3521, 3538, 3541, 3548]
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
  x-axis ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3344, 3352, 3359, 3375, 3376, 3374]
  line "STC (8.0+0.08s)" [3344, 3352, 3359, 3375, 3376, 3374]
  line "LTC (60.0+0.60s)" [3479, 3498, 3506, 3510, 3525, 3519]
  line "VLTC (2m24s+1.12s)" [3534, 3533, 3521, 3538, 3541, 3548]
  line "VLTC (2m24s+1.12s)" [3534, 3533, 3521, 3538, 3541, 3548]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.25 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 24 | 374 | 50% | 3545 | 91% |
| 1.25 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 24 | 388 | 50% | 3518 | 86% |
| 1.25 | STC <sub>(8.0+0.08s)</sub> | 3374 | 24 | 416 | 49% | 3382 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.24 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 28 | 296 | 52% | 3530 | 91% |
| 1.24 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 29 | 272 | 50% | 3522 | 92% |
| 1.24 | STC <sub>(8.0+0.08s)</sub> | 3376 | 21 | 534 | 50% | 3375 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.23 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 28 | 288 | 51% | 3533 | 91% |
| 1.23 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 29 | 280 | 51% | 3507 | 87% |
| 1.23 | STC <sub>(8.0+0.08s)</sub> | 3375 | 23 | 468 | 48% | 3387 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.22 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 24 | 388 | 50% | 3521 | 85% |
| 1.22 | LTC <sub>(60.0+0.60s)</sub> | 3506 | 25 | 356 | 49% | 3510 | 87% |
| 1.22 | STC <sub>(8.0+0.08s)</sub> | 3359 | 25 | 380 | 50% | 3357 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.21 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 18 | 724 | 51% | 3526 | 92% |
| 1.21 | LTC <sub>(60.0+0.60s)</sub> | 3498 | 15 | 1096 | 51% | 3479 | 86% |
| 1.21 | STC <sub>(8.0+0.08s)</sub> | 3352 | 15 | 1136 | 50% | 3352 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.20 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 36 | 176 | 51% | 3529 | 84% |
| 1.20 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 37 | 168 | 50% | 3447 | 89% |
| 1.20 | STC <sub>(8.0+0.08s)</sub> | 3344 | 30 | 267 | 48% | 3357 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |