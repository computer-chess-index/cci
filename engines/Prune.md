# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3252<sub>(+new) | 3443<sub>(+new) | 3506<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3096<sub>(+new) | 3325<sub>(+new) | 3384<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2907<sub>(+268) | 3163<sub>(+267) | 3208<sub>(+202) |  |
| 3.0.0 | 2025-12-06 | 2639<sub>(-45) | 2896<sub>(-11) | 3006<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2684<sub>(+159) | 2907<sub>(+126) | 3021<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2525<sub>(+49) | 2781<sub>(-5) | 2869<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2476<sub>(-53) | 2786<sub>(+31) | 2870<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2529 | 2755 | 2823 |  |
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

Generated: 2026-08-30 06:28:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "" [2529, 2476, 2525, 2684, 2639, 2907, 3096, 3252]
  line "STC (8.0+0.08s)" [2529, 2476, 2525, 2684, 2639, 2907, 3096, 3252]
  line "LTC (60.0+0.60s)" [2755, 2786, 2781, 2907, 2896, 3163, 3325, 3443]
  line "" [2823, 2870, 2869, 3021, 3006, 3208, 3384, 3506]
  line "VLTC (2m24s+1.12s)" [2823, 2870, 2869, 3021, 3006, 3208, 3384, 3506]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 26 | 344 | 50% | 3505 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3443 | 25 | 378 | 51% | 3438 | 75% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3252 | 29 | 308 | 51% | 3248 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3384 | 24 | 410 | 50% | 3382 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3325 | 25 | 398 | 52% | 3310 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3096 | 24 | 482 | 51% | 3078 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3208 | 32 | 284 | 51% | 3202 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3163 | 31 | 288 | 52% | 3151 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2907 | 33 | 276 | 51% | 2888 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3006 | 35 | 236 | 48% | 3023 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2896 | 36 | 236 | 52% | 2882 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2639 | 39 | 212 | 47% | 2666 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3021 | 72 | 56 | 57% | 2967 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2907 | 66 | 72 | 49% | 2921 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2684 | 90 | 40 | 55% | 2642 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2869 | 54 | 108 | 49% | 2884 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2781 | 54 | 108 | 45% | 2840 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2525 | 55 | 118 | 40% | 2639 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2870 | 95 | 32 | 50% | 2869 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2786 | 64 | 72 | 47% | 2811 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2476 | 60 | 92 | 48% | 2491 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2823 | 53 | 108 | 50% | 2817 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2755 | 51 | 112 | 51% | 2749 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2529 | 53 | 116 | 46% | 2588 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |