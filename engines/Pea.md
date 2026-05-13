# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-05-02 | 2511<sub>(+116) | 2865<sub>(+124) | 2993<sub>(+131) |  |
| 7.0 | 2026-04-25 | 2395<sub>(+35) | 2741<sub>(+65) | 2862<sub>(+40) |  |
| 6.0 | 2026-04-20 | 2360<sub>(+328) | 2676<sub>(+220) | 2822<sub>(+216) |  |
| 5.0 | 2026-04-15 | 2032<sub>(+50) | 2456<sub>(+173) | 2606<sub>(+162) |  |
| 4.0 | 2026-04-11 | 1982<sub>(+232) | 2283<sub>(+170) | 2444<sub>(+179) |  |
| 3.0 | 2026-04-09 | 1750<sub>(+623) | 2113<sub>(+760) | 2265<sub>(+679) |  |
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

Generated: 2026-05-13 06:27:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"]
  y-axis "Elo Rating" 700 --> 3000
  line "STC (8.0+0.08s)" [743, 1127, 1750, 1982, 2032, 2360, 2395, 2511]
  line "STC (8.0+0.08s)" [743, 1127, 1750, 1982, 2032, 2360, 2395, 2511]
  line "LTC (60.0+0.60s)" [821, 1353, 2113, 2283, 2456, 2676, 2741, 2865]
  line "VLTC (2m24s+1.12s)" [925, 1586, 2265, 2444, 2606, 2822, 2862, 2993]
  line "VLTC (2m24s+1.12s)" [925, 1586, 2265, 2444, 2606, 2822, 2862, 2993]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2993 | 32 | 302 | 50% | 2994 | 34% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2865 | 34 | 270 | 50% | 2867 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2511 | 34 | 300 | 51% | 2495 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 34 | 270 | 52% | 2846 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2741 | 35 | 266 | 50% | 2743 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2395 | 33 | 320 | 48% | 2419 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2822 | 36 | 248 | 52% | 2805 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2676 | 36 | 274 | 51% | 2665 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2360 | 32 | 344 | 54% | 2322 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2606 | 33 | 324 | 49% | 2618 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2456 | 36 | 268 | 50% | 2454 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2032 | 36 | 276 | 50% | 2032 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2444 | 34 | 310 | 54% | 2406 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2283 | 36 | 272 | 49% | 2295 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1982 | 39 | 248 | 52% | 1964 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2265 | 40 | 232 | 51% | 2260 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2113 | 39 | 246 | 48% | 2133 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1750 | 43 | 208 | 47% | 1782 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1586 | 34 | 316 | 48% | 1617 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1353 | 39 | 258 | 46% | 1408 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1127 | 35 | 300 | 51% | 1102 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 925 | 80 | 110 | 38% | 1088 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 821 | 85 | 104 | 37% | 1042 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 743 | 91 | 92 | 38% | 952 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |