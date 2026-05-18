# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.35 | 2026-05-13 | 2657<sub>(+108) | 2993<sub>(+70) | 3067<sub>(+94) |  |
| 0.30 | 2026-05-01 | 2549<sub>(+16) | 2923<sub>(+120) | 2973<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2533<sub>(+88) | 2803<sub>(+95) | 2881<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2445<sub>(+531) | 2708<sub>(+599) | 2766<sub>(+563) |  |
| 0.08 | 2026-02-05 | 1914 | 2109 | 2203 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.35" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-18 06:24:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35"]
  y-axis "Elo Rating" 1900 --> 3100
  line "STC (8.0+0.08s)" [1914, 2445, 2533, 2549, 2657]
  line "STC (8.0+0.08s)" [1914, 2445, 2533, 2549, 2657]
  line "LTC (60.0+0.60s)" [2109, 2708, 2803, 2923, 2993]
  line "VLTC (2m24s+1.12s)" [2203, 2766, 2881, 2973, 3067]
  line "VLTC (2m24s+1.12s)" [2203, 2766, 2881, 2973, 3067]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3067 | 30 | 324 | 51% | 3056 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2993 | 31 | 292 | 48% | 3005 | 50% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2657 | 33 | 300 | 50% | 2661 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2973 | 32 | 304 | 51% | 2966 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2923 | 30 | 336 | 49% | 2932 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2549 | 36 | 280 | 50% | 2545 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2881 | 31 | 328 | 51% | 2876 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2803 | 32 | 312 | 50% | 2804 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2533 | 31 | 356 | 51% | 2525 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2766 | 36 | 236 | 55% | 2715 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2708 | 36 | 228 | 57% | 2645 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2445 | 37 | 236 | 55% | 2399 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2203 | 28 | 392 | 46% | 2252 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2109 | 29 | 384 | 48% | 2136 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1914 | 31 | 356 | 48% | 1939 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |