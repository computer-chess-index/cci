# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2090<sub>(-160) | 2803<sub>(-239) | 3038<sub>(-151) |  |
| 0.29.0 | 2022-12-13 | 2250 | 3042 | 3189 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2160<sub>(-103) | 2894<sub>(-75) | 3069<sub>(-40) |  |
| 0.29.0 | 2022-12-13 | 2263 | 2969 | 3109 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2408<sub>(+24) | 3015<sub>(+11) | 3178<sub>(-62) |  |
| 0.29.0 | 2022-12-13 | 2384 | 3004 | 3240 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lc0+<version>&body=###%20Engine%20name%0ALc0%0A%0A###%20Version%0A0.32.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:39:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2000 --> 3200
  line "E1: STC (8.0+0.08s)" [2250, 2090]
  line "E1: LTC (60.0+0.60s)" [3042, 2803]
  line "E1: VLTC (2m24s+1.12s)" [3189, 3038]
  line "P1: STC (8.0+0.08s)" [2263, 2160]
  line "P1: LTC (60.0+0.60s)" [2969, 2894]
  line "P1: VLTC (2m24s+1.12s)" [3109, 3069]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "T1: STC (8.0+0.08s)" [2384, 2408]
  line "T1: LTC (60.0+0.60s)" [3004, 3015]
  line "T1: VLTC (2m24s+1.12s)" [3240, 3178]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3038 | 24 | 510 | 56% | 2977 | 45% |
|  |  | T1 | 3178 | 22 | 556 | 48% | 3193 | 53% |
|  |  | P1 | 3069 | 35 | 230 | 54% | 3019 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3015 | 23 | 574 | 49% | 3024 | 46% |
|  |  | P1 | 2894 | 34 | 274 | 48% | 2904 | 38% |
|  |  | E1 | 2803 | 28 | 424 | 52% | 2773 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2408 | 21 | 814 | 49% | 2415 | 24% |
|  |  | P1 | 2160 | 34 | 292 | 43% | 2223 | 30% |
|  |  | E1 | 2090 | 30 | 454 | 39% | 2205 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3240 | 28 | 356 | 50% | 3239 | 54% |
|  |  | P1 | 3109 | 75 | 60 | 63% | 2951 | 47% |
|  |  | E1 | 3189 | 59 | 88 | 56% | 3108 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3004 | 30 | 328 | 48% | 3019 | 47% |
|  |  | P1 | 2969 | 71 | 72 | 64% | 2700 | 36% |
|  |  | E1 | 3042 | 61 | 84 | 53% | 2881 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2384 | 32 | 400 | 42% | 2498 | 19% |
|  |  | P1 | 2263 | 64 | 90 | 51% | 2259 | 24% |
|  |  | E1 | 2250 | 54 | 128 | 51% | 2277 | 24% |