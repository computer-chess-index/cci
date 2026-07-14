# Engine: tomitankChess

Author: Tamas Kuzmics

Home: https://github.com/tomitank/tomitankChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-07-06 | 2541<sub>(+66) | 2850<sub>(+43) | 2873<sub>(-1) |  |
| 6.0 | 2026-03-31 | 2475<sub>(+94) | 2807<sub>(+93) | 2874<sub>(+74) |  |
| 5.3 | 2025-09-26 | 2381<sub>(+new) | 2714<sub>(+new) | 2800<sub>(+new) |  |
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

Generated: 2026-07-14 06:29:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.3", "6.0", "7.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "STC (8.0+0.08s)" [2381, 2475, 2541]
  line "STC (8.0+0.08s)" [2381, 2475, 2541]
  line "LTC (60.0+0.60s)" [2714, 2807, 2850]
  line "VLTC (2m24s+1.12s)" [2800, 2874, 2873]
  line "VLTC (2m24s+1.12s)" [2800, 2874, 2873]
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
  line "STC (8.0+0.08s)" [2381, 2475, 2541]
  line "STC (8.0+0.08s)" [2381, 2475, 2541]
  line "LTC (60.0+0.60s)" [2714, 2807, 2850]
  line "VLTC (2m24s+1.12s)" [2800, 2874, 2873]
  line "VLTC (2m24s+1.12s)" [2800, 2874, 2873]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2873 | 37 | 212 | 50% | 2873 | 45% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2850 | 36 | 232 | 53% | 2822 | 44% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2541 | 46 | 156 | 48% | 2557 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 27 | 406 | 50% | 2874 | 43% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 29 | 362 | 50% | 2804 | 38% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2475 | 26 | 476 | 48% | 2493 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2800 | 31 | 312 | 48% | 2816 | 40% |
| 5.3 | LTC <sub>(60.0+0.60s)</sub> | 2714 | 32 | 310 | 52% | 2696 | 39% |
| 5.3 | STC <sub>(8.0+0.08s)</sub> | 2381 | 29 | 420 | 50% | 2379 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |