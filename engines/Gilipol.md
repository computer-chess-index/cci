# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2658<sub>(+127) | 2967<sub>(+114) | 3096<sub>(+104) |  |
| 1.00netbin | 2026-04-13 | 2531<sub>(+2142) | 2853<sub>(+2403) | 2992<sub>(+2533) |  |
| 1.00 | 2026-04-12 | 389 | 450 | 459 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gilipol+<version>&body=###%20Engine%20name%0AGilipol%0A%0A###%20Version%0A2.00" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-17 06:25:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 300 --> 3100
  line "STC (8.0+0.08s)" [389, 2531, 2658]
  line "STC (8.0+0.08s)" [389, 2531, 2658]
  line "LTC (60.0+0.60s)" [450, 2853, 2967]
  line "VLTC (2m24s+1.12s)" [459, 2992, 3096]
  line "VLTC (2m24s+1.12s)" [459, 2992, 3096]
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
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 300 --> 3100
  line "STC (8.0+0.08s)" [389, 2531, 2658]
  line "STC (8.0+0.08s)" [389, 2531, 2658]
  line "LTC (60.0+0.60s)" [450, 2853, 2967]
  line "VLTC (2m24s+1.12s)" [459, 2992, 3096]
  line "VLTC (2m24s+1.12s)" [459, 2992, 3096]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | 3096 | 28 | 370 | 53% | 3067 | 53% |
| 2.00 | LTC <sub>(60.0+0.60s)</sub> | 2967 | 30 | 340 | 50% | 2959 | 45% |
| 2.00 | STC <sub>(8.0+0.08s)</sub> | 2658 | 32 | 324 | 52% | 2635 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | 2992 | 28 | 426 | 57% | 2773 | 41% |
| 1.00netbin | LTC <sub>(60.0+0.60s)</sub> | 2853 | 25 | 546 | 59% | 2674 | 39% |
| 1.00netbin | STC <sub>(8.0+0.08s)</sub> | 2531 | 28 | 470 | 55% | 2369 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | 459 | 58 | 176 | 24% | 1046 | 21% |
| 1.00 | LTC <sub>(60.0+0.60s)</sub> | 450 | 59 | 148 | 27% | 940 | 30% |
| 1.00 | STC <sub>(8.0+0.08s)</sub> | 389 | 55 | 132 | 34% | 728 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |