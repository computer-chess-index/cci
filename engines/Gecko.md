# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2674<sub>(+58) | 2989<sub>(+37) | 3056<sub>(+21) |  |
| 0.35 | 2026-05-13 | 2616<sub>(+112) | 2952<sub>(+70) | 3035<sub>(+101) |  |
| 0.30 | 2026-05-01 | 2504<sub>(+16) | 2882<sub>(+120) | 2934<sub>(+94) |  |
| 0.25.1 | 2026-04-12 | 2488<sub>(+89) | 2762<sub>(+97) | 2840<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2399<sub>(+517) | 2665<sub>(+595) | 2724<sub>(+564) |  |
| 0.08 | 2026-02-05 | 1882 | 2070 | 2160 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.40" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:38:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "" [1882, 2399, 2488, 2504, 2616, 2674]
  line "STC (8.0+0.08s)" [1882, 2399, 2488, 2504, 2616, 2674]
  line "LTC (60.0+0.60s)" [2070, 2665, 2762, 2882, 2952, 2989]
  line "" [2160, 2724, 2840, 2934, 3035, 3056]
  line "VLTC (2m24s+1.12s)" [2160, 2724, 2840, 2934, 3035, 3056]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3056 | 27 | 394 | 52% | 3042 | 44% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2989 | 27 | 414 | 49% | 2993 | 41% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2674 | 26 | 476 | 49% | 2682 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3035 | 28 | 388 | 51% | 3025 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2952 | 30 | 324 | 49% | 2963 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2616 | 31 | 340 | 50% | 2618 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2934 | 32 | 304 | 51% | 2925 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2882 | 30 | 336 | 49% | 2892 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2504 | 36 | 280 | 50% | 2502 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2840 | 31 | 328 | 51% | 2835 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2762 | 32 | 312 | 50% | 2762 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2488 | 31 | 356 | 51% | 2480 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2724 | 36 | 236 | 55% | 2673 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2665 | 36 | 228 | 57% | 2601 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2399 | 37 | 236 | 55% | 2353 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2160 | 28 | 392 | 46% | 2209 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2070 | 29 | 384 | 48% | 2098 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1882 | 31 | 356 | 48% | 1906 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |