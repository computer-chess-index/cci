# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-01 | 2687<sub>(+235) | 3021<sub>(+212) | 3056<sub>(+135) |  |
| 8.0 | 2026-05-02 | 2452<sub>(+118) | 2809<sub>(+129) | 2921<sub>(+118) |  |
| 7.0 | 2026-04-25 | 2334<sub>(+34) | 2680<sub>(+65) | 2803<sub>(+41) |  |
| 6.0 | 2026-04-20 | 2300<sub>(+320) | 2615<sub>(+220) | 2762<sub>(+217) |  |
| 5.0 | 2026-04-15 | 1980<sub>(+47) | 2395<sub>(+172) | 2545<sub>(+161) |  |
| 4.0 | 2026-04-11 | 1933<sub>(+221) | 2223<sub>(+164) | 2384<sub>(+178) |  |
| 3.0 | 2026-04-09 | 1712<sub>(+590) | 2059<sub>(+722) | 2206<sub>(+647) |  |
| 2.0 | 2026-04-08 | 1122<sub>(+390) | 1337<sub>(+530) | 1559<sub>(+652) |  |
| 1.0 | 2026-04-06 | 732 | 807 | 907 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pea+<version>&body=###%20Engine%20name%0APea%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-02 06:27:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [732, 1122, 1712, 1933, 1980, 2300, 2334, 2452, 2687]
  line "STC (8.0+0.08s)" [732, 1122, 1712, 1933, 1980, 2300, 2334, 2452, 2687]
  line "LTC (60.0+0.60s)" [807, 1337, 2059, 2223, 2395, 2615, 2680, 2809, 3021]
  line "VLTC (2m24s+1.12s)" [907, 1559, 2206, 2384, 2545, 2762, 2803, 2921, 3056]
  line "VLTC (2m24s+1.12s)" [907, 1559, 2206, 2384, 2545, 2762, 2803, 2921, 3056]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3056 | 28 | 352 | 51% | 3051 | 52% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3021 | 30 | 320 | 48% | 3039 | 48% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2687 | 29 | 384 | 53% | 2661 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2921 | 30 | 358 | 49% | 2930 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2809 | 32 | 302 | 50% | 2808 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2452 | 31 | 356 | 52% | 2423 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2803 | 34 | 270 | 52% | 2786 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2680 | 35 | 266 | 50% | 2682 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2334 | 33 | 320 | 48% | 2358 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2762 | 36 | 248 | 52% | 2746 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2615 | 36 | 274 | 51% | 2603 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2300 | 32 | 344 | 54% | 2263 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2545 | 33 | 324 | 49% | 2557 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2395 | 36 | 268 | 50% | 2394 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1980 | 36 | 276 | 50% | 1980 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2384 | 34 | 310 | 54% | 2345 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2223 | 36 | 272 | 49% | 2236 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1933 | 39 | 248 | 52% | 1916 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 40 | 232 | 51% | 2202 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2059 | 39 | 246 | 48% | 2079 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1712 | 43 | 208 | 47% | 1744 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1559 | 34 | 316 | 48% | 1589 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1337 | 39 | 258 | 46% | 1391 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1122 | 35 | 300 | 51% | 1096 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 907 | 79 | 110 | 38% | 1069 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 807 | 84 | 104 | 37% | 1025 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 732 | 90 | 92 | 38% | 937 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |