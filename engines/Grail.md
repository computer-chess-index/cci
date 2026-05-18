# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-11 | 2943<sub>(+90) | 3218<sub>(+93) | 3303<sub>(+81) |  |
| 1.1.0 | 2026-02-28 | 2853<sub>(+350) | 3125<sub>(+359) | 3222<sub>(+319) |  |
| 1.0.4 | 2026-01-16 | 2503<sub>(+128) | 2766<sub>(+38) | 2903<sub>(+102) |  |
| 1.0.3 | 2026-01-04 | 2375<sub>(+26) | 2728<sub>(+113) | 2801<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2349<sub>(+28) | 2615<sub>(+20) | 2728<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2321<sub>(+39) | 2595<sub>(-13) | 2781<sub>(-51) |  |
| 1.0.0 | 2025-12-05 | 2282 | 2608 | 2832 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-18 06:24:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2282, 2321, 2349, 2375, 2503, 2853, 2943]
  line "STC (8.0+0.08s)" [2282, 2321, 2349, 2375, 2503, 2853, 2943]
  line "LTC (60.0+0.60s)" [2608, 2595, 2615, 2728, 2766, 3125, 3218]
  line "VLTC (2m24s+1.12s)" [2832, 2781, 2728, 2801, 2903, 3222, 3303]
  line "VLTC (2m24s+1.12s)" [2832, 2781, 2728, 2801, 2903, 3222, 3303]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3303 | 32 | 260 | 50% | 3299 | 62% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3218 | 31 | 286 | 49% | 3227 | 51% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2943 | 31 | 312 | 52% | 2930 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3222 | 27 | 392 | 53% | 3202 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3125 | 28 | 356 | 51% | 3112 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2853 | 28 | 398 | 51% | 2843 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2903 | 34 | 272 | 49% | 2911 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2766 | 35 | 252 | 50% | 2769 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2503 | 31 | 348 | 55% | 2458 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2801 | 43 | 172 | 50% | 2805 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2728 | 45 | 160 | 51% | 2723 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2375 | 44 | 172 | 51% | 2368 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2728 | 38 | 214 | 50% | 2730 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2615 | 35 | 264 | 46% | 2653 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2349 | 41 | 212 | 55% | 2304 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2781 | 42 | 180 | 52% | 2766 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2595 | 40 | 202 | 53% | 2568 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2321 | 50 | 142 | 48% | 2340 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2832 | 61 | 92 | 42% | 2903 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2608 | 59 | 92 | 46% | 2643 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2282 | 67 | 82 | 59% | 2196 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |