# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2.1 | 2026-02-24 | 3141<sub>(+new) | 3370<sub>(+new) | 3426<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2952<sub>(+264) | 3209<sub>(+267) | 3252<sub>(+198) |  |
| 3.0.0 | 2025-12-06 | 2688<sub>(-44) | 2942<sub>(-9) | 3054<sub>(-13) |  |
| 2.2.0 | 2025-11-20 | 2732<sub>(+158) | 2951<sub>(+123) | 3067<sub>(+151) |  |
| 2.1.2 | 2025-11-06 | 2574<sub>(+47) | 2828<sub>(-6) | 2916<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2527<sub>(-52) | 2834<sub>(+29) | 2916<sub>(+46) |  |
| 2.1.0 | 2025-11-02 | 2579<sub>(+new) | 2805<sub>(+new) | 2870<sub>(+new) |  |
| 2.0.1 | 2025-10-21 |  |  |  |  |
| 2.0.0 | 2025-10-19 |  |  |  |  |
| 1.0.1 | 2025-10-15 |  |  |  |  |
| 1.0.0 | 2025-10-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prune+<version>&body=###%20Engine%20name%0APrune%0A%0A###%20Version%0A3.2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-03 08:19:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2500 --> 3500
  line "STC (8.0+0.08s)" [2579, 2527, 2574, 2732, 2688, 2952, 3141]
  line "STC (8.0+0.08s)" [2579, 2527, 2574, 2732, 2688, 2952, 3141]
  line "LTC (60.0+0.60s)" [2805, 2834, 2828, 2951, 2942, 3209, 3370]
  line "VLTC (2m24s+1.12s)" [2870, 2916, 2916, 3067, 3054, 3252, 3426]
  line "VLTC (2m24s+1.12s)" [2870, 2916, 2916, 3067, 3054, 3252, 3426]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 25 | 398 | 50% | 3425 | 76% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 26 | 376 | 52% | 3355 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3141 | 26 | 398 | 51% | 3125 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3252 | 32 | 284 | 51% | 3248 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3209 | 31 | 288 | 52% | 3197 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2952 | 33 | 276 | 51% | 2934 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3054 | 35 | 236 | 48% | 3070 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2942 | 36 | 236 | 52% | 2930 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2688 | 39 | 212 | 47% | 2715 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3067 | 72 | 56 | 57% | 3013 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2951 | 66 | 72 | 49% | 2967 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2732 | 90 | 40 | 55% | 2691 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 54 | 108 | 49% | 2930 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2828 | 54 | 108 | 45% | 2888 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2574 | 55 | 118 | 40% | 2688 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 95 | 32 | 50% | 2915 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2834 | 64 | 72 | 47% | 2858 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2527 | 60 | 92 | 48% | 2542 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2870 | 53 | 108 | 50% | 2866 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2805 | 51 | 112 | 51% | 2797 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2579 | 53 | 116 | 46% | 2638 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |