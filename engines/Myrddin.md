# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2747<sub>(+128) | 3043<sub>(+109) | 3116<sub>(+104) |  |
| 0.95 | 2026-04-23 | 2619<sub>(+32) | 2934<sub>(+14) | 3012<sub>(-35) |  |
| 0.94 | 2025-12-11 | 2587<sub>(+new) | 2920<sub>(+new) | 3047<sub>(+new) |  |
| 0.93 | 2025-04-23 |  |  |  |  |
| 0.92 | 2024-12-08 |  |  |  |  |
| 0.91 | 2024-10-19 |  |  |  |  |
| 0.90 | 2023-06-12 |  |  |  |  |
| 0.89 | 2023-03-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Myrddin+<version>&body=###%20Engine%20name%0AMyrddin%0A%0A###%20Version%0A0.96" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-08 06:27:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2587, 2619, 2747]
  line "STC (8.0+0.08s)" [2587, 2619, 2747]
  line "LTC (60.0+0.60s)" [2920, 2934, 3043]
  line "VLTC (2m24s+1.12s)" [3047, 3012, 3116]
  line "VLTC (2m24s+1.12s)" [3047, 3012, 3116]
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
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2587, 2619, 2747]
  line "STC (8.0+0.08s)" [2587, 2619, 2747]
  line "LTC (60.0+0.60s)" [2920, 2934, 3043]
  line "VLTC (2m24s+1.12s)" [3047, 3012, 3116]
  line "VLTC (2m24s+1.12s)" [3047, 3012, 3116]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3116 | 32 | 274 | 51% | 3110 | 53% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3043 | 34 | 252 | 50% | 3039 | 49% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2747 | 33 | 304 | 49% | 2754 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 29 | 370 | 51% | 3002 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 29 | 366 | 49% | 2942 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2619 | 29 | 398 | 52% | 2599 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3047 | 27 | 380 | 50% | 3046 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2920 | 28 | 382 | 53% | 2888 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2587 | 27 | 476 | 50% | 2569 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |