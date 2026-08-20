# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.2 | 2026-08-08 | 2701<sub>(+212) | 2934<sub>(+139) | 3069<sub>(+212) |  |
| 0.4.1 | 2026-07-26 | 2489<sub>(+131) | 2795<sub>(+117) | 2857<sub>(+71) |  |
| 0.4.0 | 2026-07-19 | 2358<sub>(+91) | 2678<sub>(+90) | 2786<sub>(+120) |  |
| 0.3.2 | 2026-07-06 | 2267<sub>(+new) | 2588<sub>(+new) | 2666<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1920<sub>(+227) | 2102<sub>(+243) | 2218<sub>(+290) |  |
| 0.2.8 | 2026-05-15 | 1693<sub>(+99) | 1859<sub>(+31) | 1928<sub>(+72) |  |
| 0.2.7 | 2026-05-11 | 1594 | 1828 | 1856 |  |
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

Generated: 2026-08-20 06:24:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2", "0.4.0", "0.4.1", "0.4.2"]
  y-axis "Elo Rating" 1500 --> 3100
  line "STC (8.0+0.08s)" [1594, 1693, 1920, 2267, 2358, 2489, 2701]
  line "STC (8.0+0.08s)" [1594, 1693, 1920, 2267, 2358, 2489, 2701]
  line "LTC (60.0+0.60s)" [1828, 1859, 2102, 2588, 2678, 2795, 2934]
  line "VLTC (2m24s+1.12s)" [1856, 1928, 2218, 2666, 2786, 2857, 3069]
  line "VLTC (2m24s+1.12s)" [1856, 1928, 2218, 2666, 2786, 2857, 3069]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3069 | 35 | 230 | 49% | 3073 | 56% |
| 0.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 39 | 184 | 51% | 2930 | 50% |
| 0.4.2 | STC <sub>(8.0+0.08s)</sub> | 2701 | 40 | 186 | 52% | 2687 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2857 | 33 | 276 | 52% | 2843 | 42% |
| 0.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2795 | 33 | 272 | 48% | 2809 | 41% |
| 0.4.1 | STC <sub>(8.0+0.08s)</sub> | 2489 | 33 | 304 | 48% | 2507 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2786 | 35 | 244 | 53% | 2765 | 42% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 39 | 216 | 53% | 2654 | 31% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 2358 | 39 | 216 | 49% | 2368 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2666 | 39 | 200 | 50% | 2661 | 40% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2588 | 44 | 174 | 54% | 2546 | 30% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2267 | 42 | 200 | 48% | 2279 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2218 | 34 | 298 | 51% | 2217 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2102 | 37 | 258 | 52% | 2084 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1920 | 35 | 288 | 51% | 1914 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1928 | 34 | 312 | 48% | 1941 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1859 | 35 | 276 | 51% | 1841 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1693 | 33 | 314 | 46% | 1723 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1856 | 32 | 334 | 47% | 1885 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1828 | 35 | 304 | 49% | 1844 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1594 | 36 | 292 | 50% | 1590 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |