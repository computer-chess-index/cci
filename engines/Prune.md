# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3248<sub>(+new) | 3436<sub>(+new) | 3502<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3090<sub>(+new) | 3320<sub>(+new) | 3379<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2903<sub>(+269) | 3158<sub>(+268) | 3204<sub>(+202) |  |
| 3.0.0 | 2025-12-06 | 2634<sub>(-44) | 2890<sub>(-11) | 3002<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2678<sub>(+158) | 2901<sub>(+125) | 3017<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2520<sub>(+48) | 2776<sub>(-5) | 2865<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2472<sub>(-53) | 2781<sub>(+30) | 2866<sub>(+49) |  |
| 2.1.0 | 2025-11-02 | 2525 | 2751 | 2817 |  |
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

Generated: 2026-08-21 06:29:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "STC (8.0+0.08s)" [2525, 2472, 2520, 2678, 2634, 2903, 3090, 3248]
  line "STC (8.0+0.08s)" [2525, 2472, 2520, 2678, 2634, 2903, 3090, 3248]
  line "LTC (60.0+0.60s)" [2751, 2781, 2776, 2901, 2890, 3158, 3320, 3436]
  line "VLTC (2m24s+1.12s)" [2817, 2866, 2865, 3017, 3002, 3204, 3379, 3502]
  line "VLTC (2m24s+1.12s)" [2817, 2866, 2865, 3017, 3002, 3204, 3379, 3502]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 28 | 304 | 50% | 3502 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3436 | 26 | 354 | 50% | 3432 | 75% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3248 | 31 | 276 | 51% | 3244 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3379 | 24 | 410 | 50% | 3378 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3320 | 25 | 398 | 52% | 3306 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3090 | 24 | 482 | 51% | 3074 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3204 | 32 | 284 | 51% | 3198 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3158 | 31 | 288 | 52% | 3146 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2903 | 33 | 276 | 51% | 2884 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3002 | 35 | 236 | 48% | 3017 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2890 | 36 | 236 | 52% | 2878 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2634 | 39 | 212 | 47% | 2662 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3017 | 72 | 56 | 57% | 2962 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2901 | 66 | 72 | 49% | 2917 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2678 | 90 | 40 | 55% | 2637 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2865 | 54 | 108 | 49% | 2878 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2776 | 54 | 108 | 45% | 2836 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2520 | 55 | 118 | 40% | 2634 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2866 | 95 | 32 | 50% | 2863 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2781 | 64 | 72 | 47% | 2807 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2472 | 60 | 92 | 48% | 2487 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2817 | 53 | 108 | 50% | 2813 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2751 | 51 | 112 | 51% | 2743 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2525 | 53 | 116 | 46% | 2583 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |