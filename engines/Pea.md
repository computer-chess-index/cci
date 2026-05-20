# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-05-02 | 2439<sub>(+102) | 2815<sub>(+135) | 2916<sub>(+115) |  |
| 7.0 | 2026-04-25 | 2337<sub>(+33) | 2680<sub>(+64) | 2801<sub>(+39) |  |
| 6.0 | 2026-04-20 | 2304<sub>(+317) | 2616<sub>(+218) | 2762<sub>(+215) |  |
| 5.0 | 2026-04-15 | 1987<sub>(+46) | 2398<sub>(+170) | 2547<sub>(+159) |  |
| 4.0 | 2026-04-11 | 1941<sub>(+221) | 2228<sub>(+165) | 2388<sub>(+177) |  |
| 3.0 | 2026-04-09 | 1720<sub>(+591) | 2063<sub>(+720) | 2211<sub>(+645) |  |
| 2.0 | 2026-04-08 | 1129<sub>(+395) | 1343<sub>(+532) | 1566<sub>(+652) |  |
| 1.0 | 2026-04-06 | 734 | 811 | 914 |  |
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

Generated: 2026-05-20 06:27:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"]
  y-axis "Elo Rating" 700 --> 3000
  line "STC (8.0+0.08s)" [734, 1129, 1720, 1941, 1987, 2304, 2337, 2439]
  line "STC (8.0+0.08s)" [734, 1129, 1720, 1941, 1987, 2304, 2337, 2439]
  line "LTC (60.0+0.60s)" [811, 1343, 2063, 2228, 2398, 2616, 2680, 2815]
  line "VLTC (2m24s+1.12s)" [914, 1566, 2211, 2388, 2547, 2762, 2801, 2916]
  line "VLTC (2m24s+1.12s)" [914, 1566, 2211, 2388, 2547, 2762, 2801, 2916]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2916 | 30 | 350 | 49% | 2928 | 33% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2815 | 33 | 290 | 51% | 2805 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2439 | 32 | 340 | 51% | 2426 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2801 | 34 | 270 | 52% | 2785 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2680 | 35 | 266 | 50% | 2682 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2337 | 33 | 320 | 48% | 2361 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2762 | 36 | 248 | 52% | 2745 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2616 | 36 | 274 | 51% | 2606 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2304 | 32 | 344 | 54% | 2267 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2547 | 33 | 324 | 49% | 2560 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2398 | 36 | 268 | 50% | 2396 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1987 | 36 | 276 | 50% | 1987 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 34 | 310 | 54% | 2349 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2228 | 36 | 272 | 49% | 2240 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1941 | 39 | 248 | 52% | 1924 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2211 | 40 | 232 | 51% | 2206 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2063 | 39 | 246 | 48% | 2084 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1720 | 43 | 208 | 47% | 1751 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1566 | 34 | 316 | 48% | 1596 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1343 | 39 | 258 | 46% | 1399 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1129 | 35 | 300 | 51% | 1100 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 914 | 80 | 110 | 38% | 1073 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 811 | 84 | 104 | 37% | 1029 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 734 | 91 | 92 | 38% | 942 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |