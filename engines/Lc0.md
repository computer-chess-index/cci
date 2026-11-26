# Engine: Lc0

Author: https://lczero.org/

Home: https://github.com/LeelaChessZero/lc0

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2086<sub>(-169) | 2804<sub>(-186) | 3028<sub>(-146) |  |
| 0.29.0 | 2022-12-13 | 2255 | 2990 | 3174 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.32.1 | 2025-11-23 | 2187<sub>(-90) | 2934<sub>(-67) | 3100<sub>(-55) |  |
| 0.29.0 | 2022-12-13 | 2277 | 3001 | 3155 |  |
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

Generated: 2026-11-26 05:40:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.29.0", "0.32.1"]
  y-axis "Elo Rating" 2000 --> 3200
  line "E1: STC (8.0+0.08s)" [2255, 2086]
  line "E1: LTC (60.0+0.60s)" [2990, 2804]
  line "E1: VLTC (2m24s+1.12s)" [3174, 3028]
  line "P1: STC (8.0+0.08s)" [2277, 2187]
  line "P1: LTC (60.0+0.60s)" [3001, 2934]
  line "P1: VLTC (2m24s+1.12s)" [3155, 3100]
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
| 0.32.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3100 | 35 | 234 | 54% | 3054 | 52% |
|  |  | E1 | 3028 | 24 | 544 | 55% | 2974 | 45% |
|  |  | T1 | 3178 | 22 | 556 | 48% | 3193 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2804 | 27 | 460 | 52% | 2770 | 35% |
|  |  | T1 | 3015 | 23 | 574 | 49% | 3024 | 46% |
|  |  | P1 | 2934 | 32 | 314 | 49% | 2939 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2086 | 28 | 506 | 39% | 2228 | 20% |
|  |  | T1 | 2408 | 21 | 814 | 49% | 2415 | 24% |
|  |  | P1 | 2187 | 33 | 312 | 44% | 2246 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.29.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3174 | 51 | 116 | 53% | 3120 | 47% |
|  |  | T1 | 3240 | 28 | 356 | 50% | 3239 | 54% |
|  |  | P1 | 3155 | 61 | 84 | 60% | 3039 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2990 | 46 | 144 | 48% | 2923 | 50% |
|  |  | T1 | 3004 | 30 | 328 | 48% | 3019 | 47% |
|  |  | P1 | 3001 | 55 | 116 | 57% | 2840 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2255 | 49 | 160 | 51% | 2272 | 21% |
|  |  | T1 | 2384 | 32 | 400 | 42% | 2498 | 19% |
|  |  | P1 | 2277 | 51 | 138 | 49% | 2290 | 25% |