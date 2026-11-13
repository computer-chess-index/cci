# Engine: Onslaught

Author: Kai Chung

Home: https://github.com/kachhy/Onslaught

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 2928<sub>(+24) | 3289<sub>(+87) | 3341<sub>(+62) |  |
| 2.0 | 2026-09-12 | 2904 | 3202 | 3279 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 2997<sub>(+97) | 3309<sub>(+68) | 3389<sub>(+100) |  |
| 2.0 | 2026-09-12 | 2900 | 3241 | 3289 |  |
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

Generated: 2026-11-13 05:40:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2900 --> 3400
  line "E1: STC (8.0+0.08s)" [2904, 2928]
  line "E1: LTC (60.0+0.60s)" [3202, 3289]
  line "E1: VLTC (2m24s+1.12s)" [3279, 3341]
  line "P1: STC (8.0+0.08s)" [2900, 2997]
  line "P1: LTC (60.0+0.60s)" [3241, 3309]
  line "P1: VLTC (2m24s+1.12s)" [3289, 3389]
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
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3389 | 34 | 216 | 50% | 3391 | 70% |
|  |  | E1 | 3341 | 29 | 310 | 50% | 3345 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3289 | 32 | 242 | 51% | 3278 | 71% |
|  |  | P1 | 3309 | 29 | 316 | 46% | 3336 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2928 | 28 | 380 | 53% | 2900 | 41% |
|  |  | P1 | 2997 | 36 | 214 | 48% | 3015 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3303 | 32 | 264 | 53% | 3282 | 65% |
|  |  | P1 | 3289 | 32 | 256 | 47% | 3310 | 60% |
|  |  | E1 | 3279 | 29 | 320 | 48% | 3299 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3243 | 29 | 314 | 53% | 3220 | 61% |
|  |  | P1 | 3241 | 34 | 236 | 52% | 3217 | 56% |
|  |  | E1 | 3202 | 28 | 368 | 47% | 3229 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2997 | 36 | 232 | 51% | 2986 | 45% |
|  |  | P1 | 2900 | 32 | 296 | 48% | 2919 | 41% |
|  |  | E1 | 2904 | 31 | 302 | 45% | 2946 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2927 | 29 | 364 | 51% | 2920 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2812 | 31 | 324 | 51% | 2797 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2552 | 30 | 372 | 50% | 2547 | 33% |