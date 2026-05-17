# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-05-02 | 2514<sub>(+116) | 2873<sub>(+130) | 2994<sub>(+128) |  |
| 7.0 | 2026-04-25 | 2398<sub>(+34) | 2743<sub>(+65) | 2866<sub>(+40) |  |
| 6.0 | 2026-04-20 | 2364<sub>(+331) | 2678<sub>(+220) | 2826<sub>(+216) |  |
| 5.0 | 2026-04-15 | 2033<sub>(+50) | 2458<sub>(+171) | 2610<sub>(+162) |  |
| 4.0 | 2026-04-11 | 1983<sub>(+231) | 2287<sub>(+172) | 2448<sub>(+180) |  |
| 3.0 | 2026-04-09 | 1752<sub>(+622) | 2115<sub>(+761) | 2268<sub>(+679) |  |
| 2.0 | 2026-04-08 | 1130<sub>(+387) | 1354<sub>(+533) | 1589<sub>(+664) |  |
| 1.0 | 2026-04-06 | 743 | 821 | 925 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pea+<version>&body=###%20Engine%20name%0APea%0A%0A###%20Version%0A8.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:26:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"]
  y-axis "Elo Rating" 700 --> 3000
  line "STC (8.0+0.08s)" [743, 1130, 1752, 1983, 2033, 2364, 2398, 2514]
  line "STC (8.0+0.08s)" [743, 1130, 1752, 1983, 2033, 2364, 2398, 2514]
  line "LTC (60.0+0.60s)" [821, 1354, 2115, 2287, 2458, 2678, 2743, 2873]
  line "VLTC (2m24s+1.12s)" [925, 1589, 2268, 2448, 2610, 2826, 2866, 2994]
  line "VLTC (2m24s+1.12s)" [925, 1589, 2268, 2448, 2610, 2826, 2866, 2994]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2994 | 32 | 306 | 50% | 2998 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2873 | 34 | 278 | 50% | 2870 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2514 | 34 | 300 | 51% | 2498 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2866 | 34 | 270 | 52% | 2850 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2743 | 35 | 266 | 50% | 2746 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2398 | 33 | 320 | 48% | 2422 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2826 | 36 | 248 | 52% | 2809 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 36 | 274 | 51% | 2668 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2364 | 32 | 344 | 54% | 2325 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2610 | 33 | 324 | 49% | 2622 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2458 | 36 | 268 | 50% | 2457 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2033 | 36 | 276 | 50% | 2034 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2448 | 34 | 310 | 54% | 2408 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2287 | 36 | 272 | 49% | 2298 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1983 | 39 | 248 | 52% | 1966 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2268 | 40 | 232 | 51% | 2263 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2115 | 39 | 246 | 48% | 2136 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1752 | 43 | 208 | 47% | 1785 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1589 | 34 | 316 | 48% | 1619 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1354 | 39 | 258 | 46% | 1411 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1130 | 35 | 300 | 51% | 1103 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 925 | 80 | 110 | 38% | 1088 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 821 | 85 | 104 | 37% | 1042 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 743 | 91 | 92 | 38% | 952 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |