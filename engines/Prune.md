# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2.1 | 2026-02-24 | 3079<sub>(+new) | 3308<sub>(+new) | 3366<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2893<sub>(+266) | 3147<sub>(+265) | 3191<sub>(+198) |  |
| 3.0.0 | 2025-12-06 | 2627<sub>(-46) | 2882<sub>(-10) | 2993<sub>(-13) |  |
| 2.2.0 | 2025-11-20 | 2673<sub>(+159) | 2892<sub>(+124) | 3006<sub>(+151) |  |
| 2.1.2 | 2025-11-06 | 2514<sub>(+46) | 2768<sub>(-5) | 2855<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2468<sub>(-51) | 2773<sub>(+28) | 2855<sub>(+46) |  |
| 2.1.0 | 2025-11-02 | 2519<sub>(+new) | 2745<sub>(+new) | 2809<sub>(+new) |  |
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

Generated: 2026-06-08 06:27:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2400 --> 3400
  line "STC (8.0+0.08s)" [2519, 2468, 2514, 2673, 2627, 2893, 3079]
  line "STC (8.0+0.08s)" [2519, 2468, 2514, 2673, 2627, 2893, 3079]
  line "LTC (60.0+0.60s)" [2745, 2773, 2768, 2892, 2882, 3147, 3308]
  line "VLTC (2m24s+1.12s)" [2809, 2855, 2855, 3006, 2993, 3191, 3366]
  line "VLTC (2m24s+1.12s)" [2809, 2855, 2855, 3006, 2993, 3191, 3366]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3366 | 25 | 402 | 50% | 3364 | 76% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3308 | 25 | 390 | 52% | 3293 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3079 | 25 | 430 | 51% | 3063 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3191 | 32 | 284 | 51% | 3186 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3147 | 31 | 288 | 52% | 3135 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2893 | 33 | 276 | 51% | 2874 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2993 | 35 | 236 | 48% | 3008 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2882 | 36 | 236 | 52% | 2869 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2627 | 39 | 212 | 47% | 2655 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3006 | 72 | 56 | 57% | 2952 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2892 | 66 | 72 | 49% | 2907 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2673 | 90 | 40 | 55% | 2631 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2855 | 54 | 108 | 49% | 2869 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2768 | 54 | 108 | 45% | 2827 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2514 | 55 | 118 | 40% | 2628 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2855 | 95 | 32 | 50% | 2854 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2773 | 64 | 72 | 47% | 2797 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2468 | 60 | 92 | 48% | 2483 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2809 | 53 | 108 | 50% | 2805 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2745 | 51 | 112 | 51% | 2736 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2519 | 53 | 116 | 46% | 2579 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |