# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2549<sub>(+76) | 2804<sub>(-1) | 2855<sub>(-18) |  |
| 6.0 | 2026-03-31 | 2473<sub>(+92) | 2805<sub>(+93) | 2873<sub>(+74) |  |
| 5.3 | 2025-09-26 | 2381<sub>(+new) | 2712<sub>(+new) | 2799<sub>(+new) |  |
| 5.1 | 2024-03-24 |  |  |  |  |
| 5.0 | 2021-04-07 |  |  |  |  |
| 4.2 | 2020-09-23 |  |  |  |  |
| 4.0 | 2020-01-24 |  |  |  |  |
| 3.0 | 2019-02-23 |  |  |  |  |
| 2.1 | 2019-01-14 |  |  |  |  |
| 2.0 | 2018-11-26 |  |  |  |  |
| 1.5 | 2018-07-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+tomitankChess+<version>&body=###%20Engine%20name%0AtomitankChess%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:43:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2381, 2473, 2549]
  line "STC (8.0+0.08s)" [2381, 2473, 2549]
  line "LTC (60.0+0.60s)" [2712, 2805, 2804]
  line "VLTC (2m24s+1.12s)" [2799, 2873, 2855]
  line "VLTC (2m24s+1.12s)" [2799, 2873, 2855]
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
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2381, 2473, 2549]
  line "STC (8.0+0.08s)" [2381, 2473, 2549]
  line "LTC (60.0+0.60s)" [2712, 2805, 2804]
  line "VLTC (2m24s+1.12s)" [2799, 2873, 2855]
  line "VLTC (2m24s+1.12s)" [2799, 2873, 2855]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2855 | 66 | 64 | 52% | 2840 | 50% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 65 | 68 | 54% | 2769 | 49% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2549 | 62 | 80 | 46% | 2581 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2873 | 27 | 406 | 50% | 2874 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2805 | 29 | 362 | 50% | 2803 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2473 | 26 | 476 | 48% | 2492 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2799 | 31 | 312 | 48% | 2815 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2712 | 32 | 310 | 52% | 2696 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2381 | 29 | 420 | 50% | 2379 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |