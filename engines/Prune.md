# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3241<sub>(+new) | 3426<sub>(+new) | 3502<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3086<sub>(+new) | 3313<sub>(+new) | 3372<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2898<sub>(+267) | 3152<sub>(+264) | 3197<sub>(+199) |  |
| 3.0.0 | 2025-12-06 | 2631<sub>(-46) | 2888<sub>(-9) | 2998<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2677<sub>(+159) | 2897<sub>(+124) | 3013<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2518<sub>(+47) | 2773<sub>(-5) | 2861<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2471<sub>(-51) | 2778<sub>(+29) | 2862<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2522<sub>(+new) | 2749<sub>(+new) | 2815<sub>(+new) |  |
| 2.0.1 | 2025-10-21 |  |  |  |  |
| 2.0.0 | 2025-10-19 |  |  |  |  |
| 1.0.1 | 2025-10-15 |  |  |  |  |
| 1.0.0 | 2025-10-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prune+<version>&body=###%20Engine%20name%0APrune%0A%0A###%20Version%0A4.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-12 06:29:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "STC (8.0+0.08s)" [2522, 2471, 2518, 2677, 2631, 2898, 3086, 3241]
  line "STC (8.0+0.08s)" [2522, 2471, 2518, 2677, 2631, 2898, 3086, 3241]
  line "LTC (60.0+0.60s)" [2749, 2778, 2773, 2897, 2888, 3152, 3313, 3426]
  line "VLTC (2m24s+1.12s)" [2815, 2862, 2861, 3013, 2998, 3197, 3372, 3502]
  line "VLTC (2m24s+1.12s)" [2815, 2862, 2861, 3013, 2998, 3197, 3372, 3502]
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
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "STC (8.0+0.08s)" [2522, 2471, 2518, 2677, 2631, 2898, 3086, 3241]
  line "STC (8.0+0.08s)" [2522, 2471, 2518, 2677, 2631, 2898, 3086, 3241]
  line "LTC (60.0+0.60s)" [2749, 2778, 2773, 2897, 2888, 3152, 3313, 3426]
  line "VLTC (2m24s+1.12s)" [2815, 2862, 2861, 3013, 2998, 3197, 3372, 3502]
  line "VLTC (2m24s+1.12s)" [2815, 2862, 2861, 3013, 2998, 3197, 3372, 3502]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 44 | 118 | 53% | 3483 | 84% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3426 | 32 | 244 | 49% | 3429 | 73% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3241 | 46 | 124 | 52% | 3231 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3372 | 24 | 410 | 50% | 3370 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3313 | 25 | 398 | 52% | 3299 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3086 | 24 | 482 | 51% | 3069 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3197 | 32 | 284 | 51% | 3191 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3152 | 31 | 288 | 52% | 3141 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2898 | 33 | 276 | 51% | 2880 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2998 | 35 | 236 | 48% | 3013 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2888 | 36 | 236 | 52% | 2874 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2631 | 39 | 212 | 47% | 2660 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3013 | 72 | 56 | 57% | 2958 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2897 | 66 | 72 | 49% | 2913 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2677 | 90 | 40 | 55% | 2635 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 54 | 108 | 49% | 2874 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2773 | 54 | 108 | 45% | 2832 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2518 | 55 | 118 | 40% | 2631 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 95 | 32 | 50% | 2861 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2778 | 64 | 72 | 47% | 2803 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2471 | 60 | 92 | 48% | 2485 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2815 | 53 | 108 | 50% | 2809 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2749 | 51 | 112 | 51% | 2742 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2522 | 53 | 116 | 46% | 2581 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |