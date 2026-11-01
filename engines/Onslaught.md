# Engine: Onslaught

Author: Kai Chung

Home: https://github.com/kachhy/Onslaught

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 3002<sub>(+14) | 3371<sub>(+82) | 3430<sub>(+64) |  |
| 2.0 | 2026-09-12 | 2988 | 3289 | 3366 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 3164<sub>(+105) | 3479<sub>(+78) | 3544<sub>(+99) |  |
| 2.0 | 2026-09-12 | 3059 | 3401 | 3445 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-12 | 2997<sub>(+445) | 3243<sub>(+431) | 3303<sub>(+376) |  |
| 1.0 | 2026-06-02 | 2552 | 2812 | 2927 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onslaught+<version>&body=###%20Engine%20name%0AOnslaught%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-01 05:40:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2900 --> 3600
  line "E1: STC (8.0+0.08s)" [2988, 3002]
  line "E1: LTC (60.0+0.60s)" [3289, 3371]
  line "E1: VLTC (2m24s+1.12s)" [3366, 3430]
  line "P1: STC (8.0+0.08s)" [3059, 3164]
  line "P1: LTC (60.0+0.60s)" [3401, 3479]
  line "P1: VLTC (2m24s+1.12s)" [3445, 3544]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2500 --> 3400
  line "T1: STC (8.0+0.08s)" [2552, 2997]
  line "T1: LTC (60.0+0.60s)" [2812, 3243]
  line "T1: VLTC (2m24s+1.12s)" [2927, 3303]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3544 | 37 | 180 | 48% | 3555 | 70% |
|  |  | E1 | 3430 | 33 | 230 | 49% | 3437 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3479 | 33 | 236 | 46% | 3505 | 65% |
|  |  | E1 | 3371 | 36 | 198 | 52% | 3360 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3164 | 41 | 170 | 47% | 3189 | 53% |
|  |  | E1 | 3002 | 33 | 280 | 54% | 2969 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3445 | 32 | 256 | 47% | 3468 | 60% |
|  |  | E1 | 3366 | 29 | 320 | 48% | 3386 | 63% |
|  |  | T1 | 3303 | 32 | 264 | 53% | 3282 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3289 | 28 | 368 | 47% | 3316 | 54% |
|  |  | T1 | 3243 | 29 | 314 | 53% | 3220 | 61% |
|  |  | P1 | 3401 | 34 | 232 | 51% | 3393 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2988 | 31 | 302 | 45% | 3029 | 47% |
|  |  | T1 | 2997 | 36 | 232 | 51% | 2986 | 45% |
|  |  | P1 | 3059 | 32 | 292 | 48% | 3078 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2927 | 29 | 364 | 51% | 2920 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2812 | 31 | 324 | 51% | 2797 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2552 | 30 | 372 | 50% | 2547 | 33% |