# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3191<sub>(+191) | 3418<sub>(+113) | 3471<sub>(+97) |  |
| 1.9.1 | 2026-10-18 | 3000<sub>(+210) | 3305<sub>(+186) | 3374<sub>(+191) |  |
| 1.9.0 | 2026-10-16 | 2790 | 3119 | 3183 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3166<sub>(+169) | 3347<sub>(+73) | 3437<sub>(+121) |  |
| 1.9.1 | 2026-10-18 | 2997<sub>(+190) | 3274<sub>(+172) | 3316<sub>(+142) |  |
| 1.9.0 | 2026-10-16 | 2807 | 3102 | 3174 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2807 | 3102 | 3174 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-15 05:43:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2790, 3000, 3191]
  line "E1: LTC (60.0+0.60s)" [3119, 3305, 3418]
  line "E1: VLTC (2m24s+1.12s)" [3183, 3374, 3471]
  line "P1: STC (8.0+0.08s)" [2807, 2997, 3166]
  line "P1: LTC (60.0+0.60s)" [3102, 3274, 3347]
  line "P1: VLTC (2m24s+1.12s)" [3174, 3316, 3437]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3437 | 31 | 258 | 55% | 3406 | 76% |
|  |  | E1 | 3471 | 33 | 230 | 51% | 3464 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3347 | 42 | 140 | 51% | 3343 | 76% |
|  |  | E1 | 3418 | 27 | 338 | 53% | 3399 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3191 | 32 | 266 | 52% | 3174 | 58% |
|  |  | P1 | 3166 | 35 | 222 | 53% | 3141 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3316 | 35 | 210 | 52% | 3305 | 62% |
|  |  | E1 | 3374 | 29 | 322 | 51% | 3367 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3274 | 35 | 220 | 50% | 3272 | 59% |
|  |  | E1 | 3305 | 31 | 288 | 53% | 3285 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2997 | 42 | 164 | 50% | 2998 | 47% |
|  |  | E1 | 3000 | 29 | 380 | 53% | 2975 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3183 | 34 | 292 | 55% | 3031 | 40% |
|  |  | P1 | 3174 | 43 | 194 | 60% | 2942 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3119 | 42 | 214 | 62% | 2832 | 34% |
|  |  | P1 | 3102 | 50 | 150 | 62% | 2793 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2790 | 42 | 220 | 61% | 2542 | 26% |
|  |  | P1 | 2807 | 47 | 176 | 58% | 2596 | 26% |