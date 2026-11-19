# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2086<sub>(-160) | 2799<sub>(-232) | 3029<sub>(-152) |  |
| 0.29.0 | 2022-12-13 | 2246 | 3031 | 3181 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2167<sub>(-102) | 2894<sub>(-81) | 3073<sub>(-41) |  |
| 0.29.0 | 2022-12-13 | 2269 | 2975 | 3114 |  |
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

Generated: 2026-11-19 05:39:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2000 --> 3200
  line "E1: STC (8.0+0.08s)" [2246, 2086]
  line "E1: LTC (60.0+0.60s)" [3031, 2799]
  line "E1: VLTC (2m24s+1.12s)" [3181, 3029]
  line "P1: STC (8.0+0.08s)" [2269, 2167]
  line "P1: LTC (60.0+0.60s)" [2975, 2894]
  line "P1: VLTC (2m24s+1.12s)" [3114, 3073]
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
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3178 | 22 | 556 | 48% | 3193 | 53% |
|  |  | P1 | 3073 | 35 | 230 | 54% | 3024 | 53% |
|  |  | E1 | 3029 | 24 | 526 | 56% | 2973 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3015 | 23 | 574 | 49% | 3024 | 46% |
|  |  | P1 | 2894 | 33 | 286 | 48% | 2911 | 37% |
|  |  | E1 | 2799 | 28 | 428 | 52% | 2766 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2408 | 21 | 814 | 49% | 2415 | 24% |
|  |  | P1 | 2167 | 34 | 292 | 43% | 2230 | 30% |
|  |  | E1 | 2086 | 29 | 482 | 39% | 2230 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3240 | 28 | 356 | 50% | 3239 | 54% |
|  |  | P1 | 3114 | 75 | 60 | 63% | 2957 | 47% |
|  |  | E1 | 3181 | 59 | 88 | 56% | 3100 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2975 | 71 | 72 | 64% | 2705 | 36% |
|  |  | E1 | 3031 | 61 | 84 | 53% | 2870 | 49% |
|  |  | T1 | 3004 | 30 | 328 | 48% | 3019 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2269 | 64 | 90 | 51% | 2265 | 24% |
|  |  | E1 | 2246 | 54 | 128 | 51% | 2273 | 24% |
|  |  | T1 | 2384 | 32 | 400 | 42% | 2498 | 19% |