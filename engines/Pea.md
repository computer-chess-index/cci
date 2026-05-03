# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-05-02 |  |  |  |  |
| 7.0 | 2026-04-25 | 2392<sub>(+34) | 2738<sub>(+64) | 2859<sub>(+39) |  |
| 6.0 | 2026-04-20 | 2358<sub>(+328) | 2674<sub>(+220) | 2820<sub>(+216) |  |
| 5.0 | 2026-04-15 | 2030<sub>(+51) | 2454<sub>(+172) | 2604<sub>(+160) |  |
| 4.0 | 2026-04-11 | 1979<sub>(+229) | 2282<sub>(+172) | 2444<sub>(+181) |  |
| 3.0 | 2026-04-09 | 1750<sub>(+623) | 2110<sub>(+757) | 2263<sub>(+677) |  |
| 2.0 | 2026-04-08 | 1127<sub>(+384) | 1353<sub>(+532) | 1586<sub>(+661) |  |
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

Generated: 2026-05-03 08:19:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0"]
  y-axis "Elo Rating" 700 --> 2900
  line "STC (8.0+0.08s)" [743, 1127, 1750, 1979, 2030, 2358, 2392]
  line "STC (8.0+0.08s)" [743, 1127, 1750, 1979, 2030, 2358, 2392]
  line "LTC (60.0+0.60s)" [821, 1353, 2110, 2282, 2454, 2674, 2738]
  line "VLTC (2m24s+1.12s)" [925, 1586, 2263, 2444, 2604, 2820, 2859]
  line "VLTC (2m24s+1.12s)" [925, 1586, 2263, 2444, 2604, 2820, 2859]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 34 | 270 | 52% | 2843 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2738 | 35 | 266 | 50% | 2741 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2392 | 33 | 320 | 48% | 2417 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2820 | 36 | 248 | 52% | 2804 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2674 | 36 | 274 | 51% | 2662 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2358 | 32 | 344 | 54% | 2321 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2604 | 33 | 324 | 49% | 2616 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2454 | 36 | 268 | 50% | 2453 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2030 | 36 | 276 | 50% | 2030 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2444 | 34 | 310 | 54% | 2404 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2282 | 36 | 272 | 49% | 2294 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1979 | 39 | 248 | 52% | 1962 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2263 | 40 | 232 | 51% | 2259 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2110 | 39 | 246 | 48% | 2130 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1750 | 43 | 208 | 47% | 1781 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1586 | 34 | 316 | 48% | 1616 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1353 | 39 | 258 | 46% | 1408 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1127 | 35 | 300 | 51% | 1102 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 925 | 80 | 110 | 38% | 1088 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 821 | 85 | 104 | 37% | 1042 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 743 | 91 | 92 | 38% | 952 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |