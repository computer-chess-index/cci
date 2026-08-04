# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3245<sub>(+new) | 3425<sub>(+new) | 3498<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3085<sub>(+new) | 3312<sub>(+new) | 3372<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2897<sub>(+269) | 3151<sub>(+266) | 3195<sub>(+199) |  |
| 3.0.0 | 2025-12-06 | 2628<sub>(-46) | 2885<sub>(-11) | 2996<sub>(-16) |  |
| 2.2.0 | 2025-11-20 | 2674<sub>(+159) | 2896<sub>(+126) | 3012<sub>(+153) |  |
| 2.1.2 | 2025-11-06 | 2515<sub>(+49) | 2770<sub>(-7) | 2859<sub>(-2) |  |
| 2.1.1 | 2025-11-05 | 2466<sub>(-53) | 2777<sub>(+31) | 2861<sub>(+49) |  |
| 2.1.0 | 2025-11-02 | 2519<sub>(+new) | 2746<sub>(+new) | 2812<sub>(+new) |  |
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

Generated: 2026-08-04 06:28:36

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3500
  line "STC (8.0+0.08s)" [2519, 2466, 2515, 2674, 2628, 2897, 3085, 3245]
  line "STC (8.0+0.08s)" [2519, 2466, 2515, 2674, 2628, 2897, 3085, 3245]
  line "LTC (60.0+0.60s)" [2746, 2777, 2770, 2896, 2885, 3151, 3312, 3425]
  line "VLTC (2m24s+1.12s)" [2812, 2861, 2859, 3012, 2996, 3195, 3372, 3498]
  line "VLTC (2m24s+1.12s)" [2812, 2861, 2859, 3012, 2996, 3195, 3372, 3498]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3498 | 29 | 280 | 51% | 3492 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 27 | 334 | 50% | 3425 | 74% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3245 | 33 | 244 | 51% | 3236 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3372 | 24 | 410 | 50% | 3370 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3312 | 25 | 398 | 52% | 3298 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3085 | 24 | 482 | 51% | 3067 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3195 | 32 | 284 | 51% | 3191 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3151 | 31 | 288 | 52% | 3139 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2897 | 33 | 276 | 51% | 2878 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2996 | 35 | 236 | 48% | 3012 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2885 | 36 | 236 | 52% | 2873 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2628 | 39 | 212 | 47% | 2657 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 72 | 56 | 57% | 2957 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2896 | 66 | 72 | 49% | 2912 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2674 | 90 | 40 | 55% | 2633 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 54 | 108 | 49% | 2873 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2770 | 54 | 108 | 45% | 2830 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2515 | 55 | 118 | 40% | 2630 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 95 | 32 | 50% | 2858 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2777 | 64 | 72 | 47% | 2801 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2466 | 60 | 92 | 48% | 2481 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2812 | 53 | 108 | 50% | 2808 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2746 | 51 | 112 | 51% | 2738 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2519 | 53 | 116 | 46% | 2579 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |