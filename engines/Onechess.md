# Engine: Onechess

Author: Julien Orlandini

Home: https://github.com/ovnice-dev/onechess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.1 | 2026-11-25 | 3079<sub>(+622) | 3393<sub>(+515) | 3517<sub>(+492) |  |
| 1.2 | 2026-11-22 | 2457<sub>(-24) | 2878<sub>(-56) | 3025<sub>(+35) |  |
| 1.0 | 2026-11-15 | 2481 | 2934 | 2990 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.1 | 2026-11-25 | 3177<sub>(+612) | 3438<sub>(+483) | 3483<sub>(+468) |  |
| 1.2 | 2026-11-22 | 2565<sub>(+58) | 2955<sub>(+42) | 3015<sub>(+4) |  |
| 1.0 | 2026-11-15 | 2507 | 2913 | 3011 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-11-15 | 2507 | 2913 | 3011 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onechess+<version>&body=###%20Engine%20name%0AOnechess%0A%0A###%20Version%0A1.2.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:41:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.2.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2481, 2457, 3079]
  line "E1: LTC (60.0+0.60s)" [2934, 2878, 3393]
  line "E1: VLTC (2m24s+1.12s)" [2990, 3025, 3517]
  line "P1: STC (8.0+0.08s)" [2507, 2565, 3177]
  line "P1: LTC (60.0+0.60s)" [2913, 2955, 3438]
  line "P1: VLTC (2m24s+1.12s)" [3011, 3015, 3483]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3483 | 34 | 224 | 56% | 3434 | 63% |
|  |  | E1 | 3517 | 29 | 322 | 57% | 3455 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3438 | 33 | 252 | 55% | 3391 | 58% |
|  |  | E1 | 3393 | 26 | 456 | 59% | 3310 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3177 | 32 | 340 | 60% | 3040 | 32% |
|  |  | E1 | 3079 | 29 | 484 | 63% | 2917 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3025 | 43 | 168 | 54% | 2992 | 39% |
|  |  | P1 | 3015 | 49 | 130 | 47% | 3038 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2878 | 25 | 524 | 57% | 2809 | 30% |
|  |  | P1 | 2955 | 74 | 60 | 49% | 2966 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2457 | 32 | 354 | 56% | 2394 | 23% |
|  |  | P1 | 2565 | 55 | 116 | 51% | 2554 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3011 | 45 | 154 | 50% | 3002 | 40% |
|  |  | E1 | 2990 | 32 | 316 | 46% | 3020 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2913 | 40 | 212 | 49% | 2903 | 31% |
|  |  | E1 | 2934 | 36 | 268 | 51% | 2911 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2507 | 40 | 216 | 48% | 2527 | 21% |
|  |  | E1 | 2481 | 37 | 260 | 50% | 2489 | 19% |