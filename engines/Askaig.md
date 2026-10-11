# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20261003 | 2026-10-03 | 2962<sub>(+39) | 3195<sub>(+40) | 3270<sub>(+14) |  |
| 20260811 | 2026-08-11 | 2923 | 3155 | 3256 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20261003 | 2026-10-03 | 3187<sub>(+21) | 3513<sub>(+73) | 3426<sub>(-75) |  |
| 20260811 | 2026-08-11 | 3166 | 3440 | 3501 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 3006<sub>(-21) | 3266<sub>(+48) | 3294<sub>(+28) |  |
| 20260704 | 2026-07-04 | 3027<sub>(+615) | 3218<sub>(+540) | 3266<sub>(+538) |  |
| 20260628 | 2026-06-28 | 2412<sub>(-2) | 2678<sub>(+23) | 2728<sub>(-23) |  |
| 20260616 | 2026-06-16 | 2414 | 2655 | 2751 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260811" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 12:32:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811","20260811E1", "20261003E1"]
  y-axis "Elo Rating" 2400 --> 3300
  line "E1: STC (8.0+0.08s)" [2414, 2412, 3027, 3006,2923, 2962]
  line "T1: STC (8.0+0.08s)" [2414, 2412, 3027, 3006]
  line "E1: LTC (60.0+0.60s)" [2655, 2678, 3218, 3266,3155, 3195]
  line "T1: LTC (60.0+0.60s)" [2655, 2678, 3218, 3266]
  line "E1: VLTC (2m24s+1.12s)" [2751, 2728, 3266, 3294,3256, 3270]
  line "T1: VLTC (2m24s+1.12s)" [2751, 2728, 3266, 3294]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20261003 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 134 | 16 | 44% | 3476 | 38% |
| 20261003 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 86 | 40 | 51% | 3259 | 38% |
| 20261003 | LTC <sub>(60.0+0.60s)</sub> | 3513 | 132 | 16 | 59% | 3440 | 44% |
| 20261003 | LTC <sub>(60.0+0.60s)</sub> | 3195 | 70 | 64 | 47% | 3221 | 34% |
| 20261003 | STC <sub>(8.0+0.08s)</sub> | 3187 | 95 | 32 | 55% | 3151 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20261003 | STC <sub>(8.0+0.08s)</sub> | 2962 | 70 | 64 | 54% | 2928 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 40 | 180 | 51% | 3498 | 50% |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3256 | 33 | 255 | 49% | 3263 | 54% |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3294 | 29 | 338 | 49% | 3299 | 54% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3440 | 37 | 212 | 48% | 3460 | 44% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3155 | 31 | 308 | 48% | 3174 | 43% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3266 | 28 | 376 | 48% | 3278 | 49% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 3166 | 38 | 224 | 54% | 3129 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 2923 | 33 | 288 | 49% | 2920 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 3006 | 27 | 428 | 51% | 2992 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 31 | 312 | 54% | 3229 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3218 | 30 | 320 | 53% | 3190 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3027 | 32 | 312 | 53% | 2997 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2728 | 46 | 148 | 51% | 2718 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 53 | 116 | 49% | 2688 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2412 | 53 | 116 | 50% | 2411 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2751 | 47 | 144 | 51% | 2739 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2655 | 47 | 148 | 46% | 2689 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2414 | 41 | 196 | 44% | 2473 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |