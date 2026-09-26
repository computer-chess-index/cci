# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3260<sub>(+new) | 3455<sub>(+new) | 3515<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3102<sub>(+new) | 3333<sub>(+new) | 3393<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2915<sub>(+269) | 3170<sub>(+267) | 3214<sub>(+199) |  |
| 3.0.0 | 2025-12-06 | 2646<sub>(-45) | 2903<sub>(-10) | 3015<sub>(-14) |  |
| 2.2.0 | 2025-11-20 | 2691<sub>(+160) | 2913<sub>(+125) | 3029<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2531<sub>(+48) | 2788<sub>(-5) | 2877<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2483<sub>(-52) | 2793<sub>(+30) | 2877<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2535 | 2763 | 2830 |  |
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

Generated: 2026-09-26 04:41:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "" [2535, 2483, 2531, 2691, 2646, 2915, 3102, 3260]
  line "STC (8.0+0.08s)" [2535, 2483, 2531, 2691, 2646, 2915, 3102, 3260]
  line "LTC (60.0+0.60s)" [2763, 2793, 2788, 2913, 2903, 3170, 3333, 3455]
  line "" [2830, 2877, 2877, 3029, 3015, 3214, 3393, 3515]
  line "VLTC (2m24s+1.12s)" [2830, 2877, 2877, 3029, 3015, 3214, 3393, 3515]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 24 | 396 | 50% | 3517 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 24 | 414 | 51% | 3449 | 75% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3260 | 28 | 328 | 51% | 3255 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3393 | 24 | 410 | 50% | 3391 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3333 | 25 | 398 | 52% | 3320 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3102 | 24 | 482 | 51% | 3086 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3214 | 32 | 284 | 51% | 3210 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3170 | 31 | 288 | 52% | 3158 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2915 | 33 | 276 | 51% | 2896 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3015 | 35 | 236 | 48% | 3031 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2903 | 36 | 236 | 52% | 2889 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2646 | 39 | 212 | 47% | 2673 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3029 | 72 | 56 | 57% | 2975 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2913 | 66 | 72 | 49% | 2930 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2691 | 90 | 40 | 55% | 2649 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2877 | 54 | 108 | 49% | 2892 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2788 | 54 | 108 | 45% | 2849 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2531 | 55 | 118 | 40% | 2646 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2877 | 95 | 32 | 50% | 2876 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2793 | 64 | 72 | 47% | 2819 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2483 | 60 | 92 | 48% | 2498 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2830 | 53 | 108 | 50% | 2826 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2763 | 51 | 112 | 51% | 2755 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2535 | 53 | 116 | 46% | 2595 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |