# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.40 | 2026-06-11 | 2672<sub>(+58) | 2984<sub>(+34) | 3051<sub>(+20) |  |
| 0.35 | 2026-05-13 | 2614<sub>(+112) | 2950<sub>(+70) | 3031<sub>(+101) |  |
| 0.30 | 2026-05-01 | 2502<sub>(+17) | 2880<sub>(+122) | 2930<sub>(+94) |  |
| 0.25.1 | 2026-04-12 | 2485<sub>(+89) | 2758<sub>(+97) | 2836<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2396<sub>(+517) | 2661<sub>(+594) | 2720<sub>(+564) |  |
| 0.08 | 2026-02-05 | 1879 | 2067 | 2156 |  |
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

Generated: 2026-09-14 04:38:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35", "0.40"]
  y-axis "Elo Rating" 1800 --> 3100
  line "" [1879, 2396, 2485, 2502, 2614, 2672]
  line "STC (8.0+0.08s)" [1879, 2396, 2485, 2502, 2614, 2672]
  line "LTC (60.0+0.60s)" [2067, 2661, 2758, 2880, 2950, 2984]
  line "" [2156, 2720, 2836, 2930, 3031, 3051]
  line "VLTC (2m24s+1.12s)" [2156, 2720, 2836, 2930, 3031, 3051]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.40 | VLTC <sub>(2m24s+1.12s)</sub> | 3051 | 28 | 390 | 51% | 3038 | 44% |
| 0.40 | LTC <sub>(60.0+0.60s)</sub> | 2984 | 27 | 410 | 49% | 2989 | 41% |
| 0.40 | STC <sub>(8.0+0.08s)</sub> | 2672 | 26 | 456 | 49% | 2678 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3031 | 28 | 388 | 51% | 3021 | 45% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 2950 | 30 | 324 | 49% | 2959 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2614 | 31 | 340 | 50% | 2615 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2930 | 32 | 304 | 51% | 2923 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2880 | 30 | 336 | 49% | 2889 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2502 | 36 | 280 | 50% | 2499 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2836 | 31 | 328 | 51% | 2831 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2758 | 32 | 312 | 50% | 2759 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2485 | 31 | 356 | 51% | 2476 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2720 | 36 | 236 | 55% | 2670 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2661 | 36 | 228 | 57% | 2597 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2396 | 37 | 236 | 55% | 2350 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2156 | 28 | 392 | 46% | 2206 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2067 | 29 | 384 | 48% | 2095 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1879 | 31 | 356 | 48% | 1904 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |