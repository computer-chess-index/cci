# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 2846<sub>(-31) | 3189<sub>(-46) | 3302<sub>(+39) |  |
| 1.0.0 | 2026-10-15 | 2877<sub>(+81) | 3235<sub>(+79) | 3263<sub>(+7) |  |
| 0.13.593 | 2026-06-30 | 2796 | 3156 | 3256 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 2966<sub>(-23) | 3333<sub>(+20) | 3395<sub>(-10) |  |
| 1.0.0 | 2026-10-15 | 2989<sub>(+72) | 3313<sub>(-13) | 3405<sub>(+65) |  |
| 0.13.593 | 2026-06-30 | 2917 | 3326 | 3340 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.13.593 | 2026-06-30 | 2831 | 3125 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnstar+<version>&body=###%20Engine%20name%0APawnstar%0A%0A###%20Version%0A0.13.593" target="_blank">Submit new version</a>

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

Generated: 2026-11-03 05:40:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2796, 2877, 2846]
  line "E1: LTC (60.0+0.60s)" [3156, 3235, 3189]
  line "E1: VLTC (2m24s+1.12s)" [3256, 3263, 3302]
  line "P1: STC (8.0+0.08s)" [2917, 2989, 2966]
  line "P1: LTC (60.0+0.60s)" [3326, 3313, 3333]
  line "P1: VLTC (2m24s+1.12s)" [3340, 3405, 3395]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3395 | 40 | 160 | 48% | 3414 | 64% |
|  |  | E1 | 3302 | 30 | 288 | 53% | 3278 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3333 | 44 | 132 | 49% | 3343 | 63% |
|  |  | E1 | 3189 | 31 | 292 | 54% | 3156 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2966 | 45 | 148 | 44% | 3020 | 43% |
|  |  | E1 | 2846 | 41 | 188 | 47% | 2867 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3263 | 34 | 232 | 50% | 3260 | 62% |
|  |  | P1 | 3405 | 40 | 160 | 50% | 3407 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3235 | 32 | 276 | 51% | 3228 | 53% |
|  |  | P1 | 3313 | 39 | 180 | 50% | 3310 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2877 | 28 | 394 | 47% | 2903 | 40% |
|  |  | P1 | 2989 | 38 | 198 | 52% | 2970 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3340 | 35 | 220 | 46% | 3371 | 56% |
|  |  | E1 | 3256 | 30 | 312 | 47% | 3276 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3326 | 34 | 248 | 52% | 3308 | 49% |
|  |  | E1 | 3156 | 31 | 300 | 48% | 3175 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2917 | 41 | 192 | 46% | 2957 | 35% |
|  |  | E1 | 2796 | 30 | 382 | 46% | 2834 | 31% |