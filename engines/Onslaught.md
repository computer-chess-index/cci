# Engine: Onslaught

Author: Kai Chung

Home: https://github.com/kachhy/Onslaught

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 3008<sub>(+10) | 3379<sub>(+78) | 3440<sub>(+64) |  |
| 2.0 | 2026-09-12 | 2998 | 3301 | 3376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-10-23 | 3209<sub>(+108) | 3518<sub>(+75) | 3584<sub>(+96) |  |
| 2.0 | 2026-09-12 | 3101 | 3443 | 3488 |  |
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

Generated: 2026-11-06 05:40:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2900 --> 3600
  line "E1: STC (8.0+0.08s)" [2998, 3008]
  line "E1: LTC (60.0+0.60s)" [3301, 3379]
  line "E1: VLTC (2m24s+1.12s)" [3376, 3440]
  line "P1: STC (8.0+0.08s)" [3101, 3209]
  line "P1: LTC (60.0+0.60s)" [3443, 3518]
  line "P1: VLTC (2m24s+1.12s)" [3488, 3584]
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
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3584 | 35 | 208 | 49% | 3595 | 71% |
|  |  | E1 | 3440 | 30 | 290 | 49% | 3444 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3518 | 31 | 268 | 47% | 3542 | 65% |
|  |  | E1 | 3379 | 35 | 210 | 51% | 3371 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3209 | 39 | 182 | 48% | 3229 | 53% |
|  |  | E1 | 3008 | 32 | 296 | 53% | 2984 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3488 | 32 | 256 | 47% | 3510 | 60% |
|  |  | E1 | 3376 | 29 | 320 | 48% | 3397 | 63% |
|  |  | T1 | 3303 | 32 | 264 | 53% | 3282 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3301 | 28 | 368 | 47% | 3326 | 54% |
|  |  | T1 | 3243 | 29 | 314 | 53% | 3220 | 61% |
|  |  | P1 | 3443 | 34 | 232 | 51% | 3434 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2998 | 31 | 302 | 45% | 3040 | 47% |
|  |  | T1 | 2997 | 36 | 232 | 51% | 2986 | 45% |
|  |  | P1 | 3101 | 32 | 292 | 48% | 3120 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2927 | 29 | 364 | 51% | 2920 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2812 | 31 | 324 | 51% | 2797 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2552 | 30 | 372 | 50% | 2547 | 33% |