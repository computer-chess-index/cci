# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3083<sub>(+new) | 3312<sub>(+new) | 3371<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2897<sub>(+267) | 3152<sub>(+266) | 3195<sub>(+198) |  |
| 3.0.0 | 2025-12-06 | 2630<sub>(-46) | 2886<sub>(-10) | 2997<sub>(-14) |  |
| 2.2.0 | 2025-11-20 | 2676<sub>(+160) | 2896<sub>(+124) | 3011<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2516<sub>(+47) | 2772<sub>(-5) | 2859<sub>(-2) |  |
| 2.1.1 | 2025-11-05 | 2469<sub>(-51) | 2777<sub>(+30) | 2861<sub>(+48) |  |
| 2.1.0 | 2025-11-02 | 2520<sub>(+new) | 2747<sub>(+new) | 2813<sub>(+new) |  |
| 2.0.1 | 2025-10-21 |  |  |  |  |
| 2.0.0 | 2025-10-19 |  |  |  |  |
| 1.0.1 | 2025-10-15 |  |  |  |  |
| 1.0.0 | 2025-10-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prune+<version>&body=###%20Engine%20name%0APrune%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-06 06:27:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2400 --> 3400
  line "STC (8.0+0.08s)" [2520, 2469, 2516, 2676, 2630, 2897, 3083]
  line "STC (8.0+0.08s)" [2520, 2469, 2516, 2676, 2630, 2897, 3083]
  line "LTC (60.0+0.60s)" [2747, 2777, 2772, 2896, 2886, 3152, 3312]
  line "VLTC (2m24s+1.12s)" [2813, 2861, 2859, 3011, 2997, 3195, 3371]
  line "VLTC (2m24s+1.12s)" [2813, 2861, 2859, 3011, 2997, 3195, 3371]
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
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2400 --> 3400
  line "STC (8.0+0.08s)" [2520, 2469, 2516, 2676, 2630, 2897, 3083]
  line "STC (8.0+0.08s)" [2520, 2469, 2516, 2676, 2630, 2897, 3083]
  line "LTC (60.0+0.60s)" [2747, 2777, 2772, 2896, 2886, 3152, 3312]
  line "VLTC (2m24s+1.12s)" [2813, 2861, 2859, 3011, 2997, 3195, 3371]
  line "VLTC (2m24s+1.12s)" [2813, 2861, 2859, 3011, 2997, 3195, 3371]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3371 | 24 | 410 | 50% | 3368 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3312 | 25 | 390 | 52% | 3298 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3083 | 24 | 478 | 51% | 3069 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3195 | 32 | 284 | 51% | 3191 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3152 | 31 | 288 | 52% | 3140 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2897 | 33 | 276 | 51% | 2878 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2997 | 35 | 236 | 48% | 3012 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2886 | 36 | 236 | 52% | 2873 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2630 | 39 | 212 | 47% | 2658 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3011 | 72 | 56 | 57% | 2957 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2896 | 66 | 72 | 49% | 2912 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2676 | 90 | 40 | 55% | 2634 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 54 | 108 | 49% | 2874 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 54 | 108 | 45% | 2831 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2516 | 55 | 118 | 40% | 2630 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 95 | 32 | 50% | 2859 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2777 | 64 | 72 | 47% | 2801 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2469 | 60 | 92 | 48% | 2484 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2813 | 53 | 108 | 50% | 2808 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2747 | 51 | 112 | 51% | 2741 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2520 | 53 | 116 | 46% | 2580 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |