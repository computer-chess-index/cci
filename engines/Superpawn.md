# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.1 | 2026-10-18 | 3081<sub>(+207) | 3391<sub>(+185) | 3471<sub>(+196) |  |
| 1.9.0 | 2026-10-16 | 2874 | 3206 | 3275 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.1 | 2026-10-18 | 3245<sub>(+212) | 3522<sub>(+169) | 3565<sub>(+141) |  |
| 1.9.0 | 2026-10-16 | 3033 | 3353 | 3424 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 3033 | 3353 | 3424 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:42:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2874, 3081]
  line "E1: LTC (60.0+0.60s)" [3206, 3391]
  line "E1: VLTC (2m24s+1.12s)" [3275, 3471]
  line "P1: STC (8.0+0.08s)" [3033, 3245]
  line "P1: LTC (60.0+0.60s)" [3353, 3522]
  line "P1: VLTC (2m24s+1.12s)" [3424, 3565]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3565 | 35 | 210 | 52% | 3555 | 62% |
|  |  | E1 | 3471 | 29 | 310 | 52% | 3459 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3522 | 35 | 216 | 50% | 3521 | 58% |
|  |  | E1 | 3391 | 33 | 260 | 52% | 3378 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3245 | 43 | 156 | 50% | 3240 | 47% |
|  |  | E1 | 3081 | 31 | 320 | 54% | 3043 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3424 | 43 | 194 | 60% | 3171 | 39% |
|  |  | E1 | 3275 | 34 | 292 | 55% | 3117 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3206 | 42 | 214 | 62% | 2913 | 34% |
|  |  | P1 | 3353 | 50 | 150 | 62% | 3015 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2874 | 42 | 220 | 61% | 2618 | 26% |
|  |  | P1 | 3033 | 47 | 176 | 58% | 2800 | 26% |