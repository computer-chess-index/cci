# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3249<sub>(+new) | 3426<sub>(+new) | 3501<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3086<sub>(+new) | 3314<sub>(+new) | 3374<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2898<sub>(+268) | 3154<sub>(+266) | 3198<sub>(+201) |  |
| 3.0.0 | 2025-12-06 | 2630<sub>(-46) | 2888<sub>(-9) | 2997<sub>(-16) |  |
| 2.2.0 | 2025-11-20 | 2676<sub>(+160) | 2897<sub>(+125) | 3013<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2516<sub>(+48) | 2772<sub>(-6) | 2861<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2468<sub>(-52) | 2778<sub>(+31) | 2862<sub>(+49) |  |
| 2.1.0 | 2025-11-02 | 2520<sub>(+new) | 2747<sub>(+new) | 2813<sub>(+new) |  |
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

Generated: 2026-07-31 06:28:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "STC (8.0+0.08s)" [2520, 2468, 2516, 2676, 2630, 2898, 3086, 3249]
  line "STC (8.0+0.08s)" [2520, 2468, 2516, 2676, 2630, 2898, 3086, 3249]
  line "LTC (60.0+0.60s)" [2747, 2778, 2772, 2897, 2888, 3154, 3314, 3426]
  line "VLTC (2m24s+1.12s)" [2813, 2862, 2861, 3013, 2997, 3198, 3374, 3501]
  line "VLTC (2m24s+1.12s)" [2813, 2862, 2861, 3013, 2997, 3198, 3374, 3501]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 30 | 252 | 51% | 3494 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3426 | 27 | 326 | 50% | 3426 | 74% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3249 | 35 | 220 | 51% | 3240 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3374 | 24 | 410 | 50% | 3372 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3314 | 25 | 398 | 52% | 3301 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3086 | 24 | 482 | 51% | 3069 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3198 | 32 | 284 | 51% | 3193 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3154 | 31 | 288 | 52% | 3141 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2898 | 33 | 276 | 51% | 2880 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2997 | 35 | 236 | 48% | 3013 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2888 | 36 | 236 | 52% | 2874 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2630 | 39 | 212 | 47% | 2658 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3013 | 72 | 56 | 57% | 2958 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2897 | 66 | 72 | 49% | 2913 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2676 | 90 | 40 | 55% | 2634 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 54 | 108 | 49% | 2874 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 54 | 108 | 45% | 2832 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2516 | 55 | 118 | 40% | 2630 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 95 | 32 | 50% | 2861 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2778 | 64 | 72 | 47% | 2803 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2468 | 60 | 92 | 48% | 2483 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2813 | 53 | 108 | 50% | 2809 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2747 | 51 | 112 | 51% | 2739 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2520 | 53 | 116 | 46% | 2580 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |