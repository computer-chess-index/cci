# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.2 | 2026-08-08 | 2700<sub>(+209) | 2925<sub>(+130) | 3074<sub>(+216) |  |
| 0.4.1 | 2026-07-26 | 2491<sub>(+131) | 2795<sub>(+117) | 2858<sub>(+72) |  |
| 0.4.0 | 2026-07-19 | 2360<sub>(+93) | 2678<sub>(+89) | 2786<sub>(+120) |  |
| 0.3.2 | 2026-07-06 | 2267<sub>(+new) | 2589<sub>(+new) | 2666<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1921<sub>(+228) | 2102<sub>(+242) | 2219<sub>(+291) |  |
| 0.2.8 | 2026-05-15 | 1693<sub>(+99) | 1860<sub>(+32) | 1928<sub>(+70) |  |
| 0.2.7 | 2026-05-11 | 1594 | 1828 | 1858 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.4.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:24:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2"]
  y-axis "Elo Rating" 1500 --> 3100
  line "STC (8.0+0.08s)" [1594, 1693, 1921, 2267, 2360, 2491, 2700]
  line "STC (8.0+0.08s)" [1594, 1693, 1921, 2267, 2360, 2491, 2700]
  line "LTC (60.0+0.60s)" [1828, 1860, 2102, 2589, 2678, 2795, 2925]
  line "VLTC (2m24s+1.12s)" [1858, 1928, 2219, 2666, 2786, 2858, 3074]
  line "VLTC (2m24s+1.12s)" [1858, 1928, 2219, 2666, 2786, 2858, 3074]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3074 | 34 | 238 | 50% | 3073 | 56% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2925 | 38 | 196 | 50% | 2928 | 51% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2700 | 38 | 210 | 51% | 2688 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2858 | 33 | 276 | 52% | 2844 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2795 | 33 | 272 | 48% | 2811 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2491 | 33 | 304 | 48% | 2508 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2786 | 35 | 244 | 53% | 2765 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 39 | 216 | 53% | 2655 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2360 | 39 | 216 | 49% | 2369 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2666 | 39 | 200 | 50% | 2661 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2589 | 44 | 174 | 54% | 2547 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2267 | 42 | 200 | 48% | 2280 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2219 | 34 | 298 | 51% | 2217 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2102 | 37 | 258 | 52% | 2086 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1921 | 35 | 288 | 51% | 1914 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1928 | 34 | 312 | 48% | 1943 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1860 | 35 | 276 | 51% | 1843 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1693 | 33 | 314 | 46% | 1723 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1858 | 32 | 334 | 47% | 1886 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1828 | 35 | 304 | 49% | 1845 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1594 | 36 | 292 | 50% | 1590 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |