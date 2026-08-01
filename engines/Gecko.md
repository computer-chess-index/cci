# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2669<sub>(+68) | 2973<sub>(+37) | 3036<sub>(+19) |  |
| 0.35 | 2026-05-13 | 2601<sub>(+110) | 2936<sub>(+69) | 3017<sub>(+100) |  |
| 0.30 | 2026-05-01 | 2491<sub>(+18) | 2867<sub>(+121) | 2917<sub>(+91) |  |
| 0.25.1 | 2026-04-12 | 2473<sub>(+88) | 2746<sub>(+97) | 2826<sub>(+118) |  |
| 0.25 | 2026-04-06 | 2385<sub>(+517) | 2649<sub>(+593) | 2708<sub>(+563) |  |
| 0.08 | 2026-02-05 | 1868 | 2056 | 2145 |  |
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

Generated: 2026-08-01 06:25:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "STC (8.0+0.08s)" [1868, 2385, 2473, 2491, 2601, 2669]
  line "STC (8.0+0.08s)" [1868, 2385, 2473, 2491, 2601, 2669]
  line "LTC (60.0+0.60s)" [2056, 2649, 2746, 2867, 2936, 2973]
  line "VLTC (2m24s+1.12s)" [2145, 2708, 2826, 2917, 3017, 3036]
  line "VLTC (2m24s+1.12s)" [2145, 2708, 2826, 2917, 3017, 3036]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3036 | 29 | 342 | 51% | 3023 | 45% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2973 | 30 | 342 | 49% | 2978 | 40% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2669 | 30 | 368 | 50% | 2669 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3017 | 28 | 388 | 51% | 3008 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2936 | 30 | 324 | 49% | 2947 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2601 | 31 | 340 | 50% | 2603 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2917 | 32 | 304 | 51% | 2911 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2867 | 30 | 336 | 49% | 2877 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2491 | 36 | 280 | 50% | 2487 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2826 | 31 | 328 | 51% | 2819 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2746 | 32 | 312 | 50% | 2747 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2473 | 31 | 356 | 51% | 2465 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2708 | 36 | 236 | 55% | 2658 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 36 | 228 | 57% | 2585 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2385 | 37 | 236 | 55% | 2340 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2145 | 28 | 392 | 46% | 2195 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 29 | 384 | 48% | 2083 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1868 | 31 | 356 | 48% | 1893 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |