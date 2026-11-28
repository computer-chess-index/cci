# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2083<sub>(-172) | 2805<sub>(-201) | 3028<sub>(-142) |  |
| 0.29.0 | 2022-12-13 | 2255 | 3006 | 3170 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2192<sub>(-88) | 2931<sub>(-73) | 3100<sub>(-56) |  |
| 0.29.0 | 2022-12-13 | 2280 | 3004 | 3156 |  |
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

Generated: 2026-11-28 05:39:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2000 --> 3200
  line "E1: STC (8.0+0.08s)" [2255, 2083]
  line "E1: LTC (60.0+0.60s)" [3006, 2805]
  line "E1: VLTC (2m24s+1.12s)" [3170, 3028]
  line "P1: STC (8.0+0.08s)" [2280, 2192]
  line "P1: LTC (60.0+0.60s)" [3004, 2931]
  line "P1: VLTC (2m24s+1.12s)" [3156, 3100]
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
|  |  | P1 | 3100 | 35 | 238 | 53% | 3058 | 52% |
|  |  | E1 | 3028 | 24 | 546 | 55% | 2974 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3015 | 23 | 574 | 49% | 3024 | 46% |
|  |  | P1 | 2931 | 32 | 318 | 48% | 2942 | 37% |
|  |  | E1 | 2805 | 27 | 472 | 52% | 2770 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2408 | 21 | 814 | 49% | 2415 | 24% |
|  |  | P1 | 2192 | 33 | 316 | 44% | 2246 | 29% |
|  |  | E1 | 2083 | 28 | 514 | 39% | 2225 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3240 | 28 | 356 | 50% | 3239 | 54% |
|  |  | P1 | 3156 | 61 | 84 | 60% | 3040 | 50% |
|  |  | E1 | 3170 | 44 | 152 | 52% | 3131 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3004 | 55 | 116 | 57% | 2843 | 34% |
|  |  | E1 | 3006 | 41 | 178 | 50% | 2936 | 47% |
|  |  | T1 | 3004 | 30 | 328 | 48% | 3019 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2280 | 51 | 138 | 49% | 2292 | 25% |
|  |  | E1 | 2255 | 48 | 164 | 51% | 2272 | 21% |
|  |  | T1 | 2384 | 32 | 400 | 42% | 2498 | 19% |