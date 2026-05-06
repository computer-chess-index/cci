# Engine: Pea

Author: Warre Gevers

Home: https://github.com/WGCodings/Pea

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-05-02 | 2508<sub>(+114) | 2870<sub>(+129) | 2994<sub>(+132) |  |
| 7.0 | 2026-04-25 | 2394<sub>(+34) | 2741<sub>(+65) | 2862<sub>(+40) |  |
| 6.0 | 2026-04-20 | 2360<sub>(+328) | 2676<sub>(+220) | 2822<sub>(+215) |  |
| 5.0 | 2026-04-15 | 2032<sub>(+52) | 2456<sub>(+173) | 2607<sub>(+163) |  |
| 4.0 | 2026-04-11 | 1980<sub>(+230) | 2283<sub>(+172) | 2444<sub>(+180) |  |
| 3.0 | 2026-04-09 | 1750<sub>(+621) | 2111<sub>(+758) | 2264<sub>(+678) |  |
| 2.0 | 2026-04-08 | 1129<sub>(+386) | 1353<sub>(+532) | 1586<sub>(+661) |  |
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

Generated: 2026-05-06 06:26:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0"]
  y-axis "Elo Rating" 700 --> 3000
  line "STC (8.0+0.08s)" [743, 1129, 1750, 1980, 2032, 2360, 2394, 2508]
  line "STC (8.0+0.08s)" [743, 1129, 1750, 1980, 2032, 2360, 2394, 2508]
  line "LTC (60.0+0.60s)" [821, 1353, 2111, 2283, 2456, 2676, 2741, 2870]
  line "VLTC (2m24s+1.12s)" [925, 1586, 2264, 2444, 2607, 2822, 2862, 2994]
  line "VLTC (2m24s+1.12s)" [925, 1586, 2264, 2444, 2607, 2822, 2862, 2994]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2994 | 34 | 278 | 50% | 2996 | 35% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2870 | 35 | 258 | 51% | 2866 | 34% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2508 | 35 | 280 | 51% | 2492 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2862 | 34 | 270 | 52% | 2846 | 39% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2741 | 35 | 266 | 50% | 2743 | 34% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2394 | 33 | 320 | 48% | 2418 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2822 | 36 | 248 | 52% | 2805 | 34% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 2676 | 36 | 274 | 51% | 2665 | 24% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 2360 | 32 | 344 | 54% | 2322 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2607 | 33 | 324 | 49% | 2618 | 23% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2456 | 36 | 268 | 50% | 2454 | 26% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2032 | 36 | 276 | 50% | 2032 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2444 | 34 | 310 | 54% | 2406 | 22% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2283 | 36 | 272 | 49% | 2294 | 23% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 1980 | 39 | 248 | 52% | 1963 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2264 | 40 | 232 | 51% | 2260 | 20% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2111 | 39 | 246 | 48% | 2132 | 14% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 1750 | 43 | 208 | 47% | 1782 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1586 | 34 | 316 | 48% | 1617 | 17% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 1353 | 39 | 258 | 46% | 1408 | 16% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 1129 | 35 | 300 | 51% | 1102 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 925 | 80 | 110 | 38% | 1088 | 9% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 821 | 85 | 104 | 37% | 1042 | 8% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 743 | 91 | 92 | 38% | 952 | 3% |
| --- | --- | --- | --- | --- | --- | --- | --- |