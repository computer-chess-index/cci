# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3255<sub>(+new) | 3449<sub>(+new) | 3511<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3098<sub>(+new) | 3328<sub>(+new) | 3389<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2909<sub>(+267) | 3166<sub>(+268) | 3210<sub>(+199) |  |
| 3.0.0 | 2025-12-06 | 2642<sub>(-45) | 2898<sub>(-11) | 3011<sub>(-14) |  |
| 2.2.0 | 2025-11-20 | 2687<sub>(+160) | 2909<sub>(+125) | 3025<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2527<sub>(+48) | 2784<sub>(-6) | 2873<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2479<sub>(-52) | 2790<sub>(+31) | 2873<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2531 | 2759 | 2826 |  |
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

Generated: 2026-09-13 04:40:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "" [2531, 2479, 2527, 2687, 2642, 2909, 3098, 3255]
  line "STC (8.0+0.08s)" [2531, 2479, 2527, 2687, 2642, 2909, 3098, 3255]
  line "LTC (60.0+0.60s)" [2759, 2790, 2784, 2909, 2898, 3166, 3328, 3449]
  line "" [2826, 2873, 2873, 3025, 3011, 3210, 3389, 3511]
  line "VLTC (2m24s+1.12s)" [2826, 2873, 2873, 3025, 3011, 3210, 3389, 3511]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 25 | 380 | 50% | 3511 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 24 | 410 | 51% | 3444 | 75% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3255 | 28 | 324 | 51% | 3251 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3389 | 24 | 410 | 50% | 3386 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3328 | 25 | 398 | 52% | 3314 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3098 | 24 | 482 | 51% | 3081 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3210 | 32 | 284 | 51% | 3205 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 31 | 288 | 52% | 3154 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2909 | 33 | 276 | 51% | 2890 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3011 | 35 | 236 | 48% | 3025 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2898 | 36 | 236 | 52% | 2885 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2642 | 39 | 212 | 47% | 2669 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3025 | 72 | 56 | 57% | 2971 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2909 | 66 | 72 | 49% | 2925 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2687 | 90 | 40 | 55% | 2645 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2873 | 54 | 108 | 49% | 2886 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2784 | 54 | 108 | 45% | 2844 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2527 | 55 | 118 | 40% | 2642 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2873 | 95 | 32 | 50% | 2871 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2790 | 64 | 72 | 47% | 2815 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2479 | 60 | 92 | 48% | 2493 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2826 | 53 | 108 | 50% | 2822 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2759 | 51 | 112 | 51% | 2751 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2531 | 53 | 116 | 46% | 2591 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |