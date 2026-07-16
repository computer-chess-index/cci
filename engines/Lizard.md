# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3287<sub>(+15) | 3468<sub>(+21) | 3502<sub>(+11) |  |
| 11.1.5 | 2024-12-30 | 3272<sub>(+new) | 3447<sub>(+new) | 3491<sub>(+new) |  |
| 11.1 | 2024-11-11 |  |  |  |  |
| 11.0 | 2024-09-26 | 3217<sub>(+9) | 3430<sub>(-14) | 3478<sub>(-4) |  |
| 10.5 | 2024-07-13 | 3208<sub>(+new) | 3444<sub>(+new) | 3482<sub>(+new) |  |
| 10.4 | 2024-06-03 |  |  |  |  |
| 10.3 | 2024-03-09 |  |  |  |  |
| 10.2 | 2024-02-10 |  |  |  |  |
| 10.1 | 2024-01-13 |  |  |  |  |
| 10.0 | 2024-01-05 |  |  |  |  |
| 9.3.1 | 2023-12-30 |  |  |  |  |
| 9.3 | 2023-12-23 |  |  |  |  |
| 9.2 | 2023-11-06 |  |  |  |  |
| 9.1 | 2023-10-10 |  |  |  |  |
| 8.4 | 2023-09-18 |  |  |  |  |
| 6.2 | 2023-07-13 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lizard+<version>&body=###%20Engine%20name%0ALizard%0A%0A###%20Version%0A11.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:26:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3208, 3217, 3272, 3287]
  line "STC (8.0+0.08s)" [3208, 3217, 3272, 3287]
  line "LTC (60.0+0.60s)" [3444, 3430, 3447, 3468]
  line "VLTC (2m24s+1.12s)" [3482, 3478, 3491, 3502]
  line "VLTC (2m24s+1.12s)" [3482, 3478, 3491, 3502]
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
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3208, 3217, 3272, 3287]
  line "STC (8.0+0.08s)" [3208, 3217, 3272, 3287]
  line "LTC (60.0+0.60s)" [3444, 3430, 3447, 3468]
  line "VLTC (2m24s+1.12s)" [3482, 3478, 3491, 3502]
  line "VLTC (2m24s+1.12s)" [3482, 3478, 3491, 3502]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 12 | 1608 | 50% | 3503 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 12 | 1588 | 50% | 3465 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3287 | 13 | 1612 | 51% | 3282 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 21 | 544 | 50% | 3488 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 21 | 544 | 50% | 3448 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3272 | 22 | 552 | 49% | 3281 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 18 | 760 | 50% | 3476 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3430 | 18 | 768 | 49% | 3438 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3217 | 18 | 816 | 49% | 3221 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3482 | 31 | 252 | 52% | 3428 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3444 | 35 | 192 | 50% | 3441 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3208 | 31 | 272 | 48% | 3220 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |