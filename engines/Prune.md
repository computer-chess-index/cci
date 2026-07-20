# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3245<sub>(+new) | 3422<sub>(+new) | 3499<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3083<sub>(+new) | 3310<sub>(+new) | 3370<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2894<sub>(+266) | 3150<sub>(+266) | 3194<sub>(+200) |  |
| 3.0.0 | 2025-12-06 | 2628<sub>(-45) | 2884<sub>(-10) | 2994<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2673<sub>(+159) | 2894<sub>(+124) | 3009<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2514<sub>(+48) | 2770<sub>(-4) | 2857<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2466<sub>(-52) | 2774<sub>(+29) | 2858<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2518<sub>(+new) | 2745<sub>(+new) | 2811<sub>(+new) |  |
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

Generated: 2026-07-20 06:28:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3500
  line "STC (8.0+0.08s)" [2518, 2466, 2514, 2673, 2628, 2894, 3083, 3245]
  line "STC (8.0+0.08s)" [2518, 2466, 2514, 2673, 2628, 2894, 3083, 3245]
  line "LTC (60.0+0.60s)" [2745, 2774, 2770, 2894, 2884, 3150, 3310, 3422]
  line "VLTC (2m24s+1.12s)" [2811, 2858, 2857, 3009, 2994, 3194, 3370, 3499]
  line "VLTC (2m24s+1.12s)" [2811, 2858, 2857, 3009, 2994, 3194, 3370, 3499]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 35 | 190 | 52% | 3487 | 83% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3422 | 30 | 280 | 49% | 3425 | 73% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3245 | 39 | 176 | 52% | 3232 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3370 | 24 | 410 | 50% | 3367 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3310 | 25 | 398 | 52% | 3297 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3083 | 24 | 482 | 51% | 3066 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3194 | 32 | 284 | 51% | 3189 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3150 | 31 | 288 | 52% | 3137 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2894 | 33 | 276 | 51% | 2876 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2994 | 35 | 236 | 48% | 3011 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2884 | 36 | 236 | 52% | 2870 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2628 | 39 | 212 | 47% | 2655 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3009 | 72 | 56 | 57% | 2955 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2894 | 66 | 72 | 49% | 2909 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2673 | 90 | 40 | 55% | 2631 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2857 | 54 | 108 | 49% | 2871 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2770 | 54 | 108 | 45% | 2830 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2514 | 55 | 118 | 40% | 2627 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2858 | 95 | 32 | 50% | 2857 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2774 | 64 | 72 | 47% | 2800 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2466 | 60 | 92 | 48% | 2480 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2811 | 53 | 108 | 50% | 2807 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2745 | 51 | 112 | 51% | 2738 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2518 | 53 | 116 | 46% | 2577 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |