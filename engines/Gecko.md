# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2670<sub>(+58) | 2982<sub>(+34) | 3046<sub>(+17) |  |
| 0.35 | 2026-05-13 | 2612<sub>(+110) | 2948<sub>(+70) | 3029<sub>(+101) |  |
| 0.30 | 2026-05-01 | 2502<sub>(+18) | 2878<sub>(+121) | 2928<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2484<sub>(+89) | 2757<sub>(+97) | 2836<sub>(+117) |  |
| 0.25 | 2026-04-06 | 2395<sub>(+517) | 2660<sub>(+593) | 2719<sub>(+563) |  |
| 0.08 | 2026-02-05 | 1878 | 2067 | 2156 |  |
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

Generated: 2026-09-10 04:38:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "" [1878, 2395, 2484, 2502, 2612, 2670]
  line "STC (8.0+0.08s)" [1878, 2395, 2484, 2502, 2612, 2670]
  line "LTC (60.0+0.60s)" [2067, 2660, 2757, 2878, 2948, 2982]
  line "" [2156, 2719, 2836, 2928, 3029, 3046]
  line "VLTC (2m24s+1.12s)" [2156, 2719, 2836, 2928, 3029, 3046]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3046 | 28 | 386 | 51% | 3038 | 44% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2982 | 28 | 398 | 49% | 2988 | 40% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2670 | 27 | 452 | 49% | 2677 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3029 | 28 | 388 | 51% | 3020 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2948 | 30 | 324 | 49% | 2958 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2612 | 31 | 340 | 50% | 2614 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2928 | 32 | 304 | 51% | 2921 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2878 | 30 | 336 | 49% | 2888 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2502 | 36 | 280 | 50% | 2498 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2836 | 31 | 328 | 51% | 2831 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2757 | 32 | 312 | 50% | 2758 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2484 | 31 | 356 | 51% | 2476 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2719 | 36 | 236 | 55% | 2669 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2660 | 36 | 228 | 57% | 2596 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2395 | 37 | 236 | 55% | 2350 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2156 | 28 | 392 | 46% | 2206 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2067 | 29 | 384 | 48% | 2094 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1878 | 31 | 356 | 48% | 1902 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |