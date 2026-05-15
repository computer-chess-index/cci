# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2.1 | 2026-02-24 | 3143<sub>(+new) | 3374<sub>(+new) | 3430<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2958<sub>(+267) | 3213<sub>(+266) | 3258<sub>(+200) |  |
| 3.0.0 | 2025-12-06 | 2691<sub>(-45) | 2947<sub>(-8) | 3058<sub>(-13) |  |
| 2.2.0 | 2025-11-20 | 2736<sub>(+159) | 2955<sub>(+123) | 3071<sub>(+151) |  |
| 2.1.2 | 2025-11-06 | 2577<sub>(+47) | 2832<sub>(-6) | 2920<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2530<sub>(-51) | 2838<sub>(+29) | 2920<sub>(+46) |  |
| 2.1.0 | 2025-11-02 | 2581<sub>(+new) | 2809<sub>(+new) | 2874<sub>(+new) |  |
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

Generated: 2026-05-15 06:27:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2500 --> 3500
  line "STC (8.0+0.08s)" [2581, 2530, 2577, 2736, 2691, 2958, 3143]
  line "STC (8.0+0.08s)" [2581, 2530, 2577, 2736, 2691, 2958, 3143]
  line "LTC (60.0+0.60s)" [2809, 2838, 2832, 2955, 2947, 3213, 3374]
  line "VLTC (2m24s+1.12s)" [2874, 2920, 2920, 3071, 3058, 3258, 3430]
  line "VLTC (2m24s+1.12s)" [2874, 2920, 2920, 3071, 3058, 3258, 3430]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 25 | 398 | 50% | 3429 | 76% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3374 | 26 | 382 | 52% | 3359 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3143 | 26 | 402 | 51% | 3129 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3258 | 32 | 284 | 51% | 3252 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3213 | 31 | 288 | 52% | 3201 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2958 | 33 | 276 | 51% | 2938 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3058 | 35 | 236 | 48% | 3074 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2947 | 36 | 236 | 52% | 2934 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2691 | 39 | 212 | 47% | 2719 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3071 | 72 | 56 | 57% | 3017 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2955 | 66 | 72 | 49% | 2971 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2736 | 90 | 40 | 55% | 2695 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2920 | 54 | 108 | 49% | 2934 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2832 | 54 | 108 | 45% | 2892 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2577 | 55 | 118 | 40% | 2691 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2920 | 95 | 32 | 50% | 2919 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2838 | 64 | 72 | 47% | 2862 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2530 | 60 | 92 | 48% | 2545 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 53 | 108 | 50% | 2869 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2809 | 51 | 112 | 51% | 2801 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2581 | 53 | 116 | 46% | 2641 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |