# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2.1 | 2026-02-24 | 3081<sub>(+new) | 3310<sub>(+new) | 3368<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2896<sub>(+265) | 3151<sub>(+266) | 3195<sub>(+199) |  |
| 3.0.0 | 2025-12-06 | 2631<sub>(-45) | 2885<sub>(-9) | 2996<sub>(-13) |  |
| 2.2.0 | 2025-11-20 | 2676<sub>(+158) | 2894<sub>(+122) | 3009<sub>(+151) |  |
| 2.1.2 | 2025-11-06 | 2518<sub>(+46) | 2772<sub>(-4) | 2858<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2472<sub>(-50) | 2776<sub>(+29) | 2859<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2522<sub>(+new) | 2747<sub>(+new) | 2812<sub>(+new) |  |
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

Generated: 2026-05-21 06:27:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2400 --> 3400
  line "STC (8.0+0.08s)" [2522, 2472, 2518, 2676, 2631, 2896, 3081]
  line "STC (8.0+0.08s)" [2522, 2472, 2518, 2676, 2631, 2896, 3081]
  line "LTC (60.0+0.60s)" [2747, 2776, 2772, 2894, 2885, 3151, 3310]
  line "VLTC (2m24s+1.12s)" [2812, 2859, 2858, 3009, 2996, 3195, 3368]
  line "VLTC (2m24s+1.12s)" [2812, 2859, 2858, 3009, 2996, 3195, 3368]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3368 | 25 | 398 | 50% | 3367 | 76% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3310 | 25 | 390 | 52% | 3297 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3081 | 25 | 426 | 51% | 3066 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3195 | 32 | 284 | 51% | 3190 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3151 | 31 | 288 | 52% | 3139 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2896 | 33 | 276 | 51% | 2877 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2996 | 35 | 236 | 48% | 3012 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2885 | 36 | 236 | 52% | 2871 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2631 | 39 | 212 | 47% | 2658 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3009 | 72 | 56 | 57% | 2955 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2894 | 66 | 72 | 49% | 2911 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2676 | 90 | 40 | 55% | 2634 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2858 | 54 | 108 | 49% | 2873 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 54 | 108 | 45% | 2831 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2518 | 55 | 118 | 40% | 2631 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 95 | 32 | 50% | 2858 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2776 | 64 | 72 | 47% | 2800 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2472 | 60 | 92 | 48% | 2485 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2812 | 53 | 108 | 50% | 2808 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2747 | 51 | 112 | 51% | 2741 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2522 | 53 | 116 | 46% | 2581 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |