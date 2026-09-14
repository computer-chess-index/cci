# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2662<sub>(+83) | 3085<sub>(+128) | 3136<sub>(+80) |  |
| 2.2.0 | 2026-04-03 | 2579<sub>(-17) | 2957<sub>(+33) | 3056<sub>(+136) |  |
| 2.1.0 | 2026-04-02 | 2596<sub>(+5) | 2924<sub>(-30) | 2920<sub>(-68) |  |
| 2.0.0 | 2026-03-29 | 2591<sub>(+277) | 2954<sub>(+185) | 2988<sub>(+110) |  |
| 1.0.0 | 2026-03-26 | 2314 | 2769 | 2878 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:36:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "" [2314, 2591, 2596, 2579, 2662]
  line "STC (8.0+0.08s)" [2314, 2591, 2596, 2579, 2662]
  line "LTC (60.0+0.60s)" [2769, 2954, 2924, 2957, 3085]
  line "" [2878, 2988, 2920, 3056, 3136]
  line "VLTC (2m24s+1.12s)" [2878, 2988, 2920, 3056, 3136]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3136 | 38 | 202 | 48% | 3154 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3085 | 43 | 150 | 51% | 3081 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2662 | 50 | 128 | 50% | 2664 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3056 | 34 | 242 | 51% | 3052 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2957 | 35 | 238 | 50% | 2950 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2579 | 34 | 274 | 50% | 2579 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2920 | 31 | 292 | 49% | 2931 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2924 | 34 | 248 | 49% | 2928 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2596 | 35 | 256 | 48% | 2610 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2988 | 31 | 288 | 49% | 2994 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2954 | 32 | 280 | 51% | 2944 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2591 | 30 | 336 | 48% | 2607 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2878 | 32 | 302 | 49% | 2888 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2769 | 34 | 268 | 48% | 2786 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2314 | 35 | 272 | 46% | 2350 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |