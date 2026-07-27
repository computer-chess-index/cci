# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2672<sub>(+71) | 2974<sub>(+38) | 3031<sub>(+14) |  |
| 0.35 | 2026-05-13 | 2601<sub>(+110) | 2936<sub>(+70) | 3017<sub>(+100) |  |
| 0.30 | 2026-05-01 | 2491<sub>(+18) | 2866<sub>(+120) | 2917<sub>(+93) |  |
| 0.25.1 | 2026-04-12 | 2473<sub>(+88) | 2746<sub>(+97) | 2824<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2385<sub>(+517) | 2649<sub>(+594) | 2708<sub>(+564) |  |
| 0.08 | 2026-02-05 | 1868 | 2055 | 2144 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.40" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-27 06:25:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1868, 2385, 2473, 2491, 2601, 2672]
  line "STC (8.0+0.08s)" [1868, 2385, 2473, 2491, 2601, 2672]
  line "LTC (60.0+0.60s)" [2055, 2649, 2746, 2866, 2936, 2974]
  line "VLTC (2m24s+1.12s)" [2144, 2708, 2824, 2917, 3017, 3031]
  line "VLTC (2m24s+1.12s)" [2144, 2708, 2824, 2917, 3017, 3031]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3031 | 30 | 328 | 51% | 3021 | 45% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2974 | 31 | 330 | 50% | 2978 | 40% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2672 | 30 | 364 | 50% | 2670 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3017 | 28 | 388 | 51% | 3008 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2936 | 30 | 324 | 49% | 2947 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2601 | 31 | 340 | 50% | 2603 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2917 | 32 | 304 | 51% | 2909 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2866 | 30 | 336 | 49% | 2877 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2491 | 36 | 280 | 50% | 2487 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2824 | 31 | 328 | 51% | 2819 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2746 | 32 | 312 | 50% | 2747 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2473 | 31 | 356 | 51% | 2465 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2708 | 36 | 236 | 55% | 2658 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 36 | 228 | 57% | 2585 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2385 | 37 | 236 | 55% | 2340 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2144 | 28 | 392 | 46% | 2194 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2055 | 29 | 384 | 48% | 2082 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1868 | 31 | 356 | 48% | 1893 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |