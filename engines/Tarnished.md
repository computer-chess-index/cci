# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3343<sub>(-8) | 3521<sub>(+6) | 3549<sub>(+11) |  |
| 5.0 | 2026-02-07 | 3351<sub>(+110) | 3515<sub>(+94) | 3538<sub>(+70) |  |
| 4.0 | 2025-08-23 | 3241<sub>(+new) | 3421<sub>(+new) | 3468<sub>(+new) |  |
| 3.0 | 2025-06-30 |  |  |  |  |
| 2.1 | 2025-05-25 |  |  |  |  |
| 2.0 | 2025-05-14 |  |  |  |  |
| 1.0 | 2025-05-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tarnished+<version>&body=###%20Engine%20name%0ATarnished%0A%0A###%20Version%0A6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-07 06:30:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3241, 3351, 3343]
  line "STC (8.0+0.08s)" [3241, 3351, 3343]
  line "LTC (60.0+0.60s)" [3421, 3515, 3521]
  line "VLTC (2m24s+1.12s)" [3468, 3538, 3549]
  line "VLTC (2m24s+1.12s)" [3468, 3538, 3549]
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
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3241, 3351, 3343]
  line "STC (8.0+0.08s)" [3241, 3351, 3343]
  line "LTC (60.0+0.60s)" [3421, 3515, 3521]
  line "VLTC (2m24s+1.12s)" [3468, 3538, 3549]
  line "VLTC (2m24s+1.12s)" [3468, 3538, 3549]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 31 | 244 | 51% | 3538 | 86% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 29 | 276 | 49% | 3530 | 86% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3343 | 30 | 280 | 49% | 3349 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 23 | 442 | 50% | 3538 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3515 | 23 | 442 | 51% | 3509 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3351 | 23 | 474 | 50% | 3349 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3468 | 29 | 282 | 51% | 3460 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 34 | 220 | 51% | 3402 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3241 | 29 | 316 | 54% | 3205 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |