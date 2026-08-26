# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3252<sub>(+new) | 3438<sub>(+new) | 3503<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3094<sub>(+new) | 3324<sub>(+new) | 3383<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2907<sub>(+269) | 3162<sub>(+268) | 3206<sub>(+201) |  |
| 3.0.0 | 2025-12-06 | 2638<sub>(-44) | 2894<sub>(-11) | 3005<sub>(-16) |  |
| 2.2.0 | 2025-11-20 | 2682<sub>(+159) | 2905<sub>(+125) | 3021<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2523<sub>(+47) | 2780<sub>(-5) | 2869<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2476<sub>(-51) | 2785<sub>(+30) | 2869<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2527 | 2755 | 2822 |  |
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

Generated: 2026-08-26 06:28:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "STC (8.0+0.08s)" [2527, 2476, 2523, 2682, 2638, 2907, 3094, 3252]
  line "STC (8.0+0.08s)" [2527, 2476, 2523, 2682, 2638, 2907, 3094, 3252]
  line "LTC (60.0+0.60s)" [2755, 2785, 2780, 2905, 2894, 3162, 3324, 3438]
  line "VLTC (2m24s+1.12s)" [2822, 2869, 2869, 3021, 3005, 3206, 3383, 3503]
  line "VLTC (2m24s+1.12s)" [2822, 2869, 2869, 3021, 3005, 3206, 3383, 3503]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 26 | 332 | 50% | 3503 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 26 | 366 | 50% | 3436 | 75% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3252 | 30 | 292 | 51% | 3248 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3383 | 24 | 410 | 50% | 3380 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3324 | 25 | 398 | 52% | 3310 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3094 | 24 | 482 | 51% | 3077 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3206 | 32 | 284 | 51% | 3201 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3162 | 31 | 288 | 52% | 3150 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2907 | 33 | 276 | 51% | 2888 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3005 | 35 | 236 | 48% | 3021 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2894 | 36 | 236 | 52% | 2881 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2638 | 39 | 212 | 47% | 2665 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3021 | 72 | 56 | 57% | 2966 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2905 | 66 | 72 | 49% | 2921 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2682 | 90 | 40 | 55% | 2641 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2869 | 54 | 108 | 49% | 2882 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2780 | 54 | 108 | 45% | 2839 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2523 | 55 | 118 | 40% | 2638 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2869 | 95 | 32 | 50% | 2867 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2785 | 64 | 72 | 47% | 2811 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2476 | 60 | 92 | 48% | 2491 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2822 | 53 | 108 | 50% | 2817 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2755 | 51 | 112 | 51% | 2747 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2527 | 53 | 116 | 46% | 2587 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |