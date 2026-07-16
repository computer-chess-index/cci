# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3344<sub>(+72) | 3509<sub>(+53) | 3537<sub>(+26) |  |
| 15.0.0 | 2025-09-01 | 3272<sub>(+new) | 3456<sub>(+new) | 3511<sub>(+new) |  |
| 14 | 2025-07-28 |  |  |  |  |
| 13 | 2025-06-24 |  |  |  |  |
| 12 | 2024-08-01 |  |  |  |  |
| 11 | 2022-10-09 |  |  |  |  |
| 10 | 2021-03-04 |  |  |  |  |
| 9 | 2020-12-18 |  |  |  |  |
| 8.1 | 2020-11-11 |  |  |  |  |
| 8 | 2020-10-27 |  |  |  |  |
| 7 | 2020-09-22 |  |  |  |  |
| 6 | 2020-08-12 |  |  |  |  |
| 5 | 2020-07-14 |  |  |  |  |
| 4 | 2020-06-22 |  |  |  |  |
| 3.0 | 2020-01-06 |  |  |  |  |
| 2.7 | 2019-12-11 |  |  |  |  |
| 2.6.2a | 2019-07-03 |  |  |  |  |
| 2.5 | 2019-06-27 |  |  |  |  |
| 2.4 | 2019-06-19 |  |  |  |  |
| 2.3 | 2019-06-08 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Halogen+<version>&body=###%20Engine%20name%0AHalogen%0A%0A###%20Version%0A16.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:25:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3272, 3344]
  line "STC (8.0+0.08s)" [3272, 3344]
  line "LTC (60.0+0.60s)" [3456, 3509]
  line "VLTC (2m24s+1.12s)" [3511, 3537]
  line "VLTC (2m24s+1.12s)" [3511, 3537]
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
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3272, 3344]
  line "STC (8.0+0.08s)" [3272, 3344]
  line "LTC (60.0+0.60s)" [3456, 3509]
  line "VLTC (2m24s+1.12s)" [3511, 3537]
  line "VLTC (2m24s+1.12s)" [3511, 3537]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 22 | 458 | 50% | 3536 | 87% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 22 | 480 | 50% | 3509 | 86% |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3344 | 22 | 518 | 49% | 3349 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 27 | 324 | 52% | 3494 | 83% |
| 15.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3456 | 30 | 276 | 52% | 3437 | 79% |
| 15.0.0 | STC <sub>(8.0+0.08s)</sub> | 3272 | 32 | 256 | 54% | 3233 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |