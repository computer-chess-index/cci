# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-01 | 2688<sub>(+238) | 3021<sub>(+213) | 3058<sub>(+138) |  |
| 8.0 | 2026-05-02 | 2450<sub>(+117) | 2808<sub>(+128) | 2920<sub>(+119) |  |
| 7.0 | 2026-04-25 | 2333<sub>(+34) | 2680<sub>(+66) | 2801<sub>(+40) |  |
| 6.0 | 2026-04-20 | 2299<sub>(+319) | 2614<sub>(+220) | 2761<sub>(+216) |  |
| 5.0 | 2026-04-15 | 1980<sub>(+47) | 2394<sub>(+171) | 2545<sub>(+162) |  |
| 4.0 | 2026-04-11 | 1933<sub>(+221) | 2223<sub>(+166) | 2383<sub>(+177) |  |
| 3.0 | 2026-04-09 | 1712<sub>(+590) | 2057<sub>(+722) | 2206<sub>(+647) |  |
| 2.0 | 2026-04-08 | 1122<sub>(+390) | 1335<sub>(+529) | 1559<sub>(+652) |  |
| 1.0 | 2026-04-06 | 732 | 806 | 907 |  |
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

Generated: 2026-08-05 06:28:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "STC (8.0+0.08s)" [732, 1122, 1712, 1933, 1980, 2299, 2333, 2450, 2688]
  line "STC (8.0+0.08s)" [732, 1122, 1712, 1933, 1980, 2299, 2333, 2450, 2688]
  line "LTC (60.0+0.60s)" [806, 1335, 2057, 2223, 2394, 2614, 2680, 2808, 3021]
  line "VLTC (2m24s+1.12s)" [907, 1559, 2206, 2383, 2545, 2761, 2801, 2920, 3058]
  line "VLTC (2m24s+1.12s)" [907, 1559, 2206, 2383, 2545, 2761, 2801, 2920, 3058]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3058 | 28 | 360 | 51% | 3051 | 53% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3021 | 30 | 320 | 48% | 3039 | 48% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2688 | 29 | 392 | 53% | 2660 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2920 | 30 | 358 | 49% | 2928 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 32 | 302 | 50% | 2807 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2450 | 31 | 356 | 52% | 2422 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2801 | 34 | 270 | 52% | 2785 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2680 | 35 | 266 | 50% | 2682 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2333 | 33 | 320 | 48% | 2357 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2761 | 36 | 248 | 52% | 2745 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2614 | 36 | 274 | 51% | 2603 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2299 | 32 | 344 | 54% | 2261 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2545 | 33 | 324 | 49% | 2557 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2394 | 36 | 268 | 50% | 2392 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 1980 | 36 | 276 | 50% | 1980 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2383 | 34 | 310 | 54% | 2344 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2223 | 36 | 272 | 49% | 2234 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1933 | 39 | 248 | 52% | 1916 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 40 | 232 | 51% | 2201 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2057 | 39 | 246 | 48% | 2078 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1712 | 43 | 208 | 47% | 1743 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1559 | 34 | 316 | 48% | 1589 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1335 | 39 | 258 | 46% | 1389 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1122 | 35 | 300 | 51% | 1096 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 907 | 79 | 110 | 38% | 1069 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 806 | 84 | 104 | 37% | 1025 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 732 | 90 | 92 | 38% | 937 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |