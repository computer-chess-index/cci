# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2082<sub>(-163) | 2800<sub>(-232) | 3031<sub>(-152) |  |
| 0.29.0 | 2022-12-13 | 2245 | 3032 | 3183 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2179<sub>(-100) | 2923<sub>(-63) | 3089<sub>(-61) |  |
| 0.29.0 | 2022-12-13 | 2279 | 2986 | 3150 |  |
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

Generated: 2026-11-23 05:39:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2000 --> 3200
  line "E1: STC (8.0+0.08s)" [2245, 2082]
  line "E1: LTC (60.0+0.60s)" [3032, 2800]
  line "E1: VLTC (2m24s+1.12s)" [3183, 3031]
  line "P1: STC (8.0+0.08s)" [2279, 2179]
  line "P1: LTC (60.0+0.60s)" [2986, 2923]
  line "P1: VLTC (2m24s+1.12s)" [3150, 3089]
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
|  |  | P1 | 3089 | 35 | 234 | 54% | 3044 | 52% |
|  |  | E1 | 3031 | 24 | 536 | 55% | 2975 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3015 | 23 | 574 | 49% | 3024 | 46% |
|  |  | P1 | 2923 | 32 | 310 | 49% | 2928 | 37% |
|  |  | E1 | 2800 | 27 | 456 | 52% | 2769 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2408 | 21 | 814 | 49% | 2415 | 24% |
|  |  | P1 | 2179 | 33 | 312 | 44% | 2237 | 29% |
|  |  | E1 | 2082 | 28 | 498 | 39% | 2225 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3240 | 28 | 356 | 50% | 3239 | 54% |
|  |  | P1 | 3150 | 70 | 68 | 63% | 3000 | 46% |
|  |  | E1 | 3183 | 59 | 88 | 56% | 3101 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3004 | 30 | 328 | 48% | 3019 | 47% |
|  |  | P1 | 2986 | 60 | 100 | 59% | 2801 | 33% |
|  |  | E1 | 3032 | 61 | 84 | 53% | 2871 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2279 | 55 | 118 | 50% | 2282 | 25% |
|  |  | E1 | 2245 | 54 | 128 | 51% | 2272 | 24% |
|  |  | T1 | 2384 | 32 | 400 | 42% | 2498 | 19% |