# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3243<sub>(+new) | 3428<sub>(+new) | 3499<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3086<sub>(+new) | 3314<sub>(+new) | 3374<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2898<sub>(+267) | 3154<sub>(+266) | 3198<sub>(+200) |  |
| 3.0.0 | 2025-12-06 | 2631<sub>(-45) | 2888<sub>(-10) | 2998<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2676<sub>(+160) | 2898<sub>(+125) | 3013<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2516<sub>(+47) | 2773<sub>(-5) | 2861<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2469<sub>(-51) | 2778<sub>(+31) | 2862<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2520 | 2747 | 2815 |  |
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

Generated: 2026-08-10 07:52:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3500
  line "STC (8.0+0.08s)" [2520, 2469, 2516, 2676, 2631, 2898, 3086, 3243]
  line "STC (8.0+0.08s)" [2520, 2469, 2516, 2676, 2631, 2898, 3086, 3243]
  line "LTC (60.0+0.60s)" [2747, 2778, 2773, 2898, 2888, 3154, 3314, 3428]
  line "VLTC (2m24s+1.12s)" [2815, 2862, 2861, 3013, 2998, 3198, 3374, 3499]
  line "VLTC (2m24s+1.12s)" [2815, 2862, 2861, 3013, 2998, 3198, 3374, 3499]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 28 | 292 | 51% | 3497 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3428 | 27 | 334 | 50% | 3426 | 74% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3243 | 32 | 260 | 51% | 3239 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3374 | 24 | 410 | 50% | 3372 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3314 | 25 | 398 | 52% | 3301 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3086 | 24 | 482 | 51% | 3069 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3198 | 32 | 284 | 51% | 3193 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3154 | 31 | 288 | 52% | 3141 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2898 | 33 | 276 | 51% | 2880 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2998 | 35 | 236 | 48% | 3013 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2888 | 36 | 236 | 52% | 2874 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2631 | 39 | 212 | 47% | 2658 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3013 | 72 | 56 | 57% | 2959 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2898 | 66 | 72 | 49% | 2913 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2676 | 90 | 40 | 55% | 2634 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2861 | 54 | 108 | 49% | 2876 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2773 | 54 | 108 | 45% | 2832 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2516 | 55 | 118 | 40% | 2631 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 95 | 32 | 50% | 2861 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2778 | 64 | 72 | 47% | 2803 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2469 | 60 | 92 | 48% | 2484 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2815 | 53 | 108 | 50% | 2809 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2747 | 51 | 112 | 51% | 2741 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2520 | 53 | 116 | 46% | 2580 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |