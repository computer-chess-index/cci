# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3245<sub>(+new) | 3434<sub>(+new) | 3501<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3089<sub>(+new) | 3317<sub>(+new) | 3378<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2901<sub>(+268) | 3156<sub>(+267) | 3201<sub>(+201) |  |
| 3.0.0 | 2025-12-06 | 2633<sub>(-45) | 2889<sub>(-11) | 3000<sub>(-16) |  |
| 2.2.0 | 2025-11-20 | 2678<sub>(+159) | 2900<sub>(+126) | 3016<sub>(+153) |  |
| 2.1.2 | 2025-11-06 | 2519<sub>(+48) | 2774<sub>(-6) | 2863<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2471<sub>(-52) | 2780<sub>(+30) | 2863<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2523 | 2750 | 2816 |  |
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

Generated: 2026-08-18 06:28:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "STC (8.0+0.08s)" [2523, 2471, 2519, 2678, 2633, 2901, 3089, 3245]
  line "STC (8.0+0.08s)" [2523, 2471, 2519, 2678, 2633, 2901, 3089, 3245]
  line "LTC (60.0+0.60s)" [2750, 2780, 2774, 2900, 2889, 3156, 3317, 3434]
  line "VLTC (2m24s+1.12s)" [2816, 2863, 2863, 3016, 3000, 3201, 3378, 3501]
  line "VLTC (2m24s+1.12s)" [2816, 2863, 2863, 3016, 3000, 3201, 3378, 3501]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 28 | 296 | 50% | 3499 | 84% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 26 | 350 | 50% | 3430 | 75% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3245 | 31 | 276 | 51% | 3243 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3378 | 24 | 410 | 50% | 3375 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3317 | 25 | 398 | 52% | 3303 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3089 | 24 | 482 | 51% | 3071 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3201 | 32 | 284 | 51% | 3195 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3156 | 31 | 288 | 52% | 3144 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2901 | 33 | 276 | 51% | 2882 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3000 | 35 | 236 | 48% | 3016 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2889 | 36 | 236 | 52% | 2876 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2633 | 39 | 212 | 47% | 2661 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3016 | 72 | 56 | 57% | 2961 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2900 | 66 | 72 | 49% | 2916 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2678 | 90 | 40 | 55% | 2635 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2863 | 54 | 108 | 49% | 2877 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2774 | 54 | 108 | 45% | 2835 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2519 | 55 | 118 | 40% | 2633 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2863 | 95 | 32 | 50% | 2862 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2780 | 64 | 72 | 47% | 2805 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2471 | 60 | 92 | 48% | 2485 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2816 | 53 | 108 | 50% | 2812 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2750 | 51 | 112 | 51% | 2742 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2523 | 53 | 116 | 46% | 2581 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |