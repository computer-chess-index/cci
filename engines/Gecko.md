# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.30 | 2026-05-01 | 2565<sub>(+32) | 2907<sub>(+103) | 2955<sub>(+74) |  |
| 0.25.1 | 2026-04-12 | 2533<sub>(+88) | 2804<sub>(+96) | 2881<sub>(+115) |  |
| 0.25 | 2026-04-06 | 2445<sub>(+533) | 2708<sub>(+602) | 2766<sub>(+565) |  |
| 0.08 | 2026-02-05 | 1912 | 2106 | 2201 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.30" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-03 07:38:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30"]
  y-axis "Elo Rating" 1900 --> 3000
  line "STC (8.0+0.08s)" [1912, 2445, 2533, 2565]
  line "STC (8.0+0.08s)" [1912, 2445, 2533, 2565]
  line "LTC (60.0+0.60s)" [2106, 2708, 2804, 2907]
  line "VLTC (2m24s+1.12s)" [2201, 2766, 2881, 2955]
  line "VLTC (2m24s+1.12s)" [2201, 2766, 2881, 2955]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2955 | 43 | 170 | 49% | 2961 | 38% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2907 | 40 | 196 | 46% | 2938 | 38% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2565 | 45 | 168 | 51% | 2549 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2881 | 31 | 328 | 51% | 2876 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 32 | 312 | 50% | 2805 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2533 | 31 | 356 | 51% | 2525 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2766 | 36 | 236 | 55% | 2716 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2708 | 36 | 228 | 57% | 2645 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2445 | 37 | 236 | 55% | 2399 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2201 | 28 | 392 | 46% | 2250 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2106 | 29 | 384 | 48% | 2134 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1912 | 31 | 356 | 48% | 1936 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |