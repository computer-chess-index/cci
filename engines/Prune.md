# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3248<sub>(+new) | 3438<sub>(+new) | 3503<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3092<sub>(+new) | 3321<sub>(+new) | 3382<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2904<sub>(+267) | 3160<sub>(+267) | 3205<sub>(+201) |  |
| 3.0.0 | 2025-12-06 | 2637<sub>(-44) | 2893<sub>(-11) | 3004<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2681<sub>(+159) | 2904<sub>(+126) | 3019<sub>(+153) |  |
| 2.1.2 | 2025-11-06 | 2522<sub>(+47) | 2778<sub>(-6) | 2866<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2475<sub>(-51) | 2784<sub>(+31) | 2867<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2526 | 2753 | 2820 |  |
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

Generated: 2026-08-23 06:27:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "STC (8.0+0.08s)" [2526, 2475, 2522, 2681, 2637, 2904, 3092, 3248]
  line "STC (8.0+0.08s)" [2526, 2475, 2522, 2681, 2637, 2904, 3092, 3248]
  line "LTC (60.0+0.60s)" [2753, 2784, 2778, 2904, 2893, 3160, 3321, 3438]
  line "VLTC (2m24s+1.12s)" [2820, 2867, 2866, 3019, 3004, 3205, 3382, 3503]
  line "VLTC (2m24s+1.12s)" [2820, 2867, 2866, 3019, 3004, 3205, 3382, 3503]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3503 | 27 | 320 | 50% | 3502 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 26 | 354 | 50% | 3434 | 75% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3248 | 31 | 280 | 50% | 3247 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3382 | 24 | 410 | 50% | 3379 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3321 | 25 | 398 | 52% | 3308 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3092 | 24 | 482 | 51% | 3075 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3205 | 32 | 284 | 51% | 3200 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3160 | 31 | 288 | 52% | 3148 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2904 | 33 | 276 | 51% | 2885 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3004 | 35 | 236 | 48% | 3020 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2893 | 36 | 236 | 52% | 2880 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2637 | 39 | 212 | 47% | 2664 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3019 | 72 | 56 | 57% | 2965 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2904 | 66 | 72 | 49% | 2919 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2681 | 90 | 40 | 55% | 2639 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2866 | 54 | 108 | 49% | 2881 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2778 | 54 | 108 | 45% | 2838 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2522 | 55 | 118 | 40% | 2637 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2867 | 95 | 32 | 50% | 2866 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2784 | 64 | 72 | 47% | 2808 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2475 | 60 | 92 | 48% | 2488 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2820 | 53 | 108 | 50% | 2815 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2753 | 51 | 112 | 51% | 2746 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2526 | 53 | 116 | 46% | 2585 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |