# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2935<sub>(+34) | 3200<sub>(+40) | 3272<sub>(+18) |  |
| 2.0.0 | 2026-05-11 | 2901<sub>(+102) | 3160<sub>(+86) | 3254<sub>(+83) |  |
| 1.1.0 | 2026-02-28 | 2799<sub>(+354) | 3074<sub>(+362) | 3171<sub>(+321) |  |
| 1.0.4 | 2026-01-16 | 2445<sub>(+127) | 2712<sub>(+38) | 2850<sub>(+103) |  |
| 1.0.3 | 2026-01-04 | 2318<sub>(+26) | 2674<sub>(+114) | 2747<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2292<sub>(+28) | 2560<sub>(+21) | 2673<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2264<sub>(+35) | 2539<sub>(-14) | 2727<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2229 | 2553 | 2781 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:25:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2229, 2264, 2292, 2318, 2445, 2799, 2901, 2935]
  line "STC (8.0+0.08s)" [2229, 2264, 2292, 2318, 2445, 2799, 2901, 2935]
  line "LTC (60.0+0.60s)" [2553, 2539, 2560, 2674, 2712, 3074, 3160, 3200]
  line "VLTC (2m24s+1.12s)" [2781, 2727, 2673, 2747, 2850, 3171, 3254, 3272]
  line "VLTC (2m24s+1.12s)" [2781, 2727, 2673, 2747, 2850, 3171, 3254, 3272]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3272 | 27 | 376 | 52% | 3259 | 58% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3200 | 26 | 392 | 51% | 3195 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2935 | 26 | 426 | 52% | 2915 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3254 | 29 | 316 | 51% | 3247 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3160 | 29 | 322 | 48% | 3174 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2901 | 29 | 352 | 52% | 2881 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3171 | 27 | 392 | 53% | 3152 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3074 | 28 | 356 | 51% | 3060 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2799 | 28 | 398 | 51% | 2789 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2850 | 34 | 272 | 49% | 2858 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2712 | 35 | 252 | 50% | 2715 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2445 | 31 | 348 | 55% | 2400 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2747 | 43 | 172 | 50% | 2751 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2674 | 45 | 160 | 51% | 2668 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2318 | 44 | 172 | 51% | 2311 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2673 | 38 | 214 | 50% | 2674 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2560 | 35 | 264 | 46% | 2597 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2292 | 41 | 212 | 55% | 2248 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2727 | 42 | 180 | 52% | 2712 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2539 | 40 | 202 | 53% | 2512 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2264 | 50 | 142 | 48% | 2283 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2781 | 61 | 92 | 42% | 2851 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2553 | 59 | 92 | 46% | 2587 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2229 | 67 | 82 | 59% | 2145 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |