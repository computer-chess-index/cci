# Engine: Onslaught

Author: Kai Chung

Home: https://github.com/kachhy/Onslaught

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 2951<sub>(+27) | 3306<sub>(+85) | 3362<sub>(+60) |  |
| 2.0 | 2026-09-12 | 2924 | 3221 | 3302 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 2986<sub>(+69) | 3278<sub>(+65) | 3359<sub>(+107) |  |
| 2.0 | 2026-09-12 | 2917 | 3213 | 3252 |  |
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

Generated: 2026-11-24 05:40:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2900 --> 3400
  line "E1: STC (8.0+0.08s)" [2924, 2951]
  line "E1: LTC (60.0+0.60s)" [3221, 3306]
  line "E1: VLTC (2m24s+1.12s)" [3302, 3362]
  line "P1: STC (8.0+0.08s)" [2917, 2986]
  line "P1: LTC (60.0+0.60s)" [3213, 3278]
  line "P1: VLTC (2m24s+1.12s)" [3252, 3359]
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
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3359 | 33 | 228 | 49% | 3364 | 69% |
|  |  | E1 | 3362 | 28 | 328 | 50% | 3364 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3278 | 28 | 344 | 46% | 3305 | 65% |
|  |  | E1 | 3306 | 30 | 282 | 51% | 3302 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2986 | 32 | 278 | 47% | 3013 | 48% |
|  |  | E1 | 2951 | 27 | 420 | 53% | 2928 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3303 | 32 | 264 | 53% | 3282 | 65% |
|  |  | P1 | 3252 | 31 | 276 | 46% | 3283 | 60% |
|  |  | E1 | 3302 | 27 | 366 | 48% | 3320 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3243 | 29 | 314 | 53% | 3220 | 61% |
|  |  | P1 | 3213 | 33 | 248 | 51% | 3189 | 56% |
|  |  | E1 | 3221 | 27 | 388 | 47% | 3248 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2997 | 36 | 232 | 51% | 2986 | 45% |
|  |  | P1 | 2917 | 30 | 332 | 48% | 2936 | 42% |
|  |  | E1 | 2924 | 30 | 330 | 45% | 2967 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2927 | 29 | 364 | 51% | 2920 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2812 | 31 | 324 | 51% | 2797 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2552 | 30 | 372 | 50% | 2547 | 33% |