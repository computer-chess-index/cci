# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2.1 | 2026-02-24 | 3143<sub>(+new) | 3371<sub>(+new) | 3428<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2954<sub>(+266) | 3209<sub>(+266) | 3254<sub>(+199) |  |
| 3.0.0 | 2025-12-06 | 2688<sub>(-46) | 2943<sub>(-9) | 3055<sub>(-12) |  |
| 2.2.0 | 2025-11-20 | 2734<sub>(+160) | 2952<sub>(+122) | 3067<sub>(+151) |  |
| 2.1.2 | 2025-11-06 | 2574<sub>(+45) | 2830<sub>(-4) | 2916<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2529<sub>(-50) | 2834<sub>(+27) | 2916<sub>(+45) |  |
| 2.1.0 | 2025-11-02 | 2579<sub>(+new) | 2807<sub>(+new) | 2871<sub>(+new) |  |
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

Generated: 2026-05-05 06:27:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2500 --> 3500
  line "STC (8.0+0.08s)" [2579, 2529, 2574, 2734, 2688, 2954, 3143]
  line "STC (8.0+0.08s)" [2579, 2529, 2574, 2734, 2688, 2954, 3143]
  line "LTC (60.0+0.60s)" [2807, 2834, 2830, 2952, 2943, 3209, 3371]
  line "VLTC (2m24s+1.12s)" [2871, 2916, 2916, 3067, 3055, 3254, 3428]
  line "VLTC (2m24s+1.12s)" [2871, 2916, 2916, 3067, 3055, 3254, 3428]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 25 | 398 | 50% | 3426 | 76% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3371 | 26 | 376 | 52% | 3355 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3143 | 26 | 398 | 51% | 3127 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3254 | 32 | 284 | 51% | 3248 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3209 | 31 | 288 | 52% | 3197 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2954 | 33 | 276 | 51% | 2934 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3055 | 35 | 236 | 48% | 3070 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2943 | 36 | 236 | 52% | 2930 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2688 | 39 | 212 | 47% | 2716 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3067 | 72 | 56 | 57% | 3013 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2952 | 66 | 72 | 49% | 2967 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2734 | 90 | 40 | 55% | 2692 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 54 | 108 | 49% | 2931 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2830 | 54 | 108 | 45% | 2889 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2574 | 55 | 118 | 40% | 2689 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 95 | 32 | 50% | 2915 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2834 | 64 | 72 | 47% | 2858 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2529 | 60 | 92 | 48% | 2542 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2871 | 53 | 108 | 50% | 2866 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 51 | 112 | 51% | 2799 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2579 | 53 | 116 | 46% | 2638 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |